import axios from 'axios'
import { ENDPOINTS } from '../constants/constants'

export const getData = async () => {
  try {
    const response = await axios.get(ENDPOINTS.GET_DATA_BASE_URL)
    const isResponseOk = response.data.length !== 0

    if (isResponseOk) {
      return response
    } else {
      console.log('error')
    }
  } catch (error) {
    console.log(error)
  }
}

export const getItemById = async (id) => {
  try {
    const response = await axios.get(ENDPOINTS.GET_DATA_BASE_URL + id)
    const isResponseOk = response.data.length !== 0
    if (isResponseOk) {
      return response
    } else {
      console.log('error')
    }
  } catch (error) {
    console.log(error)
  }
}
