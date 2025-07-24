import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialShare = () => {
    const axiosPublic = useAxiosPublic()
    const {signInGoogle} = useAuth();
    const navigate = useNavigate()
    const hangleGoogleSignin = () =>{
        signInGoogle()
        .then(data =>  {
            console.log(data);
            const userInfo ={
                email : data.user?.email,
                name : data.user?.displayName,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res);
                navigate('/')
            })
        })
        .catch(err => console.log(err))
    }
    return (
        <div className=" py-3 px-6">
            <button onClick={hangleGoogleSignin} className=" btn btn-primary">Google</button>            
        </div>
    );
};

export default SocialShare;