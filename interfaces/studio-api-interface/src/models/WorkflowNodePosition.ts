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
 * @interface WorkflowNodePosition
 */
export interface WorkflowNodePosition {
    /**
     * 
     * @type {number}
     * @memberof WorkflowNodePosition
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof WorkflowNodePosition
     */
    y: number;
}

/**
 * Check if a given object implements the WorkflowNodePosition interface.
 */
export function instanceOfWorkflowNodePosition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;

    return isInstance;
}

export function WorkflowNodePositionFromJSON(json: any): WorkflowNodePosition {
    return WorkflowNodePositionFromJSONTyped(json, false);
}

export function WorkflowNodePositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowNodePosition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
    };
}

export function WorkflowNodePositionToJSON(value?: WorkflowNodePosition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'x': value.x,
        'y': value.y,
    };
}
