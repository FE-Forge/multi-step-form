import axios from 'axios';

const BASE_URL = 'https://onboarding-server-idpj.onrender.com';
export const client = axios.create({
  baseURL: BASE_URL,
});
