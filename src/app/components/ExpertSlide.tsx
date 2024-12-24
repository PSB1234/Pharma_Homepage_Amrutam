
'use client'
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



interface ExpertProps {
    name: string;
    title: string;
    experience: string;
    specialty: string;
    rating: number;
    image: string;
}
const experts: ExpertProps[] = [
    {
        name: "Dr. Vaishali Sharma",
        title: "Ayurveda Practitioner (BAMS, MD)",
        experience: "25 years of experience",
        specialty: "Skin Specialist",
        rating: 4.5,
        image: "path_to_image"
    },
    {
        name: "Dr. Vaishali Sharma",
        title: "Ayurveda Practitioner (BAMS, MD)",
        experience: "25 years of experience",
        specialty: "Skin Specialist",
        rating: 4.5,
        image: "path_to_image"
    },
    {
        name: "Dr. Vaishali Sharma",
        title: "Ayurveda Practitioner (BAMS, MD)",
        experience: "25 years of experience",
        specialty: "Skin Specialist",
        rating: 4.5,
        image: "path_to_image"
    },
    {
        name: "Dr. Vaishali Sharma",
        title: "Ayurveda Practitioner (BAMS, MD)",
        experience: "25 years of experience",
        specialty: "Skin Specialist",
        rating: 4.5,
        image: "path_to_image"
    },

];
const AyurvedExpert: React.FC<ExpertProps> = ({ name, title, experience, specialty, rating, image }) => {
    return (
        <div className="bg-mSkin rounded-[2rem] shadow-md flex flex-col my-5 items-center pt-5 justify-between text-center w-64 h-96 relative">
            <div className="relative">
                {/* Profile Picture */}
                <Image
                    src="./Images/pfp.svg"
                    alt={name}
                    className="rounded-full"
                    height={120}
                    width={120}
                />
                {/* Rating on PFP */}
                <div className="absolute bottom-0 right-7 rounded-full bg-black text-white text-sm flex items-center gap-1 px-2 py-1">
                    <Image
                        src={`./Images/Vector.svg`}
                        alt={`Image`}
                        width={0}
                        height={0}
                        className="h-6 w-6"
                    />
                    <span>{rating}</span>
                </div>
            </div>

            {/* Expert Info */}
            <div className="flex flex-col gap-2 justify-center items-center mt-4">
                <h3 className="font-bold">{name}</h3>
                <p className="text-gray-400 text-sm">{title}</p>
                <p className="flex items-center gap-2">
                    <Image
                        src="./Images/cap.svg"
                        width={20}
                        height={20}
                        alt="Graduation cap"
                        className="text-mGreen font-thin"
                    />
                    {experience}
                </p>
                <div className="bg-[#E7E5CE] text-sm text-mGreen rounded-full w-fit px-2 py-1 flex flex-row gap-2 justify-center">
                    <Image
                        src="./Images/link.svg"
                        width={15}
                        height={15}
                        alt="Link"
                        className="text-mGreen font-thin"
                    />
                    <p>{specialty}</p>
                </div>
            </div>

            {/* Button */}
            <button className="bg-mGreen py-2 pt-3 text-white font-bold rounded-b-[2rem] w-full mt-4">Book a session</button>
        </div>

    );
};

function ExpertSlide() {
    const swiper = useSwiper();
    return (
        <div className='flex justify-center items-center h-full w-full md:px-40'>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",

                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        navigation: false
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        navigation: true,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        navigation: true,
                    }
                }}
                loop={true}
                style={{
                    '--swiper-pagination-color': '#3A643B',
                    '--swiper-pagination-bottom': '-1px',

                } as React.CSSProperties}
                wrapperClass=' h-full w-full'
                className=''

            >
                {experts.map((expert, index) => (
                    <SwiperSlide key={index}
                        className='!flex justify-center items-center'
                    >
                        <AyurvedExpert
                            name={expert.name}
                            title={expert.title}
                            experience={expert.experience}
                            specialty={expert.specialty}
                            rating={expert.rating}
                            image={expert.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default ExpertSlide