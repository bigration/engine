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
 * @interface StatisticsUpdateEngineDTO
 */
export interface StatisticsUpdateEngineDTO {
    /**
     * 
     * @type {string}
     * @memberof StatisticsUpdateEngineDTO
     */
    instanceId: string;
    /**
     * 
     * @type {string}
     * @memberof StatisticsUpdateEngineDTO
     */
    calculatedAccountStatisticId: string;
}

/**
 * Check if a given object implements the StatisticsUpdateEngineDTO interface.
 */
export function instanceOfStatisticsUpdateEngineDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "instanceId" in value;
    isInstance = isInstance && "calculatedAccountStatisticId" in value;

    return isInstance;
}

export function StatisticsUpdateEngineDTOFromJSON(json: any): StatisticsUpdateEngineDTO {
    return StatisticsUpdateEngineDTOFromJSONTyped(json, false);
}

export function StatisticsUpdateEngineDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatisticsUpdateEngineDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'instanceId': json['instanceId'],
        'calculatedAccountStatisticId': json['calculatedAccountStatisticId'],
    };
}

export function StatisticsUpdateEngineDTOToJSON(value?: StatisticsUpdateEngineDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'instanceId': value.instanceId,
        'calculatedAccountStatisticId': value.calculatedAccountStatisticId,
    };
}

