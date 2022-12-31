import { createSlice } from "@reduxjs/toolkit";

const featureSlice=createSlice({
    name:"feature",
    initialState:{showDetailForm:false,isFetching:false},
    reducers:{
        showForm:(state,action)=>{
            
            state.showDetailForm=!state.showDetailForm
        },
        setFetching:(state,action)=>{
            state.isFetching=action.payload
        }
    }
})


export const {showForm,setFetching}=featureSlice.actions
export default featureSlice.reducer

export const selectShowForm=(state)=>state.feature.showDetailForm
export const selectshowFetch=(state)=>state.feature.isFetching