import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const image_hosting_key = 'd3aadbc3f10eeee9f29100e75d38ad85';
const image_Hosting_Api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`; 

const UpdateItem = () => {
    const {name, category, recipe, price, _id} = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPuplic = useAxiosPublic();

    const onSubmit = async data => {
        console.log(data)
        const imageFile = {image : data.image[0]}
        const res = await axiosPuplic.post(image_Hosting_Api,imageFile,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
            });
            if(res.data.success){
                const menuItem = { 
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe : data.recipe,
                    image: res.data.data.display_url, 
                }
                const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
                console.log("with image url", menuRes.data);
                if(menuRes.data.modifiedCount > 0){
                    // reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} updated successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
        };

    return (
        <div>
            <SectionTitle heading={"Update an  Item"} subHeading={"Refresh"}></SectionTitle>
                     <div>
                            {/* we use this form from react hook form and modify it useing daisy ui select  */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                    
                                <div className="form-control w-full my-6">
                                    <div className="label">
                                        <span className="label-text">Recipe Name*</span>
                                    </div>
                                    <input defaultValue={name}  {...register("name", {required: true})} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                                </div>
            
            
                                <div className=" flex gap-6">
                                    <div className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Category*</span>
                                        </div>
                                        <select defaultValue={category} {...register("category" ,{required: true})} className="select select-bordered w-full">
                                            <option disabled selected>Select a category</option>
                                            <option value="salad">Salad</option>
                                            <option value="pizza">Pizza</option>
                                            <option value="soup">Soup</option>
                                            <option value="dessert">Dessert</option>
                                            <option value="drinks">Drinks</option>
                                        </select>
                                    </div>
                                    <div className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Price*</span>
                                        </div>
                                        <input defaultValue={price}  {...register("price",  {required: true})} type="number" placeholder="Price" className="input input-bordered w-full " />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <div className="label">
                                        <span className="label-text">Recipe Details</span>
                                    </div>
                                    <textarea defaultValue={recipe} {...register("recipe",{required: true})} className="textarea textarea-bordered h-24 w-full" placeholder="Recipe Details"></textarea>
                                </div>
            
                                <div className="form-control w-full my-6">
                                    <input  {...register("image", {required: true})} type="file" className="file-input w-full max-w-xs" />
                                </div>
            
                                <button className="btn" type="submit">Update Menu Item  <FaUtensils className=" ml-4"></FaUtensils> </button>
                     
                            </form>
                        </div>
        </div>
    );
};

export default UpdateItem;