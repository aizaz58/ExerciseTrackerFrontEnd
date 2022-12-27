import React from 'react'
import  "./activityCard.css"
import {FaHiking, FaRunning, FaSwimmer, FaWalking} from "react-icons/fa"
import {IoBicycleSharp} from "react-icons/io5"
import {FaCalendarAlt} from "react-icons/fa"
import {IoIosClock} from "react-icons/io"
import { format, parseISO } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import ActivityIcon from './ActivityIcon'
const ActivityCard = ({activity}) => {
    const navigate=useNavigate()
    const {date,description,name,duration,type,user,_id}=activity
   
    const dateFormat=format(new Date(date),'eee, dd MMM yyyy')
    
    const handleClick=()=>{
        console.log("first")

navigate(`/activitydetail/${_id}`)
    }
  return (
  <>
     <div className="col-4" onClick={handleClick}>
                <div className="activity-card d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className='d-flex gap-2'>
                        <div className=' fs-1 bg-purple text-white text-center p-3 card-icon d-flex align-items-center justify-content-center'>
                           <ActivityIcon type={type}/>
                        </div>
                            <span className="fs-2 fw-bold ps-3 align-self-center ">{type}</span>
                        </div>
    
    
                       {/* <div className="d-flex flex-column align-items-end">
                            <i className="fa-solid fa-clock"></i>
                            <p className="mb-0">14mins</p>
                        </div>  */}


                    </div>
    
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex flex-column">
                        <FaCalendarAlt/>
                            <p className="mb-0">{dateFormat}</p>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                            <IoIosClock/>
                            
                            <p className="mb-0">{duration} mins </p>
                        </div>
                    </div>
                </div>
            </div>

  </>
  )
}

export default ActivityCard