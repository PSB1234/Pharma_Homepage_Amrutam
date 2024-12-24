import ApproachSlide from "./ApproachSlide";


function Approach() {
    return (
        <div className=" flex flex-col justify-center my-20 gap-24 items-center p-10 h-full md:h-screen ">
            <div className="text-center flex justify-center flex-col gap-10">
                <h1 className="text-mGreen md:text-5xl text-3xl md:underline decoration-8 decoration-mLightGreen"><b>Our Ayurvedic Approach</b></h1>
                <p className=" mx-auto  md:w-1/2 w-full text-center text-gray-600">At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners
                    begin each treatment process by conducting a thorough analysis of the patient’s body type,
                    medical history, and current health conditions.
                </p>
            </div>
            <ApproachSlide />
        </div>
    )
}

export default Approach;
