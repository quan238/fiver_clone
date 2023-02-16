import instance from '../utils/axiosConfig'

const getDetailGig = async id => {
  return await instance.get('/cong-viec/lay-cong-viec-chi-tiet/' + id)
}

const getGigBySellerId = async id => {
  return await instance.get('/thue-cong-viec/lay-danh-sach-da-thue')
}

const gigAPI = {
  getDetailGig,
  getGigBySellerId,
}

export default gigAPI
