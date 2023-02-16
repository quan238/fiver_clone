import instance from '../utils/axiosConfig'

const getDetailSeller = async id => {
  return await instance.get('/users/' + id)
}

const sellerAPI = {
  getDetailSeller,
}

export default sellerAPI
