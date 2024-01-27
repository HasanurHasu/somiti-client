import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {

    const { createUser, singInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const hanldeRegister = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const photoUrl = from.photoUrl.value;
        const password = from.password.value;
        const confirmPassword = from.confirmPassword.value;

        if (password.length < 6) {
            toast.error('Password length under 6')
            return;
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            toast.error('must be capital letter and special  character')
            return;
        }

        if (!(password === confirmPassword)) {
            toast.error('Password do not match.')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user.metadata.creationTime);
                toast.success('User Registration Successfully');
                const user = {
                    name,
                    email,
                    photoUrl,
                    createTime: result.user.metadata.creationTime,
                    loginTime: result.user.metadata.lastSignInTime
                }
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
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
                    name: result.user.displayName,
                    email: result.user.email,
                    photoUrl: result.user.photoURL,
                    createTime: result.user.metadata.creationTime,
                    loginTime: result.user.metadata.lastSignInTime
                }
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                
            })
            .catch(error => {
                console.log(error.message);
                toast.error('Login failed, Try again later')

            })

    }

    return (
        <div className="lg:w-1/3 mx-5 md:mx-6 lg:mx-auto my-16">
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <div className="w-full border-2 rounded-md py-5 px-10">
                <form onSubmit={hanldeRegister} className="flex flex-col text-lg space-y-3 w-full">
                    <h1 className="text-4xl font-bold my-5">Create an account</h1>
                    <div className="form-control">
                        <h2>Name</h2>
                        <input type="name" name="name" placeholder="Your Name" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>Email</h2>
                        <input type="email" name="email" placeholder="Your Email Address" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>Photo URL</h2>
                        <input type="text" name="photoUrl" placeholder="Photo URL" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>Password</h2>
                        <input type="password" name="password" placeholder="Password" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>Confirm Password</h2>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <input type="submit" value="Register" className="text-center bg-orange-600 w-full rounded-md mt-2 py-3 text-white font-semibold" />
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