import { useQuery } from "@tanstack/react-query";
import { MdAdminPanelSettings, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosSecure from "../Hooks/useAxiosSecure";


const TotalMember = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handleAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is admin now.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

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
                    })

            }
        });
    }
    return (

        <div>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-base text-black bg-blue-400">
                            <th className="text-center">ক্রমিক</th>
                            <th className="text-center">আইডি নং</th>
                            <th>সদস্যের নাম</th>
                            <th>সদস্যের ইমেইল</th>
                            <th className="text-center">রোল</th>
                            <th className="text-center">ডিলিট</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr className="hover:bg-blue-100 cursor-pointer" key={user._id}>
                                <th className="text-center">{index + 1}</th>
                                <th className="text-center">{user.userId}</th>
                                <th>
                                <Link to={`/dashboard/member/${user._id}`}>{user.name}</Link></th>
                                

                                <th>{user.email}</th>
                                <th className="text-center">
                                    {
                                        user.role === 'admin' ? 'এডমিন'
                                            :
                                            <button onClick={() => handleAdmin(user)} className="text-xl p-2 bg-blue-500 rounded text-white">
                                                <MdAdminPanelSettings className="text-lg" />
                                            </button>
                                    }
                                </th>
                                <th onClick={() => handleDelete(user)} className="text-center">
                                    <button >
                                        <MdDelete className="text-lg" />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalMember;