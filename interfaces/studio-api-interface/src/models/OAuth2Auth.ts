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
 * @interface OAuth2Auth
 */
export interface OAuth2Auth {
    /**
     * 
     * @type {string}
     * @memberof OAuth2Auth
     */
    type: OAuth2AuthTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof OAuth2Auth
     */
    accessTokenUrl: string;
    /**
     * 
     * @type {string}
     * @memberof OAuth2Auth
     */
    clientId: string;
    /**
     * 
     * @type {EncryptedValue}
     * @memberof OAuth2Auth
     */
    clientSecret?: EncryptedValue;
    /**
     * 
     * @type {string}
     * @memberof OAuth2Auth
     */
    userName?: string;
    /**
     * 
     * @type {EncryptedValue}
     * @memberof OAuth2Auth
     */
    password?: EncryptedValue;
    /**
     * 
     * @type {string}
     * @memberof OAuth2Auth
     */
    scope?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuth2Auth
     */
    clientAuth: OAuth2AuthClientAuthEnum;
}


/**
 * @export
 */
export const OAuth2AuthTypeEnum = {
    PASSWORD_CREDENTIALS: 'PASSWORD_CREDENTIALS',
    CLIENT_CREDENTIALS: 'CLIENT_CREDENTIALS'
} as const;
export type OAuth2AuthTypeEnum = typeof OAuth2AuthTypeEnum[keyof typeof OAuth2AuthTypeEnum];

/**
 * @export
 */
export const OAuth2AuthClientAuthEnum = {
    HEADER: 'HEADER',
    BODY: 'BODY'
} as const;
export type OAuth2AuthClientAuthEnum = typeof OAuth2AuthClientAuthEnum[keyof typeof OAuth2AuthClientAuthEnum];


/**
 * Check if a given object implements the OAuth2Auth interface.
 */
export function instanceOfOAuth2Auth(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "accessTokenUrl" in value;
    isInstance = isInstance && "clientId" in value;
    isInstance = isInstance && "clientAuth" in value;

    return isInstance;
}

export function OAuth2AuthFromJSON(json: any): OAuth2Auth {
    return OAuth2AuthFromJSONTyped(json, false);
}

export function OAuth2AuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2Auth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'accessTokenUrl': json['accessTokenUrl'],
        'clientId': json['clientId'],
        'clientSecret': !exists(json, 'clientSecret') ? undefined : EncryptedValueFromJSON(json['clientSecret']),
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
        'password': !exists(json, 'password') ? undefined : EncryptedValueFromJSON(json['password']),
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'clientAuth': json['clientAuth'],
    };
}

export function OAuth2AuthToJSON(value?: OAuth2Auth | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'accessTokenUrl': value.accessTokenUrl,
        'clientId': value.clientId,
        'clientSecret': EncryptedValueToJSON(value.clientSecret),
        'userName': value.userName,
        'password': EncryptedValueToJSON(value.password),
        'scope': value.scope,
        'clientAuth': value.clientAuth,
    };
}

