import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LiaHandshakeSolid } from "react-icons/lia";
import { AuthContext } from "../Provider/AuthProvider";



const Navbar = () => {
    // user information
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    console.log(user);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])

    const navLinks = [
        { link: 'হোম', path: '/' },
        { link: 'আমাদের সম্পর্কে', path: '/about' },
    ]
    return (
        <header className="w-full bg-white bg-opacity-50 bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-blue-300 bg-opacity-90' : ''}`}>
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2"><LiaHandshakeSolid className="inline-block" />নিখাত</Link>
                    {/* nav links */}
                    <ul className="md:flex space-x-12 hidden">
                        {
                            navLinks.map(({ link, path }) => <Link key={path} to={path} className="block text-base uppercase hover:text-blue-700" >{link}</Link>)
                        }
                    </ul>

                    <div className="space-x-12 hidden lg:flex items-center">
                       {
                        user ?
                        <button onClick={logOut} className="bg-blue-700 py-2 px-4 text-white rounded">লগ আউট</button>
                        :
                        <Link to='/login'><button className="bg-blue-700 py-2 px-4 text-white rounded">লগইন করুন</button></Link>
                       }
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {
                                isMenuOpen ? <IoMdCloseCircleOutline className="text-3xl" /> : <IoMenu className="text-3xl hover:text-blue-700" />
                            }
                        </button>
                    </div>
                </div>
                <div className={`space-y-4 px-4 mt-16 py-7 lg:hidden bg-blue-700 text-white ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                    {
                        navLinks.map(({ link, path }) => <Link key={path} to={path} className="block text-base uppercase" >{link}</Link>)
                    }
                </div>
            </nav>

        </header>
    );
};

export default Navbar;