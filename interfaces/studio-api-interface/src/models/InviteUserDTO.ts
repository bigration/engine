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
 * @interface InviteUserDTO
 */
export interface InviteUserDTO {
    /**
     * 
     * @type {string}
     * @memberof InviteUserDTO
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof InviteUserDTO
     */
    workspaceId: string;
}

/**
 * Check if a given object implements the InviteUserDTO interface.
 */
export function instanceOfInviteUserDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "workspaceId" in value;

    return isInstance;
}

export function InviteUserDTOFromJSON(json: any): InviteUserDTO {
    return InviteUserDTOFromJSONTyped(json, false);
}

export function InviteUserDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteUserDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'workspaceId': json['workspaceId'],
    };
}

export function InviteUserDTOToJSON(value?: InviteUserDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'workspaceId': value.workspaceId,
    };
}

