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
import type { GlobalVariableDTO } from './GlobalVariableDTO';
import {
    GlobalVariableDTOFromJSON,
    GlobalVariableDTOFromJSONTyped,
    GlobalVariableDTOToJSON,
} from './GlobalVariableDTO';
import type { IntegrationModel } from './IntegrationModel';
import {
    IntegrationModelFromJSON,
    IntegrationModelFromJSONTyped,
    IntegrationModelToJSON,
} from './IntegrationModel';
import type { WorkflowModel } from './WorkflowModel';
import {
    WorkflowModelFromJSON,
    WorkflowModelFromJSONTyped,
    WorkflowModelToJSON,
} from './WorkflowModel';

/**
 * 
 * @export
 * @interface InstanceModel
 */
export interface InstanceModel {
    /**
     * 
     * @type {string}
     * @memberof InstanceModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof InstanceModel
     */
    triggeredBy: InstanceModelTriggeredByEnum;
    /**
     * 
     * @type {string}
     * @memberof InstanceModel
     */
    status: InstanceModelStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof InstanceModel
     */
    forceStop?: boolean;
    /**
     * 
     * @type {WorkflowModel}
     * @memberof InstanceModel
     */
    workflow: WorkflowModel;
    /**
     * 
     * @type {Array<string>}
     * @memberof InstanceModel
     */
    instanceActions: Array<string>;
    /**
     * 
     * @type {{ [key: string]: object | undefined; }}
     * @memberof InstanceModel
     */
    outputValues?: { [key: string]: object | undefined; };
    /**
     * 
     * @type {{ [key: string]: object | undefined; }}
     * @memberof InstanceModel
     */
    tempVariables: { [key: string]: object | undefined; };
    /**
     * 
     * @type {{ [key: string]: GlobalVariableDTO | undefined; }}
     * @memberof InstanceModel
     */
    globalVariables: { [key: string]: GlobalVariableDTO | undefined; };
    /**
     * 
     * @type {{ [key: string]: IntegrationModel | undefined; }}
     * @memberof InstanceModel
     */
    fetchedIntegrations: { [key: string]: IntegrationModel | undefined; };
    /**
     * 
     * @type {Date}
     * @memberof InstanceModel
     */
    archiveDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof InstanceModel
     */
    version?: number;
    /**
     * 
     * @type {Date}
     * @memberof InstanceModel
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof InstanceModel
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof InstanceModel
     */
    userName?: string;
    /**
     * 
     * @type {string}
     * @memberof InstanceModel
     */
    userId?: string;
}


/**
 * @export
 */
export const InstanceModelTriggeredByEnum = {
    WEBHOOK: 'WEBHOOK',
    MANUAL: 'MANUAL',
    CRON_JOB: 'CRON_JOB'
} as const;
export type InstanceModelTriggeredByEnum = typeof InstanceModelTriggeredByEnum[keyof typeof InstanceModelTriggeredByEnum];

/**
 * @export
 */
export const InstanceModelStatusEnum = {
    READY: 'READY',
    RUNNING: 'RUNNING',
    ERROR: 'ERROR',
    FINISHED: 'FINISHED',
    OUT_OF_QUOTA: 'OUT_OF_QUOTA'
} as const;
export type InstanceModelStatusEnum = typeof InstanceModelStatusEnum[keyof typeof InstanceModelStatusEnum];


/**
 * Check if a given object implements the InstanceModel interface.
 */
export function instanceOfInstanceModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "triggeredBy" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "workflow" in value;
    isInstance = isInstance && "instanceActions" in value;
    isInstance = isInstance && "tempVariables" in value;
    isInstance = isInstance && "globalVariables" in value;
    isInstance = isInstance && "fetchedIntegrations" in value;

    return isInstance;
}

export function InstanceModelFromJSON(json: any): InstanceModel {
    return InstanceModelFromJSONTyped(json, false);
}

export function InstanceModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstanceModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'triggeredBy': json['triggeredBy'],
        'status': json['status'],
        'forceStop': !exists(json, 'forceStop') ? undefined : json['forceStop'],
        'workflow': WorkflowModelFromJSON(json['workflow']),
        'instanceActions': json['instanceActions'],
        'outputValues': !exists(json, 'outputValues') ? undefined : json['outputValues'],
        'tempVariables': json['tempVariables'],
        'globalVariables': (mapValues(json['globalVariables'], GlobalVariableDTOFromJSON)),
        'fetchedIntegrations': (mapValues(json['fetchedIntegrations'], IntegrationModelFromJSON)),
        'archiveDate': !exists(json, 'archiveDate') ? undefined : (new Date(json['archiveDate'])),
        'version': !exists(json, 'version') ? undefined : json['version'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function InstanceModelToJSON(value?: InstanceModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'triggeredBy': value.triggeredBy,
        'status': value.status,
        'forceStop': value.forceStop,
        'workflow': WorkflowModelToJSON(value.workflow),
        'instanceActions': value.instanceActions,
        'outputValues': value.outputValues,
        'tempVariables': value.tempVariables,
        'globalVariables': (mapValues(value.globalVariables, GlobalVariableDTOToJSON)),
        'fetchedIntegrations': (mapValues(value.fetchedIntegrations, IntegrationModelToJSON)),
        'archiveDate': value.archiveDate === undefined ? undefined : (value.archiveDate.toISOString().substr(0,10)),
        'version': value.version,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'userName': value.userName,
        'userId': value.userId,
    };
}

