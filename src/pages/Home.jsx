import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ActivityCard from '../components/ActivityCard'

import { useGetAllActivitiesQuery } from '../features/activity/activityApiSlice'

const Home = () => {

  const {data,isLoading,isSuccess}=useGetAllActivitiesQuery()
  
  if(isLoading)return <p>loading...</p>
 console.log(data)
 if(data){

}
 
  
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
        {isSuccess&& data.statusText==="ok"&& (
          data.activities?.map(activity=>(
    <ActivityCard  key={activity._id} activity={activity} />

          ))
        )}
        
{ (data==undefined)?<p>no activity found .please add new activity.</p>:""}
        </div>

    
   </div>
  )
}

export default Home