import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-center items-center h-screen">
                <Link to='/login'><button className="bg-blue-700 py-2 px-4 text-white rounded">লগইন করুন</button></Link>
            </div>
        </div>
    );
};

export default HomePage;