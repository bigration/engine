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
import type { ProjectMemberAccessModel } from './ProjectMemberAccessModel';
import {
    ProjectMemberAccessModelFromJSON,
    ProjectMemberAccessModelFromJSONTyped,
    ProjectMemberAccessModelToJSON,
} from './ProjectMemberAccessModel';

/**
 * 
 * @export
 * @interface PagingResponseDTOProjectMemberAccessModel
 */
export interface PagingResponseDTOProjectMemberAccessModel {
    /**
     * 
     * @type {Array<ProjectMemberAccessModel>}
     * @memberof PagingResponseDTOProjectMemberAccessModel
     */
    response: Array<ProjectMemberAccessModel>;
    /**
     * 
     * @type {number}
     * @memberof PagingResponseDTOProjectMemberAccessModel
     */
    total: number;
    /**
     * 
     * @type {boolean}
     * @memberof PagingResponseDTOProjectMemberAccessModel
     */
    hasNext: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingResponseDTOProjectMemberAccessModel
     */
    hasPrevious: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagingResponseDTOProjectMemberAccessModel
     */
    hasContent: boolean;
}

/**
 * Check if a given object implements the PagingResponseDTOProjectMemberAccessModel interface.
 */
export function instanceOfPagingResponseDTOProjectMemberAccessModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "response" in value;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "hasNext" in value;
    isInstance = isInstance && "hasPrevious" in value;
    isInstance = isInstance && "hasContent" in value;

    return isInstance;
}

export function PagingResponseDTOProjectMemberAccessModelFromJSON(json: any): PagingResponseDTOProjectMemberAccessModel {
    return PagingResponseDTOProjectMemberAccessModelFromJSONTyped(json, false);
}

export function PagingResponseDTOProjectMemberAccessModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagingResponseDTOProjectMemberAccessModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': ((json['response'] as Array<any>).map(ProjectMemberAccessModelFromJSON)),
        'total': json['total'],
        'hasNext': json['hasNext'],
        'hasPrevious': json['hasPrevious'],
        'hasContent': json['hasContent'],
    };
}

export function PagingResponseDTOProjectMemberAccessModelToJSON(value?: PagingResponseDTOProjectMemberAccessModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': ((value.response as Array<any>).map(ProjectMemberAccessModelToJSON)),
        'total': value.total,
        'hasNext': value.hasNext,
        'hasPrevious': value.hasPrevious,
        'hasContent': value.hasContent,
    };
}

