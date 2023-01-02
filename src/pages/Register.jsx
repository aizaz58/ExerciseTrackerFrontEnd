import React, { useRef, useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom'
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import {  useRegisterUserMutation } from '../features/auth/AuthApiSlice'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { setCredientials } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
  
const Register = () => {
  const [formData, setformData] = useState({firstName:"",
  lastName:"",
  email:"",
  password:""})
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [registerUser,{isLoading,isError,error,isSuccess}]=useRegisterUserMutation()
  const [confirmPwd, setconfirmPwd] = useState("")
   const [disable, setdisable] = useState(true)
   const [show, setShow] = useState(false)
   const fNameRef=useRef()
   const lNameRef=useRef()
   const emailRef=useRef()
   const passwordRef=useRef()
   const cPwdRef=useRef()

   const nameRegex=/[a-zA-Z]{4,}/
   const emailRegex=/^\w+@\w{3,}.[a-zA-Z]{2,}$/
   const passwordRegex=/\w{6,}/
  const handleSubmit=async(e)=>{
e.preventDefault()

if(!nameRegex.test(formData.firstName)){
 fNameRef.current.focus()
  fNameRef.current.classList.add("is-invalid")

return
} else{
  fNameRef.current.classList.remove("is-invalid")
  fNameRef.current.classList.add("is-valid")
}
if(!nameRegex.test(formData.lastName)){
  lNameRef.current.focus()
   lNameRef.current.classList.add("is-invalid")

 return
 } else{
   lNameRef.current.classList.remove("is-invalid")
   lNameRef.current.classList.add("is-valid")
 }
 if(!emailRegex.test(formData.email)){
  emailRef.current.focus()
   emailRef.current.classList.add("is-invalid")

 return
 } else{
   emailRef.current.classList.remove("is-invalid")
   emailRef.current.classList.add("is-valid")
 }
 if(!passwordRegex.test(formData.password)){
  passwordRef.current.focus()
   passwordRef.current.classList.add("is-invalid")

 return
 } else{
   passwordRef.current.classList.remove("is-invalid")
   passwordRef.current.classList.add("is-valid")
 }
 try {
   const {message,foundUser,accessToken}=await registerUser({...formData}).unwrap()
   toast.success(message);
     
       dispatch(setCredientials({foundUser,accessToken}))
       navigate("/")
     
  
 } catch (error) {
  console.log(error)
   toast.error(error.data.message)
  if(error.status==409){
    emailRef.current.focus()
    emailRef.current.classList.add("is-invalid")
  }
  if(error.status==400){

  }
 }

 



  }
  const handleChange=(e)=>{
    const {name,value}=e.target
    
setformData(prevData=>({...prevData,[name]:value}))

  }

const handleChangePwd=(e)=>{
  debugger
  const {name,value}=e.target
  setconfirmPwd(value)
  if(value!==formData.password){
cPwdRef.current.classList.remove("is-valid")
cPwdRef.current.classList.add("is-invalid")
}else{
    cPwdRef.current.classList.remove("is-invalid")
    cPwdRef.current.classList.add("is-valid")

  }
}
const handleShowPwd=(e)=>{
  if(e.type==="mousedown"){
  setShow(!show)}
  if(e.type==="mouseup"){
  setShow(!show)
  }
}

if(isLoading)<p>loading...</p>
  return (
    <div className="container-fluid bg-purple vh-100">
    <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-center vh-100">
            <div className="login-img-bg">

            </div>
        </div>

        <div className="col-6 bg-white d-flex flex-column align-items-center justify-content-center vh-100">
            <h2 className="fw-bold pb-4 txt-purple">Create a new Account</h2>

            <form className="w-50 needs-validation" novalidate onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label for="validationfName" className="form-label">Firstname</label>
                    <input ref={fNameRef} type="text" name='firstName' className="form-control" id="validationfName" onChange={handleChange} value={formData?.firstName} />
                    <div className="invalid-feedback">
                      <p>Please enter name greater than 4 characters.</p>
                    </div>
                </div>
                <div className="mb-2">
                    <label for="validationlName" className="form-label">Lastname</label>
                    <input type="text" ref={lNameRef} name='lastName' className="form-control" onChange={handleChange} id="validationlName" value={formData?.lastName} />
                    <div className="invalid-feedback">
                      <p>Please enter name greater than 4 characters.</p>
                    </div>
                </div>
                <div className="mb-2">
                    <label for="validationCustomUsername" className="form-label">Email</label>
                   
                        <input type="email" ref={emailRef} name='email' className="form-control" onChange={handleChange} value={formData?.email} id="validationCustomUsername"
                            aria-describedby="inputGroupPrepend" />
                        <div className="invalid-feedback">
                            Please enter a valid email that includes "@" and ".co".
                       
                    </div>
                </div>
                <div className="mb-2">
                    <label for="validationCustom02" className="form-label">Password</label>
                    <div  className="d-flex">

                    <input type={show?"text":"password"} name='password' ref={passwordRef} className="form-control " id="validationCustom02" onChange={handleChange} value={formData?.password} />
                    <div role="button" onMouseDown={handleShowPwd} onMouseUp={handleShowPwd} >
                    {show?<AiFillEyeInvisible/>:<AiFillEye/>}

                    </div>
                    </div>

                    <div className="invalid-feedback">
                  please enter password that contains atleast 5 alphaNumeric characters. 
                    </div>
                </div>
                <div className="mb-2">
                    <label for="validationCustom03" className="form-label">Confirm Password</label>
                    <input type={show?"text":"password"} name='ConfirmPassword' onChange={handleChangePwd} ref={cPwdRef} className="form-control " id="validationCustom03"  value={confirmPwd} />
                    <div className="invalid-feedback">
                  <p>Passwords donot match.</p>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-warning"  type="submit">Sign up</button>
                    <div className="form-text pt-5"><span>Already have an account? </span><Link to="/">Login</Link></div>
                </div>
            </form>

        </div>
    </div>
</div>
  )
}

export default Register