import ReviewSlide from "./ReviewSlide";



const Review: React.FC = () => {

    return (
        <div className="bg-[#FFF8E6] h-full text-center py-10">
            <h2 className="text-4xl px-4 md:underline decoration-8 decoration-[#C3D0C4] font-bold text-green-800 mb-10">
                Stories from our valued customers!
            </h2>
            <ReviewSlide />
        </div>
    );
};

export default Review;

