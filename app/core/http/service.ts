import axios from 'axios';

export type HttpRequestOptions<Data = {}, Params = {}> = {
  data?: Data,
  params?: Params,
};

export const Http = axios.create({
  baseURL: 'https://randomuser.me/',
});