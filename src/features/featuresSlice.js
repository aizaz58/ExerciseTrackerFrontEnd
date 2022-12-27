import { createSlice } from "@reduxjs/toolkit";

const featureSlice=createSlice({
    name:"feature",
    initialState:{showDetailForm:false},
    reducers:{
        showForm:(state,action)=>{
            
            state.showDetailForm=!state.showDetailForm
        }
    }
})


export const {showForm}=featureSlice.actions
export default featureSlice.reducer

export const selectShowForm=(state)=>state.feature.showDetailForm