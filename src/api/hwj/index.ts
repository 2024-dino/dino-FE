import { tokenUtils } from '@/utils/tokenUtils';
import axios, { AxiosInstance } from 'axios';

function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config) => {
      if (typeof window !== 'undefined' && config.headers) {
        config.headers.Authorization = `Bearer ${tokenUtils.getToken()}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
}

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
  return setInterceptors(instance);
}

function createInstanceWithoutAuth() {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
  return instance;
}

export const api = createInstance();
export const apiWithoutAuth = createInstanceWithoutAuth();
