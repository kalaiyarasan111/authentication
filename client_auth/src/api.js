import axios from 'axios';

const API = axios.create({
  baseURL: "https://authentication-h3e3.onrender.com/api/auth",
  withCredentials: true,
});

export default API;
