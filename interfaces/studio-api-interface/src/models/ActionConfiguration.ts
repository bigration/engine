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
import type { ConditionalPathAction } from './ConditionalPathAction';
import {
    ConditionalPathActionFromJSON,
    ConditionalPathActionFromJSONTyped,
    ConditionalPathActionToJSON,
} from './ConditionalPathAction';
import type { DataManipulation } from './DataManipulation';
import {
    DataManipulationFromJSON,
    DataManipulationFromJSONTyped,
    DataManipulationToJSON,
} from './DataManipulation';
import type { DatabaseAction } from './DatabaseAction';
import {
    DatabaseActionFromJSON,
    DatabaseActionFromJSONTyped,
    DatabaseActionToJSON,
} from './DatabaseAction';
import type { FilterAction } from './FilterAction';
import {
    FilterActionFromJSON,
    FilterActionFromJSONTyped,
    FilterActionToJSON,
} from './FilterAction';
import type { FindAndTransformAction } from './FindAndTransformAction';
import {
    FindAndTransformActionFromJSON,
    FindAndTransformActionFromJSONTyped,
    FindAndTransformActionToJSON,
} from './FindAndTransformAction';
import type { GlobalVariablesAction } from './GlobalVariablesAction';
import {
    GlobalVariablesActionFromJSON,
    GlobalVariablesActionFromJSONTyped,
    GlobalVariablesActionToJSON,
} from './GlobalVariablesAction';
import type { LoggerAction } from './LoggerAction';
import {
    LoggerActionFromJSON,
    LoggerActionFromJSONTyped,
    LoggerActionToJSON,
} from './LoggerAction';
import type { LoopAction } from './LoopAction';
import {
    LoopActionFromJSON,
    LoopActionFromJSONTyped,
    LoopActionToJSON,
} from './LoopAction';
import type { MailAction } from './MailAction';
import {
    MailActionFromJSON,
    MailActionFromJSONTyped,
    MailActionToJSON,
} from './MailAction';
import type { MultiConditionalPathAction } from './MultiConditionalPathAction';
import {
    MultiConditionalPathActionFromJSON,
    MultiConditionalPathActionFromJSONTyped,
    MultiConditionalPathActionToJSON,
} from './MultiConditionalPathAction';
import type { OpenAiAction } from './OpenAiAction';
import {
    OpenAiActionFromJSON,
    OpenAiActionFromJSONTyped,
    OpenAiActionToJSON,
} from './OpenAiAction';
import type { ParallelAction } from './ParallelAction';
import {
    ParallelActionFromJSON,
    ParallelActionFromJSONTyped,
    ParallelActionToJSON,
} from './ParallelAction';
import type { RegexAction } from './RegexAction';
import {
    RegexActionFromJSON,
    RegexActionFromJSONTyped,
    RegexActionToJSON,
} from './RegexAction';
import type { RestAction } from './RestAction';
import {
    RestActionFromJSON,
    RestActionFromJSONTyped,
    RestActionToJSON,
} from './RestAction';
import type { SwitchCaseAction } from './SwitchCaseAction';
import {
    SwitchCaseActionFromJSON,
    SwitchCaseActionFromJSONTyped,
    SwitchCaseActionToJSON,
} from './SwitchCaseAction';
import type { TelegramAction } from './TelegramAction';
import {
    TelegramActionFromJSON,
    TelegramActionFromJSONTyped,
    TelegramActionToJSON,
} from './TelegramAction';
import type { ValueGetterAction } from './ValueGetterAction';
import {
    ValueGetterActionFromJSON,
    ValueGetterActionFromJSONTyped,
    ValueGetterActionToJSON,
} from './ValueGetterAction';
import type { WorkflowEventAction } from './WorkflowEventAction';
import {
    WorkflowEventActionFromJSON,
    WorkflowEventActionFromJSONTyped,
    WorkflowEventActionToJSON,
} from './WorkflowEventAction';

/**
 * 
 * @export
 * @interface ActionConfiguration
 */
