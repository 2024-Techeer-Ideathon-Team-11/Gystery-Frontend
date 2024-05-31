import axios from "axios";

const BASE_URL = `localhost:8000/api/v1`;

export const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL, // 기본 URL 설정
});
