import { AxiosTransformer } from 'axios';

import { methodBuilder } from './utils';

/* *********************************************
 * Method decorators
 * *********************************************/

/**
 * GET method
 * @param {string} url - resource url of the method
 */
export const GET = methodBuilder('get');
/**
 * POST method
 * @param {string} url - resource url of the method
 */
export const POST = methodBuilder('post');

/**
 * Defines the adatper function to modify the API response suitable for the app
 * @param TFunction adapterFn - function to be called
 */
export const Adapter = (adapterFn: AxiosTransformer) =>
  (target: any, propertyKey: string, descriptor: any) => {
    descriptor.adapter = adapterFn || null;
    return descriptor;
  };