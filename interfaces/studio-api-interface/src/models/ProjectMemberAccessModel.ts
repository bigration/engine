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
 * @interface ProjectMemberAccessModel
 */
export interface ProjectMemberAccessModel {
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberAccessModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberAccessModel
     */
    projectId: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberAccessModel
     */
    memberUserName?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberAccessModel
     */
    memberUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberAccessModel
     */
    inviteEmail: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof ProjectMemberAccessModel
     */
    permissions: Set<ProjectMemberAccessModelPermissionsEnum>;
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberAccessModel
     */
    status: ProjectMemberAccessModelStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof ProjectMemberAccessModel
     */
    version?: number;
    /**
     * 
     * @type {Date}
     * @memberof ProjectMemberAccessModel
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ProjectMemberAccessModel
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberAccessModel
     */
    userName?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberAccessModel
     */
    userId?: string;
}


/**
 * @export
 */
export const ProjectMemberAccessModelPermissionsEnum = {
    READ_WORKFLOWS: 'READ_WORKFLOWS',
    MODIFY_EXISTING_WORKFLOWS: 'MODIFY_EXISTING_WORKFLOWS',
    CREATE_WORKFLOWS: 'CREATE_WORKFLOWS',
    READ_INSTANCES: 'READ_INSTANCES',
    READ_INSTANCES_LOGS: 'READ_INSTANCES_LOGS',
    TRIGGER_INSTANCES: 'TRIGGER_INSTANCES',
    MODIFY_INSTANCES: 'MODIFY_INSTANCES'
} as const;
export type ProjectMemberAccessModelPermissionsEnum = typeof ProjectMemberAccessModelPermissionsEnum[keyof typeof ProjectMemberAccessModelPermissionsEnum];

/**
 * @export
 */
export const ProjectMemberAccessModelStatusEnum = {
    INVITED: 'INVITED',
    ACCEPTED: 'ACCEPTED',
    REJECTED: 'REJECTED'
} as const;
export type ProjectMemberAccessModelStatusEnum = typeof ProjectMemberAccessModelStatusEnum[keyof typeof ProjectMemberAccessModelStatusEnum];


/**
 * Check if a given object implements the ProjectMemberAccessModel interface.
 */
export function instanceOfProjectMemberAccessModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "inviteEmail" in value;
    isInstance = isInstance && "permissions" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function ProjectMemberAccessModelFromJSON(json: any): ProjectMemberAccessModel {
    return ProjectMemberAccessModelFromJSONTyped(json, false);
}

export function ProjectMemberAccessModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectMemberAccessModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'projectId': json['projectId'],
        'memberUserName': !exists(json, 'memberUserName') ? undefined : json['memberUserName'],
        'memberUserId': !exists(json, 'memberUserId') ? undefined : json['memberUserId'],
        'inviteEmail': json['inviteEmail'],
        'permissions': json['permissions'],
        'status': json['status'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function ProjectMemberAccessModelToJSON(value?: ProjectMemberAccessModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'projectId': value.projectId,
        'memberUserName': value.memberUserName,
        'memberUserId': value.memberUserId,
        'inviteEmail': value.inviteEmail,
        'permissions': Array.from(value.permissions as Set<any>),
        'status': value.status,
        'version': value.version,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'userName': value.userName,
        'userId': value.userId,
    };
}

