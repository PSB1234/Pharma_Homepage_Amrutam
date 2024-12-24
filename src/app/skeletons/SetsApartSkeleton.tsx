import { Skeleton } from "@/components/ui/skeleton"
function SetsApartSkeleton() {
  return (
    <div className="bg-mSkin sm:p-24 p-10 flex flex-col gap-12 h-full">
    {/* Title Skeleton */}
    <div className="block text-center text-5xl text-mGreen underline decoration-mLightGreen decoration-4">
      <Skeleton className="h-8 w-64 mx-auto" />
    </div>

    <div className="sm:p-4">
      <div className="sm:grid sm:grid-rows-2 gap-4 flex flex-col">
        {/* First Row Skeletons */}
        <div className="flex flex-col sm:flex-row gap-4 h-fit">
          {/* First Card Skeleton */}
          <div className="m-1 w-full sm:mb-3">
            <div className="flex flex-col p-10 bg-white text-mGreen text-center justify-center rounded-[1.3rem] border-t-8 border-mGreen shadow h-full">
              <Skeleton className="h-8 w-56 mx-auto mb-4" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
          </div>

          {/* Image Skeleton */}
          <Skeleton className="h-72 w-full rounded" />

          {/* Second Card Skeleton */}
          <div className="flex">
            <div className="flex flex-col p-10 bg-white text-mGreen text-center justify-center rounded-[1.3rem] border-t-8 border-mGreen shadow h-full">
              <Skeleton className="h-8 w-40 mx-auto mb-4" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
          </div>
        </div>

        {/* Second Row Skeletons */}
        <div className="sm:grid sm:grid-cols-4 h-fit flex flex-col gap-4">
          {/* Card Skeletons */}
          <div className="flex flex-col p-10 bg-white text-mGreen text-center justify-center rounded-[1.3rem] border-t-8 border-mGreen shadow h-full">
            <Skeleton className="h-8 w-56 mx-auto mb-4" />
            <Skeleton className="h-4 w-3/4 mx-auto" />
          </div>

          {/* Image Skeleton */}
          <Skeleton className="h-72 w-full rounded" />

          {/* Card Skeleton */}
          <div className="flex flex-col p-10 bg-white text-mGreen text-center justify-center rounded-[1.3rem] border-t-8 border-mGreen shadow h-full">
            <Skeleton className="h-8 w-56 mx-auto mb-4" />
            <Skeleton className="h-4 w-3/4 mx-auto" />
          </div>

          {/* Image Skeleton */}
          <Skeleton className="h-72 w-full rounded" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default SetsApartSkeleton