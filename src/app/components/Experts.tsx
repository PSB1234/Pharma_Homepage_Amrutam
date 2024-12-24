import ExpertSlide from './ExpertSlide';
import { ChevronRight } from 'lucide-react';

const Experts: React.FC = () => {
  return (
    <div className=" flex flex-col justify-center gap-10 my-10 py-10 h-full">
      <h2 className="text-center text-4xl underline underline-offset-4 h-auto decoration-8 decoration-[#C3D0C4] font-bold text-green-800 mb-10">Meet Our Ayurveda Experts</h2>
        <ExpertSlide/>
      <div className='flex justify-center '><button className="border flex flex-row rounded-lg h-14 items-center px-6 border-mGreen bg-[#DBE3DC] text-mGreen ">Find more experts <ChevronRight/></button></div>
    </div>
  );
};

export default Experts;
