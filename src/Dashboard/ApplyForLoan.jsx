
const ApplyForLoan = () => {
    return (
        <div className="mx-8 mt-4 lg:mx-24 lg:mt-8">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold">নতুন লোনের আবেদন ফরম</h1>
            </div>
            <div>
                <form >
                    <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                        <div>
                            <h3 className="label-text font-bold mb-1">আপনার নাম <span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="name" placeholder="আপনার নাম লিখুন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">জন্ম তারিখ<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="author" placeholder="জন্ম তারিখ" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">মোবাইল নং<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="author" placeholder="মোবাইল নং" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">ধর্ম<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="author" placeholder="ধর্ম" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">পিতার নাম<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="url" name="photoUrl" placeholder="পিতার নাম লিখুন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">মাতার নাম<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="category" placeholder="মাতার নাম লিখুন" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">বর্তমান ঠিকান<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="url" name="pdfLink" placeholder="বর্তমান ঠিকান" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">স্থায়ী ঠিকান<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="number" name="price" placeholder="স্থায়ী ঠিকান" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">এনআইডি নং<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="description" placeholder="এনআইডি নং" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <div>
                            <h3 className="label-text font-bold mb-1">লোনের পরিমান<span className="text-red-600 text-lg">*</span> </h3>
                            <input required type="name" name="description" placeholder="লোনের পরিমান" className="p-[8px] rounded-md w-full border" />
                        </div>
                        <input type="submit" className="w-full py-[8px] text-center font-medium bg-blue-700 text-white col-span-2 border rounded-md" value="আবেদন করুন" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyForLoan;