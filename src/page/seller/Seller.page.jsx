import React from 'react'
import CardInfoSeller from '../../components/CardInfoSeller'
import CardSellerProfile from '../../components/CardSellerProfile'
import ListGigsContainer from '../../container/ListGigs/ListGigs.container'

export default function SellerPage() {
  return (
    <div className="container-fivver">
      <div className="grid grid-cols-8 gap-3">
        <div className=" p-4 col-span-2">
          <CardInfoSeller />
          <CardSellerProfile />
        </div>
        <div className=" p-4 col-span-6">
          <ListGigsContainer />
        </div>
      </div>
    </div>
  )
}
