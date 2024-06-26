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
 * @interface IntegrationBaseDTO
 */
export interface IntegrationBaseDTO {
    /**
     * 
     * @type {string}
     * @memberof IntegrationBaseDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationBaseDTO
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationBaseDTO
     */
    type: IntegrationBaseDTOTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof IntegrationBaseDTO
     */
    infoData?: Array<string>;
}


/**
 * @export
 */
export const IntegrationBaseDTOTypeEnum = {
    EMAIL: 'EMAIL',
    REST: 'REST',
    TELEGRAM: 'TELEGRAM',
    OPENAI: 'OPENAI'
} as const;
export type IntegrationBaseDTOTypeEnum = typeof IntegrationBaseDTOTypeEnum[keyof typeof IntegrationBaseDTOTypeEnum];


/**
 * Check if a given object implements the IntegrationBaseDTO interface.
 */
export function instanceOfIntegrationBaseDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function IntegrationBaseDTOFromJSON(json: any): IntegrationBaseDTO {
    return IntegrationBaseDTOFromJSONTyped(json, false);
}

export function IntegrationBaseDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationBaseDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': json['type'],
        'infoData': !exists(json, 'infoData') ? undefined : json['infoData'],
    };
}

export function IntegrationBaseDTOToJSON(value?: IntegrationBaseDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': value.type,
        'infoData': value.infoData,
    };
}

