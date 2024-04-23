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
 * @interface SwitchCaseAction
 */
export interface SwitchCaseAction {
    /**
     * 
     * @type {string}
     * @memberof SwitchCaseAction
     */
    key: string;
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof SwitchCaseAction
     */
    cases: { [key: string]: string | undefined; };
    /**
     * 
     * @type {string}
     * @memberof SwitchCaseAction
     */
    defaultPath?: SwitchCaseActionDefaultPathEnum;
}


/**
 * @export
 */
export const SwitchCaseActionDefaultPathEnum = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D'
} as const;
export type SwitchCaseActionDefaultPathEnum = typeof SwitchCaseActionDefaultPathEnum[keyof typeof SwitchCaseActionDefaultPathEnum];


/**
 * Check if a given object implements the SwitchCaseAction interface.
 */
export function instanceOfSwitchCaseAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "cases" in value;

    return isInstance;
}

export function SwitchCaseActionFromJSON(json: any): SwitchCaseAction {
    return SwitchCaseActionFromJSONTyped(json, false);
}

export function SwitchCaseActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwitchCaseAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'cases': json['cases'],
        'defaultPath': !exists(json, 'defaultPath') ? undefined : json['defaultPath'],
    };
}

export function SwitchCaseActionToJSON(value?: SwitchCaseAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'cases': value.cases,
        'defaultPath': value.defaultPath,
    };
}

