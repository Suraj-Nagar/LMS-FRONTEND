import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "../../Redux/Slices/AuthSlice";
import {cancelCourseBundle} from "../../Redux/Slices/RazorpaySlice";
import toast from "react-hot-toast";



function Profile() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const userData = useSelector((state) => state?.auth?.data);
    async function handleCancellation(){
        toast("Initiating cancellation")
        await dispatch(cancelCourseBundle());
        await dispatch(getUserData());
        toast.success("Cancellation completed!");
        navigate("/")
    }



    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center">
                <div className="my-10 flex flex-col  gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <img
                        src={userData?.avatar?.secure_url}
                        alt="user photo"
                        className="w-40 m-auto rounded-full border border-black"
                    />
                    <h3 className="text-xl font-semibold text-center capitalize">{userData?.fullName}</h3>

                    <div className="grid grid-cols-2 gap-2">
                        <p>Email:</p> <p>{userData?.email}</p>
                        <p>Role:</p> <p>{userData?.role}</p>
                        <p>Subscription:</p>
                        <p>{userData?.subscription?.status === "active" ? "Active" : "Inactive"}</p>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <Link
                            to="/changepassword"
                            className=" w-1/2 bg-yellow-500 hover:bg-yellow-400 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 text-center cursor-pointer">

                            Change password

                        </Link>
                        <Link
                            to="/user/editprofile"
                            className=" w-1/2 bg-yellow-500 hover:bg-yellow-400 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 text-center cursor-pointer">

                            Edit Profile

                        </Link>
                    </div>
                    <div>
                        {userData?.subscription?.status === "active" && (
                            <button onClick={handleCancellation} className="w-full bg-red-900 hover:bg-red-400 transition-all ease-in-out duration-300 rounded-sm font-semibold p-2 cursor-pointer ">
                                Cancel Subscription
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </HomeLayout>
    )

}

export default Profile;


