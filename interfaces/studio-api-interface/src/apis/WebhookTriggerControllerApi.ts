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

export interface TriggerWebhookDeleteRequest {
    workflowIdOrName: string;
}

export interface TriggerWebhookGetRequest {
    workflowIdOrName: string;
}

export interface TriggerWebhookHeadRequest {
    workflowIdOrName: string;
}

export interface TriggerWebhookPatchRequest {
    workflowIdOrName: string;
}

export interface TriggerWebhookPostRequest {
    workflowIdOrName: string;
}

export interface TriggerWebhookPutRequest {
    workflowIdOrName: string;
}

/**
 * WebhookTriggerControllerApi - interface
 * 
 * @export
 * @interface WebhookTriggerControllerApiInterface
 */
export interface WebhookTriggerControllerApiInterface {
    /**
     * 
     * @param {string} workflowIdOrName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookTriggerControllerApiInterface
     */
    triggerWebhookDeleteRaw(requestParameters: TriggerWebhookDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    triggerWebhookDelete(requestParameters: TriggerWebhookDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {string} workflowIdOrName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookTriggerControllerApiInterface
     */
    triggerWebhookGetRaw(requestParameters: TriggerWebhookGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    triggerWebhookGet(requestParameters: TriggerWebhookGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {string} workflowIdOrName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookTriggerControllerApiInterface
     */
    triggerWebhookHeadRaw(requestParameters: TriggerWebhookHeadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    triggerWebhookHead(requestParameters: TriggerWebhookHeadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {string} workflowIdOrName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookTriggerControllerApiInterface
     */
    triggerWebhookPatchRaw(requestParameters: TriggerWebhookPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    triggerWebhookPatch(requestParameters: TriggerWebhookPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {string} workflowIdOrName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookTriggerControllerApiInterface
     */
    triggerWebhookPostRaw(requestParameters: TriggerWebhookPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    triggerWebhookPost(requestParameters: TriggerWebhookPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

    /**
     * 
     * @param {string} workflowIdOrName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookTriggerControllerApiInterface
     */
    triggerWebhookPutRaw(requestParameters: TriggerWebhookPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     */
    triggerWebhookPut(requestParameters: TriggerWebhookPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

}

/**
 * 
 */
export class WebhookTriggerControllerApi extends runtime.BaseAPI implements WebhookTriggerControllerApiInterface {

    /**
     */
    async triggerWebhookDeleteRaw(requestParameters: TriggerWebhookDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.workflowIdOrName === null || requestParameters.workflowIdOrName === undefined) {
            throw new runtime.RequiredError('workflowIdOrName','Required parameter requestParameters.workflowIdOrName was null or undefined when calling triggerWebhookDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/trigger/{workflowIdOrName}`.replace(`{${"workflowIdOrName"}}`, encodeURIComponent(String(requestParameters.workflowIdOrName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async triggerWebhookDelete(requestParameters: TriggerWebhookDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.triggerWebhookDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async triggerWebhookGetRaw(requestParameters: TriggerWebhookGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.workflowIdOrName === null || requestParameters.workflowIdOrName === undefined) {
            throw new runtime.RequiredError('workflowIdOrName','Required parameter requestParameters.workflowIdOrName was null or undefined when calling triggerWebhookGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/trigger/{workflowIdOrName}`.replace(`{${"workflowIdOrName"}}`, encodeURIComponent(String(requestParameters.workflowIdOrName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async triggerWebhookGet(requestParameters: TriggerWebhookGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.triggerWebhookGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async triggerWebhookHeadRaw(requestParameters: TriggerWebhookHeadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.workflowIdOrName === null || requestParameters.workflowIdOrName === undefined) {
            throw new runtime.RequiredError('workflowIdOrName','Required parameter requestParameters.workflowIdOrName was null or undefined when calling triggerWebhookHead.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/trigger/{workflowIdOrName}`.replace(`{${"workflowIdOrName"}}`, encodeURIComponent(String(requestParameters.workflowIdOrName))),
            method: 'HEAD',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async triggerWebhookHead(requestParameters: TriggerWebhookHeadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.triggerWebhookHeadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async triggerWebhookPatchRaw(requestParameters: TriggerWebhookPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.workflowIdOrName === null || requestParameters.workflowIdOrName === undefined) {
            throw new runtime.RequiredError('workflowIdOrName','Required parameter requestParameters.workflowIdOrName was null or undefined when calling triggerWebhookPatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/trigger/{workflowIdOrName}`.replace(`{${"workflowIdOrName"}}`, encodeURIComponent(String(requestParameters.workflowIdOrName))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async triggerWebhookPatch(requestParameters: TriggerWebhookPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.triggerWebhookPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async triggerWebhookPostRaw(requestParameters: TriggerWebhookPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.workflowIdOrName === null || requestParameters.workflowIdOrName === undefined) {
            throw new runtime.RequiredError('workflowIdOrName','Required parameter requestParameters.workflowIdOrName was null or undefined when calling triggerWebhookPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/trigger/{workflowIdOrName}`.replace(`{${"workflowIdOrName"}}`, encodeURIComponent(String(requestParameters.workflowIdOrName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async triggerWebhookPost(requestParameters: TriggerWebhookPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.triggerWebhookPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async triggerWebhookPutRaw(requestParameters: TriggerWebhookPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.workflowIdOrName === null || requestParameters.workflowIdOrName === undefined) {
            throw new runtime.RequiredError('workflowIdOrName','Required parameter requestParameters.workflowIdOrName was null or undefined when calling triggerWebhookPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/trigger/{workflowIdOrName}`.replace(`{${"workflowIdOrName"}}`, encodeURIComponent(String(requestParameters.workflowIdOrName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async triggerWebhookPut(requestParameters: TriggerWebhookPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.triggerWebhookPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}