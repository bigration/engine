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
 * @interface Expression
 */
export interface Expression {
    /**
     * 
     * @type {string}
     * @memberof Expression
     */
    operator: ExpressionOperatorEnum;
    /**
     * 
     * @type {string}
     * @memberof Expression
     */
    leftSide?: string;
    /**
     * 
     * @type {string}
     * @memberof Expression
     */
    rightSide?: string;
}


/**
 * @export
 */
export const ExpressionOperatorEnum = {
    EQUALS: 'EQUALS',
    NOT_EQUALS: 'NOT_EQUALS',
    GREATER_THAN: 'GREATER_THAN',
    GREATER_THAN_EQUALS: 'GREATER_THAN_EQUALS',
    LESS_THAN: 'LESS_THAN',
    LESS_THAN_EQUALS: 'LESS_THAN_EQUALS',
    IS_NULL_OR_EMPTY: 'IS_NULL_OR_EMPTY',
    IS_NOT_NULL_OR_NOT_EMPTY: 'IS_NOT_NULL_OR_NOT_EMPTY',
    CONTAINS: 'CONTAINS'
} as const;
export type ExpressionOperatorEnum = typeof ExpressionOperatorEnum[keyof typeof ExpressionOperatorEnum];


/**
 * Check if a given object implements the Expression interface.
 */
export function instanceOfExpression(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "operator" in value;

    return isInstance;
}

export function ExpressionFromJSON(json: any): Expression {
    return ExpressionFromJSONTyped(json, false);
}

export function ExpressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Expression {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'operator': json['operator'],
        'leftSide': !exists(json, 'leftSide') ? undefined : json['leftSide'],
        'rightSide': !exists(json, 'rightSide') ? undefined : json['rightSide'],
    };
}

export function ExpressionToJSON(value?: Expression | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'operator': value.operator,
        'leftSide': value.leftSide,
        'rightSide': value.rightSide,
    };
}
