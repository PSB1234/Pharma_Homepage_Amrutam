import { Skeleton } from "@/components/ui/skeleton"


function YellowBarSkeleton() {
  return (
    <div className="bg-mSkin h-auto w-full flex sm:flex-row flex-wrap sm:flex-nowrap justify-center md:px-20 text-mGreen">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="flex h-32 md:px-6 md:py-10 m-1 py-9 px-4 w-full">
          <Skeleton className="w-12 h-12 bg-gray-300 rounded-full" />
          <Skeleton className="ml-4 w-36 h-6 bg-gray-300 rounded" />
        </div>
      ))}
    </div>
  )
}

export default YellowBarSkeleton