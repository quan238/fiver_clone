/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import { CONFIG } from '../config/config'
import { setCredentials } from '../store/auth/authSlice'
import { toast } from 'react-toastify'

let store

// Recommended approach to avoid circular import dependency error
export const injectStore = _store => {
  store = _store
}

export const apiErrorResponse = error => {
  if (error.response) {
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    console.log(error.request)
  } else {
    console.log('Error', error.message)
  }
}

const instance = axios.create({
  baseURL: CONFIG.API_URL,
  withCredentials: true,
})

instance.interceptors.request.use(
  config => {
    config.headers = {
      tokenCybersoft: CONFIG.CYBERSOFT_TOKEN,
      Accept: 'application/json',
    }

    return config
  },
  err => Promise.reject(err)
)

let calledOnce = false

instance.interceptors.response.use(
  response => {
    return response.data
  },
  async error => {
    const originalRequest = error.config

    toast.error(error.response.data.content || 'Error Problem', {
      position: toast.POSITION.TOP_CENTER,
    })
    if (error.response !== null) {
      if (error.response.status === 403 && !originalRequest._retry) {
        if (!calledOnce) {
          calledOnce = true

          try {
            const refreshData = await instance.get('/refresh_token/verify')

            if (refreshData) {
              const { user } = store.getState().auth
              axios.defaults.headers.common.Authorization = `Bearer ${refreshData.data.access_token}`

              store.dispatch(
                setCredentials({
                  user,
                  access_token: refreshData.data.access_token,
                })
              )

              return instance(originalRequest)
            }
          } catch (error) {
            if (error.response && error.response.data) {
              return Promise.reject(error.response.data)
            }

            return Promise.reject(error)
          } finally {
            originalRequest._retry = true
            calledOnce = false
          }
        }
      }
    }

    return Promise.reject(error)
  }
)

export default instance
