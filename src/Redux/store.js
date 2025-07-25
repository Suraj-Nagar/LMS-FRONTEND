import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice';
import courseSliceReducer from './Slices/CourseSlice';
import razorpaySliceReducer from "./Slices/RazorPaySlice";
import lectureSliceReducer from "./Slices/LectureSlice";

const store= configureStore({
    reducer:{
        auth:authSliceReducer,
        course:courseSliceReducer,
        razorpay:razorpaySliceReducer,
        lecture:lectureSliceReducer
    }, 
    devTools:true,
       
});

export default store;