import { Skeleton } from "@/components/ui/skeleton"
function BannerSkeleton() {
  return (
    <div className="w-full h-full flex flex-col ">
      {/* Text on banner */}
      <Skeleton className="flex bg-slate-700 flex-col sm:gap-8 md:px-20 px-10  py-11 text-white w-full h-full items-start sm:justify-center justify-between">
        <Skeleton className="w-1/2 h-8 bg-gray-300 rounded" />
        <Skeleton className="w-3/4 h-10 bg-gray-300 rounded mt-4" />
        <Skeleton className="w-3/4 h-8 bg-gray-300 rounded mt-2" />
        <Skeleton className="w-1/2 h-12 bg-mGreen rounded-2xl mt-6" />
      </Skeleton>
    </div>
  )
}

export default BannerSkeleton