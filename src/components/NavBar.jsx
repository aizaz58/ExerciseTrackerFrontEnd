import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSendLogOutMutation } from '../features/auth/AuthApiSlice';
import { selectUserInfo } from '../features/auth/authSlice';
import { motion } from 'framer-motion'
const NavBar = () => {
    const [showLogOutBtn, setshowLogOutBtn] = useState(false)
    const user=useSelector(selectUserInfo)
const navigate=useNavigate()
const {pathname}=useLocation()
    const [sendLogOut,{isLoading,isError,error,isSuccess}]=useSendLogOutMutation()
    const handleLogOut=()=>{
        sendLogOut()
    }
    useEffect(() => {
    if(isSuccess){
        navigate("/login")
    }
    }, [isSuccess,navigate])
    

    const handleShowBtn=()=>{
        setshowLogOutBtn(!showLogOutBtn)
    }
  return (
    <>

    <div className="container-fluid">
        <div className="row">
            <div className="col-12 bg-purple text-white min-h-72 d-flex align-items-center justify-content-between px-5">
                <div>
                    <h4  className="mb-0 fw-bold">Exercise App</h4>
                </div>

                <div className="d-flex align-items-center">
                    <div>
                        <p className="mb-0 pe-3 text-capitalize fw-bold ls-lg">{user&& `${user.firstName} ${user.lastName}`}</p>
                    </div>

                    <div role="button">
                    <Avatar className='user-img rounded-circle fw-bold' color="black" size='48' textSizeRatio={3} name={user &&`${user.firstName}  ${user.lastName}`} onClick={handleShowBtn} />
                        {/* <img className="user-img" src="./images/user-m.png"/> */}
                        {showLogOutBtn && 
                        <motion.div transition={{ duration: 0.4 }}  initial={{opacity:0}} animate={{opacity:1}} onClick={handleLogOut} className='logout-div'>
                            <button  className='btn btn-dark btn-sm px-4 ls-lg'>Logout</button>
                        </motion.div>
                        
                        }
                    </div>
                </div>
            </div>
        </div>
</div>


    </>
  )
}

export default NavBar





