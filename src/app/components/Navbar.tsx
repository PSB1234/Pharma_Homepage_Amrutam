import { Menu } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-mSkin w-full h-[4rem] px-4 md:px-8">
      {/* Menu Icon */}
      <div className="text-mGreen">
        <Menu className="w-6 h-6 md:w-8 md:h-8" />
      </div>

      {/* Logo */}
      <div className="flex-grow flex justify-center">
        <Image
          src="./Images/header.svg"
          height={40}
          width={160}
          alt="Amrutam"
          className="object-contain"
        />
      </div>

      {/* Placeholder for Right Section */}
      <div className="text-white">
        {/* Add your content or placeholder here if needed */}
      </div>
    </div>
  );
};

export default Navbar;