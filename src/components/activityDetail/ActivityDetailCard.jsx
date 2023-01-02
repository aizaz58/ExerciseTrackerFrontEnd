import React from 'react'
import { FaPen, FaTrash, FaWalking } from 'react-icons/fa'
import { FaCalendarAlt } from "react-icons/fa"
import { IoIosClock } from "react-icons/io"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDeleteActivityMutation } from '../../features/activity/activityApiSlice'
import { showForm } from '../../features/featuresSlice'
import dateFormat from '../../utils/dateFormat'
import { motion } from "framer-motion"
import ActivityIcon from '../ActivityIcon'
const ActivityDetailCard = ({ name, type, description, duration, date, setShow, _id }) => {
    const [deleteActivity, { isloading, isSuccess }] = useDeleteActivityMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClickEdit = () => {
        dispatch(showForm())
    }

    const handleDelete = async () => {
        await deleteActivity(_id)
    }
    if (isloading) <p>deleting....</p>
    if (isSuccess) {
        navigate("/")
    }
    return (
        <div className="col-12 px-0">
            <div className="activity-description-card d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center justify-center '>
                    <motion.div whileHover={{ scale: 1.10 }} whileTap={{ scale: 0.8 }} className='fs-1 bg-purple text-white text-center p-2 description-card-icon d-flex align-items-center justify-center'>

                        <ActivityIcon type={type} />
                    </motion.div>
                    <span className="fs-2 fw-bold ps-3">{type}</span>
                </div>
                <div className="d-flex align-items-center">
                    <p className='mb-0 me-5 px-3 py-1 date-badge'>{name}</p>

                    <p className="mb-0 me-5 px-3 py-1 date-badge"><FaCalendarAlt /> {dateFormat(date)}</p>

                    <div className="duration-badge d-flex align-items-center px-3 py-1 me-5">
                        <IoIosClock className='pe-2 fs-4' />

                        <p className="mb-0">{duration} mins</p>
                    </div>

                    <div className='d-flex gap-3 ms-5'>
                        <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} >
                            <FaPen className='text-primary  ' role="button" onClick={handleClickEdit} />

                        </motion.div>
                        <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} >
                            <FaTrash className=' text-danger' role="button" onClick={handleDelete} />

                        </motion.div>
                    </div>

                </div>
            </div>
            <div className="description bg-purple text-white py-1">
                <p className="mb-0 px-4 py-1 ms-1">{description}</p>
            </div>
        </div>
    )
}

export default ActivityDetailCard