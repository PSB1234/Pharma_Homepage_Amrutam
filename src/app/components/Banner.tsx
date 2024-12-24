
import Image from 'next/image';


const Banner = () => {
    return (
        <div className="w-full h-fit flex flex-col relative">
            <div className='relative grid-cols-2 h-full hidden sm:grid'>
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 backdrop-blur-3xl bg-black/75 z-10"></div>
                    <div className="absolute inset-0 bg-mRed z-0"></div>
                </div>
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 from-black/75 to-transparent bg-gradient-to-r z-10" />
                    <Image
                        src={'/Images/manSleeping.svg'}
                        alt="Man Doing Yoga"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: 'auto' }}
                        className="relative z-0"
                    />
                </div>
            </div>
            <div className='sm:hidden w-full h-full'>
                <div className="absolute inset-0 from-[rgba(24,24,24,0.87)] to-[rgba(34,34,34,0.48)]  bg-gradient-to-b z-10" />
                <Image
                    src={'/Images/manShowingBack.svg'}
                    alt="Man Doing Yoga"
                    width={0}
                    height={0}
                    style={{ width: '100%', height: '100%' }}
                    className="relative z-0"
                />
            </div>
            {/* text on banner */}

            <div className='flex flex-col sm:gap-8  md:px-20 px-10 absolute z-10 py-11 text-white w-full h-full items-start sm:justify-center justify-between'>
                <h4 className='md:text-3xl sm:text-2xl text-xl'>Namaste, Welcome to Amrutam</h4>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-start flex md:text-5xl sm:text-3xl text-2xl'> <b>Step Into Holistic Healing With
                        <span className='text-mSkin hover:underline md:no-underline underline'> Ayurveda </span>
                    </b>
                    </h1>
                    <h1 className='text-start flex  md:text-5xl text-3xl '>
                        <b>
                            Book Consultation With Certified Experts.
                        </b>
                    </h1>
                </div>

                <p className='sm:text-xl text-lg'>Dive into the world of ayurveda and Experience Personalized Health Solutions
                    and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
                <button className='bg-mGreen text-[#FFF7E2] rounded-2xl px-7 py-5'>BOOK AN APPOINTMENT</button>
            </div>
        </div>
    );
};
export default Banner;