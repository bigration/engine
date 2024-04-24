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
import type { EngineQuota } from './EngineQuota';
import {
    EngineQuotaFromJSON,
    EngineQuotaFromJSONTyped,
    EngineQuotaToJSON,
} from './EngineQuota';

/**
 * 
 * @export
 * @interface UserQuota
 */
export interface UserQuota {
    /**
     * 
     * @type {number}
     * @memberof UserQuota
     */
    actionsExecute: number;
    /**
     * 
     * @type {number}
     * @memberof UserQuota
     */
    projectsCount: number;
    /**
     * 
     * @type {number}
     * @memberof UserQuota
     */
    workflowsCount: number;
    /**
     * 
     * @type {number}
     * @memberof UserQuota
     */
    workspaceCount: number;
    /**
     * 
     * @type {number}
     * @memberof UserQuota
     */
    members: number;
    /**
     * 
     * @type {number}
     * @memberof UserQuota
     */
    rotationPeriod: number;
    /**
     * 
     * @type {EngineQuota}
     * @memberof UserQuota
     */
    engine: EngineQuota;
}

/**
 * Check if a given object implements the UserQuota interface.
 */
export function instanceOfUserQuota(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "actionsExecute" in value;
    isInstance = isInstance && "projectsCount" in value;
    isInstance = isInstance && "workflowsCount" in value;
    isInstance = isInstance && "workspaceCount" in value;
    isInstance = isInstance && "members" in value;
    isInstance = isInstance && "rotationPeriod" in value;
    isInstance = isInstance && "engine" in value;

    return isInstance;
}

export function UserQuotaFromJSON(json: any): UserQuota {
    return UserQuotaFromJSONTyped(json, false);
}

export function UserQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserQuota {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionsExecute': json['actionsExecute'],
        'projectsCount': json['projectsCount'],
        'workflowsCount': json['workflowsCount'],
        'workspaceCount': json['workspaceCount'],
        'members': json['members'],
        'rotationPeriod': json['rotationPeriod'],
        'engine': EngineQuotaFromJSON(json['engine']),
    };
}

export function UserQuotaToJSON(value?: UserQuota | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionsExecute': value.actionsExecute,
        'projectsCount': value.projectsCount,
        'workflowsCount': value.workflowsCount,
        'workspaceCount': value.workspaceCount,
        'members': value.members,
        'rotationPeriod': value.rotationPeriod,
        'engine': EngineQuotaToJSON(value.engine),
    };
}
