import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import ActivityDetailCard from '../components/activityDetail/ActivityDetailCard'
import ActivityForm from '../components/ActivityForm'
import { useGetActivityQuery, useGetAllActivitiesQuery } from '../features/activity/activityApiSlice'
import { selectShowForm } from '../features/featuresSlice'
import { motion } from "framer-motion"

const ActivityDetail = () => {
  
  
const {id}=useParams()
const showForm=useSelector(selectShowForm)





const {activity} = useGetAllActivitiesQuery(undefined, {
  selectFromResult: ({data}) => ({
    activity: data.activities?.find((act) => act._id === id),
  }),

})





  
  
  return (
    <div class="row mt-5 px-5">
    { activity&& 
   <ActivityDetailCard {...activity}/>
    }
 
  {showForm&& <motion.div 
 animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  class="col-12 px-0">
        <div class="form-section pt-5 mt-5">
        <ActivityForm origin='edit'  activity= {activity}/>
        </div>
    </motion.div>}
    
</div>
  )
}

export default ActivityDetail