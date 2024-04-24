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
  AccountModel,
} from '../models';
import {
    AccountModelFromJSON,
    AccountModelToJSON,
} from '../models';

export interface CreateCheckoutSessionRequest {
    price: string;
    callBackUrl: string;
    currency?: string;
    locale?: CreateCheckoutSessionLocaleEnum;
}

export interface CreatePortalSessionRequest {
    callBackUrl: string;
    locale?: CreatePortalSessionLocaleEnum;
}

/**
 * AccountControllerApi - interface
 * 
 * @export
 * @interface AccountControllerApiInterface
 */
export interface AccountControllerApiInterface {
    /**
     * 
     * @param {string} price 
     * @param {string} callBackUrl 
     * @param {string} [currency] 
     * @param {'AUTO' | 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'EN_GB' | 'ES' | 'ES_419' | 'ET' | 'FI' | 'FIL' | 'FR' | 'FR_CA' | 'HR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'MS' | 'MT' | 'NB' | 'NL' | 'PL' | 'PT' | 'PT_BR' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TH' | 'TR' | 'VI' | 'ZH' | 'ZH_HK' | 'ZH_TW'} [locale] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountControllerApiInterface
     */
    createCheckoutSessionRaw(requestParameters: CreateCheckoutSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
     */
    createCheckoutSession(requestParameters: CreateCheckoutSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
     * 
     * @param {string} callBackUrl 
     * @param {'AUTO' | 'BG' | 'CS' | 'DA' | 'DE' | 'EL' | 'EN' | 'EN_AU' | 'EN_CA' | 'EN_GB' | 'EN_IE' | 'EN_IN' | 'EN_NZ' | 'EN_SG' | 'ES' | 'ES_419' | 'ET' | 'FI' | 'FIL' | 'FR' | 'FR_CA' | 'HR' | 'HU' | 'ID' | 'IT' | 'JA' | 'KO' | 'LT' | 'LV' | 'MS' | 'MT' | 'NB' | 'NL' | 'PL' | 'PT' | 'PT_BR' | 'RO' | 'RU' | 'SK' | 'SL' | 'SV' | 'TH' | 'TR' | 'VI' | 'ZH' | 'ZH_HK' | 'ZH_TW'} [locale] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountControllerApiInterface
     */
    createPortalSessionRaw(requestParameters: CreatePortalSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
     */
    createPortalSession(requestParameters: CreatePortalSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountControllerApiInterface
     */
    verifyCustomerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountModel>>;

    /**
     */
    verifyCustomer(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountModel>;

}

/**
 * 
 */
export class AccountControllerApi extends runtime.BaseAPI implements AccountControllerApiInterface {

    /**
     */
    async createCheckoutSessionRaw(requestParameters: CreateCheckoutSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.price === null || requestParameters.price === undefined) {
            throw new runtime.RequiredError('price','Required parameter requestParameters.price was null or undefined when calling createCheckoutSession.');
        }

        if (requestParameters.callBackUrl === null || requestParameters.callBackUrl === undefined) {
            throw new runtime.RequiredError('callBackUrl','Required parameter requestParameters.callBackUrl was null or undefined when calling createCheckoutSession.');
        }

        const queryParameters: any = {};

        if (requestParameters.price !== undefined) {
            queryParameters['price'] = requestParameters.price;
        }

        if (requestParameters.callBackUrl !== undefined) {
            queryParameters['callBackUrl'] = requestParameters.callBackUrl;
        }

        if (requestParameters.currency !== undefined) {
            queryParameters['currency'] = requestParameters.currency;
        }

        if (requestParameters.locale !== undefined) {
            queryParameters['locale'] = requestParameters.locale;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/create-checkout-session`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async createCheckoutSession(requestParameters: CreateCheckoutSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.createCheckoutSessionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createPortalSessionRaw(requestParameters: CreatePortalSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.callBackUrl === null || requestParameters.callBackUrl === undefined) {
            throw new runtime.RequiredError('callBackUrl','Required parameter requestParameters.callBackUrl was null or undefined when calling createPortalSession.');
        }

        const queryParameters: any = {};

        if (requestParameters.callBackUrl !== undefined) {
            queryParameters['callBackUrl'] = requestParameters.callBackUrl;
        }

        if (requestParameters.locale !== undefined) {
            queryParameters['locale'] = requestParameters.locale;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/create-portal-session`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async createPortalSession(requestParameters: CreatePortalSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.createPortalSessionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async verifyCustomerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/verify-customer`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountModelFromJSON(jsonValue));
    }

    /**
     */
    async verifyCustomer(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountModel> {
        const response = await this.verifyCustomerRaw(initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CreateCheckoutSessionLocaleEnum = {
    AUTO: 'AUTO',
    BG: 'BG',
    CS: 'CS',
    DA: 'DA',
    DE: 'DE',
    EL: 'EL',
    EN: 'EN',
    EN_GB: 'EN_GB',
    ES: 'ES',
    ES_419: 'ES_419',
    ET: 'ET',
    FI: 'FI',
    FIL: 'FIL',
    FR: 'FR',
    FR_CA: 'FR_CA',
    HR: 'HR',
    HU: 'HU',
    ID: 'ID',
    IT: 'IT',
    JA: 'JA',
    KO: 'KO',
    LT: 'LT',
    LV: 'LV',
    MS: 'MS',
    MT: 'MT',
    NB: 'NB',
    NL: 'NL',
    PL: 'PL',
    PT: 'PT',
    PT_BR: 'PT_BR',
    RO: 'RO',
    RU: 'RU',
    SK: 'SK',
    SL: 'SL',
    SV: 'SV',
    TH: 'TH',
    TR: 'TR',
    VI: 'VI',
    ZH: 'ZH',
    ZH_HK: 'ZH_HK',
    ZH_TW: 'ZH_TW'
} as const;
export type CreateCheckoutSessionLocaleEnum = typeof CreateCheckoutSessionLocaleEnum[keyof typeof CreateCheckoutSessionLocaleEnum];
/**
 * @export
 */
export const CreatePortalSessionLocaleEnum = {
    AUTO: 'AUTO',
    BG: 'BG',
    CS: 'CS',
    DA: 'DA',
    DE: 'DE',
    EL: 'EL',
    EN: 'EN',
    EN_AU: 'EN_AU',
    EN_CA: 'EN_CA',
    EN_GB: 'EN_GB',
    EN_IE: 'EN_IE',
    EN_IN: 'EN_IN',
    EN_NZ: 'EN_NZ',
    EN_SG: 'EN_SG',
    ES: 'ES',
    ES_419: 'ES_419',
    ET: 'ET',
    FI: 'FI',
    FIL: 'FIL',
    FR: 'FR',
    FR_CA: 'FR_CA',
    HR: 'HR',
    HU: 'HU',
    ID: 'ID',
    IT: 'IT',
    JA: 'JA',
    KO: 'KO',
    LT: 'LT',
    LV: 'LV',
    MS: 'MS',
    MT: 'MT',
    NB: 'NB',
    NL: 'NL',
    PL: 'PL',
    PT: 'PT',
    PT_BR: 'PT_BR',
    RO: 'RO',
    RU: 'RU',
    SK: 'SK',
    SL: 'SL',
    SV: 'SV',
    TH: 'TH',
    TR: 'TR',
    VI: 'VI',
    ZH: 'ZH',
    ZH_HK: 'ZH_HK',
    ZH_TW: 'ZH_TW'
} as const;
export type CreatePortalSessionLocaleEnum = typeof CreatePortalSessionLocaleEnum[keyof typeof CreatePortalSessionLocaleEnum];