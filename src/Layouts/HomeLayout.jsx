import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Slices/AuthSlice';

function HomeLayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //for checking if user is logged in     
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

    //for displaying the option according to the rule
    const role = useSelector((state) => state?.auth?.role)

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = "300px";

    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';


    }

   async function handleLogout(e) {
        e.preventDefault();

        const res=await dispatch(logout());
        if(res?.payload?.success);
         navigate("/");
    }

    return (        <>
            <div className="min-h-[90vh]">
                <div className="drawer absolute left-0 z-50 w-fit">
                    <input type="checkbox" className="drawer-toggle" id="my-drawer" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="cursor-pointer relative">
                            <FiMenu
                                onClick={changeWidth}
                                size={"32px"}
                                className='font-bold text-white m-4'
                            />
                        </label>


                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" className="drawer-overlay">
                        </label>
                        <ul className="menu p-4 h-[100%] sm:w-full bg-base-200 text-base-content relative">
                            <li className='w-fit absolute right-2 z-50'>
                                <button onClick={hideDrawer}>
                                    <AiFillCloseCircle size={24} />
                                </button>
                            </li>
                            <li>
                                <Link to="/" >Home</Link>
                            </li>
                            {isLoggedIn && role === 'ADMIN' && (
                                <li>
                                    <Link to="/admin/dashboard" >Admin DashBoard</Link>
                                </li>

                            )}
                            <li>
                                <Link to="/courses" >All Courses</Link>

                            </li>

                            <li>
                                <Link to="/contact" >Contact Us</Link>

                            </li>

                            <li>
                                <Link to="/about" >About Us</Link>

                            </li>
                               <li>
                                <Link to="/course/create" >Create Course</Link>

                            </li>
                            
                            {!isLoggedIn && (
                                <li className='absolute bottom-4 w-64'>
                                    <div className="w-full flex items-center justify-center ">
                                        <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 font-semibold rounded-md w-full text-center">
                                            Login
                                        </Link>
                                        <Link to="/signup" className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-1 font-semibold rounded-md w-full text-center">
                                            Sign Up
                                        </Link>
                                    </div>
                                </li>

                            )}


                            {isLoggedIn && (
                                <li className='absolute bottom-4 w-64'>
                                    <div className="w-full flex items-center justify-center gap-4">
                                        <Link to="/user/profile" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 font-semibold rounded-md w-full text-center">
                                            Profile
                                        </Link>
                                        <Link onClick={handleLogout} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-1 font-semibold rounded-md w-full text-center">
                                            Logout
                                        </Link>
                                    </div>
                                </li>

                            )}





                        </ul>
                    </div>
                </div>
                {children}


                <Footer />
            </div>

        </>
    )
}

export default HomeLayout;



  