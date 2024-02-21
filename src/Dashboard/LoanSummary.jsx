import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import BanglaNumber from "../Hooks/BanglaNumber";

const LoanSummary = () => {

    const axiosSecure = useAxiosSecure()

    const { data } = useQuery({
        queryKey: ['summary'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allAppliedLoan');
            return res.data;
        }
    })

    if (!data) {
        return <p>Loading...</p>;  // or return null, depending on your loading strategy
    }

    const totalSum = data.reduce((sum, person) => {
        const personSum = person.loanInfo.reduce((personSum, loan) => personSum + parseInt(loan.paidLoanAmount), 0);
        return sum + personSum;
    }, 0);
    return (
        <div className="w-48 bg-blue-500 rounded">
            <div className="p-4 text-white flex flex-col justify-center items-center">
                <div className="text-xl font-bold">মোট কিস্তি জমাঃ</div>
                <div className="text-2xl font-bold"><BanglaNumber number={totalSum}></BanglaNumber></div>
            </div>
        </div>
    );
};

export default LoanSummary;