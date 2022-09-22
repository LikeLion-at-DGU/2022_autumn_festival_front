import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhosts:8080/api/',
});

export default instance;
