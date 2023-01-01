import { createSlice } from "@reduxjs/toolkit";


const authSlice=createSlice({
    name:"auth",
    initialState:{user:null,token:null},
    reducers:{
        setCredientials:(state,action)=>{
            console.log(action.type)
            const {accessToken,foundUser}=action.payload
            state.token=accessToken,
            state.user=foundUser
        },
        logOut:(state,action)=>{
            state.token=null,
            state.user=null
            localStorage.clear()
        }
    }
})

export const {setCredientials,logOut}=authSlice.actions
export default authSlice.reducer

export const selectCurrentToken=(state)=>state.auth.token
export const selectUserInfo=(state)=>state.auth.user