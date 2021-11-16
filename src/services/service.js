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
    // console.log(response)
  } catch (error) {
    console.log(error)
  }
}
