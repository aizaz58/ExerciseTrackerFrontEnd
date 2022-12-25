import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import NavBar from './components/NavBar'

import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Register from "./pages/Register"
import Home from "./pages/Home"
import ActivityDetail from "./pages/ActivityDetail"
import RootLayOut from './components/RootLayOut'
import AddNewActivity from './pages/AddNewActivity'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/register",
      element:<Register/>,
      errorElement:<ErrorPage/>
    
    },
    {
      path:"/",
      element:<RootLayOut/>,
      errorElement:<ErrorPage/>,
      children:[{
  
        path:"/home",
        element:<Home/>
      },
      {
        path:"/activitydetail/:id",
        element:<ActivityDetail/>,
      
      },
      {
        path:"/AddActivity",
        element:<AddNewActivity/>,
      
      },
      
      ]
    },
    
    
  ])
  return (
    <>
<RouterProvider router={router}/>
    </>
  )
}

export default App