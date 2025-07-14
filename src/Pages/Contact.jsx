import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import axiosInstance from "../Helpers/axiosInstance";
import toast from "react-hot-toast";
import { isEmail} from "../Helpers/regexMatcher";

function Contact() {

    const[userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleInputChange(e) {
        const { name, value} = e.target;
        setUserInput({
            ...userInput,
             [name]: value,

        })
    }   

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.name || !userInput.email || !userInput.message) {
            toast.error("All fields are required");
            return;
        }
        if (!isEmail(userInput.email)) {
            toast.error("Invalid email id");
            return;
        }


        try {
            const response=axiosInstance.post("/contact",userInput);
            toast.promise(response,{
                loading:"submitting your message",
                success:"submitted successfully",
                error:"failed to submit the form"
            })
            const contactResponse=await response;
            if(contactResponse?.data?.success){
                setUserInput({
                    name:"",
                    email:"",
                    message:"",
                })
            }
        } catch (error) {
            toast.error("operation failed") 
        }

    }

    return (
        <>
            <HomeLayout>
                <div className="flex  items-center justify-center h-[100vh]">
                    <form onSubmit={onFormSubmit} noValidate className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem] ">
                        <h1 className="text-3xl fonst-semibold ">
                            contact form
                        </h1>
                        <div className="flex flex-col w-full gap-1">
                            <label htmlFor="name" className="text-lg font-semibold">Name</label>
                            <input type="text" id="name" className="bg-transparent border px-2 py-1 rounded-sm " name="name" placeholder="Enter your name" onChange={handleInputChange} value={userInput.name}/>

                        </div>

                        <div className="flex flex-col w-full gap-1">
                            <label htmlFor="email" className="text-lg font-semibold">E-mail</label>
                            <input type="email" id="email" className="bg-transparent border px-2 py-1 rounded-sm " name="email" placeholder="Enter your email.." onChange={handleInputChange}  value={userInput.email} />

                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <label htmlFor="message" className="text-lg font-semibold">Message</label>
                            <textarea id="message" className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40" name="message" placeholder="Enter your name" onChange={handleInputChange}  value={userInput.message} />

                        </div>
                        <button className="w-full bg-yellow-600 hover:bg-yellow-400 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer" type="submit">Submit</button>



                    </form>
                </div>
            </HomeLayout>
        </>
    )
}

export default Contact;