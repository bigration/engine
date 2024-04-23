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
 * @interface SortModel
 */
export interface SortModel {
    /**
     * 
     * @type {string}
     * @memberof SortModel
     */
    field: string;
    /**
     * 
     * @type {string}
     * @memberof SortModel
     */
    direction: SortModelDirectionEnum;
}


/**
 * @export
 */
export const SortModelDirectionEnum = {
    ASC: 'ASC',
    DESC: 'DESC'
} as const;
export type SortModelDirectionEnum = typeof SortModelDirectionEnum[keyof typeof SortModelDirectionEnum];


/**
 * Check if a given object implements the SortModel interface.
 */
export function instanceOfSortModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "field" in value;
    isInstance = isInstance && "direction" in value;

    return isInstance;
}

export function SortModelFromJSON(json: any): SortModel {
    return SortModelFromJSONTyped(json, false);
}

export function SortModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'field': json['field'],
        'direction': json['direction'],
    };
}

export function SortModelToJSON(value?: SortModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'field': value.field,
        'direction': value.direction,
    };
}

