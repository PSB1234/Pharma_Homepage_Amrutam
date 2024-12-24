import React from 'react'
import NavbarSkeleton from './skeletons/NavbarSkeleton'
import ApproachSkeleton from './skeletons/ApproachSkeleton'
import BannerSkeleton from './skeletons/BannerSkeleton'
import ConsultationSkeleton from './skeletons/ConsultationSkeleton'
import DiscoverSkeleton from './skeletons/DiscoverSkeleton'
import ExpertsSkeleton from './skeletons/ExpertsSkeleton'
import FooterSkeleton from './skeletons/FooterSkeleton'
import ReviewSkeleton from './skeletons/ReviewSkeleton'
import SetsApartSkeleton from './skeletons/SetsApartSkeleton'
import YellowBarSkeleton from './skeletons/YellowBarSkeleton'
import DownloadSkeleton from './skeletons/DownloadSkeleton'

function loading() {
  return (

    <>
      <div className="h-full ">
        <NavbarSkeleton />
        <div className="h-screen flex flex-col ">
          <BannerSkeleton />
          <YellowBarSkeleton />
        </div>
        <DiscoverSkeleton />
        <SetsApartSkeleton />
        <ConsultationSkeleton />
        <ApproachSkeleton />
        <ReviewSkeleton />
        <ExpertsSkeleton />
        <DownloadSkeleton />s
        <FooterSkeleton />
      </div>

    </>
  

  )
}

export default loading