import { Route, Routes } from 'react-router-dom'
import DetailPage from '../../page/detail'
import SellerPage from '../../page/seller'
import { PublicRoute } from '../publicRoute'
import Styles from './app.module.scss'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<PublicRoute component={DetailPage} />} />
          <Route
            path="/seller"
            element={<PublicRoute component={SellerPage} />}
          />
        </Routes>
      </Layout>
    </div>
  )
}

const Layout = ({ children }) => (
  <div className={Styles.mainContainer}>
    <div className={Styles.contentContainer}>{children}</div>
  </div>
)

export { App }
