import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const UserLoanInfo = () => {

    const axiosSecure = useAxiosSecure()
    const { id } = useParams()
    console.log(id);
    const { data: userInfo = [], refetch } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/loanInfo/${id}`);
            return res.data
        }
    })
    console.log(userInfo);
    const { _id, name, email, mobile, fatherName, matherName, presentAddress, permanentAddress, NID, amount, loanInfo } = userInfo;

    const totalPaidLoanAmount = loanInfo?.reduce((total, loan) => {
        return total + parseInt(loan.paidLoanAmount, 10);
    }, 0);
    const totalSavingAmount = loanInfo?.reduce((total, loan) => {
        return total + parseInt(loan.savingsAmount, 10);
    }, 0);

    const handleGetLoan = e => {
        e.preventDefault();

        const today = new Date();

        // Extract year, month, and day
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Month is zero-based, so we add 1
        const day = today.getDate();

        // Format the date as a string (optional, depending on your needs)
        const loanPaidDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

        const form = e.target;
        const paidLoanAmount = form.paidLoanAmount.value;
        const savingsAmount = form.savingsAmount.value;

        const getLoanInfo = { paidLoanAmount, savingsAmount, loanPaidDate };
        console.log(getLoanInfo);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "জমা করুন"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`http://localhost:5000/loanInfo/${_id}`, getLoanInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount> 0) {
                            refetch();
                            form.reset();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

        // axiosSecure.put(`http://localhost:5000/loanInfo/${_id}`, getLoanInfo)
        //     .then(res => console.log(res.data))
    }

    return (
        <div className=' mx-8'>
            <div className='grid grid-cols-3 gap-1'>
                <div className='flex flex-col justify-center items-center gap-4 bg-slate-100'>
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELPl2WQuMBShrQaqe0IWYjLf_y2XRkhGNWcdLfADOPJ6KAJe84GaYOQ51__wkkbGfR78&usqp=CAU" />
                        </div>
                    </div>
                    <h1 className='text-xl font-bold'>{name}</h1>
                </div>
                <div className='flex flex-col gap-5 bg-slate-100 p-4'>
                    <div>
                        <h3 className='text-base font-bold'>এপ্লিকেন্ট ইমেইল</h3>
                        <p>{email}</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>এপ্লিকেন্ট মোবাইল</h3>
                        <p>{mobile}</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>এপ্লিকেন্ট এনআইডি</h3>
                        <p>{NID}</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>লোনের পরিমান</h3>
                        <p>{amount}/-</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>মোট ঋণ পরিশোধ</h3>
                        <p>{totalPaidLoanAmount}/-</p>
                    </div>

                </div>
                <div className='flex flex-col gap-5 bg-slate-100 p-4'>
                    <div>
                        <h3 className='text-base font-bold'>পিতার নাম</h3>
                        <p>{fatherName}</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>মাতার নাম</h3>
                        <p>{matherName}</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>বর্তমান ঠিকানা</h3>
                        <p>{presentAddress}</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>স্থায়ী ঠিকানা</h3>
                        <p>{permanentAddress}</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>সঞ্চয় জমা</h3>
                        <p>{totalSavingAmount}</p>
                    </div>

                </div>
            </div>
            {/* add loan */}
            <div className='mt-4'>
                <form action="" onSubmit={handleGetLoan} >
                    <div className='flex justify-between gap-2 bg-blue-200 p-2'>
                        <div className='bg-blue-200'>
                            <p className='text-sm font-bold'>সদস্যের নাম</p>
                            <input type="text" disabled defaultValue={name} placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div className='bg-blue-200'>
                            <p className='text-sm font-bold'>কিস্তির পরিমান</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div className='bg-blue-200'>
                            <p className='text-sm font-bold'>কিস্তি জমা</p>
                            <input required type="text" name='paidLoanAmount' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div className='bg-blue-200'>
                            <p className='text-sm font-bold'>সঞ্চয়ের পরিমান</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div className='bg-blue-200'>
                            <p className='text-sm font-bold'>সঞ্চয় জমা</p>
                            <input required type="text" name='savingsAmount' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <input type="submit" className="py-[8px] mt-1 px-4 text-sm text-center bg-blue-700 text-white col-span-2 border rounded-md" value="আদায় করুন" />
                    </div>
                </form>
            </div>
            {/* loan row */}
            <div className="">
                <table className="table table-sm mt-2 mb-8">
                    {/* head */}
                    <thead className=''>
                        <tr className="bg-blue-400 text-sm text-black">
                            <th className="text-center py-2">ক্রমিক</th>
                            <th className="text-center py-2">সদস্যের নাম</th>
                            <th className="text-center py-2">ঋণের পরিমান</th>
                            <th className="text-center py-2">কিস্তির তারিখ</th>
                            <th className="text-center py-2">কিস্তির পরিমান</th>
                            <th className="text-center py-2">সঞ্চয়ের পরিমান</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loanInfo?.map((info, index) => <tr className="hover:bg-blue-100 font-light" key={index}>
                                <th className="text-center py-2">{index + 1}</th>
                                <th className="text-center py-2">{name}</th>
                                <th className="text-center py-2">{amount}</th>
                                <th className="text-center py-2">{info?.loanPaidDate}</th>
                                <th className="text-center py-2">{info?.paidLoanAmount}</th>
                                <th className="text-center py-2">{info?.savingsAmount}</th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserLoanInfo;