import { useEffect, useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourseLecture, getCourseLectures } from "../../Redux/Slices/LectureSlice";
import button from "daisyui/components/button";

function Displaylectures() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { lectures } = useSelector((state) => state.lecture);
    const { role } = useSelector((state) => state.auth);
    const [currentVideo, setCurrentVideo] = useState(0);
  async function onLectureDelete(courseId,lectureId){
        await dispatch(deleteCourseLecture({courseId:courseId,lectureId:lectureId}));
        await dispatch(getCourseLectures(courseId))
    }

    useEffect(() => {
        console.log(state);
        if (!state) navigate("/courses")
        dispatch(getCourseLectures(state._id));

    }, [])
    return (
        <HomeLayout>
            <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-5">
                <div className="text-center text-2xl font-semibold text-yellow-500">
                    Course Name:{state?.title}
                </div>

               {lectures && lectures.length>0 && <div className="flex justify-center gap-10 w-full">
                    <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] ">
                        <video
                            className="object-fill rounded-tl-lg rounded-tr-lg w-full "
                            src={lectures && lectures[currentVideo]?.lecture?.secure_url}>
                            controls
                            disablePictureInPicture
                            muted
                            controlList="nodownload"

                        </video>
                        <div className="">
                            <h1>
                                <span className="text-yellow-300">
                                    Title:{' '}
                                </span>
                                {lectures && lectures[currentVideo]?.title}
                            </h1>
                            <p className="">
                                <span className="text-yellow-500 line-clamp-4">
                                    Description:{' '}
                                </span>
                                {lectures && lectures[currentVideo]?.description}
                            </p>
                        </div>
                    </div>

                    <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
                        <li className="font-semibold text-xl text-yellow-500 flex items-center justify-center">
                            <p>
                                Lectures list
                            </p>
                            {role === "ADMIN" && (
                                <button onClick={()=>navigate("/course/addlecture",{state:{...state}})} className="btn-primary px-2 py-1 rounded-md text-sm">Add new lecture</button>
                            )}
                        </li>
                        {lectures && lectures.map((lecture, idx) => {
                            return (
                                <li className="space-y-2" key={lecture._id}>
                                    <p className="cursor-pointer" onClick={() => setCurrentVideo(idx)}>
                                        <span>
                                            {" "} lecture {idx + 1} :{" "}
                                        </span>
                                        {lecture?.title}
                                    </p>
                                    {role === "ADMIN" && (
                                        <button onClick={()=>onLectureDelete(state?._id, lecture?._id)} className="btn-danger px-2 py-1 rounded-md text-sm">
                                            delete lecture
                                        </button>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
        </HomeLayout>
    );
}
export default Displaylectures;