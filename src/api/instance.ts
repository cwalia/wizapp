import axios from "axios";
import store from "@/store/store";

// export const baseApi = 'URL'

const api = axios.create({
  // @ts-ignore
  // baseURL: baseApi,
  timeout: 300000,
})

export default api

api.interceptors.response.use((response) => response, (error) => {
  // whatever you want to do with the error
  const {status: statusCode} = error.response ?? {}
  const {message} = error
  if (statusCode === 400) {
    let message = error.response.data.message ?? 'Wrong  request'
    store.dispatch('mainApp/showErrorMessage', `${message}, Please correct and try again.`)
  }

  if (statusCode === 401) {
    store.dispatch('mainApp/showErrorMessage', 'Session expired, you will be redirected to login')
    setTimeout(window.location.reload, 3000)
  }

  if (statusCode === 404) {
    store.dispatch('mainApp/showErrorMessage', 'Resourse not found, please try again')
  }

  if (statusCode === 408) {
    store.dispatch('mainApp/showErrorMessage', 'Search request timed out, Please try again.')
  }

  if (statusCode === 500 || message.toLowerCase().includes('timeout')) {
    store.dispatch('mainApp/showErrorMessage', 'We got an error on the server, please try again')
  }

  if (statusCode === 503) {
    store.dispatch('mainApp/showErrorMessage', 'Search Engine is not responding, please try again')
  }

  throw error;
});