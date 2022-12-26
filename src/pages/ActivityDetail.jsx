import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ActivityDetailCard from '../components/activityDetail/ActivityDetailCard'
import ActivityForm from '../components/ActivityForm'
import { useGetActivityQuery, useGetAllActivitiesQuery } from '../features/activity/activityApiSlice'


const ActivityDetail = () => {
const {id}=useParams()
const {data:post,isLoading ,refetch,isSuccess,isError,error,isFetching}=useGetActivityQuery(id)
console.log(id)
if(isLoading)<p>loading...</p>
useEffect(() => {
  
}, [])
// const { activity } = useGetAllActivitiesQuery(undefined, {
//   selectFromResult: ({ data }) => {
//  const    activity= data
//  return activity

//   },
// })
let activity
if(isSuccess){
  activity=post.activity

}

console.log(activity)
  
  
  return (
    <div class="row mt-5 px-5">
    {activity&& 
   <ActivityDetailCard {...activity}isFetching={isFetching}/>
    }

  
    <div class="col-12 px-0">
        <div class="form-section pt-5 mt-5">
        <ActivityForm origin='edit' fetch={refetch} activity= {activity}/>
        </div>
    </div>
</div>
  )
}

export default ActivityDetail