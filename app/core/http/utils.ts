import { AxiosRequestConfig } from "axios";

import {
  Http,
  HttpRequestOptions,
} from './service';

type RequestMethod = 'get' | 'post';

export const methodBuilder =
  (method: RequestMethod) =>
    (url: string) =>
      (target: any, propertyKey: string, descriptor: any) => {
        descriptor.value = function ({ data, params }: HttpRequestOptions) {
          // Request options
          const config: AxiosRequestConfig = {
            method,
            url,
            transformResponse: descriptor.adapter || null,
            data,
            params,
          };

          console.log(`[${method.toUpperCase()}] Request`, config);
          return Http.request(config);
        }

        return descriptor;
      };