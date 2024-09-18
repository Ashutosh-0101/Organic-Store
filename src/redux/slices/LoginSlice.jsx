import { createSlice } from "@reduxjs/toolkit";



const loginSlice=createSlice({
    name:"login",
    initialState:{loginStatus:false,loginUser:{}},
    reducers:{
        chnageLoginStatus:(state)=>{
               state.loginStatus= !state.loginStatus
        },
        setLoginUser:(state,action)=>{
            state.loginUser=action.payload
        }
    }
})

export const {chnageLoginStatus,setLoginUser}=loginSlice.actions;
export default loginSlice.reducer;