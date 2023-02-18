
import axios from "axios";
import {toast} from "react-toastify";


export const createCompany = async(myForm,id)=>{

    try {
        await axios.post("http://localhost:5000/api/v1/create-company",myForm,{ headers:{
            'Content-Type': 'multipart/form-data',
    }
       });
        
    } catch (error) {
        toast.error(error.response.data.message);
    }
}


export const RegisterUser = async(name,email,password)=>{
    try {
        return await axios.post("http://localhost:5000/api/v1/register",{name,email,password});
    } catch (error) {
        toast.error(error.response.data.message);
    }
}

export const LoginUser = async(email,password)=>{
    try {
         return await axios.post("http://localhost:5000/api/v1/login",{email,password});
    } catch (error) {
        toast.error(error.response.data.message);
    }
}

export const LoadUser = async(token)=>{
    try {
       return await axios.post("http://localhost:5000/api/v1/load",{},{headers:{
            token:token
        }});
    } catch (error) {
        // toast.error(error.response.data.message);
        // console.log(error)
    }
}

export const LogoutUser = async(token)=>{
    try {
       return await axios.post("http://localhost:5000/api/v1/logout",{},{headers:{
            token:token
        }});
    } catch (error) {
        toast.error(error.response.data.message);
    }
}