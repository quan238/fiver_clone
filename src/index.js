import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { App } from './components/app'
import reportWebVitals from './reportWebVitals'
import 'react-slideshow-image/dist/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Router>
      <App />
      <ToastContainer />
    </Router>
  </Provider>
)

reportWebVitals()
