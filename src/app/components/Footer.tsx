import Image from 'next/image'

function Footer() {
    return (
        <div className="bg-[#DBE3DC] flex flex-col items-center text-mGreen h-full w-full md:py-60 p-10 md:p-0 gap-10">
            <div className='flex flex-col w-full gap-5 sm:hidden'>
                <b>Get in touch</b>
                <p className="self-start">support@amrutam.co.in
                    <br /><br />
                    Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001
                    <br /><br />
                    +91 9713171999
                </p>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className='flex justify-center items-center bg-mGreen rounded-full w-12 h-12'><Image src="/images/facebook.svg" alt="facebook" height={0} width={0} className="w-6 h-6" /></div>
                    <div className='flex justify-center items-center bg-mGreen rounded-full w-12 h-12'><Image src="/images/instagram.svg" alt="instagram" height={0} width={0} className="w-6 h-6" />  </div>
                    <div className='flex justify-center items-center bg-mGreen rounded-full w-12 h-12'><Image src="/images/youtube.svg" alt="youtube" height={0} width={0} className="w-6 h-6" /> </div>
                    <div className='flex justify-center items-center bg-mGreen rounded-full w-12 h-12'> <Image src="/images/twitter.svg" alt="twitter" height={0} width={0} className="w-6 h-6" /></div>
                    <div className='flex justify-center items-center bg-mGreen rounded-full w-12 h-12'><Image src="/images/linkedin.svg" alt="linkedin" height={0} width={0} className="w-6 h-6" /></div>
                    <div className='flex justify-center items-center bg-mGreen rounded-full w-12 h-12'><Image src="/images/pinterest.svg" alt="pinterest" height={0} width={0} className="w-8 h-8" /></div>
                </div>
            </div>
            <div className="flex flex-col w-full md:max-w-72">
                <b className="self-start">Information</b>
                <p className="self-start">About Us</p>
                <p className="self-start">Terms and Conditions </p>
                <p className="self-start">Privacy Policy </p>
                <p className="self-start">Privacy Policy for Mobile Apps </p>
                <p className="self-start">Shipping and Returns Policy </p>
                <p className="self-start">International Delivery </p>
                <p className="self-start">For Businesses, Hotels, and Resorts</p>
            </div>
            <div className='md:hidden block'>
                <form className='flex flex-col gap-5' action="/">
                    <label htmlFor="Subscribe"><b>Subscribe to our Newsletter and join Amrutam Family today!</b></label>
                    <div className='flex flex-row w-full relative'>
                        <input type="email" placeholder="Your Email Address" className='rounded-full w-full bg-transparent border px-5 py-5 placeholder:text-black border-mGreen' />
                        <button className='text-white font-bold bg-black rounded-r-full w-2/5 absolute h-full right-0'>Subscribe</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Footer