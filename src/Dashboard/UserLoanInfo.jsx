import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import BanglaNumber from '../Hooks/BanglaNumber';

const UserLoanInfo = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const { id } = useParams()
    console.log(id);
    const { data: userInfo = [], refetch } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`https://somiti-server.vercel.app/loanInfo/${id}`);
            return res.data
        }
    })
    console.log(userInfo);
    const { _id, totalAmount, userId, name, email, mobile, fatherName, matherName, presentAddress, permanentAddress, NID, amount, loanInfo } = userInfo;

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
        const loanPaidDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;

        const form = e.target;
        const paidLoanAmount = form.paidLoanAmount.value;
        const savingsAmount = form.savingsAmount.value;
        const adminName = user.displayName;
        const getLoanInfo = { paidLoanAmount, savingsAmount, loanPaidDate, adminName };
        console.log(getLoanInfo);

        Swal.fire({
            title: "আপনি কি নিশ্চিত?",
            text: "এটি আপনি প্রতিরোধ করতে পারবেন না!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "জমা করুন",
            cancelButtonText: "বাতিল করুন"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`https://somiti-server.vercel.app/paidLoan/${_id}`, getLoanInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            form.reset();
                            Swal.fire({
                                title: "সফল হয়েছে",
                                text: `${name} এর টাকা সফলভাবে জমা হয়েছে`,
                                icon: "success",
                                confirmButtonText: "ঠিক আছে"
                            });
                        }
                    })
            }
        });

        // axiosSecure.put(`https://somiti-server.vercel.app/loanInfo/${_id}`, getLoanInfo)
        //     .then(res => console.log(res.data))
    }

    return (
        <div className=' mx-8'>
            <div className='grid grid-cols-3 gap-1'>
                <div className='flex flex-col justify-center items-center gap-1 bg-slate-100'>
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELPl2WQuMBShrQaqe0IWYjLf_y2XRkhGNWcdLfADOPJ6KAJe84GaYOQ51__wkkbGfR78&usqp=CAU" />
                        </div>
                    </div>
                    <h1 className='font-bold'>আইডি: <BanglaNumber number={userId}></BanglaNumber> </h1>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <p className='text-base font-bold'>ইমেইল: {email}</p>
                    <p className='text-base font-bold'>মোবাইল: {mobile}</p>
                </div>
                <div className='flex flex-col gap-2 bg-slate-100 p-4'>
                    <div>
                        <h3 className='text-base font-bold'>এপ্লিকেন্ট এনআইডি</h3>
                        <p>{NID}</p>
                    </div>
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

                </div>
                <div className='flex flex-col gap-2 bg-slate-100 p-4'>

                    <div>
                        <h3 className='text-base font-bold'>লোনের পরিমান</h3>
                        <p><BanglaNumber number={amount}></BanglaNumber>/-</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>সুদ সহ পরিমান</h3>
                        <p><BanglaNumber number={totalAmount}></BanglaNumber>/-</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>মোট ঋণ পরিশোধ</h3>
                        <p><BanglaNumber number={totalPaidLoanAmount}></BanglaNumber>/-</p>
                    </div>
                    <div>
                        <h3 className='text-base font-bold'>সঞ্চয় জমা</h3>
                        <p><BanglaNumber number={totalSavingAmount}></BanglaNumber></p>
                    </div>

                </div>
            </div>
            {/* add loan */}
            <div className='mt-4 w-full'>
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
                <table className="table table-sm mt-2 mb-8 text-nowrap">
                    {/* head */}
                    <thead className=''>
                        <tr className="bg-blue-400 text-sm text-black">
                            <th className="text-center py-2">ক্রমিক</th>
                            <th className="text-center py-2">জমাকারীর নাম</th>
                            <th className="text-center py-2">ঋণের পরিমান</th>
                            <th className="text-center py-2">কিস্তির তারিখ</th>
                            <th className="text-center py-2">কিস্তির পরিমান</th>
                            <th className="text-center py-2">সঞ্চয়ের পরিমান</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loanInfo?.map((info, index) => {
                                return <tr className="hover:bg-blue-100 font-light" key={index}>
                                    <th className="text-center py-2">{index + 1}</th>
                                    <th className="text-center py-2">{info?.adminName}</th>
                                    <th className="text-center py-2"><BanglaNumber number={amount}></BanglaNumber></th>
                                    <th className="text-center py-2">{info?.loanPaidDate}</th>
                                    <th className="text-center py-2"><BanglaNumber number={info?.paidLoanAmount} /></th>
                                    <th className="text-center py-2"><BanglaNumber number={info?.savingsAmount}></BanglaNumber></th>
                                </tr>;
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserLoanInfo;