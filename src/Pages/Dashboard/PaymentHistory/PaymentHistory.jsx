
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()

    const {data : payments =[]} = useQuery({
        queryKey :['payments', user.email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })
console.log(payments);


    //  const { data: payments = [] } = useQuery({
    //     queryKey: ['payments', user.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/payments/${user.email}`)
    //         return res.data;
    //     }
    // })


    return (
        <div>
            <h2 className=" text-3xl">Total Payments : {payments.length}</h2>
           <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>Price</th>
                    <th>Transactions ID</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                  payments.map((item, index) => <tr key={item.key} className="bg-base-200">
                    <th>{index + 1}</th>
                    <td>$ {item.price}</td>
                    <td>{item.transactionId}</td>
                    <td>{item.status}</td>
                </tr>)  
                }

           
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default PaymentHistory;