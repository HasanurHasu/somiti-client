import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from 'sweetalert2'


const TotalMember = () => {
    const axiosPublic = useAxiosPublic()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data
        }
    })

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
                axiosPublic.delete(`/user/${user._id}`)
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
                                    <Link to={`/dashboard/member/${user._id}`}><th>{user.name}</th></Link>

                                    <th>{user.email}</th>
                                    <th className="text-center">
                                        <select id="ddlViewBy" name="type" className="rounded-md text-center">
                                            <option value="">Select One</option>
                                            <option value="admin">এডমিন</option>
                                            <option value="manager">ম্যনেজার</option>
                                            <option value="member">মেম্বার</option>
                                        </select>
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
        </div>
    );
};

export default TotalMember;