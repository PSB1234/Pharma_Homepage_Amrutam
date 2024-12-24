import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

function FooterSkeleton() {
  return (
    <div className="bg-[#DBE3DC] flex flex-col items-center text-mGreen h-full w-full md:py-60 p-10 md:p-0 gap-10">
      <div className='flex flex-col w-full gap-5 sm:hidden'>
        {/* Get in touch heading skeleton */}
        <Skeleton className="h-8 w-1/4 bg-mGreen" />
        {/* Contact details skeleton */}
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        
        {/* Social media icons skeleton */}
        <div className='flex flex-row justify-center items-center gap-2'>
          <Skeleton className="h-12 w-12 bg-gray-400 rounded-full" />
          <Skeleton className="h-12 w-12 bg-gray-400 rounded-full" />
          <Skeleton className="h-12 w-12 bg-gray-400 rounded-full" />
          <Skeleton className="h-12 w-12 bg-gray-400 rounded-full" />
          <Skeleton className="h-12 w-12 bg-gray-400 rounded-full" />
          <Skeleton className="h-12 w-12 bg-gray-400 rounded-full" />
        </div>
      </div>
      
      <div className="flex flex-col w-full md:max-w-72">
        {/* Information heading skeleton */}
        <Skeleton className="h-8 w-1/4 bg-mGreen" />
        {/* Information list skeletons */}
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
        <Skeleton className="h-6 w-3/4 bg-gray-400" />
      </div>

      {/* Subscribe form skeleton */}
      <div className='md:hidden block'>
        <form className='flex flex-col gap-5' action="/">
          {/* Subscribe heading skeleton */}
          <Skeleton className="h-8 w-3/4 bg-mGreen" />
          {/* Email input skeleton */}
          <div className='flex flex-row w-full relative'>
            <Skeleton className="h-12 w-full bg-gray-400 rounded-full" />
            <Skeleton className="h-12 w-2/5 bg-gray-400 absolute right-0 rounded-r-full" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default FooterSkeleton