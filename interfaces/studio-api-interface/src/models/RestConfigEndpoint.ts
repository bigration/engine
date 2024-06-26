/* tslint:disable */
/* eslint-disable */
/**
 * Bigration API
 * Bigration
 *
 * The version of the OpenAPI document: v0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RestConfigEndpoint
 */
export interface RestConfigEndpoint {
    /**
     * 
     * @type {string}
     * @memberof RestConfigEndpoint
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof RestConfigEndpoint
     */
    method: RestConfigEndpointMethodEnum;
}


/**
 * @export
 */
export const RestConfigEndpointMethodEnum = {
    GET: 'GET',
    DELETE: 'DELETE',
    HEAD: 'HEAD',
    OPTIONS: 'OPTIONS',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    PURGE: 'PURGE',
    LINK: 'LINK',
    UNLINK: 'UNLINK'
} as const;
export type RestConfigEndpointMethodEnum = typeof RestConfigEndpointMethodEnum[keyof typeof RestConfigEndpointMethodEnum];


/**
 * Check if a given object implements the RestConfigEndpoint interface.
 */
export function instanceOfRestConfigEndpoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "method" in value;

    return isInstance;
}

export function RestConfigEndpointFromJSON(json: any): RestConfigEndpoint {
    return RestConfigEndpointFromJSONTyped(json, false);
}

export function RestConfigEndpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestConfigEndpoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
        'method': json['method'],
    };
}

export function RestConfigEndpointToJSON(value?: RestConfigEndpoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'method': value.method,
    };
}

