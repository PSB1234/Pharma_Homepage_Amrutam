import { JSX } from "react";

interface YellowBlockProps {
    src: string;
    alt: string;
    text: string | JSX.Element;
}
function YellowBar() {
    return (
        <div className="bg-mSkin  h-auto w-full flex sm:flex-row flex-wrap sm:flex-nowrap justify-center  md:px-20 text-mGreen">
            <FeatureBlock
                src="./Images/chat.svg"
                alt="convenient online & In-clinic consultations"
                text="Convenient online & in-clinic consultations"
            />

            <FeatureBlock
                src="./Images/shield.svg"
                alt="Safe And Effective Treatment"
                text="Safe And Effective Treatment"
            />
            <FeatureBlock
                src="./Images/doctor.svg"
                alt="Experienced Ayurvedic Practitioners"
                text="Experienced Ayurvedic Practitioners"
            />
            <FeatureBlock
                src="./Images/bill.svg"
                alt="Personalized Treatment Plans & Guidance"
                text="Personalized Treatment Plans & Guidance"
            />
        </div>
    );
}

const FeatureBlock: React.FC<YellowBlockProps> = ({ src, alt, text }) => {
    return (
        <div className="flex h-32 md:px-6 md:py-10 m-1 py-9 px-4 w-full ">
            <img className="self-center" src={src} alt={alt} />
            <p className="self-center">
                <b>{text}</b>
            </p>
        </div>
    );
};


export default YellowBar;
