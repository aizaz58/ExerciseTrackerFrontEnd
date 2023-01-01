import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { selectCurrentToken } from '../features/auth/authSlice'
import NavBar from './NavBar'

const RootLayOut = () => {
    const navigate=useNavigate()
    const token=useSelector(selectCurrentToken)
    useEffect(()=>{
        debugger
        if(!token){

            navigate("/login")
                }
    })
  return (
   <>
    <header>
        <nav>
            <NavBar/>
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>
   </>
  )
}

export default RootLayOut