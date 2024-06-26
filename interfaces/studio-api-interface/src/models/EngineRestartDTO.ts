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
 * @interface EngineRestartDTO
 */
export interface EngineRestartDTO {
    /**
     * 
     * @type {string}
     * @memberof EngineRestartDTO
     */
    region: string;
}

/**
 * Check if a given object implements the EngineRestartDTO interface.
 */
export function instanceOfEngineRestartDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "region" in value;

    return isInstance;
}

export function EngineRestartDTOFromJSON(json: any): EngineRestartDTO {
    return EngineRestartDTOFromJSONTyped(json, false);
}

export function EngineRestartDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EngineRestartDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'region': json['region'],
    };
}

export function EngineRestartDTOToJSON(value?: EngineRestartDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'region': value.region,
    };
}

