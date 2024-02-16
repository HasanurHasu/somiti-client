import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ActiveLoan = () => {

    const axiosSecure = useAxiosSecure();

    const { data: activeLoan = [], refetch } = useQuery({
        queryKey: ['activeLoan'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allAppliedLoan?status=confirmed');
            return res.data;
        }
    });

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
                            <th className="text-center">জন্ম তারিখ</th>
                            <th className="text-center">এনআইডি</th>
                            <th className="text-center">মোবাইল নং</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            activeLoan.map((active, index) => <tr className="hover:bg-blue-100 cursor-pointer" key={active._id}>
                                <th className="text-center">{index + 1}</th>
                                <th className="text-center"><Link to={`/dashboard/member/${active._id}`}>{active.name}</Link></th>
                                <th className="text-right">{active.amount}/-</th>
                                <th className="text-center">{active?.email}</th>
                                <th className="text-center">{active.date}</th>
                                <th className="text-center">{active.NID}</th>
                                <th className="text-center">{active.mobile} </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ActiveLoan;