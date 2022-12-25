import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredientials } from '../auth/authSlice'


const baseQuery=fetchBaseQuery({
    baseUrl:"http://localhost:3100",
    credentials:"include",
    prepareHeaders:(headers,{getState})=>{
        const token=getState().auth.token
        if(token){
            headers.set("authorization" ,`Bearer ${token}`)
        }
        return headers
    }
})



const baseQueryWithReAuth=async(args,api,extraOptions)=>{
    let result=await baseQuery(args,api,extraOptions)
    if(result?.error?.status==403){
        console.log("sending refresh token")
//send refreshtoken to get new accesstoken

const refreshResult=await baseQuery("/auth/refresh",api,extraOptions)
if(refreshResult?.data){
    const {accessToken,foundUser}=refreshResult.data
    console.log(refreshResult.data)
    //store new token
    api.dispatch(setCredientials({accessToken,foundUser}))
//retry original query with new accesstoken 
    result=await baseQuery(args,api,extraOptions)
}else{
    if(refreshResult?.error?.status==403){
        refreshResult.error.data.message="your login has expired."
    }
    return refreshResult
}



    }
    return result
}










export const apiSlice=createApi({
    reducerPath:"authApi",
    baseQuery:baseQueryWithReAuth,
    tagTypes:["User,Activity"],
    endpoints:(builder)=>({})

    
})