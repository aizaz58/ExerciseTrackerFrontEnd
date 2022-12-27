import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import NavBar from './components/NavBar'
import './index.css'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Register from "./pages/Register"
import Home from "./pages/Home"
import ActivityDetail from "./pages/ActivityDetail"
import { Provider } from 'react-redux'
import { store } from './features/store'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
<ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
    <App />
  </Provider>
   
  </React.StrictMode>,
)
