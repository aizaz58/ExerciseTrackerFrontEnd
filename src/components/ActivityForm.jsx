import { format } from 'date-fns'
import React, { useState ,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAddNewActivityMutation, useDeleteActivityMutation, useUpdateActivityMutation } from '../features/activity/activityApiSlice'
import { showForm } from '../features/featuresSlice'
import formDateFormat from '../utils/formDateFormat'

const ActivityForm = ({origin,activity,fetch}) => {
const [formData, setformData] = useState({name:"",description:"",type:"",date:"",duration:""})
const [addNewActivity,{isLoading,isSuccess}]=useAddNewActivityMutation()
const[updateActivity,{isLoading:updateLoading,isSuccess:updateSuccess}] =useUpdateActivityMutation()

const navigate=useNavigate()
const dispatch=useDispatch()
// const date=format(new Date(date),'yyyy-MM-dd')
useEffect(() => {
  if(activity){

const newDate=formDateFormat(activity.date)

    setformData(activity)
    setformData(prevData=>({...prevData,date:newDate}))
    
  }
}, [activity])



let canSave
const handleChange=(e)=>{
    const {name,value}=e.target
    // if(name==="date"){
    //  
    //   console.log(date)
    //   setformData(prevData=>({...prevData,[name]:date}))
    // }else{
      
      // }
        setformData(prevData=>({...prevData,[name]:value}))
      console.log(formData)
     canSave=[...Object.values(formData)].every(Boolean)
  }
const handleSubmit=async(e)=>{
    debugger
    e.preventDefault()
    console.log({...formData})
if(origin=='edit'){
await updateActivity({...formData})
fetch()

}else{
  // const date=new Date(formData.date)
  await addNewActivity({...formData})
}

}
if(updateLoading)<p>loading...</p>
if(isLoading)<p>loading....</p>

useEffect(() => {
  if(isSuccess){
navigate("/home")
  }
}, [isSuccess,navigate])

  return (
    <div className='container'>

                    <form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
                        <div className="col-md-6">
                          <label for="validationCustom01" className="form-label">Name</label>
                          <input type="text" className="form-control" name='name' id="validationCustom01" onChange={handleChange} value={formData.name} required />
                          <div className="invalid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div className="col-md-6">
                            <label for="validationCustom04" className="form-label">Select Activity</label>
                            <select className="form-select" id="validationCustom04" name="type" onChange={handleChange} value={formData.type} required>
                              <option  disabled value="">Choose...</option>
                              <option value="Run" >Run</option>
                              <option value="Bicycle Ride">Bicycle Ride</option>
                              <option value="Swim">Swim</option>
                              <option value="Walk">Walk</option>
                              <option value="Hike">Hike</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select an activity type.
                            </div>
                          </div>
                        <div className="col-md-6">
                          <label for="validationCustom02" className="form-label">Duration (mins)</label>
                          <input type="text" className="form-control" id="validationCustom02" onChange={handleChange} value={formData.duration} name="duration" placeholder="Add duration in minutes like, 08" required/>
                          <div className="invalid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label for="validationCustom03" className="form-label">Date</label>
                          <input type="date" className="form-control" onChange={handleChange} value={formData.date} id="validationCustom03" name='date' placeholder="DD/MM/YYYY" required/>
                          <div className="invalid-feedback">
                            Please provide a valid date.
                          </div>
                        </div>
                        <div className="col-md-12">
                          <label for="validationCustom05" className="form-label">Description</label>
                          <textarea type="text" className="form-control" onChange={handleChange} value={formData.description} id="validationCustom05" name='description' placeholder="You can add description here.. " required></textarea>
                          <div className="invalid-feedback">
                            Please provide atleast 8 words.
                          </div>
                        </div>
                        <div className="col-12">

                          <button className="btn  bg-purple"  type="submit">{origin==="edit"?"Update":"Add"}</button>
                        </div> 
                    </form>
    </div>
                

  )
}

export default ActivityForm