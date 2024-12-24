import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
function NavbarSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between bg-mSkin w-full h-[4rem] px-4 md:px-8">
    {/* Menu Icon Skeleton */}
    <Skeleton className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full" />

    {/* Logo Skeleton */}
    <div className="flex-grow flex justify-center">
      <Skeleton className="w-40 h-10 bg-gray-300 rounded-md" />
    </div>

    {/* Right Section Skeleton */}
    <div className="w-20 h-8 bg-gray-300 rounded-lg" />
  </div>
  )
}

export default NavbarSkeleton