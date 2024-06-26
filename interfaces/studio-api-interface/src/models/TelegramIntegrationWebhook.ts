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
 * @interface TelegramIntegrationWebhook
 */
export interface TelegramIntegrationWebhook {
    /**
     * 
     * @type {string}
     * @memberof TelegramIntegrationWebhook
     */
    integrationId: string;
}

/**
 * Check if a given object implements the TelegramIntegrationWebhook interface.
 */
export function instanceOfTelegramIntegrationWebhook(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "integrationId" in value;

    return isInstance;
}

export function TelegramIntegrationWebhookFromJSON(json: any): TelegramIntegrationWebhook {
    return TelegramIntegrationWebhookFromJSONTyped(json, false);
}

export function TelegramIntegrationWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelegramIntegrationWebhook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'integrationId': json['integrationId'],
    };
}

export function TelegramIntegrationWebhookToJSON(value?: TelegramIntegrationWebhook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'integrationId': value.integrationId,
    };
}

