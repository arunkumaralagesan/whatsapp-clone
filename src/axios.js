import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://salty-chamber-26455.herokuapp.com/'
});

export default instance;