import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import AuthProvider, { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";


const UserLoan = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: userLoan = [] } = useQuery({
        queryKey: ['userLoan'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/userLoan?email=${user?.email}`);
            return res.data;
        }
    })
    console.log(userLoan);
    return (
        <div>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-base text-black bg-blue-400">
                            <th className="text-center">ক্রমিক</th>
                            <th className="text-center">সদস্যের নাম</th>
                            <th className="text-right">পরিমান</th>
                            <th className="text-center">সদস্যের ইমেইল</th>
                            <th className="text-center">এনআইডি</th>
                            <th className="text-center">মোবাইল নং</th>
                            <th className="text-center">স্টাটাস</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userLoan.map((singleLoan, index) => <tr className="hover:bg-blue-100 cursor-pointer" key={singleLoan._id}>
                                <th className="text-center">{index + 1}</th>
                                <th className="text-center"><Link to={`/dashboard/loanInfo/${singleLoan._id}`}>{singleLoan.name}</Link></th>
                                <th className="text-right">{singleLoan.amount}/-</th>
                                <th className="text-center">{singleLoan?.email}</th>
                                <th className="text-center">{singleLoan.NID}</th>
                                <th className="text-center">{singleLoan.mobile}</th>
                                {
                                    singleLoan.status === 'pending' ? <th className="text-center text-red-600">Pending</th> : <th className="text-center text-green-500">Confirmed</th>
                                }
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserLoan;