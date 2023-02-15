import React from 'react'
import CardContent from '../../components/CardContent/CardContent'
import CardOverview from '../../components/CardOverview/CardOverview'
import CardTabLabel from '../../components/CardTabLabel'
import './DetailPage.scss'

const DetailPage = () => {
  return (
    <div id="contener">
      <CardOverview
        title={
          'I will create amazon affiliate marketing autopilot website with autoblog'
        }
        author={'stylishwebs'}
        level={'Level 2 Seller'}
        viewer={653}
        orders={14}
      />
      <div id="cartTabs">
        <CardTabLabel />
        {/* tab containt */}
        <div id="tab-content">
          <CardContent
            type="basic"
            active={true}
            title={'🔥 Silver Amazon Affiliate Website'}
            price={'$ 199'}
            description={
              '📦20 Categories with 3000+ Products [ AMAZON BEST SELLERS ] + 🗒️Autoblog'
            }
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
