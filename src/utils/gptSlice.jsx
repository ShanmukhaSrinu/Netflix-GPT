import { createSlice } from "@reduxjs/toolkit";

const gptSlcie=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        lang:"en",
    },
    reducers:{
        toggleGptSearchview:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        changeLanguage:(state,action)=>{
            state.lang=action.payload
        }


    }
})

export default gptSlcie.reducer

export const {toggleGptSearchview,changeLanguage}=gptSlcie.actions