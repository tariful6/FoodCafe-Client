import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Menu</NavLink>
        <NavLink to='/'>Contract</NavLink>
    </>
    return (
        <div className="bg-[#1919196b] fixed z-10 w-full  text-white">
            <div className="navbar container mx-auto px-0">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                     {navLinks}
                </ul>
                </div>
                <span className=" text-2xl font-bold">Food Cafe</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                        {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;