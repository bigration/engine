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


import * as runtime from '../runtime';
import type {
  WorkflowTrigger,
} from '../models';
import {
    WorkflowTriggerFromJSON,
    WorkflowTriggerToJSON,
} from '../models';

export interface GetTriggerSettingsRequest {
    workflowId: string;
}

/**
 * EditorSettingsControllerApi - interface
 * 
 * @export
 * @interface EditorSettingsControllerApiInterface
 */
export interface EditorSettingsControllerApiInterface {
    /**
     * 
     * @param {string} workflowId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EditorSettingsControllerApiInterface
     */
    getTriggerSettingsRaw(requestParameters: GetTriggerSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTrigger>>;

    /**
     */
    getTriggerSettings(requestParameters: GetTriggerSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTrigger>;

}

/**
 * 
 */
export class EditorSettingsControllerApi extends runtime.BaseAPI implements EditorSettingsControllerApiInterface {

    /**
     */
    async getTriggerSettingsRaw(requestParameters: GetTriggerSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTrigger>> {
        if (requestParameters.workflowId === null || requestParameters.workflowId === undefined) {
            throw new runtime.RequiredError('workflowId','Required parameter requestParameters.workflowId was null or undefined when calling getTriggerSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/editor/settings/trigger/{workflowId}`.replace(`{${"workflowId"}}`, encodeURIComponent(String(requestParameters.workflowId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowTriggerFromJSON(jsonValue));
    }

    /**
     */
    async getTriggerSettings(requestParameters: GetTriggerSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTrigger> {
        const response = await this.getTriggerSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}