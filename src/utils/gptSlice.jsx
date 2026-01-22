import { createSlice } from "@reduxjs/toolkit";

const gptSlcie=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        lang:"en",
        movieNames:null,
        movieResults:null,
        selectedItem:null,
       

    },
    reducers:{
        toggleGptSearchview:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        changeLanguage:(state,action)=>{
            state.lang=action.payload
        },
        addGptMovieResults:(state,action)=>{
            const {movieNames,movieResults}=action.payload
            state.movieNames=movieNames
            state.movieResults=movieResults
        },
       addSeletedItem:(state,action)=>{
        state.selectedItem=action.payload
       },
       



    }
})

export default gptSlcie.reducer

export const {toggleGptSearchview,changeLanguage,addGptMovieResults,addSeletedItem}=gptSlcie.actions