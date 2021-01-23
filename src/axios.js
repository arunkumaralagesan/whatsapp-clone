import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://whatsapp-clone-backend-1f80b.herokuapp.com/'
});

export default instance;