import React from 'react'
import "./activityCard.css"
import { FaHiking, FaRunning, FaSwimmer, FaWalking } from "react-icons/fa"
import { IoBicycleSharp } from "react-icons/io5"
import { FaCalendarAlt } from "react-icons/fa"
import { FaClock } from "react-icons/fa"
import { format, parseISO } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import ActivityIcon from './ActivityIcon'
import { motion } from "framer-motion"
import dateFormat from '../utils/dateFormat'
const ActivityCard = ({ activity }) => {
    const navigate = useNavigate()
    const { date, description, name, duration, type, user, _id } = activity


    const handleClick = () => {


        navigate(`/activitydetail/${_id}`)
    }

    return (
        <>
            <motion.div whileHover={{ scale: 1.05}} transition={{ duration: 0.4 }} whileTap={{ scale: 0.8 }} className="col-3" onClick={handleClick}>
                <div className="activity-card d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className='d-flex gap-2'>
                            <div className='fs-1 bg-purple text-white text-center p-3 card-icon d-flex align-items-center justify-content-center'>
                                <ActivityIcon type={type} />
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
                            <FaCalendarAlt />
                            <p className="mb-0">{dateFormat(date)}</p>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                            <FaClock />

                            <p className="mb-0">{duration} mins </p>
                        </div>
                    </div>
                </div>
            </motion.div>

        </>
    )
}

export default ActivityCard