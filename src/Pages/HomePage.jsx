import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import homeImage from "../assets/Images/HomeImage.jpg";


function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        Find out best
                        <span className="text-yellow-500 font-bold">
                            online courses
                        </span>
                    </h1>
                    <p className="text-xl text-gray-500">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost
                    </p>
                    <div className="space-x-6">
                        <Link to='/course'>
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg hover:bg-yellow-600 transition-all ease-in-out duration-75">
                                Explore courses
                            </button>
                        </Link>

                        <Link to='/contact '>
                            <button className="border border-amber-300  px-5 py-3 rounded-md font-semibold text-lg hover:bg-yellow-600 transition-all ease-in-out duration-75">
                                Contact Us
                            </button>
                        </Link>


                    </div>

                </div>

                <div className="w-1/2 flex items-center justify-center ">
                        <img src={homeImage} alt="homepage img" />
                </div>
            </div> 
        </HomeLayout>
    )
}

export default HomePage; 