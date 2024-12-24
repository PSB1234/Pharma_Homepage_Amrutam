import { Skeleton } from "@/components/ui/skeleton"

function DiscoverSkeleton() {
  return (
    <div className=" mx-10 my-10 flex flex-col flex-wrap justify-center items-center py-10 gap-10">
      <div className="flex flex-col justify-center items-center gap-5 pb-10">
        <Skeleton className="w-3/4 h-10 bg-gray-300 rounded-md" />
        <Skeleton className="w-2/3 h-8 bg-gray-300 rounded mt-4" />
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-3">
        {/* Left Features Skeleton */}
        <div className="hidden md:flex md:flex-col md:gap-5">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-row justify-center gap-4 items-center h-full p-5">
              <Skeleton className="ml-4 w-36 h-6 bg-gray-300 rounded" />
              <Skeleton className="w-12 h-12 bg-gray-300 rounded-full" />

            </div>
          ))}
        </div>

        {/* Center Image Skeleton */}
        <div className="flex justify-center items-center rounded-full">
          <Skeleton className="w-full h-full bg-gray-300" />
        </div>

        {/* Right Features Skeleton */}
        <div className="hidden md:flex md:flex-col md:gap-5">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-row justify-center gap-4 items-center h-full p-5">
              <Skeleton className="w-12 h-12 bg-gray-300 rounded-full" />
              <Skeleton className="ml-4 w-36 h-6 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Features Skeleton */}
      <div className="grid md:hidden grid-cols-2 grid-rows-3 gap-5">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-2">
            <Skeleton className="w-12 h-12 bg-gray-300 rounded-full" />
            <Skeleton className="w-36 h-6 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiscoverSkeleton