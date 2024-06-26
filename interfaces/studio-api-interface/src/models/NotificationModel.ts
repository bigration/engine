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
 * @interface NotificationModel
 */
export interface NotificationModel {
    /**
     * 
     * @type {string}
     * @memberof NotificationModel
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof NotificationModel
     */
    version?: number;
    /**
     * 
     * @type {Date}
     * @memberof NotificationModel
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof NotificationModel
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof NotificationModel
     */
    type: NotificationModelTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof NotificationModel
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationModel
     */
    workflowId?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationModel
     */
    workspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationModel
     */
    instanceId?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationModel
     */
    message?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationModel
     */
    read: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationModel
     */
    emailSent: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotificationModel
     */
    userName?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationModel
     */
    userId?: string;
}


/**
 * @export
 */
export const NotificationModelTypeEnum = {
    ERROR: 'ERROR',
    INFO: 'INFO'
} as const;
export type NotificationModelTypeEnum = typeof NotificationModelTypeEnum[keyof typeof NotificationModelTypeEnum];


/**
 * Check if a given object implements the NotificationModel interface.
 */
export function instanceOfNotificationModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "read" in value;
    isInstance = isInstance && "emailSent" in value;

    return isInstance;
}

export function NotificationModelFromJSON(json: any): NotificationModel {
    return NotificationModelFromJSONTyped(json, false);
}

export function NotificationModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'type': json['type'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'workflowId': !exists(json, 'workflowId') ? undefined : json['workflowId'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
        'instanceId': !exists(json, 'instanceId') ? undefined : json['instanceId'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'read': json['read'],
        'emailSent': json['emailSent'],
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function NotificationModelToJSON(value?: NotificationModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'version': value.version,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'type': value.type,
        'projectId': value.projectId,
        'workflowId': value.workflowId,
        'workspaceId': value.workspaceId,
        'instanceId': value.instanceId,
        'message': value.message,
        'read': value.read,
        'emailSent': value.emailSent,
        'userName': value.userName,
        'userId': value.userId,
    };
}

