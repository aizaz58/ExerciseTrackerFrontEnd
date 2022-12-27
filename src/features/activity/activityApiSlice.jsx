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
      transformResponse: (responseData) => {
       const statusText= responseData.statusText
        const activities = responseData.activities.map((activity) => {
          activity.id = activity._id;
          return activity;
        });



        debugger
        return {activities,statusText}
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
        providesTags: (result, err, arg) => {
            if (result?.ids) {
              return [
                { type: "Activity", id: "List" },
                ...result.ids.map((id) => ({ type: "Activity", id })),
              ];
            } else return [{ type: "Activity", id: "LIST" }];
          },
    }),
    getActivity:builder.query({
        query:(id)=>({
            url:`/activity/${id}`,
            method:"GET"
        }),
        invalidatesTags: [
            { type: 'Activity', id: "LIST" }
        ]
    }),
    deleteActivity:builder.mutation({
        query:(id)=>({
            url:`/activity/${id}`,
            method:"DELETE"
        }),
        providesTags: (result, err, arg) => {
            if (result?.ids) {
              return [
                { type: "Activity", id: "List" },
                ...result.ids.map((id) => ({ type: "Activity", id })),
              ];
            } else return [{ type: "Activity", id: "LIST" }];
          },
    }),
    updateActivity:builder.mutation({
        query:(activity)=>({
            url:`/activity/${activity._id}`,
            method:"PATCH",
            body:{...activity}
        }),
        invalidatesTags: (result, error, arg) => [
            { type: 'Activity', id: arg.id }
        ]
    })

  }),
});


export const {useGetAllActivitiesQuery,useAddNewActivityMutation,useGetActivityQuery,useDeleteActivityMutation,useUpdateActivityMutation}=activityApiSlice

