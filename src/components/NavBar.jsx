import React, { useEffect } from 'react'
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSendLogOutMutation } from '../features/auth/AuthApiSlice';
import { selectUserInfo } from '../features/auth/authSlice';
const NavBar = () => {
    const user=useSelector(selectUserInfo)
const navigate=useNavigate()
const {pathname}=useLocation()
    const [sendLogOut,{isLoading,isError,error,isSuccess}]=useSendLogOutMutation()
    const handleLogOut=()=>{
        sendLogOut()
    }
    useEffect(() => {
    if(isSuccess){
        navigate("/")
    }
    }, [isSuccess,navigate])
    
  return (
    <>

    <div className="container-fluid">
        <div className="row">
            <div className="col-12 bg-purple text-white min-h-72 d-flex align-items-center justify-content-between px-5">
                <div>
                    <h4 onClick={handleLogOut} className="mb-0 fw-bold">Exercise App</h4>
                </div>

                <div className="d-flex align-items-center">
                    <div>
                        <p className="mb-0 pe-3">{user&& `${user.firstName} ${user.lastName}`}</p>
                    </div>

                    <div>
                    <Avatar className='user-img rounded-circle'size='60' name={user &&`${user.firstName} ${user.lastName}`} />
                        {/* <img className="user-img" src="./images/user-m.png"/> */}
                    </div>
                </div>
            </div>
        </div>
</div>

    </>
  )
}

export default NavBar