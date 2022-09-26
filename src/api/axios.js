import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.217:8080/api/',
  headers: {
    'Access-Control-Allow-Credentials': true,
  },
});

export default instance;
