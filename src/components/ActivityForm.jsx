import { format } from 'date-fns'
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast, useToast } from 'react-toastify'
import { useAddNewActivityMutation, useDeleteActivityMutation, useUpdateActivityMutation } from '../features/activity/activityApiSlice'
import { selectShowForm, showForm } from '../features/featuresSlice'
import formDateFormat from '../utils/formDateFormat'

const ActivityForm = ({ origin, activity }) => {
  const [formData, setformData] = useState({ name: "", description: "", type: "", date: "", duration: "" })
  const [addNewActivity, { isLoading, isSuccess }] = useAddNewActivityMutation()
  const [updateActivity, { isLoading: updateLoading, isSuccess: updateSuccess }] = useUpdateActivityMutation()
const nameRef=useRef()
const dateRef=useRef()
const descriptionRef=useRef()
const typeRef=useRef()
const durationRef=useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
const nameregex=/^[a-zA-Z]{4,}$/
const durationregex=/^[0-9]+$/
const descriptionregex=/^[\w]{4,}$/
  useEffect(() => {
    if (activity) {

      const newDate = formDateFormat(activity.date)

      setformData(activity)
      setformData(prevData => ({ ...prevData, date: newDate }))

    }
  }, [activity])




  const handleChange = (e) => {
    const { name, value } = e.target

    setformData(prevData => ({ ...prevData, [name]: value }))


  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    debugger
if(!nameregex.test(formData.name)){

  nameRef.current.classList.remove("is-valid")
  nameRef.current.classList.add("is-invalid")
  return
}else{
  nameRef.current.classList.remove("is-invalid")
  nameRef.current.classList.add("is-valid")

}
if(!formData.type){

  typeRef.current.classList.remove("is-valid")
  typeRef.current.classList.add("is-invalid")
  return
}else{
  typeRef.current.classList.remove("is-invalid")
  typeRef.current.classList.add("is-valid")

}

if(!durationregex.test(formData.duration)){

  durationRef.current.classList.remove("is-valid")
  durationRef.current.classList.add("is-invalid")
  return
}else{
  durationRef.current.classList.remove("is-invalid")
  durationRef.current.classList.add("is-valid")

}
if(!formData.date){

  dateRef.current.classList.remove("is-valid")
  dateRef.current.classList.add("is-invalid")
  return
}else{
  dateRef.current.classList.remove("is-invalid")
  dateRef.current.classList.add("is-valid")

}

if(!descriptionregex.test(formData.description)){

  descriptionRef.current.classList.remove("is-valid")
  descriptionRef.current.classList.add("is-invalid")
  return
}else{
  descriptionRef.current.classList.remove("is-invalid")
  descriptionRef.current.classList.add("is-valid")

}


 
    
    if (origin == 'edit') {

      await updateActivity({ ...formData })
toast.success("Updated Successfully.")
dispatch(showForm())

    } else {

      await addNewActivity({ ...formData })
    }

  }
  if (updateLoading) <p>loading...</p>
  if (isLoading) <p>loading....</p>

  useEffect(() => {
    if (isSuccess) {
      navigate("/")
    }
  }, [isSuccess, navigate])

  return (
    <div className='container'>

      <form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label">Name</label>
          <input ref={nameRef} type="text" className="form-control" name='name' id="validationCustom01" onChange={handleChange} value={formData.name} />
          <div className="invalid-feedback">
          please add valid name.
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationCustom04" className="form-label">Select Activity</label>
          <select ref={typeRef} className="form-select" id="validationCustom04" name="type" onChange={handleChange} value={formData.type} >
            <option disabled value="">Choose...</option>
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
          <input ref={durationRef} type="text" className="form-control" id="validationCustom02" onChange={handleChange} value={formData.duration} name="duration" placeholder="Add duration in minutes like, 08" />
          <div className="invalid-feedback">
            please enter duratioon.
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationCustom03" className="form-label">Date</label>
          <input ref={dateRef} type="date" className="form-control" onChange={handleChange} value={formData.date} id="validationCustom03" name='date' placeholder="DD/MM/YYYY"  />
          <div className="invalid-feedback">
            Please provide a valid date.
          </div>
        </div>
        <div className="col-md-12">
          <label for="validationCustom05" className="form-label">Description</label>
          <textarea ref={descriptionRef} type="text" className="form-control" onChange={handleChange} value={formData.description} id="validationCustom05" name='description' placeholder="You can add description here.. "></textarea>
          <div className="invalid-feedback">
            Please provide atleast 8 words.
          </div>
        </div>
        <div className="col-12">

          <button className="btn btn-success bg-purple" type="submit">{origin === "edit" ? "Update" : "Add"}</button>
        </div>
      </form>
    </div>


  )
}

export default ActivityForm