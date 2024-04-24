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
import type { GlobalVariableToUpdate } from './GlobalVariableToUpdate';
import {
    GlobalVariableToUpdateFromJSON,
    GlobalVariableToUpdateFromJSONTyped,
    GlobalVariableToUpdateToJSON,
} from './GlobalVariableToUpdate';

/**
 * 
 * @export
 * @interface GlobalVariablesAction
 */
export interface GlobalVariablesAction {
    /**
     * 
     * @type {Array<GlobalVariableToUpdate>}
     * @memberof GlobalVariablesAction
     */
    variables: Array<GlobalVariableToUpdate>;
}

/**
 * Check if a given object implements the GlobalVariablesAction interface.
 */
export function instanceOfGlobalVariablesAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "variables" in value;

    return isInstance;
}

export function GlobalVariablesActionFromJSON(json: any): GlobalVariablesAction {
    return GlobalVariablesActionFromJSONTyped(json, false);
}

export function GlobalVariablesActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalVariablesAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'variables': ((json['variables'] as Array<any>).map(GlobalVariableToUpdateFromJSON)),
    };
}

export function GlobalVariablesActionToJSON(value?: GlobalVariablesAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'variables': ((value.variables as Array<any>).map(GlobalVariableToUpdateToJSON)),
    };
}