export interface ActionConfiguration {
    /**
     * 
     * @type {RestAction}
     * @memberof ActionConfiguration
     */
    rest?: RestAction;
    /**
     * 
     * @type {MailAction}
     * @memberof ActionConfiguration
     */
    mail?: MailAction;
    /**
     * 
     * @type {TelegramAction}
     * @memberof ActionConfiguration
     */
    telegram?: TelegramAction;
    /**
     * 
     * @type {LoopAction}
     * @memberof ActionConfiguration
     */
    loop?: LoopAction;
    /**
     * 
     * @type {ParallelAction}
     * @memberof ActionConfiguration
     */
    parallel?: ParallelAction;
    /**
     * 
     * @type {FilterAction}
     * @memberof ActionConfiguration
     */
    filter?: FilterAction;
    /**
     * 
     * @type {ValueGetterAction}
     * @memberof ActionConfiguration
     */
    valueGetter?: ValueGetterAction;
    /**
     * 
     * @type {RegexAction}
     * @memberof ActionConfiguration
     */
    regex?: RegexAction;
    /**
     * 
     * @type {ConditionalPathAction}
     * @memberof ActionConfiguration
     */
    conditionalPath?: ConditionalPathAction;
    /**
     * 
     * @type {MultiConditionalPathAction}
     * @memberof ActionConfiguration
     */
    multiConditionalPath?: MultiConditionalPathAction;
    /**
     * 
     * @type {SwitchCaseAction}
     * @memberof ActionConfiguration
     */
    switchCase?: SwitchCaseAction;
    /**
     * 
     * @type {OpenAiAction}
     * @memberof ActionConfiguration
     */
    openAi?: OpenAiAction;
    /**
     * 
     * @type {DataManipulation}
     * @memberof ActionConfiguration
     */
    dataManipulation?: DataManipulation;
    /**
     * 
     * @type {DatabaseAction}
     * @memberof ActionConfiguration
     */
    database?: DatabaseAction;
    /**
     * 
     * @type {WorkflowEventAction}
     * @memberof ActionConfiguration
     */
    workflowEvent?: WorkflowEventAction;
    /**
     * 
     * @type {LoggerAction}
     * @memberof ActionConfiguration
     */
    logger?: LoggerAction;
    /**
     * 
     * @type {GlobalVariablesAction}
     * @memberof ActionConfiguration
     */
    globalVariables?: GlobalVariablesAction;
    /**
     * 
     * @type {FindAndTransformAction}
     * @memberof ActionConfiguration
     */
    findAndTransform?: FindAndTransformAction;
}

/**
 * Check if a given object implements the ActionConfiguration interface.
 */
export function instanceOfActionConfiguration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActionConfigurationFromJSON(json: any): ActionConfiguration {
    return ActionConfigurationFromJSONTyped(json, false);
}

export function ActionConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rest': !exists(json, 'rest') ? undefined : RestActionFromJSON(json['rest']),
        'mail': !exists(json, 'mail') ? undefined : MailActionFromJSON(json['mail']),
        'telegram': !exists(json, 'telegram') ? undefined : TelegramActionFromJSON(json['telegram']),
        'loop': !exists(json, 'loop') ? undefined : LoopActionFromJSON(json['loop']),
        'parallel': !exists(json, 'parallel') ? undefined : ParallelActionFromJSON(json['parallel']),
        'filter': !exists(json, 'filter') ? undefined : FilterActionFromJSON(json['filter']),
        'valueGetter': !exists(json, 'valueGetter') ? undefined : ValueGetterActionFromJSON(json['valueGetter']),
        'regex': !exists(json, 'regex') ? undefined : RegexActionFromJSON(json['regex']),
        'conditionalPath': !exists(json, 'conditionalPath') ? undefined : ConditionalPathActionFromJSON(json['conditionalPath']),
        'multiConditionalPath': !exists(json, 'multiConditionalPath') ? undefined : MultiConditionalPathActionFromJSON(json['multiConditionalPath']),
        'switchCase': !exists(json, 'switchCase') ? undefined : SwitchCaseActionFromJSON(json['switchCase']),
        'openAi': !exists(json, 'openAi') ? undefined : OpenAiActionFromJSON(json['openAi']),
        'dataManipulation': !exists(json, 'dataManipulation') ? undefined : DataManipulationFromJSON(json['dataManipulation']),
        'database': !exists(json, 'database') ? undefined : DatabaseActionFromJSON(json['database']),
        'workflowEvent': !exists(json, 'workflowEvent') ? undefined : WorkflowEventActionFromJSON(json['workflowEvent']),
        'logger': !exists(json, 'logger') ? undefined : LoggerActionFromJSON(json['logger']),
        'globalVariables': !exists(json, 'globalVariables') ? undefined : GlobalVariablesActionFromJSON(json['globalVariables']),
        'findAndTransform': !exists(json, 'findAndTransform') ? undefined : FindAndTransformActionFromJSON(json['findAndTransform']),
    };
}

export function ActionConfigurationToJSON(value?: ActionConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rest': RestActionToJSON(value.rest),
        'mail': MailActionToJSON(value.mail),
        'telegram': TelegramActionToJSON(value.telegram),
        'loop': LoopActionToJSON(value.loop),
        'parallel': ParallelActionToJSON(value.parallel),
        'filter': FilterActionToJSON(value.filter),
        'valueGetter': ValueGetterActionToJSON(value.valueGetter),
        'regex': RegexActionToJSON(value.regex),
        'conditionalPath': ConditionalPathActionToJSON(value.conditionalPath),
        'multiConditionalPath': MultiConditionalPathActionToJSON(value.multiConditionalPath),
        'switchCase': SwitchCaseActionToJSON(value.switchCase),
        'openAi': OpenAiActionToJSON(value.openAi),
        'dataManipulation': DataManipulationToJSON(value.dataManipulation),
        'database': DatabaseActionToJSON(value.database),
        'workflowEvent': WorkflowEventActionToJSON(value.workflowEvent),
        'logger': LoggerActionToJSON(value.logger),
        'globalVariables': GlobalVariablesActionToJSON(value.globalVariables),
        'findAndTransform': FindAndTransformActionToJSON(value.findAndTransform),
    };
}

