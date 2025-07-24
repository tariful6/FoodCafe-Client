import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data : users = [], refetch} = useQuery({
        queryKey : ['users'],
        queryFn : async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                    }
                })
             
            }
            });
    }

    const handleUpdate = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update to Admin"
            }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                .then(res => {
                    if(res.data.modifiedCount > 0){
                        console.log(res.data);
                        refetch()
                        Swal.fire({
                            
                          title: `${user?.name} is an admin now`,
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                    }
                })
             
            }
            });
    }
    return (
        <div>
            <div className=" flex justify-evenly my-4">
                <h2 className=" text-3xl">All Users</h2>
                <h2 className=" text-3xl">Total Users : {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) =>  <tr key={user._id}>
                        <th>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            {
                                user.role === 'admin' ? 'Admin' : <button onClick={()=> handleUpdate(user)} className=" btn btn-primary"> <FaUsers></FaUsers> </button>
                            }
                        </td>
                        <td>
                            <button onClick={()=>handleDelete(user._id)} className=" btn btn-secondary">X</button>
                        </td>
                    </tr>)
                    }

        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;