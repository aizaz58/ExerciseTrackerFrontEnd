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
      keepUnusedDataFor: 100,
      transformResponse: (responseData) => {
        const statusText = responseData.statusText;
        const activities = responseData.activities.map((activity) => {
          activity.id = activity._id;
          return activity;
        });
activities.sort((a,b)=>new Date(b.date)- new Date(a.date))
        return { activities, statusText };
      },
      providesTags: (result, err, arg) => {
      
        if (result?.activities) {
          return [
            { type: "Activity" },
            ...result.activities.map((act) => ({
              type: "Activity",
              id: act.id,
            })),
          ];
        } else return [{ type: "Activity" }];
      },
    }),
    addNewActivity: builder.mutation({
      query: (initialActivity) => ({
        url: "/activity",
        method: "POST",
        body: {
          ...initialActivity,
        },
      }),
      invalidatesTags: ["Activity"],
    }),
    getActivity: builder.query({
      query: (id) => ({
        url: `/activity/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 90,

      providesTags: (result, err, arg) => {
        if (result.activity) {
          return [{ type: "Activity", id: result.activity._id }];
        }
      },
    }),
    deleteActivity: builder.mutation({
      query: (id) => ({
        url: `/activity/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Activity"],
    }),
    updateActivity: builder.mutation({
      query: (activity) => ({
        url: `/activity/${activity._id}`,
        method: "PATCH",
        body: { ...activity },
      }),

      invalidatesTags: (result, error, arg) => [{ type: "Activity",id:arg.id}],
    }),
  }),
});

export const {
  useGetAllActivitiesQuery,
  useAddNewActivityMutation,
  useGetActivityQuery,
  useDeleteActivityMutation,
  useUpdateActivityMutation,
} = activityApiSlice;
