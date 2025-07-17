import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form"

const SignUp = () => {
      const { register,handleSubmit, watch, formState: { errors }} = useForm()
        const {createUser, updateUserProfile} = useContext(AuthContext)
        const navigate = useNavigate()

        // We use here react hook form  --------------
        const onSubmit = (data) => {
            createUser(data.email, data.password)
            .then(() =>{
                updateUserProfile(data.name, data.photo)
                .then(data => {
                    console.log(data);
                    navigate('/')
                })
            })
            .catch (err => console.log(err))
        }

    return (
    <div className="bg-base-200">
            <div className="hero container mx-auto min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Registration now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div>
                            <label className="label">Name</label>
                            <input {...register("name", { required: true })} name="name" type="text" className="input w-full" placeholder="Name"/>
                             {errors.name && <span className=" text-red-400">Name is required</span>}
                        </div>
                        <div>
                            <label className="label">Photo</label>
                            <input name="photo" {...register("photo",  { required: true })} type="text" className="input w-full" placeholder="photoUrl"/>
                              {errors.photo && <span className=" text-red-400">Photo is required</span>}
                        </div>
                        <div>
                            <label className="label">Email</label>
                            <input name="email" {...register("email",  { required: true })} type="email" className="input w-full" placeholder="Email" />
                              {errors.email && <span className=" text-red-400">Email is required</span>}
                        </div>
                        <div>
                            <label className="label">Password</label>
                            <input name="password" {...register("password",  { required: true, minLength : 6, maxLength : 20, pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} type="password" className="input w-full" placeholder="Password" />
                            {errors.password?.type=== 'required' && <span className=" text-red-500">password field is required</span>}
                            {errors.password?.type=== 'minLength' && <span className=" text-red-500">password must be 6</span>}
                            {errors.password?.type=== 'maxLength' && <span className=" text-red-500">password must be under 20</span>}
                            {errors.password?.type=== 'pattern' && <span className=" text-red-500">password must be valid</span>}
                        </div>
                       <input  type="submit" className="btn btn-neutral mt-4" value="Sign Up" />
                       <span className=' text-red-400'> <Link to='/signIn'>Sign in</Link></span>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;