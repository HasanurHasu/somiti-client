import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateAppliedLoan = () => {
    const axiosSecure = useAxiosSecure();
    const { _id, userId, name, date, email, religion, mobile, fatherName, matherName, presentAddress, permanentAddress, NID, amount, loanInfo } = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();

    const handleConfirmLoan = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const mobile = form.mobile.value;
        const religion = form.religion.value;
        const fatherName = form.fatherName.value;
        const matherName = form.matherName.value;
        const presentAddress = form.presentAddress.value;
        const permanentAddress = form.permanentAddress.value;
        const NID = form.NID.value;
        const amount = form.amount.value;
        const totalAmount = form.totalAmount.value;

        const applyLoan = { userId, name, date, email: email, mobile, religion, fatherName, matherName, presentAddress, permanentAddress, NID, loanInfo: [], amount, status: 'confirmed', totalAmount };
        console.log(applyLoan);

        axiosSecure.patch(`/loanInfo/${_id}`, applyLoan)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    form.reset();
                    Swal.fire({
                        title: "সফল হয়েছে",
                        text: `আপনার আবেদন সফলভাবে জমা হয়েছে`,
                        icon: "success",
                        confirmButtonText: "ঠিক আছে"
                    });
                    navigate('/dashboard/activeLoan')
                }
            })

    }

    return (
        <div className="mx-8 mt-4 lg:mx-24 lg:mt-8">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold">আবেদন নিশ্চিত করুন</h1>
            </div>
            <div>
                <form onSubmit={handleConfirmLoan}>
                    <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                        <div>
                            <h3 className="label-text font-bold mb-1">আপনার নাম <span className="text-red-600 text-lg">*</span> </h3>
                            <input required disabled type="name" defaultValue={name} name="name" className="input input-bordered input-sm w-full" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">জন্ম তারিখ<span className="text-red-600 text-lg">*</span> </h3>
                            <input required disabled type="date" defaultValue={date} name="date" className="input input-bordered input-sm w-full" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">মোবাইল নং<span className="text-red-600 text-lg">*</span> </h3>
                            <input required disabled type="name" defaultValue={mobile} name="mobile" placeholder="মোবাইল নং" className="input input-bordered input-sm w-full" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">ধর্ম<span className="text-red-600 text-lg">*</span> </h3>
                            <input required disabled type="name" defaultValue={religion} name="religion" placeholder="ধর্ম" className="input input-bordered input-sm w-full" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">পিতার নাম<span className="text-red-600 text-lg">*</span> </h3>
                            <input required disabled type="name" defaultValue={fatherName} name="fatherName" placeholder="পিতার নাম লিখুন" className="input input-bordered input-sm w-full" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">মাতার নাম<span className="text-red-600 text-lg">*</span> </h3>
                            <input required disabled type="name" defaultValue={matherName} name="matherName" placeholder="মাতার নাম লিখুন" className="input input-bordered input-sm w-full" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">বর্তমান ঠিকান<span className="text-red-600 text-lg">*</span> </h3>
                            <input required disabled type="name" defaultValue={presentAddress} name="presentAddress" placeholder="বর্তমান ঠিকান" className="input input-bordered input-sm w-full" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">স্থায়ী ঠিকান<span className="text-red-600 text-lg">*</span> </h3>
                            <input required disabled type="name" defaultValue={permanentAddress} name="permanentAddress" placeholder="স্থায়ী ঠিকান" className="input input-bordered input-sm w-full" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">এনআইডি নং<span className="text-red-600 text-lg">*</span> </h3>
                            <input required disabled type="name" defaultValue={NID} name="NID" placeholder="এনআইডি নং" className="input input-bordered input-sm w-full" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">লোনের পরিমান<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" defaultValue={amount} name="amount" placeholder="লোনের পরিমান" className="input input-bordered input-sm w-full" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">লোনের পরিশেধের পরিমান<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" defaultValue={amount} name="totalAmount" placeholder="লোনের পরিমান" className="input input-bordered input-sm w-full" />
                        </div>
                        <input type="submit" className="w-full py-[8px] text-center font-medium bg-blue-700 text-white col-span-2 border rounded-md" value="নিশ্চিত করুন" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateAppliedLoan;