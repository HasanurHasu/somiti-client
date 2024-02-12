import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";
import { axiosPublic } from "../Hooks/useAxiosPublic";

const Register = () => {

    const { createUser, singInWithGoogle } = useContext(AuthContext);
    const [counts, setCounts] = useState([]);
    const { count } = counts;
    useEffect(() => {
        fetch('http://localhost:5000/userLength')
            .then(res => res.json())
            .then(data => setCounts(data))
    }, [])
    console.log(1000 + count);

    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        // const photoUrl = from.photoUrl.value;
        const password = from.password.value;
        const confirmPassword = from.confirmPassword.value;

        if (password.length < 6) {
            toast.error('Password length under 6')
            return;
        }
        // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        //     toast.error('must be capital letter and special  character')
        //     return;
        // }

        if (!(password === confirmPassword)) {
            toast.error('Password do not match.')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user.metadata.creationTime);
                toast.success('User Registration Successfully');
                const user = {
                    userId: 1000 + count,
                    name,
                    email,
                    createTime: result.user.metadata.creationTime,
                    loginTime: result.user.metadata.lastSignInTime
                }
                updateProfile(result.user, {
                    displayName: name,
                    // photoURL: photoUrl
                })
                axiosPublic.post('/user', user)
                .then(res => console.log(res.data.insertedId))
                navigate(location?.state ? location.state : '/dashboard')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleWithRegister = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
                const user = {
                    userId: 1000 + count,
                    name: result.user.displayName,
                    email: result.user.email,
                    createTime: result.user.metadata.creationTime,
                    loginTime: result.user.metadata.lastSignInTime
                }
                axiosPublic.post('/user', user)
                .then(res => console.log(res.data))

            })
            .catch(error => {
                console.log(error.message);
                toast.error('Login failed, Try again later')

            })

    }

    return (
        <div className="lg:w-1/3 mx-5 md:mx-6 lg:mx-auto my-16">
            <div className="w-full border-2 rounded-md py-5 px-10">
                <form onSubmit={handleRegister} className="flex flex-col text-lg space-y-3 w-full">
                    <h1 className="text-4xl font-bold my-5">নতুন একাউন্ট খুলুন</h1>
                    <div className="form-control">
                        <h2>নাম</h2>
                        <input type="name" name="name" placeholder="আপনার নাম" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>ইমেইল</h2>
                        <input type="email" name="email" placeholder="আপনার ইমেইল এড্রেস" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    {/* <div>
                        <h2>Photo URL</h2>
                        <input type="text" name="photoUrl" placeholder="Photo URL" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div> */}
                    <div>
                        <h2>পাসওয়ার্ড</h2>
                        <input type="password" name="password" placeholder="পাসওয়ার্ড" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>কনফ্রাম পাসওয়ার্ড</h2>
                        <input type="password" name="confirmPassword" placeholder="কনফ্রাম পাসওয়ার্ড" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <input type="submit" value="রেজিস্টার" className="text-center bg-blue-600 w-full rounded-md mt-2 py-3 text-white font-semibold" />
                    </div>
                </form>
                <p className="text-center mt-2">Already have an account? <Link to='/login'><span className="text-orange-600">Login</span></Link></p>
            </div>
            <div className="my-2">
                <div className="flex justify-center items-center gap-2">
                    <span className="w-full border-b-2"></span>
                    <span>Or</span>
                    <span className="w-full border-b-2"></span>
                </div>
                <button onClick={handleWithRegister} className="w-full">
                    <div className="my-2 border-2 py-3 rounded-full">
                        <div className="flex justify-start items-center gap-36">
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="" className="w-8 ml-4" />
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Register;