import Image from 'next/image'
function Consultation() {
    return (
        <div className='w-full relative flex flex-col items-center justify-center h-full'>
            <div className='absolute z-10 w-full h-full backdrop-blur-none bg-black/45'></div>
            <p className='absolute z-10 p-5 top-1/4 text-center text-shadow-mblack md:text-7xl sm:text-5xl text-3xl text-mSkin w-3/4 '> <b>Ready to restore harmony in your mind, body and spirit?</b></p>
            <Image
                className='h-auto w-full z-0 md:hidden'
                src="./Images/medicinebg.svg"
                alt="medicine Background"
                height={0}
                width={0}
            />
            <Image
                className='h-auto w-full z-0 hidden md:flex'
                src="./Images/medicinebgPc.svg"
                alt="medicine Background"
                height={0}
                width={0}
            />
            <button className='absolute z-10 mt-4 top-2/3 bg-mGreen text-white rounded-2xl p-5'>Book a consultation</button>
        </div>
    )
}

export default Consultation