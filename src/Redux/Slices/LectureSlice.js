import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState={
    lectures:[]
}

export const getCourseLectures=createAsyncThunk("/course/lecture/get",async (cid)=>{
    try {
        const response=axiosInstance.get(`/courses/${cid}`);
        toast.promise(response,{
            loading:"Fetching course details",
            success:"Lecture Fetched successfully",
            error:"Failed to load their lectures"
 
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

export const addCourseLecture=createAsyncThunk("/course/lecture/add",async (data)=>{
    try {
        const formdata = new FormData();
        formdata.append("lecture",data.lecture);
        formdata.append("tittle",data.title);
        formdata.append("description",data.description);
        const response=axiosInstance.post(`/courses/${data.id}`,formdata);
        toast.promise(response,{
            loading:"adding course lecture",
            success:"Lecture added successfully",
            error:"Failed to add the lectures"

        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});
export const deleteCourseLecture=createAsyncThunk("/course/lecture/delete",async (data)=>{
    try {
      
        const response=axiosInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}`);
        toast.promise(response,{
            loading:"deleting course lecture",
            success:"Lecture deleted successfully",
            error:"Failed to delete the lectures"

        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

const lectureSlice=createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCourseLectures.fulfilled,(state,action)=>{
            state.lectures=action?.payload?.lectures;
        })
        .addCase(addCourseLecture.fulfilled,(state,action)=>{
            state.lectures=action?.payload?.course?.lectures;
        })
        

    }
})
 
export default lectureSlice.reducer;