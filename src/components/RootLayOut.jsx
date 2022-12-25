import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const RootLayOut = () => {
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