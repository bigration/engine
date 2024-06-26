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
 * @interface EngineConnectionStatus
 */
export interface EngineConnectionStatus {
    /**
     * 
     * @type {string}
     * @memberof EngineConnectionStatus
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof EngineConnectionStatus
     */
    connectedAt?: string;
}

/**
 * Check if a given object implements the EngineConnectionStatus interface.
 */
export function instanceOfEngineConnectionStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EngineConnectionStatusFromJSON(json: any): EngineConnectionStatus {
    return EngineConnectionStatusFromJSONTyped(json, false);
}

export function EngineConnectionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): EngineConnectionStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': !exists(json, 'state') ? undefined : json['state'],
        'connectedAt': !exists(json, 'connectedAt') ? undefined : json['connectedAt'],
    };
}

export function EngineConnectionStatusToJSON(value?: EngineConnectionStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': value.state,
        'connectedAt': value.connectedAt,
    };
}

