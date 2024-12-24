import React from "react";
import Image from 'next/image';
interface FeatureProps {
    icon: string;
    title: string;
    description: string;
    bgcolor: string;
}
const Feature = ({ icon, title, description, bgcolor }: FeatureProps) => {
    return (
        <div className="flex flex-col justify-center items-center border h-full rounded-xl p-5">
            <div className="flex flex-col justify-center gap-2 items-center text-center" >
                <div className="flex justify-between items-center rounded-full p-5 " style={{ backgroundColor: bgcolor }}>
                    <Image
                        src={icon}
                        alt="Icon"
                        width={0}
                        height={0}
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
                <h1 className="font-bold">{title}</h1>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>

        </div>
    );
}
const LeftFeatureProp = ({ icon, title, description, bgcolor }: FeatureProps) => {
    return (
        <div className="flex flex-row justify-end gap-4 items-center h-full p-5">
            <div className="flex flex-col justify-center gap-2  text-end" >
                <h1 className="font-bold">{title}</h1>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
            <div className="flex justify-between items-center rounded-full p-5 " style={{ backgroundColor: bgcolor }}>
                <Image
                    src={icon}
                    alt="Icon"
                    width={0}
                    height={0}
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
        </div>
    );
}
const RightFeatureProp = ({ icon, title, description, bgcolor }: FeatureProps) => {
    return (
        <div className="flex flex-row justify-start gap-4 items-center h-full p-5">

            <div className="flex justify-between items-center rounded-full p-5 " style={{ backgroundColor: bgcolor }}>
                <Image
                    src={icon}
                    alt="Icon"
                    width={0}
                    height={0}
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
            <div className="flex flex-col justify-center gap-2  text-start" >
                <h1 className="font-bold">{title}</h1>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    );
}
const Leftfeatures = [
    {
        icon: "./Images/heartbeat.svg",
        title: "Personalized Wellness",
        description: "Get treatments made just for you based on your individual doshas (body type).",
        bgcolor: "#EDF5FA"
    },
    {
        icon: "./Images/ribbon.svg",
        title: "Focus on prevention",
        description: "Stop problems even before they start.",
        bgcolor: "#EAF2EA"
    },
    {
        icon: "./Images/lotus-position.svg",
        title: "Mind-Body Connection",
        description: "Keep your mind and body in sync for a happy life.",
        bgcolor: "#FCF1F1"
    }
];
const Rightfeatures = [
    {
        icon: "./Images/protection.svg",
        title: "Holistic Healing",
        description: "Fix the root problem for long-lasting health.",
        bgcolor: "#F5F3FC"
    },
    {
        icon: "./Images/ayurveda.svg",
        title: "Natural Remedies",
        description: "Using herbs and natural therapies for healing.",
        bgcolor: "#FEF6ED"
    },
    {
        icon: "./Images/strong.svg",
        title: "Boosting Immunity",
        description: "Stay strong and healthy for life, not just for today.",
        bgcolor: "#EAF2EA"
    }

];
const AyurvedaPage = () => {
    return (
        <div className=" mx-10 my-10 flex flex-col flex-wrap justify-center items-center py-10  gap-10">
            <div className="flex flex-col justify-center items-center gap-5 pb-10">
                <h1 className="text-4xl md:text-5xl md:underline md:pb-5 md:decoration-mLightGreen md:decoration-8 font-bold text-center text-mGreen">
                    Discover Ayurveda’s magic with us
                </h1>
                <p className="text-center text-gray-500 text-sm md:text-xl md:w-2/3 md:px-56">
                    Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom,
                    a totally effective approach for a better life.
                </p>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-3">
                {/* Left Features */}
                <div className="hidden md:flex md:flex-col md:gap-5">
                    <LeftFeatureProp
                        icon="./Images/heartbeat.svg"
                        title="Personalized Wellness"
                        description="Get treatments made just for you based on your individual doshas (body type)."
                        bgcolor="#EDF5FA"
                    />

                    <div className="flex flex-row justify-center gap-4 items-center h-full p-5">
                        <div className="flex flex-col justify-center gap-2  text-end" >
                            <h1 className="font-bold">Focus on prevention</h1>
                            <p className="text-gray-500 text-sm">Stop problems even before they start.</p>
                        </div>
                        <div className="flex justify-between items-center rounded-full p-5 bg-[#EAF2EA] ">
                            <Image
                                src="./Images/ribbon.svg"
                                alt="ribbon"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <LeftFeatureProp
                        icon="./Images/lotus-position.svg"
                        title="Mind-Body Connection"
                        description="Keep your mind and body in sync for a happy life."
                        bgcolor="#FCF1F1"
                    />
                </div>

                {/* Center Image */}
                <div className="flex justify-center items-center rounded-full ">
                    <div className="relative z-10 flex justify-center items-center">
                        <Image
                            src={'/Images/yogalady.svg'}
                            alt="Woman Doing Yoga"
                            width={0}
                            height={0}
                            style={{ width: '100%', height: 'auto' }}
                            className="items-center"
                        />
                    </div>
                    <div className="absolute z-0 flex justify-center items-center">
                        <Image
                            src={'/Images/mandellapattern.svg'}
                            alt="mandellapattern"
                            width={500}
                            height={500}
                            style={{ width: '100%', height: 'auto' }}
                            className="object-contain "
                        />
                    </div>
                </div>

                {/* Right Features */}
                <div className="hidden md:flex md:flex-col md:gap-5">
                    <RightFeatureProp
                        icon="./Images/protection.svg"
                        title="Holistic Healing"
                        description="Fix the root problem for long-lasting health."
                        bgcolor="#F5F3FC"
                    />
                    <div className="flex flex-row justify-center gap-4 items-center h-full p-5">
                        <div className="flex justify-between items-center rounded-full p-5 bg-[#FEF6ED] ">
                            <Image
                                src="./Images/ayurveda.svg"
                                alt="ayurveda"
                                width={0}
                                height={0}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                        </div>
                        <div className="flex flex-col justify-center gap-2  text-start" >
                            <h1 className="font-bold">Natural Remedies</h1>
                            <p className="text-gray-500 text-sm">Using herbs and natural therapies for healing.</p>
                        </div>
                    </div>
                    <RightFeatureProp
                        icon="./Images/strong.svg"
                        title="Boosting Immunity"
                        description="Stay strong and healthy for life, not just for today."
                        bgcolor="#EAF2EA"
                    />
                </div>
            </div>
            {/* Mobile Features */}
            <div>
                <div className="grid md:hidden grid-cols-2 grid-rows-3 gap-5">
                    <Feature
                        icon="./Images/heartbeat.svg"
                        title="Personalized Wellness"
                        description="Get treatments made just for you based on your individual doshas (body type)."
                        bgcolor="#EDF5FA"
                    />
                    <Feature
                        icon="./Images/ribbon.svg"
                        title="Focus on prevention"
                        description="Stop problems even before they start."
                        bgcolor="#EAF2EA"
                    />
                    <Feature
                        icon="./Images/lotus-position.svg"
                        title="Mind-Body Connection"
                        description="Keep your mind and body in sync for a happy life."
                        bgcolor="#FCF1F1"
                    />
                    <Feature
                        icon="./Images/protection.svg"
                        title="Holistic Healing"
                        description="Fix the root problem for long-lasting health."
                        bgcolor="#F5F3FC"
                    />
                    <Feature
                        icon="./Images/ayurveda.svg"
                        title="Natural Remedies"
                        description="Using herbs and natural therapies for healing."
                        bgcolor="#FEF6ED"
                    />
                    <Feature
                        icon="./Images/strong.svg"
                        title="Boosting Immunity"
                        description="Stay strong and healthy for life, not just for today."
                        bgcolor="#EAF2EA"
                    />
                </div>
            </div>
        </div>
    );
};

export default AyurvedaPage;
