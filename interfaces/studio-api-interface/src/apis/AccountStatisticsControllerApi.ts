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
  CalculatedAccountStatisticModel,
} from '../models';
import {
    CalculatedAccountStatisticModelFromJSON,
    CalculatedAccountStatisticModelToJSON,
} from '../models';

export interface AccountStatisticForMonthYearRequest {
    month: number;
    year: number;
}

/**
 * AccountStatisticsControllerApi - interface
 * 
 * @export
 * @interface AccountStatisticsControllerApiInterface
 */
export interface AccountStatisticsControllerApiInterface {
    /**
     * 
     * @param {number} month 
     * @param {number} year 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountStatisticsControllerApiInterface
     */
    accountStatisticForMonthYearRaw(requestParameters: AccountStatisticForMonthYearRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CalculatedAccountStatisticModel>>;

    /**
     */
    accountStatisticForMonthYear(requestParameters: AccountStatisticForMonthYearRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CalculatedAccountStatisticModel>;

}

/**
 * 
 */
export class AccountStatisticsControllerApi extends runtime.BaseAPI implements AccountStatisticsControllerApiInterface {

    /**
     */
    async accountStatisticForMonthYearRaw(requestParameters: AccountStatisticForMonthYearRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CalculatedAccountStatisticModel>> {
        if (requestParameters.month === null || requestParameters.month === undefined) {
            throw new runtime.RequiredError('month','Required parameter requestParameters.month was null or undefined when calling accountStatisticForMonthYear.');
        }

        if (requestParameters.year === null || requestParameters.year === undefined) {
            throw new runtime.RequiredError('year','Required parameter requestParameters.year was null or undefined when calling accountStatisticForMonthYear.');
        }

        const queryParameters: any = {};

        if (requestParameters.month !== undefined) {
            queryParameters['month'] = requestParameters.month;
        }

        if (requestParameters.year !== undefined) {
            queryParameters['year'] = requestParameters.year;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account-statistics/month-year`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CalculatedAccountStatisticModelFromJSON(jsonValue));
    }

    /**
     */
    async accountStatisticForMonthYear(requestParameters: AccountStatisticForMonthYearRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CalculatedAccountStatisticModel> {
        const response = await this.accountStatisticForMonthYearRaw(requestParameters, initOverrides);
        return await response.value();
    }

}