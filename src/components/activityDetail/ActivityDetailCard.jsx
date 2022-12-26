import React from 'react'
import { FaPen, FaTrash, FaWalking } from 'react-icons/fa'
import {FaCalendarAlt} from "react-icons/fa"
import {IoIosClock} from "react-icons/io"
import dateFormat from '../../utils/dateFormat'
import ActivityIcon from '../ActivityIcon'
const ActivityDetailCard = ({name,type,description,duration,date,isFetching}) => {
    if(isFetching)<p>fetcging....</p>
    console.log(name)
  return (
    <div class="col-12 px-0">
        <div class="activity-description-card d-flex align-items-center justify-content-between">
            <div className='d-flex align-items-center justify-center '>
            <div className='fs-1 bg-purple text-white text-center p-2 description-card-icon d-flex align-items-center justify-center'>

            <ActivityIcon type={type}/>
            </div>
                <span class="fs-2 fw-bold ps-3">{type}</span>
            </div>

            <div class="d-flex align-items-center">
            
                <p class="mb-0 me-5 px-3 py-1 date-badge"><FaCalendarAlt/> {dateFormat(date)}</p>

                <div class="duration-badge d-flex align-items-center px-3 py-1">
                   <IoIosClock className='pe-2 fs-4'/>
                 
                    <p class="mb-0">{duration} mins</p>
                </div>

                <div className='d-flex gap-2 ms-1'>

<FaPen className='text-primary  ' role="button"/>
<FaTrash className=' text-danger' role="button"/>
                </div>
               
            </div>
        </div>
        <div class="description bg-purple text-white py-1">
            <p class="mb-0 px-4 py-1 ms-1">{description}</p>
        </div>
    </div>
  )
}

export default ActivityDetailCard