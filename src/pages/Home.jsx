import { motion } from 'framer-motion'
import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// const ActivityCard = lazy(() => delay(import('../components/ActivityCard')))
import ActivityCard from "../components/ActivityCard"
import HomeSkeleton from '../components/HomeSkeleton'

import { useGetAllActivitiesQuery } from '../features/activity/activityApiSlice'
import { setFetching } from '../features/featuresSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isSuccess, isFetching, } = useGetAllActivitiesQuery()
if(isLoading)return<div className='mt-100 gx-5'>
<HomeSkeleton count="6"/>

</div> 
  return (
    <div className='container-fluid'>
      <div className="row mt-5 px-5">
        <div className="col-12 d-flex justify-content-end">
          <Link to="/AddActivity">

            <motion.button whileHover={{
              scale: 1.1,
              boxShadow: "8px 8px 12px #0000002e"
            }} className="btn btn-success bg-purple" type="button" ><i className="fa-solid fa-plus text-white pe-2"></i>Add New Activity</motion.button>
          </Link>
        </div>
      </div>

      <div className='row mt-5 px-5 gy-4 text-center' >

        {isSuccess && data?.statusText === "ok" && (
          data?.activities?.map(activity => (
           
              <ActivityCard key={activity._id} activity={activity} />
         


          ))
        )}

        {(data == undefined) ? <p>No Activity Found. Please add new Activity.</p> : ""}
      </div>


    </div>
  )
}

export default Home

// function delay(promise) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 5000);
//   }).then(() => promise);
// }
