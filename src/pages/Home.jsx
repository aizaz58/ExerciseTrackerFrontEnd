import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

 const ActivityCard=lazy(()=>delay(import ('../components/ActivityCard')))
import HomeSkeleton from '../components/HomeSkeleton'

import { useGetAllActivitiesQuery } from '../features/activity/activityApiSlice'
import { setFetching } from '../features/featuresSlice'

const Home = () => {
const dispatch=useDispatch()
  const {data,isLoading,isSuccess,isFetching,}=useGetAllActivitiesQuery()
  
  if(isLoading)return <HomeSkeleton/>
 
 
 
  
  return (
   <div className='container-fluid'>
    <div class="row mt-5 px-5">
            <div class="col-12 d-flex justify-content-end">
            <Link to="/AddActivity">

                <button class="btn btn-success bg-purple" type="button" ><i class="fa-solid fa-plus text-white pe-2"></i>Add New Activity</button>
            </Link>
            </div>
        </div>

        <div className='row mt-5 px-5 gy-4 text-center' >
        {isSuccess&& data?.statusText==="ok"&& (
          data?.activities?.map(activity=>(
            <Suspense key={activity.id} fallback={<HomeSkeleton count={data.activities.length}/>}>
    <ActivityCard  key={activity._id} activity={activity} />

            </Suspense>

          ))
        )}
        
{ (data==undefined)?<p>no activity found .please add new activity.</p>:""}
        </div>

    
   </div>
  )
}

export default Home

function delay(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
}
