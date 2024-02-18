import { useContext } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";

const ApplyForLoan = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);

    const handleApplyLoan = (event) => {
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

        const applyLoan = { name, date, email: user.email, mobile, religion, fatherName, matherName, presentAddress, permanentAddress, NID, loanInfo: [], amount, status: 'pending' };
        console.log(applyLoan);

        axiosPublic.post('/applyLoan', applyLoan)
        .then(res => console.log(res.data))

    }
    return (
        <div className="mx-8 mt-4 lg:mx-24 lg:mt-8">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold">নতুন লোনের আবেদন ফরম</h1>
            </div>
            <div>
                <form onSubmit={handleApplyLoan}>
                    <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                        <div>
                            <h3 className="label-text font-bold mb-1">আপনার নাম <span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="name" defaultValue={user.displayName} className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">জন্ম তারিখ<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="date" name="date" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">মোবাইল নং<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="mobile" placeholder="মোবাইল নং" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">ধর্ম<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="religion" placeholder="ধর্ম" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">পিতার নাম<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="fatherName" placeholder="পিতার নাম লিখুন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">মাতার নাম<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="matherName" placeholder="মাতার নাম লিখুন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">বর্তমান ঠিকান<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="presentAddress" placeholder="বর্তমান ঠিকান" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">স্থায়ী ঠিকান<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="permanentAddress" placeholder="স্থায়ী ঠিকান" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">এনআইডি নং<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="NID" placeholder="এনআইডি নং" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">লোনের পরিমান<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="amount" placeholder="লোনের পরিমান" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <input type="submit" className="w-full py-[8px] text-center font-medium bg-blue-700 text-white col-span-2 border rounded-md" value="আবেদন করুন" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyForLoan;