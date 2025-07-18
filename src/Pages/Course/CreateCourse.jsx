import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { createNewCourse } from "../../Redux/Slices/CourseSlice"
import { useState } from "react";

function CreateCourse() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: "",

    });
    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadedImage
                })
            })
        }
    }

    function handleuserInput(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy) {
            toast.error("All fields are required");
            return;
        }

        const response = await dispatch(createNewCourse(userInput));

        if (response?.payload?.success) {

            setUserInput({
                title: "",
                category: "",
                createdBy: "",
                description: "",
                thumbnail: null,
                previewImage: "",
            });

            navigate("/courses");
        }

    }


    return (

        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative">

                    <Link className="absolute top-8 text-2xl link text-accent cursor-pointer">
                        <AiOutlineArrowLeft />
                    </Link>

                    <h1 className="text-center text-2xl font-bold">
                        Create new course
                    </h1>

                    <main className="grid grid-cols-2 gap-x-10 ">
                        <div className="flex flex-col gap-y-6 ">
                            <div>
                                <label htmlFor="image_uploads" className="cursor-pointer ">
                                    {userInput.previewImage ? (
                                        <img
                                            src={userInput.previewImage}
                                            alt="Course Thumbnail Preview"
                                            className="w-full h-44 m-auto object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-44 m-auto flex items-center justify-center border  ">
                                            <h1 className="font-bold text-gray-500">Upload your course thumbnail</h1>
                                        </div>
                                    )}
                                </label>

                                <input
                                    type="file"
                                    className="hidden"
                                    id="image_uploads"
                                    accept="image/jpeg, image/jpg, image/png"
                                    name="image_uploads"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="flex flex=col gap-1">
                                <label htmlFor="title" className="text-lg font-semibold">
                                    Course title
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter Course title"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.title}
                                    onChange={handleuserInput}
                                />


                            </div>

                        </div>
                        <div className="flex flex-col gap-1 ">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="createdBy" className="text-lg font-semibold">
                                    createdBy
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="Enter Course Instructor"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.createdBy}
                                    onChange={handleuserInput}
                                />


                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="category" className="text-lg font-semibold">
                                    Course Category
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter Course category"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.category}
                                    onChange={handleuserInput}
                                />


                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="description" className="text-lg font-semibold">
                                    Course description
                                </label>
                                <textarea
                                    required
                                    name="description"
                                    id="description"
                                    placeholder="Enter Course Instructor"
                                    className="bg-transparent px-2 py-1 h-24 overflow-y-scroll resize-none border"
                                    value={userInput.description}
                                    onChange={handleuserInput}
                                />


                            </div>

                        </div>
                    </main>
                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-400 transition-all  ease-in-out duration-300 py-2 rounded-sm font-semibold text-lg cursor-pointer">Create Course</button>

                </form>
            </div>

        </HomeLayout>
    );
}
export default CreateCourse;