import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const TotalMember = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    // const handleDelete = (_id, name) => {

    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:5000/delete-book/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Success!',
    //                             `${name} has been deleted.`,
    //                             'success'
    //                         )
    //                         const remaining = books.filter(items => items._id !== _id);
    //                         setBooks(remaining)
    //                     }
    //                 })
    //         }
    //     })
    // }
    return (
        <div>
            <div>
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-base text-black bg-blue-400">
                                <th className="text-center">ক্রমিক</th>
                                <th className="text-center">আইডি নং</th>
                                <th>সদস্যের নাম</th>
                                <th>সদস্যের ইমেইল</th>
                                <th className="text-center">ডিলিট</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr className="hover:bg-blue-100 cursor-pointer" key={user._id}>
                                    <th className="text-center">{index + 1}</th>
                                    <th className="text-center">{user.userId}</th>
                                    <Link to={`/dashboard/member/${user._id}`}><th>{user.name}</th></Link>
                                    
                                    <th>{user.email}</th>
                                    <th className="text-center">
                                        <button>
                                            <MdDelete className="text-lg" />
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TotalMember;