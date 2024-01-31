import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

const Dashboard = () => {
    return (
        <div className="">
            <div className="flex justify-start gap-6">
                <div className="px-4 bg-gray-300">
                    <Sidebar />
                </div>
                <div className="mt-4 w-full mr-24">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;