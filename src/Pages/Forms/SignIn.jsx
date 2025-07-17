import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';

const SignIn = () => {
    const [disabled , setDisabled] = useState(true)
    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    useEffect(()=>{
          loadCaptchaEnginge(6); 
    },[])
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
            signInUser(email, password)
           .then(res =>{
              console.log(res.user)
              navigate(from , {replace : true})
           })
           .catch (err => console.log(err))
    }

    const handleValidateCaptcha  = (e) => {
        const user_captcha_value  =  e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }
    return (
        <div className="bg-base-200">
            <div className="hero container mx-auto min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
        
                        <div>
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input w-full" placeholder="Email" required/>
                        </div>
                        <div>
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input w-full" placeholder="Password" />
                        </div>
                        <div>
                            <label className="label"><LoadCanvasTemplate /></label>
                            <input onBlur={handleValidateCaptcha} name="captcha" type="text" className="input w-full" placeholder="captcha" />
                        </div>

                       <input disabled={disabled} type="submit" className="btn btn-neutral mt-4" value="Login" />
                       <span className=' text-red-400'> <Link to='/signUp'>Sign Up</Link></span>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignIn;