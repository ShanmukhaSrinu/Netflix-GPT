import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        trailerVideos:null,
        nowPlayingMovies:null,
        PopularMovies:null,
        TopratedMovies:null,
        UpcomingMovies:null,
    },
    reducers:{
        addTrailerVideo:(state,action)=>{
            state.trailerVideos=action.payload
        },
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
         addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload
        },
         addTopratedMovies:(state,action)=>{
            state.TopratedMovies=action.payload
        },
         addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload
        },
    },
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopratedMovies,addUpcomingMovies}=moviesSlice.actions;

export default moviesSlice.reducer;