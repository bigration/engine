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
 * @interface FlowWithoutType
 */
export interface FlowWithoutType {
    /**
     * 
     * @type {string}
     * @memberof FlowWithoutType
     */
    sourceId: string;
    /**
     * 
     * @type {string}
     * @memberof FlowWithoutType
     */
    sourceHandle: FlowWithoutTypeSourceHandleEnum;
    /**
     * 
     * @type {string}
     * @memberof FlowWithoutType
     */
    targetId: string;
    /**
     * 
     * @type {string}
     * @memberof FlowWithoutType
     */
    targetHandle: FlowWithoutTypeTargetHandleEnum;
}


/**
 * @export
 */
export const FlowWithoutTypeSourceHandleEnum = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D'
} as const;
export type FlowWithoutTypeSourceHandleEnum = typeof FlowWithoutTypeSourceHandleEnum[keyof typeof FlowWithoutTypeSourceHandleEnum];

/**
 * @export
 */
export const FlowWithoutTypeTargetHandleEnum = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D'
} as const;
export type FlowWithoutTypeTargetHandleEnum = typeof FlowWithoutTypeTargetHandleEnum[keyof typeof FlowWithoutTypeTargetHandleEnum];


/**
 * Check if a given object implements the FlowWithoutType interface.
 */
export function instanceOfFlowWithoutType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sourceId" in value;
    isInstance = isInstance && "sourceHandle" in value;
    isInstance = isInstance && "targetId" in value;
    isInstance = isInstance && "targetHandle" in value;

    return isInstance;
}

export function FlowWithoutTypeFromJSON(json: any): FlowWithoutType {
    return FlowWithoutTypeFromJSONTyped(json, false);
}

export function FlowWithoutTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowWithoutType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sourceId': json['sourceId'],
        'sourceHandle': json['sourceHandle'],
        'targetId': json['targetId'],
        'targetHandle': json['targetHandle'],
    };
}

export function FlowWithoutTypeToJSON(value?: FlowWithoutType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sourceId': value.sourceId,
        'sourceHandle': value.sourceHandle,
        'targetId': value.targetId,
        'targetHandle': value.targetHandle,
    };
}

