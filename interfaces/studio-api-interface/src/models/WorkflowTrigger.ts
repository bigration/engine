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
import type { Flow } from './Flow';
import {
    FlowFromJSON,
    FlowFromJSONTyped,
    FlowToJSON,
} from './Flow';
import type { TriggerWebhook } from './TriggerWebhook';
import {
    TriggerWebhookFromJSON,
    TriggerWebhookFromJSONTyped,
    TriggerWebhookToJSON,
} from './TriggerWebhook';

/**
 * 
 * @export
 * @interface WorkflowTrigger
 */
export interface WorkflowTrigger {
    /**
     * 
     * @type {string}
     * @memberof WorkflowTrigger
     */
    type: WorkflowTriggerTypeEnum;
    /**
     * 
     * @type {Flow}
     * @memberof WorkflowTrigger
     */
    outgoingFlow?: Flow;
    /**
     * 
     * @type {TriggerWebhook}
     * @memberof WorkflowTrigger
     */
    webhook?: TriggerWebhook;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTrigger
     */
    cron?: string;
}


/**
 * @export
 */
export const WorkflowTriggerTypeEnum = {
    WEBHOOK: 'WEBHOOK',
    MANUAL: 'MANUAL',
    CRON_JOB: 'CRON_JOB'
} as const;
export type WorkflowTriggerTypeEnum = typeof WorkflowTriggerTypeEnum[keyof typeof WorkflowTriggerTypeEnum];


/**
 * Check if a given object implements the WorkflowTrigger interface.
 */
export function instanceOfWorkflowTrigger(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function WorkflowTriggerFromJSON(json: any): WorkflowTrigger {
    return WorkflowTriggerFromJSONTyped(json, false);
}

export function WorkflowTriggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowTrigger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'outgoingFlow': !exists(json, 'outgoingFlow') ? undefined : FlowFromJSON(json['outgoingFlow']),
        'webhook': !exists(json, 'webhook') ? undefined : TriggerWebhookFromJSON(json['webhook']),
        'cron': !exists(json, 'cron') ? undefined : json['cron'],
    };
}

export function WorkflowTriggerToJSON(value?: WorkflowTrigger | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'outgoingFlow': FlowToJSON(value.outgoingFlow),
        'webhook': TriggerWebhookToJSON(value.webhook),
        'cron': value.cron,
    };
}

