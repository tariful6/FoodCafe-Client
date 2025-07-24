import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

   //  const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className=" flex bg-amber-200 h-screen">

           <div className=" w-2/12 px-6 bg-amber-500">
           <ul className=" py-9 space-y-3">
           {
             isAdmin ? 
               <>
                  <li className=" flex gap-3 items-center ">
                     <FaHome />
                     <NavLink to='/dashboard/adminHome'> Admin Home</NavLink>
                  </li>
                  <li className=" flex gap-3 items-center ">
                     <FaUtensils />
                      <NavLink to='/dashboard/addItems'> Add Items</NavLink>
                  </li>
                  <li className=" flex gap-3 items-center ">
                     <FaList /> 
                      <NavLink to='/dashboard/manageItems'>  Manage Items</NavLink>
                  </li>
                  <li className=" flex gap-3 items-center ">
                     <FaBook />
                      <NavLink to='/dashboard/bookings'>  Manage Booking</NavLink>
                  </li>
                  <li className=" flex gap-3 items-center ">
                     <FaUsers /> 
                     <NavLink to='/dashboard/users'>  All Users</NavLink>
                  </li>
            </> : 
            <>
               <li className=" flex gap-3 items-center ">
                  <FaHome></FaHome>
                  <NavLink to='/dashboard/userHome'>User Home</NavLink>
               </li>
               <li className=" flex gap-3 items-center ">
                  <FaCalendar></FaCalendar>
                  <NavLink to='/dashboard/reservation'>Reservation</NavLink>
               </li>
               <li className=" flex gap-3 items-center ">
                  <FaShoppingCart></FaShoppingCart>
                  <NavLink to='/dashboard/cart'>My Cart <span className=" bg-red-500 rounded-full">({cart.length})</span></NavLink>
               </li>
               <li className=" flex gap-3 items-center ">
                  <FaAd></FaAd>
                  <NavLink to='/dashboard/review'>Add a Review</NavLink>
               </li>
               <li className=" flex gap-3 items-center ">
                  <FaList></FaList>
                  <NavLink to='/dashboard/bookings'>My Bookings</NavLink>
               </li>
            </>
         }

               {/* common ------- */}
               <div className=" divider"></div>
                <li className=" flex gap-3 items-center ">
                  <FaHome></FaHome>
                  <NavLink to='/'>Home</NavLink>
               </li>
                <li className=" flex gap-3 items-center ">
                  <FaSearch></FaSearch>
                  <NavLink to='/order/salad'>Menu</NavLink>
               </li>
                <li className=" flex gap-3 items-center ">
                  <FaEnvelope></FaEnvelope>
                  <NavLink to='/order/salad'>Contract</NavLink>
               </li>

           </ul>


           </div> 
           <div className=" w-10/12 px-4 py-9">
                <Outlet></Outlet>
            </div> 
        </div>
    );
};

export default Dashboard;