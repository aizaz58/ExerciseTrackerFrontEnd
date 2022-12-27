import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ActivityDetailCard from '../components/activityDetail/ActivityDetailCard'
import ActivityForm from '../components/ActivityForm'
import { useGetActivityQuery, useGetAllActivitiesQuery } from '../features/activity/activityApiSlice'
import { selectShowForm } from '../features/featuresSlice'
import { motion } from "framer-motion"

const ActivityDetail = () => {
const {id}=useParams()
const showForm=useSelector(selectShowForm)
console.log(showForm)
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
 
  {showForm&& <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}   class="col-12 px-0">
        <div class="form-section pt-5 mt-5">
        <ActivityForm origin='edit' fetch={refetch} activity= {activity}/>
        </div>
    </motion.div>}
    
</div>
  )
}

export default ActivityDetail