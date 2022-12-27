import { apiSlice } from "../api/AuthApi";
import { logOut } from "./authSlice";


export const authApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        login:builder.mutation({
            query:credentials=>({
                url:"/auth/logIn",
                method:"POST",
                body:{...credentials}
            })
        }),
        sendLogOut:builder.mutation({
            query:()=>({
                url:"/auth/logOut",
                method:"POST"
            }),
            async onQueryStarted(arg,{dispatch,queryFulfilled}){
                try {
                  const data=await queryFulfilled
                  dispatch(logOut())  //this will prevent us from dispatching logout in each component to clear state in authSlice
                  dispatch(apiSlice.util.resetApiState())// needed to call to clear cache and everything to apiSlice
                } catch (error) {
                    console.log(error)
                }
            }
        }),

        
        registerUser:builder.mutation({
            query:credentials=>({
                url:"/register",
                method:"POST",
                body:{...credentials}
            })
        }),
        refresh:builder.mutation({
            query:()=>({
                url:"/auth/refresh",
                method:"GET"
            })
        })
    })
})

export const {useLoginMutation,useSendLogOutMutation,useRegisterUserMutation,useRefreshMutation}=authApiSlice