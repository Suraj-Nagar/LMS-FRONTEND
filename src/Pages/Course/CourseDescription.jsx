import { Navigate, useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useSelector } from "react-redux";

function CourseDescription() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { role, data } = useSelector((state) => state.auth);

    if (!state) {
        // Redirect to course list if no state (direct URL entry)
        navigate("/courses");
        return null;
    }

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 flex flex-col items-center justify-center text-white ">
                <div className="grid grid-col gap-10 py-10 relative">
                    <div className="space-y-5 ">
                        <img
                            src={state?.thumbnail?.secure_url}
                            alt="thumbnail"
                            className="w-full h-64"
                        />
                        <div className="space-y-3">
                            <div className="flex flex-col items-center justify-center text-xl">

                                <p className="font-semibold">

                                    <span className="text-yellow-500 font-semibold">
                                        total lectures :{" "}
                                    </span>
                                    {state?.numbersOfLectures}
                                </p>

                                <p className="font-semibold">

                                    <span className="text-yellow-500 font-semibold">
                                        Instructor :{" "}
                                    </span>
                                    {state?.createdBy}
                                </p>

                            </div>
                            {role === "ADMIN" || data?.subscription?.status === "active" ? (
                                <button onClick={()=> navigate("/course/displaylectures",{state:{...state}})} className="bg-yellow-600 text-xl rounded-md px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out">
                                    watch lectures
                                </button>
                            ) : (
                                <button onClick={() => navigate("/checkout")} className="bg-yellow-600 text-xl rounded-md px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out">
                                    Subscribe
                                </button>
                            )
                            }

                        </div>
                        <div className="space-y-2 text-xl ">
                            <h1 className="text-3xl font-bold text-yellow-400 text-center mb-5">
                                {state?.title}
                            </h1>
                            <p className="text-yellow-500">
                                course description
                            </p>

                            <p className="">{state?.description}</p>
                        </div>

                    </div>


                </div>

            </div>
        </HomeLayout>
    )
}

export default CourseDescription;   