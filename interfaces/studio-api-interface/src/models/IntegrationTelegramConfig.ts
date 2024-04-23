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
import type { EncryptedValue } from './EncryptedValue';
import {
    EncryptedValueFromJSON,
    EncryptedValueFromJSONTyped,
    EncryptedValueToJSON,
} from './EncryptedValue';

/**
 * 
 * @export
 * @interface IntegrationTelegramConfig
 */
export interface IntegrationTelegramConfig {
    /**
     * 
     * @type {EncryptedValue}
     * @memberof IntegrationTelegramConfig
     */
    token: EncryptedValue;
}

/**
 * Check if a given object implements the IntegrationTelegramConfig interface.
 */
export function instanceOfIntegrationTelegramConfig(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "token" in value;

    return isInstance;
}

export function IntegrationTelegramConfigFromJSON(json: any): IntegrationTelegramConfig {
    return IntegrationTelegramConfigFromJSONTyped(json, false);
}

export function IntegrationTelegramConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationTelegramConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': EncryptedValueFromJSON(json['token']),
    };
}

export function IntegrationTelegramConfigToJSON(value?: IntegrationTelegramConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': EncryptedValueToJSON(value.token),
    };
}

