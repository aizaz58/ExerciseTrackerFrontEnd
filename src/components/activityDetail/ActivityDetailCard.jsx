import React from 'react'
import { FaPen, FaTrash, FaWalking } from 'react-icons/fa'
import {FaCalendarAlt} from "react-icons/fa"
import {IoIosClock} from "react-icons/io"
const ActivityDetailCard = () => {
  return (
    <div class="col-12 px-0">
        <div class="activity-description-card d-flex align-items-center justify-content-between">
            <div className='d-flex align-items-center justify-center '>
            <div className='fs-1 bg-purple text-white text-center p-2 description-card-icon d-flex align-items-center justify-center'>

            <FaWalking/>
            </div>
                <span class="fs-2 fw-bold ps-3">Walk</span>
            </div>

            <div class="d-flex align-items-center">
            
                <p class="mb-0 me-5 px-3 py-1 date-badge"><FaCalendarAlt/> Sun, 25 December 2022</p>

                <div class="duration-badge d-flex align-items-center px-3 py-1">
                   <IoIosClock className='pe-2 fs-4'/>
                 
                    <p class="mb-0">14mins</p>
                </div>
{/* 
                <!-- <i class="fa-solid fa-flag-checkered pe-2"></i>
                <p class="mb-0">840mtrs</p> --> */}
                <div className='d-flex gap-2 ms-1'>

<FaPen className='text-primary  ' role="button"/>
<FaTrash className=' text-danger' role="button"/>
                </div>
               
            </div>
        </div>
        <div class="description bg-purple text-white py-1">
            <p class="mb-0 px-4 py-1 ms-1">Walking can help you burn calories. Burning calories can help you maintain or lose weight.</p>
        </div>
    </div>
  )
}

export default ActivityDetailCard