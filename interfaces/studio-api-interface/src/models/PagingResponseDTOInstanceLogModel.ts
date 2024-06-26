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
import type { InstanceLogModel } from './InstanceLogModel';
import {
    InstanceLogModelFromJSON,
    InstanceLogModelFromJSONTyped,
    InstanceLogModelToJSON,
} from './InstanceLogModel';

/**
 * 
 * @export
 * @interface PagingResponseDTOInstanceLogModel
 */
export interface PagingResponseDTOInstanceLogModel {
    /**
     * 
     * @type {Array<InstanceLogModel>}
     * @memberof PagingResponseDTOInstanceLogModel
     */
    response: Array<InstanceLogModel>;
    /**
     * 
     * @type {number}
     * @memberof PagingResponseDTOInstanceLogModel
     */
    total: number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingResponseDTOInstanceLogModel
     */
    hasNext: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingResponseDTOInstanceLogModel
     */
    hasPrevious: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingResponseDTOInstanceLogModel
     */
    hasContent: boolean;
}

/**
 * Check if a given object implements the PagingResponseDTOInstanceLogModel interface.
 */
export function instanceOfPagingResponseDTOInstanceLogModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "response" in value;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "hasNext" in value;
    isInstance = isInstance && "hasPrevious" in value;
    isInstance = isInstance && "hasContent" in value;

    return isInstance;
}

export function PagingResponseDTOInstanceLogModelFromJSON(json: any): PagingResponseDTOInstanceLogModel {
    return PagingResponseDTOInstanceLogModelFromJSONTyped(json, false);
}

export function PagingResponseDTOInstanceLogModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagingResponseDTOInstanceLogModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': ((json['response'] as Array<any>).map(InstanceLogModelFromJSON)),
        'total': json['total'],
        'hasNext': json['hasNext'],
        'hasPrevious': json['hasPrevious'],
        'hasContent': json['hasContent'],
    };
}

export function PagingResponseDTOInstanceLogModelToJSON(value?: PagingResponseDTOInstanceLogModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': ((value.response as Array<any>).map(InstanceLogModelToJSON)),
        'total': value.total,
        'hasNext': value.hasNext,
        'hasPrevious': value.hasPrevious,
        'hasContent': value.hasContent,
    };
}

