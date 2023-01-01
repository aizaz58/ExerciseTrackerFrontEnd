import React from 'react'
import  "./activityCard.css"
import {FaHiking, FaRunning, FaSwimmer, FaWalking} from "react-icons/fa"
import {IoBicycleSharp} from "react-icons/io5"
import {FaCalendarAlt} from "react-icons/fa"
import {IoIosClock} from "react-icons/io"
import { format, parseISO } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import ActivityIcon from './ActivityIcon'
import {motion} from "framer-motion"
const ActivityCard = ({activity}) => {
    const navigate=useNavigate()
    const {date,description,name,duration,type,user,_id}=activity
   
    const dateFormat=format(new Date(date),'eee, dd MMM yyyy')
    
    const handleClick=()=>{
    

navigate(`/activitydetail/${_id}`)
    }

    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      }
  return (
  <>
     <motion.div whileHover={{scale:1.05 ,boxShadow:0.5}}transition={{duration:0.3}} whileTap={{scale:0.8}} className="col-4" onClick={handleClick}>
                <div className="activity-card d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className='d-flex gap-2'>
                        <motion.div whileHover={{scale:1.05}} whileTap={{scale:0.8}}  className=' fs-1 bg-purple text-white text-center p-3 card-icon d-flex align-items-center justify-content-center'>
                           {/* <ActivityIcon type={type}/> */}
                           <motion.svg    className="item" viewBox="0 0 384 512"  xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M 80.95 472.23 c -4.28 17.16 6.14 34.53 23.28 38.81 c 2.61 0.66 5.22 0.95 7.8 0.95 c 14.33 0 27.37 -9.7 31.02 -24.23 l 25.24 -100.97 l -52.78 -52.78 l -34.56 138.22 Z m 14.89 -196.12 L 137 117 c 2.19 -8.42 -3.14 -16.95 -11.92 -19.06 c -43.88 -10.52 -88.35 15.07 -99.32 57.17 L 0.49 253.24 c -2.19 8.42 3.14 16.95 11.92 19.06 l 63.56 15.25 c 8.79 2.1 17.68 -3.02 19.87 -11.44 Z M 368 160 h -16 c -8.84 0 -16 7.16 -16 16 v 16 h -34.75 l -46.78 -46.78 C 243.38 134.11 228.61 128 212.91 128 c -27.02 0 -50.47 18.3 -57.03 44.52 l -26.92 107.72 a 32.012 32.012 0 0 0 8.42 30.39 L 224 397.25 V 480 c 0 17.67 14.33 32 32 32 s 32 -14.33 32 -32 v -82.75 c 0 -17.09 -6.66 -33.16 -18.75 -45.25 l -46.82 -46.82 c 0.15 -0.5 0.49 -0.89 0.62 -1.41 l 19.89 -79.57 l 22.43 22.43 c 6 6 14.14 9.38 22.62 9.38 h 48 v 240 c 0 8.84 7.16 16 16 16 h 16 c 8.84 0 16 -7.16 16 -16 V 176 c 0.01 -8.84 -7.15 -16 -15.99 -16 Z M 240 96 c 26.51 0 48 -21.49 48 -48 S 266.51 0 240 0 s -48 21.49 -48 48 s 21.49 48 48 48 Z"
      variants={icon}
      fill="none"
      initial="hidden"
      animate="visible"
      transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 3, ease: "easeInOut"}
        }}
    />

</motion.svg>
                        </motion.div>
                            <span  className="fs-2 fw-bold ps-3 align-self-center ">{type}</span>
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
            </motion.div>

  </>
  )
}

export default ActivityCard