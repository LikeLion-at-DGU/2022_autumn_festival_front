import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.194:8080/api/',
});

export default instance;
