import CarouselSlide from "../Components/CarouselSlide";
import HomeLayout from "../Layouts/HomeLayout";
import mainimage from "../assets/Images/AboutImage.jpg";
import {celebrities} from "../Constants/CelebrityData";
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
                                className="drop-shadow-2xl h-full w-full"
                                src={mainimage}
                            />
                        </div>
                    </div>

                    <div className="carousel w-1/2  m-auto my-16">
                        {celebrities && celebrities.map(celebrity => (<CarouselSlide 
                                                                        {...celebrity} 
                                                                        key={celebrity.slideNumber} 
                                                                        totalSlides={celebrities.length}
                        />))}
                    </div>
                </div>


            </HomeLayout >
        </>
    );
};

export default AboutUs;