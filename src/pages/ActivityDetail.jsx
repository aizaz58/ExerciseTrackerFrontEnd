import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ActivityDetailCard from '../components/activityDetail/ActivityDetailCard'
import ActivityForm from '../components/ActivityForm'
import { useGetActivityQuery, useGetAllActivitiesQuery } from '../features/activity/activityApiSlice'


const ActivityDetail = () => {
const {id}=useParams()
//const {data,isLoading ,isSuccess,isError,error}=useGetActivityQuery(id)
console.log(id)


const { activity } = useGetAllActivitiesQuery("activityList", {
  selectFromResult: ({ data }) => ({
      activity: data?.entities[id]
  }),
})
console.log(activity)
  
  
  return (
    <div class="row mt-5 px-5">
   <ActivityDetailCard/>

  
    <div class="col-12 px-0">
        <div class="form-section pt-5 mt-5">
        <ActivityForm/>
        </div>
    </div>
</div>
  )
}

export default ActivityDetail