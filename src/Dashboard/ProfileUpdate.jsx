import React from 'react';

const ProfileUpdate = () => {

    const data = [
        {
            "_id": "65d20d6c89ebb9570b3f8bad",
            "name": "জুলফিকার রহমান",
            "date": "2024-02-22",
            "email": "helloworld@gmail.com",
            "mobile": "01744863367",
            "religion": "Islam",
            "fatherName": "মোঃ খাদেমুল ইসলাম",
            "matherName": "মোছাঃ নাছিমা বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "NID": "6452100461",
            "loanInfo": [
                {
                    "paidLoanAmount": "500",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-18"
                },
                {
                    "paidLoanAmount": "500",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-18"
                },
                {
                    "paidLoanAmount": "500",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-18"
                },
                {
                    "paidLoanAmount": "500",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-18"
                }
            ],
            "amount": "100000",
            "status": "confirmed"
        },
        {
            "_id": "65d223035490b48647cf9af0",
            "name": "মোঃ তরিকুল ইসলাম",
            "date": "2001-04-12",
            "email": "torikul@gmail.com",
            "mobile": "01773601610",
            "religion": "ইসলাম",
            "fatherName": "মোঃ খাদেমুল ইসলাম",
            "matherName": "মোছাঃ দেলজান বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "NID": "6452100461",
            "loanInfo": [
                {
                    "paidLoanAmount": "10000",
                    "savingsAmount": "700",
                    "loanPaidDate": "2024-02-18"
                },
                {
                    "paidLoanAmount": "10000",
                    "savingsAmount": "700",
                    "loanPaidDate": "2024-02-18"
                },
                {
                    "paidLoanAmount": "10000",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-18"
                },
                {
                    "paidLoanAmount": "10000",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-18"
                },
                {
                    "paidLoanAmount": "10001",
                    "savingsAmount": "552",
                    "loanPaidDate": "2024-02-18"
                },
                {
                    "paidLoanAmount": "500",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-19"
                },
                {
                    "paidLoanAmount": "500",
                    "savingsAmount": "700",
                    "loanPaidDate": "2024-02-19"
                },
                {
                    "paidLoanAmount": "1000000",
                    "savingsAmount": "10000",
                    "loanPaidDate": "2024-02-19"
                },
                {
                    "paidLoanAmount": "349999",
                    "savingsAmount": "10000",
                    "loanPaidDate": "2024-02-19"
                }
            ],
            "amount": "1400000",
            "status": "confirmed"
        },
        {
            "_id": "65d25f600007c607c6805818",
            "name": "Hello World",
            "date": "2024-02-21",
            "email": "helloworld@gmail.com",
            "mobile": "01773601610",
            "religion": "ইসলাম",
            "fatherName": "মোঃ খাদেমুল ইসলাম",
            "matherName": "মোছাঃ নাছিমা বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "NID": "6452100461",
            "loanInfo": [
                {
                    "paidLoanAmount": "10000",
                    "savingsAmount": "700",
                    "loanPaidDate": "2024-02-19"
                }
            ],
            "amount": "140000",
            "status": "confirmed"
        },
        {
            "_id": "65d2ef0c71196ed27ffd727b",
            "name": "ইছানুর রহমান",
            "date": "1996-06-20",
            "email": "helloworld@gmail.com",
            "mobile": "01745678244",
            "religion": "ইসলাম",
            "fatherName": "মোঃ জবাইদুল ইসলাম",
            "matherName": "মোছাঃ পারুল বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "NID": "6452100461",
            "loanInfo": [
                {
                    "paidLoanAmount": "500",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-19"
                },
                {
                    "paidLoanAmount": "10000",
                    "savingsAmount": "700",
                    "loanPaidDate": "2024-02-19",
                    "adminName": "Md. Hasanur Rahman (Hasu)"
                }
            ],
            "amount": "500",
            "status": "confirmed",
            "totalAmount": "650"
        },
        {
            "_id": "65d30f8c5fae96618d767dbb",
            "name": "মোঃ তরিকুল ইসলাম",
            "date": "2024-02-14",
            "email": "torikul@gmail.com",
            "mobile": "01744863367",
            "religion": "Islam",
            "fatherName": "মোঃ খাদেমুল ইসলাম",
            "matherName": "মোছাঃ নাছিমা বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাপুর",
            "NID": "6452100461",
            "loanInfo": [
                {
                    "paidLoanAmount": "10000",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-19"
                }
            ],
            "amount": "100000",
            "status": "confirmed",
            "totalAmount": "110000"
        },
        {
            "_id": "65d319f6131ad5b2645701be",
            "name": "মোঃ তরিকুল ইসলাম",
            "date": "2024-02-14",
            "email": "torikul@gmail.com",
            "mobile": "01744863367",
            "religion": "ইসলাম",
            "fatherName": "মোঃ জবাইদুল ইসলাম",
            "matherName": "মোছাঃ দেলজান বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাপুর",
            "NID": "6452100461",
            "loanInfo": [],
            "amount": "100000",
            "status": "pending"
        },
        {
            "_id": "65d31ed0afa606beac91050e",
            "name": "মোঃ তরিকুল ইসলাম",
            "date": "2024-02-07",
            "email": "torikul@gmail.com",
            "mobile": "01744863367",
            "religion": "ইসলাম",
            "fatherName": "মোঃ জবাইদুল ইসলাম",
            "matherName": "মোছাঃ দেলজান বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাপুর",
            "NID": "6452100461",
            "loanInfo": [],
            "amount": "1400000",
            "status": "pending"
        },
        {
            "_id": "65d31f92e6e1555dd302754d",
            "userId": 1008,
            "name": "মোঃ তরিকুল ইসলাম",
            "date": "2024-02-07",
            "email": "torikul@gmail.com",
            "mobile": "01744863367",
            "religion": "ইসলাম",
            "fatherName": "মোঃ জবাইদুল ইসলাম",
            "matherName": "মোছাঃ দেলজান বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাপুর",
            "NID": "6452100461",
            "loanInfo": [],
            "amount": "1400000",
            "status": "confirmed",
            "totalAmount": "1008"
        },
        {
            "_id": "65d320ace6e1555dd302754e",
            "name": "মোঃ হাসিনুর রহমান",
            "date": "2004-06-25",
            "email": "torikul@gmail.com",
            "mobile": "01324134090",
            "religion": "ইসলাম",
            "fatherName": "মোঃ ফজর আলী",
            "matherName": "মোছাঃ হাসিনা বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "NID": "6452100461",
            "loanInfo": [
                {
                    "paidLoanAmount": "5500",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-19",
                    "adminName": "Md. Hasanur Rahman (Hasu)"
                },
                {
                    "paidLoanAmount": "5500",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-19",
                    "adminName": "Md. Hasanur Rahman (Hasu)"
                },
                {
                    "paidLoanAmount": "39000",
                    "savingsAmount": "1000",
                    "loanPaidDate": "2024-02-19",
                    "adminName": "Md. Hasanur Rahman (Hasu)"
                }
            ],
            "amount": "50000",
            "status": "confirmed",
            "totalAmount": "55000",
            "userId": null
        },
        {
            "_id": "65d351e6504c6a6198ef2e75",
            "name": "Hello World",
            "date": "2024-02-22",
            "email": "helloworld@gmail.com",
            "mobile": "01744863367",
            "religion": "ইসলাম",
            "fatherName": "মোঃ জবাইদুল ইসলাম",
            "matherName": "মোছাঃ নাছিমা বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "NID": "6452100461",
            "loanInfo": [
                {
                    "paidLoanAmount": "10000",
                    "savingsAmount": "700",
                    "loanPaidDate": "2024-02-19",
                    "adminName": "Md. Hasanur Rahman (Hasu)"
                },
                {
                    "paidLoanAmount": "10000",
                    "savingsAmount": "500",
                    "loanPaidDate": "2024-02-19",
                    "adminName": "Md. Hasanur Rahman (Hasu)"
                },
                {
                    "paidLoanAmount": "10000",
                    "savingsAmount": "10000",
                    "loanPaidDate": "2024-02-19",
                    "adminName": "Isanur Rahman"
                }
            ],
            "amount": "100000",
            "status": "confirmed",
            "totalAmount": "110000",
            "userId": null
        },
        {
            "_id": "65d3698228a4b3a27949263e",
            "userId": 1003,
            "name": "Hello World",
            "date": "2024-02-14",
            "email": "helloworld@gmail.com",
            "mobile": "01744863367",
            "religion": "ইসলাম",
            "fatherName": "মোঃ জবাইদুল ইসলাম",
            "matherName": "মোছাঃ পারুল বেগম",
            "presentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "permanentAddress": "নাগরী সাগরী, সাতখামার, বীরগঞ্জ, দিনাজপুর",
            "NID": "6452154646",
            "loanInfo": [],
            "amount": "50000",
            "status": "confirmed",
            "totalAmount": "1003"
        }
    ];

    const totalSum = data.reduce((sum, person) => {
        const personSum = person.loanInfo.reduce((personSum, loan) => personSum + parseInt(loan.paidLoanAmount), 0);
        return sum + personSum;
    }, 0);


    return (
        <div>
            <h2>Total Paid Loan Amount Across All Individuals:</h2>
            <p>{totalSum}</p>
        </div>
    );
};

export default ProfileUpdate;