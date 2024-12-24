'use client'
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ReviewProps {
    titleClr: string;
    title: string;
    name: string;
    location: string;
    date: string;
    reviewTitle: string;
    review: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ titleClr, title, name, location, date, reviewTitle, review }) => {
    return (
        <div className='border text-start rounded-2xl shadow-lg flex flex-col w-fit h-full bg-white mx-4'>
            <div className={`${titleClr} py-4 px-6 text-black rounded-t-2xl`}>
                <b>{title}</b>
            </div>
            <div className="flex py-2 px-2 flex-row max-w-full">
            <div className="items-center flex pl-4 justify-center"><div className="rounded-full bg-[#515151] w-14 h-14"></div></div>
                <div className="py-3 px-6 flex flex-col w-full">
                    <div className="flex justify-between w-full flex-row">
                        <div className="font-bold text-gray-500">{name}</div>
                        <div>{date}</div>
                    </div>
                    <div>{location}</div>
                </div>
            </div>
            <div className="px-6 py-2 flex flex-row gap-1">
                {[...Array(5)].map((_, index) => (
                    <Image
                     key={index}
                      src={`./Images/Vector.svg`} 
                      alt={`Image`}
                      width={0}
                      height={0}
                      className="h-6 w-6"
                    />
                ))}
            </div>
            <div className="text-black pt-2 px-6">
                <b>"{reviewTitle}"</b>
            </div>
            <div className="pb-4 pt-2 px-6 mb-6 text-gray-600">{review}</div>
        </div>
    );
};

const reviews = [
    {
        titleClr: "bg-[#ECE7FF]",
        title: "Consulted for Skin",
        name: "John Doe",
        location: "Chennai",
        date: "17/02/24",
        reviewTitle: "One of a kind service",
        review: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis."
    },
    {
        titleClr: "bg-[#ECFEE7]",
        title: "Consulted for Hair",
        name: "Jane Smith",
        location: "Mumbai",
        date: "18/02/24",
        reviewTitle: "Excellent results",
        review: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit."
    },
    {
        titleClr: "bg-[#ECFEE7]",
        title: "Consulted for Hair",
        name: "Sophia Brown",
        location: "Bangalore",
        date: "20/02/24",
        reviewTitle: "Highly recommend",
        review: "Donec ultricies, arcu eget laoreet posuere, ligula lorem accumsan dolor, vitae porta purus arcu at dui."
    },
];

function ReviewSlide() {
    return (
        <div className='flex justify-center items-center h-full w-full sm:px-32'>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={false}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        }
                }}
                loop={true}
                style={{
                    '--swiper-pagination-color': '#3A643B',
                    '--swiper-pagination-bottom': '-1px',
                
                } as React.CSSProperties}
                className='h-full w-fit'
            >
                {
                    reviews.map((review, index) => (
                        <SwiperSlide key={index}
                         className='h-full py-10 !flex justify-center items-center'
                        >
                            <ReviewCard
                                titleClr={review.titleClr}
                                title={review.title}
                                name={review.name}
                                location={review.location}
                                date={review.date}
                                reviewTitle={review.reviewTitle}
                                review={review.review}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    );
}

export default ReviewSlide;
