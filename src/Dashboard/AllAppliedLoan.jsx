import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllAppliedLoan = () => {

    const axiosSecure = useAxiosSecure();

    const { data: appliedLoan = [] } = useQuery({
        queryKey: ['appliedLoan'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allAppliedLoan');
            return res.data;
        }
    })

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
                            <th className="text-center">একশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appliedLoan.map((applied, index) => <tr className="hover:bg-blue-100 cursor-pointer" key={applied._id}>
                                <th className="text-center">{index + 1}</th>
                                <th><Link to={`/dashboard/member/${applied._id}`}>{applied.name}</Link></th>
                                <th className="text-right">{applied.amount}/-</th>
                                <th className="text-center">{applied?.email}</th>
                                <th className="text-center">{applied.date}</th>
                                <th className="text-center">{applied.NID}</th>
                                <th className="text-center">{applied.mobile} </th>
                                <th className="text-center">
                                    <select className="select select-ghost select-sm max-w-xs">
                                        <option disabled selected>সিলেক্ট</option>
                                        <option>নিশ্চিত করুন</option>
                                        <option>বাতিল করুন</option>
                                    </select>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllAppliedLoan;