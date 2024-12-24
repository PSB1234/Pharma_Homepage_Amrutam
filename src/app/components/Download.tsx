import Image from "next/image";
function Download() {
    return (
        <div className='bg-mSkin w-full md:h-screen h-full flex flex-row md:text-start text-center justify-between items-center md:px-36 px-10 py-10 md:py-0'>
            <div className='flex flex-col md:w-1/2 md:gap-32 gap-10'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-4xl  text-mGreen font-bold'>Amrutam Home App</h1>
                    <p className='text-gray-400'>The Amrutam Home App is your one-stop app for all things Ayurveda!
                         Apart from mimicking the significant
                        characteristics of our website, this app offers a wide range of additional features.</p>
                    <h2 className='text-2xl font-semibold md:flex hidden'>Get a diet & lifestyle consultation with ayurvedic experts across the globe</h2>
                </div>
                <div className="md:hidden flex">
                <Image
                    src="./Images/iPhone13.svg"
                    height={0}
                    width={0}
                    alt="phone"
                    className=""
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <h2 className='text-2xl font-semibold flex md:hidden'>Get a diet & lifestyle consultation with ayurvedic experts across the globe</h2>
                <div>
                    <h1 className='font-bold pb-5 md:text-4xl text-3xl'>Get the App now</h1>
                    <div className='flex md:flex-row flex-col gap-2 items-center md:w-2/3'>
                        <button>
                            <Image
                                className='w-48'
                                height={0}
                                width={0}
                                src="./Images/playstore.svg"
                                alt="playStore"
                                style={{ width: '100%', height: 'auto' }}
                            /></button>
                        <button>
                            <Image
                                className='w-48'
                                height={0}
                                width={0}
                                src="./Images/appstore.svg"
                                alt="appstore"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </button>
                    </div>

                </div>
            </div>
            <div className="hidden md:flex">
                <Image
                    src="./Images/phone.svg"
                    height={0}
                    width={0}
                    alt="phone"
                    className=""
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    )
}

export default Download;