import axios from 'axios'

const url = process.env.VERCEL_URL ? process.env.VERCEL_URL : process.env.BASE_URL

const api = axios.create({
  baseURL: `${url}/api`
})

export default api
