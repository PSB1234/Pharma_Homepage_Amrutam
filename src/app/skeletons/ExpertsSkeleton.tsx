import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
function ExpertsSkeleton() {
  return (
    <div className="flex flex-col justify-center gap-10 my-10 py-10 h-full">
    {/* Title Skeleton */}
    <Skeleton className="h-10 w-1/2 mx-auto mb-10" />

    {/* ExpertSlide Skeleton */}
    <div className="w-full flex justify-center">
      <Skeleton className="h-60 w-3/4" />
    </div>

    {/* Button Skeleton */}
    <div className='flex justify-center'>
      <Skeleton className="h-14 w-1/3 rounded-lg" />
    </div>
  </div>
  )
}

export default ExpertsSkeleton