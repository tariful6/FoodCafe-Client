import Swal from "sweetalert2";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
    // using (,) we ignore loading ----
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

const handleDeleteItem  = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
               const res = await axiosSecure.delete(`/menu/${item._id}`);
               if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                  });
               }
            }
          });
    } 

    return (
        <div>

            <SectionTitle heading={"manage all items"} subHeading={"Hurry up"}></SectionTitle>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>

                    <tbody>
                    {/* table row */}
                    {
                        menu.map((item, index) => <tr key={item._id}>
                            <td>{index+1}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img src={item.image}
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td className=" text-right">${item.price}</td>
                            <td> 
                                <Link to={`/dashboard/updateItem/${item._id}`}>
                                    <button className=" btn bg-orange-500 btn-sm"> <FaEdit className=" text-white"></FaEdit></button>  
                                </Link>
                            </td>
                            <td>
                                <button onClick={()=> handleDeleteItem(item)} className=" btn btn-ghost"> <FaTrashAlt className=" text-red-500"></FaTrashAlt></button>
                            </td>
                        </tr>)
                    }
                
                    </tbody>
                  </table>
               </div>
            </div>
    );
};

export default ManageItems;