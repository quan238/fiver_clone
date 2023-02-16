/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useParams } from 'react-router'
import gigAPI from '../../api/gig'
import sellerAPI from '../../api/seller'
import CardContent from '../../components/CardContent/CardContent'
import CardDescription from '../../components/CardDescription'
import CardOverview from '../../components/CardOverview/CardOverview'
import CardSeller from '../../components/CardSeller'
import CardTabLabel from '../../components/CardTabLabel'

import './DetailPage.scss'

const DetailPage = () => {
  // const router = useRouter()
  const [detailGig, setDetailGig] = React.useState(null)
  const [navbar, setNavbar] = React.useState([])
  const [seller, setSeller] = React.useState(null)
  let { id } = useParams()

  React.useEffect(() => {
    async function getGigInformation() {
      const data = await gigAPI.getDetailGig(id)
      if (data && data.content[0]) {
        const gig = data.content[0]
        setDetailGig(gig?.congViec)
        setNavbar([
          gig?.tenLoaiCongViec,
          gig?.tenNhomChiTietLoai,
          gig?.tenChiTietLoai,
        ])
        const seller = await sellerAPI.getDetailSeller(gig.nguoiTao ?? 1)
        setSeller(seller.content)
      }
    }

    getGigInformation()
    return
  }, [id])

  return (
    <div id="contener">
      <div id="cartLeftSide">
        <CardOverview
          image={detailGig?.hinhAnh}
          title={detailGig?.tenCongViec}
          author={detailGig?.tenNguoiTao}
          level={seller?.role}
          viewer={Math.floor(Math.random() * 99).toFixed(0)}
          orders={Math.floor(Math.random() * 99).toFixed(0)}
          navbar={navbar}
        />
        <CardDescription description={detailGig?.moTa} />
        <CardSeller seller={seller} />
      </div>
      <div id="cartTabs">
        <CardTabLabel />
        {/* tab containt */}
        <div id="tab-content">
          <CardContent
            type="basic"
            active={true}
            title={'🔥 Basic Affiliate Website'}
            price={detailGig?.giaTien}
            description={detailGig?.moTaNgan}
          />
          {/* <CardContent
            type="standard"
            active={true}
            title={'🔥 Silver Amazon Affiliate Website'}
            price={'$ 199'}
            description={
              '📦20 Categories with 3000+ Products [ AMAZON BEST SELLERS ] + 🗒️Autoblog'
            }
          />
          <CardContent
            type="premium"
            active={true}
            title={'🔥 Silver Amazon Affiliate Website'}
            price={'$ 199'}
            description={
              '📦20 Categories with 3000+ Products [ AMAZON BEST SELLERS ] + 🗒️Autoblog'
            }
          /> */}
        </div>
      </div>
    </div>
  )
}

export default DetailPage
