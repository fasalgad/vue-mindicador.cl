import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://mindicador.cl/api'
})
export default instance