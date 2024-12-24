import { Skeleton } from "@/components/ui/skeleton"

function ConsultationSkeleton() {
  return (
    <div className="w-full relative flex flex-col items-center justify-center h-full">
      {/* Backdrop Skeleton */}
      <div className="absolute z-10 w-full h-full backdrop-blur-none bg-black/45"></div>

      {/* Title Skeleton */}
      <p className="absolute z-10 p-5 top-1/4 text-center text-shadow-mblack md:text-7xl sm:text-5xl text-3xl text-mSkin w-3/4">
        <Skeleton className="h-10 w-3/4 mx-auto" />
      </p>

      {/* Image Skeletons */}
      <div className="w-full z-0 md:hidden">
        <Skeleton className="h-80 w-full" />
      </div>
      <div className="w-full z-0 hidden md:flex">
        <Skeleton className="h-80 w-full" />
      </div>

      {/* Button Skeleton */}
      <button className="absolute z-10 mt-4 top-2/3 bg-mGreen text-white rounded-2xl p-5">
        <Skeleton className="h-12 w-48" />
      </button>
    </div>
  )
}

export default ConsultationSkeleton