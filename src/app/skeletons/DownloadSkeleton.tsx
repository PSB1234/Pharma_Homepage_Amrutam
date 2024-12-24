import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

function DownloadSkeleton() {
  return (
    <div className="bg-mSkin w-full md:h-screen h-full flex flex-row md:text-start text-center justify-between items-center md:px-36 px-10 py-10 md:py-0">
    <div className='flex flex-col md:w-1/2 md:gap-32 gap-10'>
      <div className='flex flex-col gap-5'>
        {/* Title Skeleton */}
        <Skeleton className="h-10 w-1/3 bg-mGreen" />
        {/* Description Skeleton */}
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        {/* Hidden for mobile, but display skeleton for desktop */}
        <Skeleton className="h-8 w-2/3 bg-gray-400" />
      </div>
      {/* Mobile phone image skeleton */}
      <div className="md:hidden flex">
        <Skeleton className="h-60 w-full" />
      </div>
      {/* Mobile Hidden Text Skeleton */}
      <Skeleton className="h-8 w-3/4 bg-gray-400 md:hidden" />
      <div>
        {/* Get the app heading skeleton */}
        <Skeleton className="h-10 w-1/3 bg-mGreen" />
        {/* Buttons Skeleton */}
        <div className="flex md:flex-row flex-col gap-2 items-center md:w-2/3">
          <Skeleton className="h-12 w-48 bg-gray-400" />
          <Skeleton className="h-12 w-48 bg-gray-400" />
        </div>
      </div>
    </div>

    {/* Desktop Phone Image Skeleton */}
    <div className="hidden md:flex">
      <Skeleton className="h-96 w-full" />
    </div>
  </div>
  )
}

export default DownloadSkeleton