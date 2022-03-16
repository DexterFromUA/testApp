import axios from 'axios';

import {API_HOST} from '../const';

const apiClient = axios.create({
  baseURL: API_HOST,
  responseType: 'json',
});

apiClient.interceptors.response.use(
  response => response.data || response,
  error => console.error('Error while response: ', error),
);

export default apiClient;
