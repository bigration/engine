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
 * @interface EngineQuota
 */
export interface EngineQuota {
    /**
     * 
     * @type {number}
     * @memberof EngineQuota
     */
    replicas: number;
    /**
     * 
     * @type {number}
     * @memberof EngineQuota
     */
    count: number;
}

/**
 * Check if a given object implements the EngineQuota interface.
 */
export function instanceOfEngineQuota(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "replicas" in value;
    isInstance = isInstance && "count" in value;

    return isInstance;
}

export function EngineQuotaFromJSON(json: any): EngineQuota {
    return EngineQuotaFromJSONTyped(json, false);
}

export function EngineQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): EngineQuota {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'replicas': json['replicas'],
        'count': json['count'],
    };
}

export function EngineQuotaToJSON(value?: EngineQuota | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'replicas': value.replicas,
        'count': value.count,
    };
}

