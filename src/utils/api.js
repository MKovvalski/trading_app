import axios from 'axios'
import { VANTAGE_API_KEY } from './consts'

const VANTAGE_BASE_URL = 'https://www.alphavantage.co/query'

export const getSearchResults = (value = '') => {
   return axios(
    `${VANTAGE_BASE_URL}?function=SYMBOL_SEARCH&keywords=${value}&apikey=${VANTAGE_API_KEY}`,
    { crossdomain: true }
  )
}