import axios from "axios"

const BASE_URL = "https://travel-tales-backend-ufhh.onrender.com/api" // or use localhost during dev

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Intercept request to inject token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") // or sessionStorage
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config
})

export default axiosInstance

