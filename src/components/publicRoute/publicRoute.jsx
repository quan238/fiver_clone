import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import Header from '../Header'

export const PublicRoute = ({ component: Component, ...props }) => {
  const { user } = useSelector(state => state.auth)

  return (
    <>
      <Header />
      {user && props.restricted ? (
        <Navigate
          to={{ pathname: '/', state: { from: props.location } }}
          replace
        />
      ) : (
        <Component {...props} />
      )}
      <Footer />
    </>
  )
}
