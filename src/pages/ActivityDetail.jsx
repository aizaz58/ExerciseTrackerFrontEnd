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
    <div className="row mt-5 px-5">
    { activity&& 
   <ActivityDetailCard {...activity}/>
    }
 
  {showForm&& <motion.div 
 initial={{opacity:0,y:"-100vh"}} animate={{y:0,opacity:1}} transition={{duration:2, type:"spring",stiffness:300}} 
  className="col-12 px-0">
        <div className="form-section pt-5 mt-5">
        <ActivityForm origin='edit'  activity= {activity}/>
        </div>
    </motion.div>}
    
</div>
  )
}

export default ActivityDetail