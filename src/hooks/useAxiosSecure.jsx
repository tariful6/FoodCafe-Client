import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL : 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        // console.log('request stoped by interceptors',token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        // do something with request error
        return Promise.reject(error);
    })


    // intercepters 401 and 403 status ---------------
    axiosSecure.interceptors.response.use((response)=>{
        return response;
    }, async (error)=>{
        const status = error.response.status;
        if(status === 401 || status === 403){
           await logOut();
           navigate('/signIn')
        }
        // console.log('status error in the interceptor', status);
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;