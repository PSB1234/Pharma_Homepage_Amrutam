import { Skeleton } from "@/components/ui/skeleton"

function ReviewSkeleton() {
  return (
    <div className="bg-[#FFF8E6] h-full text-center py-10">
      {/* Title Skeleton */}
      <Skeleton className="h-10 w-1/2 mx-auto md:w-1/3 mb-10" />

      {/* ReviewSlide Skeleton */}
      <div className="w-full flex justify-center">
        <Skeleton className="h-60 w-3/4" />
      </div>
    </div>
  )
}

export default ReviewSkeleton