import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { getRazorpayId, purchaseCourseBundle, verifyUserPayment } from "../../Redux/Slices/RazorpaySlice";
import { BiRupee } from "react-icons/bi";

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);
    const userData = useSelector((state) => state?.auth?.data);
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: ""

    }

    async function handleSubscription(e) {
        e.preventDefault();
        if (!razorpayKey || !subscription_id) {
            toast.error("kuch to gadbad hai");
            return;
        }
        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: "coursify Pvt. ltd.",
            description: "subscription",
            theme: {
                color: "#F37254"
            },
            prefill: {
                email: userData.email,
                name: userData.name
            },
            handler: async function (response) {
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                paymentDetails.razorpay_signature = response.razorpay_signature;
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;

                toast.success("Payment Successfull");

                const res = await dispatch(verifyUserPayment(paymentDetails));
                res?.payload?.success ? navigate("/checkout/success") : navigate("/checkout/fail");
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

    }

    async function load() {
        await dispatch(getRazorpayId());
        await dispatch(purchaseCourseBundle());

    }
    useEffect(() => {
        load()
    }, []);
    useEffect(() => {
        console.log("🧾 subscription_id:", subscription_id);
        if (!subscription_id) {
            toast.error("No subscription ID received");
        }
    }, [subscription_id]);

    return (
        <HomeLayout>
            <form onSubmit={handleSubscription}
                className="min-h-[90vh] flex items-center justify-center text-white"
            >
                <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative">

                    <h1 className="bg-yellow-500 absolute top-0 w-full text-center p-4 text-2xl font-bold rounded-tl-lg"></h1>
                    <div className="px-6 space-y-5 text-center">
                        <p className="text-[17px]">
                            This purchase will allow you to access all available course of our platform for {' '}
                            <span className="text-yellow-500 font-bold">
                                <br />
                                rom rom ji
                            </span> {' '}
                            All the existing and new launched courses will be a also available
                        </p>
                        <p className="flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
                            <BiRupee /> <span>499</span> only
                        </p>
                        <div className="text-gray-200">
                            <p>100% refund on cancellation</p>
                            <p>* Terms and conditions applied*</p>
                        </div>
                        <button type="submit" className="bg-yellow-500 hover:bg-yellow-100 transition-all ease-in-out durations-300 absolute bottom-0 w-full left-0 font-bold text-xl rounded-bl-lg rounded-br-lg py-2">Buy now</button>
                    </div>
                </div>
            </form>
        </HomeLayout>
    )
}
export default Checkout;