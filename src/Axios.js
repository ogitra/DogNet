import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dognet-233d6-default-rtdb.firebaseio.com/',
});

export default instance;
