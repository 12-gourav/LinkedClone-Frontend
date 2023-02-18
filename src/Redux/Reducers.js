import { createReducer} from "@reduxjs/toolkit";

export const userReducer = createReducer({
    isvalid:false
},(builder)=>{
    builder.addCase("first",(state,action)=>{
        state.first=action.payload;
        }).addCase("second",(state,action)=>{
            state.second=action.payload;
        }).addCase("third",(state,action)=>{
            state.logo=action.payload;
        }).addCase("login",(state,action)=>{
            state.user=action.payload;
            state.isvalid=true;
        }).addCase("load",(state,action)=>{
            state.user = action.payload;
            state.isvalid=true
        }).addCase("logout",(state,action)=>{
            state.user=null;
            state.isvalid=false;
        })
    
});