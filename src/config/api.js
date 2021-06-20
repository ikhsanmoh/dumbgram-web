import axios from 'axios'

export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/"
})

export const setAuthToken = (token) => {
  console.log('set Auth run...');
  if (token) {
    console.log('Set Auth:', token);
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete API.defaults.headers.commin["Authorization"]
  }
}