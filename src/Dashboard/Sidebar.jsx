import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/images/nikhat-business.png"
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMdHome } from "react-icons/io";

const Sidebar = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogout = () => {
        logOut();
        navigate('/')
    }

    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="w-44">
                <img className="w-24 my-4" src={img} alt="" />
                <div className="flex flex-col gap-1">
                    <Link to='/dashboard/all-members'> <button className="flex items-center gap-2 py-2 border text-left  pl-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white w-full"><BsFillPeopleFill className="text-lg" /> <span>মোট সদস্য</span></button></Link>
                    <Link><div className="w-full">
                        <button className="flex items-center gap-2 py-2 border text-left  pl-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white w-full"><FaMoneyCheckDollar className="text-lg" /> <span>লোনের হিসাব</span></button></div></Link>
                    <Link to='/dashboard/update-profile'> <button className="flex items-center gap-2 py-2 border text-left  pl-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white w-full"><RxUpdate className="text-lg" /> <span>প্রফাইল আপডেট</span></button></Link>
                   
                </div>
            </div>
            <div className="py-2">
                <button onClick={handleLogout} className="flex items-start gap-2"><TbLogout2 className="text-lg" /> <span>লগ আউট</span></button>
            </div>
        </div>
    );
};

export default Sidebar;