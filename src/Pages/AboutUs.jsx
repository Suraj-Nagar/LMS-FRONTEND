import HomeLayout from "../Layouts/HomeLayout";
import mainimage from "../assets/Images/image.png";
function AboutUs() {
    return (
        <>
            <HomeLayout>
                <div className="pl-25 pt-20 flex flex-col text-white">
                    <div className="flex items-center gap-5 mx-10">
                        <section className="w-1/2 space-y-10">
                            <h1 className="text-5xl text-amber-400 font-semibold">
                                Affordable and quality education
                            </h1>

                            <p className="text-xl text-gray-200">
                                Our goal is to provide the affordable and quality education to the world. <br />
                                We are providing the platform for the aspiring teachers and students to <br /> share their skills and creativity and knowledge to each other ot empower and contribute in the growth and wellness of mankind.

                            </p>
                        </section>

                        <div className="w-1/2">
                            <img
                                id="test1"
                                style={{
                                    filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                                }}
                                alt="about mainimage"
                                className="drop-shadow-2xl h-full w-1/2"
                                src={mainimage}
                            />
                        </div>
                    </div>

                    <div className="carousel w-1/2  m-auto my-16">

                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                    className="w-40 h-40 rounded-full border-2 border-gray-400" />
                                    <h3 className="text-2xl font-semibold text-center">Nelson Mandela</h3>
                                    <p className="text-xl text-gray-200 text-center">{"Education is the most powerfull tool. You can use to change the world."}</p>
                                <div className="absolute w-[50%]   top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide4" className="btn btn-circle">❮</a> 
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>

                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                    className="w-40 h-40 rounded-full border-2 border-gray-400" />
                                      <h3 className="text-2xl font-semibold text-center">Nelson Mandela2</h3>
                                    <p className="text-xl text-gray-200 text-center">{"Education is the most powerfull tool. You can use to change the world."}</p>
                                <div className="absolute w-[50%] top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                    className="w-40 h-40  rounded-full border-2 border-gray-400" />
                                      <h3 className="text-2xl font-semibold text-center">Nelson Mandela3</h3>
                                    <p className="text-xl text-gray-200 text-center">{"Education is the most powerfull tool. You can use to change the world."}</p>
                                <div className="absolute  w-[50%]  top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                    className="w-40 h-40  rounded-full border-2 border-gray-400" />
                                      <h3 className="text-2xl font-semibold text-center">Nelson Mandela4</h3>
                                    <p className="text-xl text-gray-200 text-center">{"Education is the most powerfull tool. You can use to change the world."}</p>
                                <div className="absolute  w-[50%]  top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </HomeLayout >
        </>
    );
};

export default AboutUs;