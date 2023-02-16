import React from 'react'
import { useParams } from 'react-router'
import sellerAPI from '../../api/seller'
import CardInfoSeller from '../../components/CardInfoSeller'
import CardSellerProfile from '../../components/CardSellerProfile'
import ListGigsContainer from '../../container/ListGigs/ListGigs.container'

export default function SellerPage() {
  let { id } = useParams()
  const [seller, setSeller] = React.useState(null)

  React.useEffect(() => {
    async function getSellerInformation() {
      const seller = await sellerAPI.getDetailSeller(id ?? 1)
      if (seller) {
        setSeller(seller.content)
      }
    }

    getSellerInformation()
    return
  }, [id])

  return (
    <div className="container-fivver">
      <div className="grid grid-cols-8 gap-3">
        <div className=" p-4 col-span-2">
          <CardInfoSeller seller={seller} />
          <CardSellerProfile seller={seller} />
        </div>
        <div className=" p-4 col-span-6">
          <ListGigsContainer seller={seller} />
        </div>
      </div>
    </div>
  )
}
