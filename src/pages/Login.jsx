import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../features/auth/AuthApiSlice'
import { setCredientials } from '../features/auth/authSlice'
import { Watch } from 'react-loader-spinner'
import { toast } from 'react-toastify'
const Login = () => {
  const [show, setShow] = useState(false)
  const [credientials, setcredientials] = useState({email:"",password:""})
const [emailErrMsg, setEmailErrMsg] = useState("")
const [pwdErrMsg, setePwdErrMsg] = useState("")

  const emailRef=useRef()
  const pwdRef=useRef()
  const emailRegex=/^\w+@\w{3,}.[a-zA-Z]{2,}$/
const dispatch=useDispatch()
const navigate=useNavigate()

useEffect(() => {
 emailRef.current.focus() 
},[])


const [login,{isError,isLoading,error,isSuccess,data}]=useLoginMutation()
const handleShowPwd=(e)=>{
    if(e.type==="mousedown"){
      setShow(!show)}
    if(e.type==="mouseup"){
    setShow(!show)
    }
  }

  const handleChange=(e)=>{
    const {name,value}=e.target

    setcredientials(prevData=>({...prevData,[name]:value}))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
if(!emailRegex.test(credientials.email)){
  emailRef.current.focus()
  emailRef.current.classList.remove("is-valid")
  emailRef.current.classList.add("is-invalid")
  return
}else{
  emailRef.current.classList.remove("is-invalid")
  emailRef.current.classList.add("is-valid")

}
if(!credientials.password){
  pwdRef.current.focus()
  pwdRef.current.classList.remove("is-valid")
  pwdRef.current.classList.add("is-invalid")
  return
}else{
  pwdRef.current.classList.remove("is-invalid")
  pwdRef.current.classList.add("is-valid")
  
}


try {
  const {accessToken,foundUser,message,statusText}=await login({...credientials}).unwrap()
  
    
  if(isSuccess){}
  if(isError){}
  debugger
    dispatch(setCredientials({accessToken,foundUser}))
    //setcredientials({email:null,password:null})
  toast.success(message)
    navigate("/")
  

  
} catch (error) {
  if( error.status=="404"){
    emailRef.current.classList.remove("is-valid")
    emailRef.current.classList.add("is-invalid")
    setEmailErrMsg(error.data.message)
    console.log(error)
    return
  }else if(error.status=="401"){
    
    pwdRef.current.classList.remove("is-valid")
    pwdRef.current.classList.add("is-invalid")
    console.log(error.data)
    setePwdErrMsg(error.data.message)
    return
   }else{
    console.log(error)
   toast.error(error.data.message)
   } 
}  
  

 



}


return (
    <div className="container-fluid bg-purple vh-100">
    <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-center vh-100">
            <div className="login-img-bg">

            </div>
        </div>

        <div className="col-6 bg-white d-flex flex-column align-items-center justify-content-center vh-100">
            <h2 className="fw-bold pb-4 txt-purple">Login</h2>

            <form className="w-50" onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <input ref={emailRef} type="email" name='email' className="form-control" id="exampleInputEmail1" value={credientials.email} onChange={handleChange}/>
                   <div className="invalid-feedback">
                      <p>
                  {emailErrMsg?emailErrMsg:
                  
                      "Please enter valid email."
                  }
                      </p>
                    
                    </div>
                </div>
                <div className="mb-2">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input ref={pwdRef} type={show?"text":"password"} name="password" className="form-control" id="exampleInputPassword1" value={credientials.password} onChange={handleChange}/>
                  <div role="button" onMouseDown={handleShowPwd} onMouseUp={handleShowPwd} >
                    {show?<AiFillEyeInvisible/>:<AiFillEye/>}

                    </div>
                    <div className="invalid-feedback">
                      <p>
                  {pwdErrMsg&&pwdErrMsg}
                      </p>
                    
                    </div>
                </div>
                <button type="submit" className="btn btn-warning">{isLoading?<Watch
  height="20"
  width="20"
  radius="48"
  color="#4fa94d"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>:"Login"}</button>
               
                <div className="form-text pt-5"> 
                <span>Donot have an account? </span>
                <Link  to="/register">
                 <span className='txt-purple'>Sign Up</span> 
                </Link></div>
              </form>

        </div>
    </div>
</div>
  )
}

export default Login