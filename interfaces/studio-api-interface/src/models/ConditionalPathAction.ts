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
import type { Expression } from './Expression';
import {
    ExpressionFromJSON,
    ExpressionFromJSONTyped,
    ExpressionToJSON,
} from './Expression';

/**
 * 
 * @export
 * @interface ConditionalPathAction
 */
export interface ConditionalPathAction {
    /**
     * 
     * @type {string}
     * @memberof ConditionalPathAction
     */
    type: ConditionalPathActionTypeEnum;
    /**
     * 
     * @type {Array<Expression>}
     * @memberof ConditionalPathAction
     */
    groups?: Array<Expression>;
}


/**
 * @export
 */
export const ConditionalPathActionTypeEnum = {
    AND: 'AND',
    OR: 'OR'
} as const;
export type ConditionalPathActionTypeEnum = typeof ConditionalPathActionTypeEnum[keyof typeof ConditionalPathActionTypeEnum];


/**
 * Check if a given object implements the ConditionalPathAction interface.
 */
export function instanceOfConditionalPathAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ConditionalPathActionFromJSON(json: any): ConditionalPathAction {
    return ConditionalPathActionFromJSONTyped(json, false);
}

export function ConditionalPathActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConditionalPathAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'groups': !exists(json, 'groups') ? undefined : ((json['groups'] as Array<any>).map(ExpressionFromJSON)),
    };
}

export function ConditionalPathActionToJSON(value?: ConditionalPathAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'groups': value.groups === undefined ? undefined : ((value.groups as Array<any>).map(ExpressionToJSON)),
    };
}

