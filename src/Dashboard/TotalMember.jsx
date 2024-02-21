// Import statements
import { useQuery } from "@tanstack/react-query";
import { MdAdminPanelSettings, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import useAxiosSecure from "../Hooks/useAxiosSecure";
import BanglaNumber from "../Hooks/BanglaNumber";

// Component definition
const TotalMember = () => {
    // Custom hook for Axios
    const axiosSecure = useAxiosSecure();

    // Query for fetching user data
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    // Function to format date and time
    const formatDateTime = (dateTimeString) => {
        const options = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        };
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleDateString('en-US', options);
    };

    // Function to handle making a user admin
    const handleAdmin = user => {
        Swal.fire({
            title: "আপনি কি নিশ্চিত?",
            text: "এটি আপনি প্রতিরোধ করতে পারবেন না!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "অনুমোদন করুন",
            cancelButtonText: "বাতিল করুন",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${user.name} is admin now.`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
            }
        });
    };

    // Function to handle user deletion
    const handleDelete = (user) => {
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
                axiosSecure.delete(`/user/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="">
                {/* Table */}
                <table className="table table-sm">
                    {/* Table head */}
                    <thead>
                        {/* Table header row */}
                        <tr className="text-base text-black bg-blue-400">
                            <th className="text-center">ক্রমিক</th>
                            <th className="text-center">আইডি নং</th>
                            <th>সদস্যের নাম</th>
                            <th>সদস্যের ইমেইল</th>
                            <th className="text-center">ক্রিয়েট তারিখ</th>
                            <th className="text-center">রোল</th>
                            <th className="text-center">ডিলিট</th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody>
                        {/* Mapping through users */}
                        {users.map((user, index) => (
                            <tr className="hover:bg-blue-100 cursor-pointer" key={user._id}>
                                <th className="text-center"><BanglaNumber number={index + 1}></BanglaNumber></th>
                                <th className="text-center"><BanglaNumber number={user.userId}></BanglaNumber></th>
                                <th>
                                    <Link to={`/dashboard/member/${user._id}`}>{user.name}</Link>
                                </th>
                                <th>{user.email}</th>
                                <th className="text-center">{formatDateTime(user.createTime)}</th>
                                <th className="text-center">
                                    {user.role === 'admin' ? 'এডমিন' :
                                        <button onClick={() => handleAdmin(user)} className="p-1 bg-blue-500 rounded text-white">
                                            <MdAdminPanelSettings className="text-lg" />
                                        </button>}
                                </th>
                                <th onClick={() => handleDelete(user)} className="text-center">
                                    <button>
                                        <MdDelete className="text-lg" />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalMember;
