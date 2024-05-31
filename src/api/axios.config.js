import axios from 'axios';

const BASE_URL = 'http://15.165.158.29:8000/api/v1';

const api = axios.create({
  baseURL: BASE_URL, // 기본 URL 설정
});

export default api;
