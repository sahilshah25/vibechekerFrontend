// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8282/api', // change when deployed
});

export default api;