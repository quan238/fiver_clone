import { Navigate, Route, Routes } from 'react-router-dom'
import DetailPage from '../../page/detail'
import SellerPage from '../../page/seller'
import { PublicRoute } from '../publicRoute'
import Styles from './app.module.scss'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route
            path="gig/:id"
            element={<PublicRoute component={DetailPage} />}
          />
          <Route
            path="/seller/:id"
            element={<PublicRoute component={SellerPage} />}
          />
          <Route path="*" element={<Navigate to="gig/1" replace />} />
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
