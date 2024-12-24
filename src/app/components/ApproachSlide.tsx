
'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface ApproachProps {
    number: number;
    title: string;
    description: string;
}

const ApproachEle: React.FC<ApproachProps> = ({ number, title, description }) => {
    return (
        <div className="flex flex-col items-center rounded-2xl border-t-4 shadow-lg border-mGreen bg-mSkin p-4 max-w-80 h-80">
            <div className="flex border border-mGreen justify-center items-center text-white w-24 h-24 rounded-full bg-mLightGreen mb-4">
                <span className="text-5xl font-bold">{number}</span>
            </div>
            <div className="text-center text-2xl text-mGreen font-bold mb-2">
                {title}
            </div>
            <div className="text-center">
                <p className="text-lg">{description}</p>
            </div>
        </div>
    );
};



const approachDatas = [
    {
        number: 1,
        title: "Make Appointment",
        description: "You must make an appointment in advance, to choose the service and date."
    },
    {
        number: 2,
        title: "Consultations",
        description: "The next stage involves a thorough consultation with an Ayurveda practitioner."
    },
    {
        number: 3,
        title: "Treatment Planning",
        description: "The Ayurvedic practitioner creates a personalized treatment plan for you."
    },
    {
        number: 4,
        title: "Maintenance",
        description: "These visits allow for assessment of progress, adjustments to the treatment."
    }
];



function ApproachSlide() {
    return (
        <div className='w-full md:h-full flex justify-center items-center '>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                navigation={false}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }} 
                loop={true}
                className="h-full w-fit px-5"
                style={{
                    '--swiper-pagination-color': '#3A643B',
                    '--swiper-pagination-bottom': '-1px',
                } as React.CSSProperties
            }
            >
                {approachDatas.map((approach, index) => (
                    <SwiperSlide key={index}
                    className="md:!flex justify-center items-center py-5 px-5 md:!w-fit"
                    >
                        <ApproachEle
                            number={approach.number}
                            title={approach.title}
                            description={approach.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ApproachSlide