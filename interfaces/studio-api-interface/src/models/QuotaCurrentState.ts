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
import type { QuotaWorkspaceCurrentState } from './QuotaWorkspaceCurrentState';
import {
    QuotaWorkspaceCurrentStateFromJSON,
    QuotaWorkspaceCurrentStateFromJSONTyped,
    QuotaWorkspaceCurrentStateToJSON,
} from './QuotaWorkspaceCurrentState';
import type { UserQuota } from './UserQuota';
import {
    UserQuotaFromJSON,
    UserQuotaFromJSONTyped,
    UserQuotaToJSON,
} from './UserQuota';

/**
 * 
 * @export
 * @interface QuotaCurrentState
 */
export interface QuotaCurrentState {
    /**
     * 
     * @type {string}
     * @memberof QuotaCurrentState
     */
    accountId: string;
    /**
     * 
     * @type {number}
     * @memberof QuotaCurrentState
     */
    currentWorkspaceCount: number;
    /**
     * 
     * @type {number}
     * @memberof QuotaCurrentState
     */
    currentMembers: number;
    /**
     * 
     * @type {UserQuota}
     * @memberof QuotaCurrentState
     */
    quota: UserQuota;
    /**
     * 
     * @type {{ [key: string]: QuotaWorkspaceCurrentState | undefined; }}
     * @memberof QuotaCurrentState
     */
    workspaces: { [key: string]: QuotaWorkspaceCurrentState | undefined; };
}

/**
 * Check if a given object implements the QuotaCurrentState interface.
 */
export function instanceOfQuotaCurrentState(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "currentWorkspaceCount" in value;
    isInstance = isInstance && "currentMembers" in value;
    isInstance = isInstance && "quota" in value;
    isInstance = isInstance && "workspaces" in value;

    return isInstance;
}

export function QuotaCurrentStateFromJSON(json: any): QuotaCurrentState {
    return QuotaCurrentStateFromJSONTyped(json, false);
}

export function QuotaCurrentStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuotaCurrentState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': json['accountId'],
        'currentWorkspaceCount': json['currentWorkspaceCount'],
        'currentMembers': json['currentMembers'],
        'quota': UserQuotaFromJSON(json['quota']),
        'workspaces': (mapValues(json['workspaces'], QuotaWorkspaceCurrentStateFromJSON)),
    };
}

export function QuotaCurrentStateToJSON(value?: QuotaCurrentState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': value.accountId,
        'currentWorkspaceCount': value.currentWorkspaceCount,
        'currentMembers': value.currentMembers,
        'quota': UserQuotaToJSON(value.quota),
        'workspaces': (mapValues(value.workspaces, QuotaWorkspaceCurrentStateToJSON)),
    };
}
