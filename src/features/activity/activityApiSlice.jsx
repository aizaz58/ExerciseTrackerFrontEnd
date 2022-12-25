import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/AuthApi";

const activityAdaptor = createEntityAdapter();
const initialState = activityAdaptor.getInitial;
export const activityApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllActivities: builder.query({
      query: () => "/activity",
      validateStatus: (response, result) => {
        return response.status == 200 && !result.isError;
      },
      keepUnusedDataFor: 10,
      transformErrorResponse: (responseData) => {
        const loadedActivities = responseData.map((activity) => {
          activity.id = activity._id;
          return activity;
        });

        return activityAdaptor.setAll(initialState, loadedActivities);
      },
      providesTags: (result, err, arg) => {
        if (result?.ids) {
          return [
            { type: "Activity", id: "List" },
            ...result.ids.map((id) => ({ type: "Activity", id })),
          ];
        } else return [{ type: "Activity", id: "LIST" }];
      },
    }),
    addNewActivity: builder.mutation({
        query: initialActivity => ({
            url: '/activity',
            method: 'POST',
            body: {
                ...initialActivity,
            }
        }),
        invalidatesTags: [
            { type: 'Activity', id: "LIST" }
        ]
    }),
    getActivity:builder.query({
        query:({id})=>({
            url:`/activity/${id}`,
            method:"GET"
        }),
        invalidatesTags: [
            { type: 'Activity', id: "LIST" }
        ]
    }),
    deleteActivity:builder.mutation({
        query:({id})=>({
            url:`/activity/${id}`,
            method:"DELETE"
        }),
        invalidatesTags: [
            { type: 'Activity', id: "LIST" }
        ]
    }),
    updateActivity:builder.mutation({
        query:({id,activity})=>({
            url:`/activity/${id}`,
            method:"PATCH",
            body:{...activity}
        }),
        invalidatesTags: [
            { type: 'Activity', id: "LIST" }
        ]
    })

  }),
});


export const {useGetAllActivitiesQuery,useAddNewActivityMutation,useGetActivityQuery,useDeleteActivityMutation}=activityApiSlice

