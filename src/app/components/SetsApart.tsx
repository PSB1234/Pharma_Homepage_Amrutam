import React from 'react'
import Image from 'next/image'
interface setsApartCardProp {
    title: string;
    description: string
}

const SetsApartCard: React.FC<setsApartCardProp> = ({ title, description }) => {
    return (
        <div className='m-1 mb-3'>
            <div className="bg-white text-mGreen p-10 text-start h-full rounded-[1.3rem] border-t-8 border-mGreen shadow">
                <h2 className='text-2xl capitalize py-4'><b>{title}</b></h2>
                <p className='text-lg'>{description}</p>
            </div>
        </div>

    )
}

function SetsApart() {
    return (
        <>
            <div className='bg-mSkin sm:p-24 p-10 flex flex-col gap-12 h-full'>
                <div className='block text-center text-5xl text-mGreen underline decoration-mLightGreen decoration-4'>
                    <h2><b>What sets Ayurvedic consultations apart?</b></h2>
                </div>
                <div className="sm:p-4">
                    <div className="sm:grid sm:grid-rows-2 gap-4 flex flex-col  ">
                        {/* First Row: 3 Blocks */}
                        <div className="flex flex-col sm:flex-row gap-4 h-fit">
                            <div className='m-1 w-full sm:mb-3'>
                                <div className="flex flex-col p-10 bg-white text-mGreen text-center justify-center rounded-[1.3rem] border-t-8 border-mGreen shadow h-full">
                                    <h2 className='text-2xl py-4 capitalize'><b>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।</b></h2>
                                    <p className='text-lg'>[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]</p>
                                </div>
                            </div>

                            <Image
                                className="rounded h-full object-cover"
                                src="./Images/womenHelping.svg"
                                alt="womenHelping"
                                height={100}
                                width={100}
                                style={{ height: 'auto', width: '100%' }}
                            />
                            <div className='flex '>
                                <SetsApartCard
                                    title='precise diagnosis'
                                    description="Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment."
                                />
                            </div>
                        </div>

                        {/* Second Row: 4 Blocks */}
                        <div className="sm:grid sm:grid-cols-4 h-fit flex flex-col gap-4">
                            <SetsApartCard
                                title='Zero side-effects'
                                description='Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs'
                            />
                            <div className='flex rounded justify-center m-auto h-full'>
                                <Image
                                    src="./Images/ayurvedaProduct.svg"
                                    alt="ayurvedaProduct"
                                    height={0}
                                    width={0}
                                    style={{ height: '100%', width: '100%' }}
                                    className='max-h-full max-w-full'
                                />
                            </div>



                            <SetsApartCard
                                title='Individual Treatment'
                                description="All Treatments are personalized based on a person's unique constitution and health concerns."
                            />
                            <Image
                                className="rounded h-full object-cover"
                                src="./Images/womenadmiring.svg"
                                alt="admiringproduct"
                                height={0}
                                width={0}
                                style={{ height: 'auto', width: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SetsApart