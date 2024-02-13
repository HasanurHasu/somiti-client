import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/images/nikhat-business.png"
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMdHome } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";
import { MdAddCircleOutline } from "react-icons/md";


const Dashboard = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogout = () => {
        logOut();
        navigate('/')
    }

    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}

                <div className="w-full lg:hidden navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Navbar Title</div>

                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-60 bg-base-200 text-base-content flex flex-col justify-between h-screen">
                    {
                        isAdmin ?
                            <div className="full">
                                <img className="w-24 my-4" src={img} alt="" />
                                <div className="flex flex-col gap-1">
                                    <NavLink to='/dashboard/all-members'><button className="flex items-center gap-2 py-2 border text-left  pl-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white w-full"><BsFillPeopleFill className="text-lg" /> <span>মোট সদস্য</span></button></NavLink>
                                    <NavLink to='/dashboard/appliedLoan'><button className="flex items-center gap-2 py-2 border text-left  pl-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white w-full"><BsFillPeopleFill className="text-lg" /> <span>লোনেরে আবেদন</span></button></NavLink>
                                    <Link><div className="w-full">
                                        <button className="flex items-center gap-2 py-2 border text-left  pl-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white w-full"><FaMoneyCheckDollar className="text-lg" /> <span>লোনের হিসাব</span></button></div></Link>
                                    <Link to='/dashboard/update-profile'> <button className="flex items-center gap-2 py-2 border text-left  pl-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white w-full"><RxUpdate className="text-lg" /> <span>প্রফাইল আপডেট</span></button></Link>
                                    <Link to='/'> <button className="flex items-center gap-2 py-2 border text-left  pl-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white w-full"><IoMdHome className="text-lg" /> <span>হোম</span></button></Link>
                                </div>
                            </div>
                            :
                            <div className="full">
                                <img className="w-24 my-4" src={img} alt="" />
                                <div className="flex flex-col gap-1">
                                    <NavLink to='/dashboard/applyLoan'><button className="flex items-center gap-2 py-2 border text-left  pl-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white w-full"><MdAddCircleOutline className="text-lg" /> <span>লোনের আবেদন</span></button></NavLink>                                    <Link to='/dashboard/update-profile'> <button className="flex items-center gap-2 py-2 border text-left  pl-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white w-full"><RxUpdate className="text-lg" /> <span>প্রফাইল আপডেট</span></button></Link>
                                </div>
                            </div>
                    }
                    <div className="py-2">
                        <button onClick={handleLogout} className="flex items-start gap-2"><TbLogout2 className="text-lg" /> <span>লগ আউট</span></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;