import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserLoanInfo = () => {

    const { name, email, mobile, fatherName, matherName, presentAddress, permanentAddress, NID, amount } = useLoaderData()

    return (
        <div className='grid grid-cols-3 gap-1 mx-8 mt-8'>
            <div className='flex flex-col justify-center items-center gap-4 bg-slate-100'>
                <div className="avatar">
                    <div className="w-32 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELPl2WQuMBShrQaqe0IWYjLf_y2XRkhGNWcdLfADOPJ6KAJe84GaYOQ51__wkkbGfR78&usqp=CAU" />
                    </div>
                </div>
                <h1 className='text-xl font-bold'>{name}</h1>
            </div>
            <div className='flex flex-col gap-8 bg-slate-100 p-4'>
                <div>
                    <h3 className='text-lg font-bold'>Applicant Email</h3>
                    <p>{email}</p>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>Applicant Mobile</h3>
                    <p>{mobile}</p>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>Applicant NID</h3>
                    <p>{NID}</p>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>Loan Amount</h3>
                    <p>{amount}/-</p>
                </div>

            </div>
            <div className='flex flex-col gap-8 bg-slate-100 p-4'>
                <div>
                    <h3 className='text-lg font-bold'>Father Name</h3>
                    <p>{fatherName}</p>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>Mather Name</h3>
                    <p>{matherName}</p>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>Present Address</h3>
                    <p>{presentAddress}</p>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>Permanent Address</h3>
                    <p>{permanentAddress}</p>
                </div>

            </div>
        </div>
    );
};

export default UserLoanInfo;