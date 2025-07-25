import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

// const image_Hosting_Key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_key = 'd3aadbc3f10eeee9f29100e75d38ad85';
const image_Hosting_Api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`; 
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async data => {
        // console.log(data)
        const imageFile = {image : data.image[0]}
        const res = await axiosPublic.post(image_Hosting_Api, imageFile,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })

         if(res.data.success){
            // for set menu to server  ----------
            const menuItem = { 
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe : data.recipe,
                image: res.data.data.display_url, 
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log("with image url", menuRes.data);
                if(menuRes.data.insertedId){
                   reset();
                   Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: `${data.name} added successfully`,
                     showConfirmButton: false,
                     timer: 1500
                  });
               }
        }
    };

    return (
     <div>
            <SectionTitle heading={"add an item"} subHeading={"What's new ? "}></SectionTitle>

            <div>
                {/* we use this form from react hook form and modify it useing daisy ui select  */}
                <form onSubmit={handleSubmit(onSubmit)}>
        
                    <div className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text py-2">Recipe Name*</span>
                        </div>
                        <input  {...register("name", {required: true})} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                    </div>


                    <div className=" flex gap-6">
                        <div className="form-control w-full">
                            <div className="label py-2">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue="default" {...register("category" ,{required: true})} className="select select-bordered w-full">
                                <option disabled selected>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <div className="label py-2">
                                <span className="label-text">Price*</span>
                            </div>
                            <input  {...register("price",  {required: true})} type="number" placeholder="Price" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control my-3">
                        <div className="label py-2">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea  {...register("recipe",{required: true})} className="textarea textarea-bordered h-24 w-full" placeholder="Recipe Details"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input  {...register("image", {required: true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                

                    <button className="btn  cursor-pointer" type="submit">Add Item  <FaUtensils className=" ml-4"></FaUtensils> </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;