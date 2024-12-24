import { Skeleton } from "@/components/ui/skeleton"

function ApproachSkeleton() {
  return (
    <div className="flex flex-col justify-center my-20 gap-24 items-center p-10 h-full md:h-screen">
      {/* Title Skeleton */}
      <div className="text-center flex justify-center flex-col gap-10">
        <Skeleton className="h-12 w-1/2 md:w-1/3 mx-auto" />
        <Skeleton className="mx-auto h-6 md:w-1/2 w-full text-center" />
      </div>

      {/* ApproachSlide Skeleton */}
      <div className="w-full flex justify-center">
        <Skeleton className="h-60 w-full md:w-3/4" />
      </div>
    </div>
  )
}

export default ApproachSkeleton