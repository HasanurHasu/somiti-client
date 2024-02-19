import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'



const AllAppliedLoan = () => {

    const axiosSecure = useAxiosSecure();

    const { data: appliedLoan = [], refetch } = useQuery({
        queryKey: ['appliedLoan'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allAppliedLoan?status=pending');
            return res.data;
        }
    });

    const handleConfirmLoan = applied => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/activeLoan/${applied._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${applied.name} Confirmed for Loan.`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        })
    }

    const handleDeleteLoan = (applied) => {
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
                axiosSecure.delete(`/applyLoan/${applied._id}`)
                    .then(res => {
                        console.log(res.data);
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
                            <th className="text-center">সদস্যের নাম</th>
                            <th className="text-right">পরিমান</th>
                            <th className="text-center">সদস্যের ইমেইল</th>
                            <th className="text-center">জন্ম তারিখ</th>
                            <th className="text-center">এনআইডি</th>
                            <th className="text-center">মোবাইল নং</th>
                            <th className="text-center">নিশ্চিত</th>
                            <th className="text-center">একশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appliedLoan.map((applied, index) => <tr className="hover:bg-blue-100 cursor-pointer" key={applied._id}>
                                <th className="text-center">{index + 1}</th>
                                <th className="text-center"><Link to={`/dashboard/confirmLoan/${applied._id}`}>{applied.name}</Link></th>
                                <th className="text-right">{applied.amount}/-</th>
                                <th className="text-center">{applied?.email}</th>
                                <th className="text-center">{applied.date}</th>
                                <th className="text-center">{applied.NID}</th>
                                <th className="text-center">{applied.mobile} </th>
                                <th className="text-center"><button onClick={() => handleConfirmLoan(applied)} className="bg-blue-500 py-2 px-5 text-white rounded">নিশ্চিত</button></th>
                                <th className="text-center"><button onClick={() => handleDeleteLoan(applied)}> <MdDelete className="text-lg" /></button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllAppliedLoan;