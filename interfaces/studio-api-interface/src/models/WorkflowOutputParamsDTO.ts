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
import type { ActionOutputParamsDTO } from './ActionOutputParamsDTO';
import {
    ActionOutputParamsDTOFromJSON,
    ActionOutputParamsDTOFromJSONTyped,
    ActionOutputParamsDTOToJSON,
} from './ActionOutputParamsDTO';
import type { OutputParameter } from './OutputParameter';
import {
    OutputParameterFromJSON,
    OutputParameterFromJSONTyped,
    OutputParameterToJSON,
} from './OutputParameter';

/**
 * 
 * @export
 * @interface WorkflowOutputParamsDTO
 */
export interface WorkflowOutputParamsDTO {
    /**
     * 
     * @type {Array<ActionOutputParamsDTO>}
     * @memberof WorkflowOutputParamsDTO
     */
    actions?: Array<ActionOutputParamsDTO>;
    /**
     * 
     * @type {Array<OutputParameter>}
     * @memberof WorkflowOutputParamsDTO
     */
    workflowOutputParameters?: Array<OutputParameter>;
}

/**
 * Check if a given object implements the WorkflowOutputParamsDTO interface.
 */
export function instanceOfWorkflowOutputParamsDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WorkflowOutputParamsDTOFromJSON(json: any): WorkflowOutputParamsDTO {
    return WorkflowOutputParamsDTOFromJSONTyped(json, false);
}

export function WorkflowOutputParamsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowOutputParamsDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actions': !exists(json, 'actions') ? undefined : ((json['actions'] as Array<any>).map(ActionOutputParamsDTOFromJSON)),
        'workflowOutputParameters': !exists(json, 'workflowOutputParameters') ? undefined : ((json['workflowOutputParameters'] as Array<any>).map(OutputParameterFromJSON)),
    };
}

export function WorkflowOutputParamsDTOToJSON(value?: WorkflowOutputParamsDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actions': value.actions === undefined ? undefined : ((value.actions as Array<any>).map(ActionOutputParamsDTOToJSON)),
        'workflowOutputParameters': value.workflowOutputParameters === undefined ? undefined : ((value.workflowOutputParameters as Array<any>).map(OutputParameterToJSON)),
    };
}

