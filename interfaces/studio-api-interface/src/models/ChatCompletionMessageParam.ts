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
 * @interface ChatCompletionMessageParam
 */
export interface ChatCompletionMessageParam {
    /**
     * 
     * @type {string}
     * @memberof ChatCompletionMessageParam
     */
    role: string;
    /**
     * 
     * @type {string}
     * @memberof ChatCompletionMessageParam
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof ChatCompletionMessageParam
     */
    name?: string;
}

/**
 * Check if a given object implements the ChatCompletionMessageParam interface.
 */
export function instanceOfChatCompletionMessageParam(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function ChatCompletionMessageParamFromJSON(json: any): ChatCompletionMessageParam {
    return ChatCompletionMessageParamFromJSONTyped(json, false);
}

export function ChatCompletionMessageParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatCompletionMessageParam {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'role': json['role'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ChatCompletionMessageParamToJSON(value?: ChatCompletionMessageParam | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'role': value.role,
        'content': value.content,
        'name': value.name,
    };
}
