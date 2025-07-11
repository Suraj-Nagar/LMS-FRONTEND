import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { login } from "../Redux/Slices/AuthSlice";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    function handleuserInput(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }



    async function onLogin(event) {
        event.preventDefault();
        if (!loginData.email || !loginData.password) {
            toast.error("Please fill all the details");
            return;
        }


        if (!loginData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            toast.error("Invalid email id");
            return;
        }

        if (loginData.password.length < 5 || !loginData.password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
            toast.error("password should be at least 8 character and mixture of uppercase and lowercase letters and numbers and special character")
        }

        const formData = new FormData();
        formData.append("email", loginData.email);
        formData.append("password", loginData.password);

        //dispatch login action
        // const response = await dispatch(login(formData));
        const response = await dispatch(login({
            email: loginData.email,
            password: loginData.password
        }));
        console.log(response);
        if (response?.payload?.success)
            navigate("/");
            setLoginData({
            email: "",
            password: ""

        })

    }


    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh] ">
                <form onSubmit={onLogin} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-center text-2xl font-bold">Login page</h1>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input type="email" className="bg-transparent px-2 py-1 border" required name="email" id="email" placeholder="Enter your email..." onChange={handleuserInput} value={loginData.email} />

                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input type="password" className="bg-transparent px-2 py-1 border" required name="password" id="password" placeholder="Enter your password..." onChange={handleuserInput} value={loginData.password} />
                    </div>
                    <button type="submit" className="mt-2  hover:bg-yellow-500 transition-all ease-in-out duration-300 bg-yellow-600 rounded-sm py-2 font-semibold text-lg cursor-pointer">
                        Login
                    </button>

                    <p className="text-center">
                        Do not have an account!<Link to="/signup" className="link text-accent cursor-pointer" >Signup</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    )
}
export default Login;
