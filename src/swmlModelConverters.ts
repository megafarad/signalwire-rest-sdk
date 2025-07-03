import {
    SWML,
    SWMLAIHint,
    SWMLAILanguage,
    SWMLAIMethod,
    SWMLAIParameters,
    SWMLAIParams,
    SWMLAIPrompt,
    SWMLAIPronounce,
    SWMLAnswerMethod,
    SWMLAnswerParameters,
    SWMLCondElseParameters,
    SWMLCondMethod,
    SWMLCondParameters,
    SWMLCondWhenThenParameters,
    SWMLConnectDestination,
    SWMLConnectDialingParameter,
    SWMLConnectHeader,
    SWMLConnectMethod,
    SWMLConnectParallelDialingParameter,
    SWMLConnectParameters,
    SWMLConnectSerialDialingParameter,
    SWMLConnectSerialParallelDialingParameter,
    SWMLConnectToDialingParameter,
    SWMLDenoiseMethod,
    SWMLDetectMachineMethod,
    SWMLDetectMachineParameters,
    SWMLExecuteMethod,
    SWMLExecuteParameters,
    SWMLGotoMethod,
    SWMLGotoParameters,
    SWMLHangupMethod,
    SWMLHangupParameters,
    SWMLJoinRoomMethod,
    SWMLJoinRoomParameters,
    SWMLLabelMethod,
    SWMLLiveTranscribeAction,
    SWMLLiveTranscribeMethod,
    SWMLLiveTranscribeParameters,
    SWMLLiveTranscribeStartAction,
    SWMLLiveTranscribeStopAction,
    SWMLLiveTranscribeSummarizeAction,
    SWMLLiveTranslateAction,
    SWMLLiveTranslateInjectAction,
    SWMLLiveTranslateMethod,
    SWMLLiveTranslateParameters,
    SWMLLiveTranslateStartAction,
    SWMLLiveTranslateStopAction,
    SWMLLiveTranslateSummarizeAction,
    SWMLMethod,
    SWMLPayMethod,
    SWMLPayParameter,
    SWMLPayParameters,
    SWMLPayPrompt,
    SWMLPayPromptAction,
    SWMLPlayableSound,
    SWMLPlayMethod,
    SWMLPlayParameters,
    SWMLPlayUrl,
    SWMLPlayUrls,
    SWMLPromptMethod,
    SWMLPromptParameters,
    SWMLReceiveFaxMethod,
    SWMLReceiveFaxParameters,
    SWMLRecordCallMethod,
    SWMLRecordCallParameters,
    SWMLRecordMethod,
    SWMLRecordParameters,
    SWMLRequestMethod,
    SWMLRequestParameters,
    SWMLReturnMethod,
    SWMLSendDigitsMethod,
    SWMLSendDigitsParameters,
    SWMLSendFaxMethod,
    SWMLSendFaxParameters,
    SWMLSendMMSMessageParameters,
    SWMLSendSMSMessageParameters,
    SWMLSendSMSMethod,
    SWMLSendSMSParameters,
    SWMLSetMethod,
    SWMLSIPReferMethod,
    SWMLSIPReferParameters,
    SWMLSleepMethod,
    SWMLSleepParameters,
    SWMLStopDenoiseMethod,
    SWMLStopRecordCallMethod,
    SWMLStopRecordCallParameters,
    SWMLStopTapMethod,
    SWMLStopTapParameters,
    SWMLSWAIG,
    SWMLSWAIGDataMap,
    SWMLSWAIGDataMapExpression,
    SWMLSWAIGDataMapOutput,
    SWMLSWAIGDataMapOutputAction,
    SWMLSWAIGDataMapOutputContextSwitchAction,
    SWMLSWAIGDataMapOutputPlaybackBGAction,
    SWMLSWAIGDataMapOutputSayAction,
    SWMLSWAIGDataMapOutputSetGlobalDataAction,
    SWMLSWAIGDataMapOutputSetMetaDataAction,
    SWMLSWAIGDataMapOutputStopAction,
    SWMLSWAIGDataMapOutputStopPlaybackBGAction,
    SWMLSWAIGDataMapOutputSWMLAction,
    SWMLSWAIGDataMapOutputToggleFunction,
    SWMLSWAIGDataMapOutputToggleFunctionsAction,
    SWMLSWAIGDataMapOutputUnsetGlobalDataAction,
    SWMLSWAIGDataMapOutputUnsetMetaDataAction,
    SWMLSWAIGDataMapOutputUserInputAction,
    SWMLSWAIGDataMapWebhook,
    SWMLSWAIGDataMapWebhookForeach,
    SWMLSWAIGDefaults,
    SWMLSWAIGFunction,
    SWMLSWAIGFunctionFillers,
    SWMLSWAIGFunctionParameterAllOfProperty,
    SWMLSWAIGFunctionParameterAnyOfProperty,
    SWMLSWAIGFunctionParameterArrayProperty,
    SWMLSWAIGFunctionParameterBooleanProperty,
    SWMLSWAIGFunctionParameterConstProperty,
    SWMLSWAIGFunctionParameterIntegerProperty,
    SWMLSWAIGFunctionParameterNumberProperty,
    SWMLSWAIGFunctionParameterObjectProperty,
    SWMLSWAIGFunctionParameterOneOfProperty,
    SWMLSWAIGFunctionParameterProperties,
    SWMLSWAIGFunctionParameterProperty,
    SWMLSWAIGFunctionParameters,
    SWMLSWAIGFunctionParameterStringProperty,
    SWMLSWAIGInclude,
    SWMLSWAIGInternalFiller,
    SWMLSWAIGVisualInputFiller,
    SWMLSwitchCaseParameters,
    SWMLSwitchMethod,
    SWMLSwitchParameters,
    SWMLTapMethod,
    SWMLTapParameters,
    SWMLTransferMethod,
    SWMLTransferParameters,
    SWMLUnsetMethod,
    SWMLUnsetParameters, SWMLUserEventMethod,
    SWMLUserEventParameters
} from "./SWMLTypes";

export function convertSWMLAIHintToJSON(hint: SWMLAIHint): any {
    return {
        hint: hint.hint,
        pattern: hint.pattern,
        replace: hint.replace,
        ignore_case: hint.ignoreCase
    }
}

export function convertJSONToSWMLAIHint(json: any): SWMLAIHint {
    return {
        hint: json.hint,
        pattern: json.pattern,
        replace: json.replace,
        ignoreCase: json.ignore_case
    }
}

export function convertSWMLAILanguageToJSON(language: SWMLAILanguage): any {
    return {
        name: language.name,
        code: language.code,
        voice: language.voice,
        emotion: language.emotion,
        function_fillers: language.functionFillers,
        model: language.model,
        speech_fillers: language.speechFillers,
        speed: language.speed
    }
}

export function convertJSONToSWMLAILanguage(json: any): SWMLAILanguage {
    return {
        name: json.name,
        code: json.code,
        voice: json.voice,
        emotion: json.emotion,
        functionFillers: json.function_fillers,
        model: json.model,
        speechFillers: json.speech_fillers,
        speed: json.speed
    }
}

export function convertSWMLAIParamsToJSON(params?: SWMLAIParams): any {
    if (params === undefined) {
        return undefined;
    }
    return {
        ai_model: params.aiModel,
        conscience: params.conscience,
        thinking_model: params.thinkingModel,
        vision_model: params.visionModel,
        enable_thinking: params.enableThinking,
        enable_vision: params.enableVision,
        wait_for_user: params.waitForUser,
        direction: params.direction,
        conversation_id: params.conversationId,
        local_tz: params.localTZ,
        save_conversation: params.saveConversation,
        transfer_summary: params.transferSummary,
        languages_enabled: params.languagesEnabled,
        conversation_sliding_window: params.conversationSlidingWindow,
        summary_mode: params.summaryMode
    }

}

export function convertJSONToSWMLAIParams(json: any): SWMLAIParams {
    return {
        aiModel: json.ai_model,
        conscience: json.conscience,
        thinkingModel: json.thinking_model,
        visionModel: json.vision_model,
        enableThinking: json.enable_thinking,
        enableVision: json.enable_vision,
        waitForUser: json.wait_for_user,
        direction: json.direction,
        conversationId: json.conversation_id,
        localTZ: json.local_tz,
        saveConversation: json.save_conversation,
        transferSummary: json.transfer_summary,
        languagesEnabled: json.languages_enabled,
        conversationSlidingWindow: json.conversation_sliding_window,
        summaryMode: json.summary_mode
    }
}

export function convertSWMLAIPromptToJSON(prompt?: SWMLAIPrompt): any {
    if (prompt === undefined) {
        return undefined;
    }
    return {
        text: prompt.text,
        temperature: prompt.temperature,
        top_p: prompt.topP,
        confidence: prompt.confidence,
        presence_penalty: prompt.presencePenalty,
        frequency_penalty: prompt.frequencyPenalty
    }
}

export function convertJSONToSWMLAIPrompt(json?: any): SWMLAIPrompt | undefined {
    if (json === undefined) {
        return undefined;
    }
    return {
        text: json.text,
        temperature: json.temperature,
        topP: json.top_p,
        confidence: json.confidence,
        presencePenalty: json.presence_penalty,
        frequencyPenalty: json.frequency_penalty
    }
}

export function convertSWMLAIPronounceToJSON(pronounce: SWMLAIPronounce): any {
    return {
        replace: pronounce.replace,
        with: pronounce.with,
        ignore_case: pronounce.ignoreCase
    }
}

export function convertJSONToSWMLAIPronounce(json: any): SWMLAIPronounce {
    return {
        replace: json.replace,
        with: json.with,
        ignoreCase: json.ignore_case
    }
}

export function convertSWMLSWAIGDefaultsToJSON(defaults?: SWMLSWAIGDefaults): any {
    if (defaults === undefined) {
        return undefined;
    }
    return {
        webHookUrl: defaults.webHookUrl
    }
}

export function convertJSONToSWMLSWAIGDefaults(json?: any): SWMLSWAIGDefaults | undefined {
    if (json === undefined) {
        return undefined;
    }
    return {
        webHookUrl: json.web_hook_url
    }
}

export function convertSWMLSWAIGDataMapOutputSWMLActionToJSON(action: SWMLSWAIGDataMapOutputSWMLAction): any {
    return {
        SWML: convertSWMLToJSON(action.SWML),
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputSWMLAction(json: any): SWMLSWAIGDataMapOutputSWMLAction {
    return {
        type: 'swml',
        SWML: convertJSONToSWML(json.SWML)
    }
}

export function convertSWMLSWAIGDataMapOutputSayActionToJSON(action: SWMLSWAIGDataMapOutputSayAction): any {
    return {
        say: action.say,
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputSayAction(json: any): SWMLSWAIGDataMapOutputSayAction {
    return {
        type: 'say',
        say: json.say
    }
}

export function convertSWMLSWAIGDataMapOutputStopActionToJSON(action: SWMLSWAIGDataMapOutputStopAction): any {
    return {
        stop: action.stop,
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputStopAction(json: any): SWMLSWAIGDataMapOutputStopAction {
    return {
        type: 'stop',
        stop: json.stop
    }
}

export function convertSWMLSWAIGDataMapOutputToggleFunctionToJSON(toggleFunction: SWMLSWAIGDataMapOutputToggleFunction): any {
    return {
        active: toggleFunction.active,
        function: toggleFunction.function,
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputToggleFunction(json: any): SWMLSWAIGDataMapOutputToggleFunction {
    return {
        active: json.active,
        function: json.function,
    }
}

export function convertSWMLSWAIGDataMapOutputToggleFunctionsActionToJSON(toggleFunctionsAction: SWMLSWAIGDataMapOutputToggleFunctionsAction): any {
    return {
        toggle_functions: toggleFunctionsAction.toggleFunctions.map(convertSWMLSWAIGDataMapOutputToggleFunctionToJSON),
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputToggleFunctionsAction(json: any): SWMLSWAIGDataMapOutputToggleFunctionsAction {
    return {
        type: 'toggleFunctions',
        toggleFunctions: json.toggle_functions.map(convertJSONToSWMLSWAIGDataMapOutputToggleFunction)
    }
}

export function convertSWMLSWAIGDataMapOutputSetGlobalDataActionToJSON(action: SWMLSWAIGDataMapOutputSetGlobalDataAction): any {
    return {
        set_global_data: action.setGlobalData,
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputSetGlobalDataAction(json: any): SWMLSWAIGDataMapOutputSetGlobalDataAction {
    return {
        type: 'setGlobalData',
        setGlobalData: json.set_global_data
    }
}

export function convertSWMLSWAIGDataMapOutputSetMetaDataActionToJSON(action: SWMLSWAIGDataMapOutputSetMetaDataAction): any {
    return {
        set_meta_data: action.setMetaData,
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputSetMetaDataAction(json: any): SWMLSWAIGDataMapOutputSetMetaDataAction {
    return {
        type: 'setMetaData',
        setMetaData: json.set_meta_data
    }
}

export function convertSWMLSWAIGDataMapOutputUnsetGlobalDataActionToJSON(action: SWMLSWAIGDataMapOutputUnsetGlobalDataAction): any {
    return {
        unset_global_data: action.unsetGlobalData
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputUnsetGlobalDataAction(json: any): SWMLSWAIGDataMapOutputUnsetGlobalDataAction {
    return {
        type: 'unsetGlobalData',
        unsetGlobalData: json.unset_global_data
    }
}

export function convertSWMLSWAIGDataMapOutputUnsetMetaDataActionToJSON(action: SWMLSWAIGDataMapOutputUnsetMetaDataAction): any {
    return {
        unset_meta_data: action.unsetMetaData
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputUnsetMetaDataAction(json: any): SWMLSWAIGDataMapOutputUnsetMetaDataAction {
    return {
        type: 'unsetMetaData',
        unsetMetaData: json.unset_meta_data
    }
}

export function convertSWMLSWAIGDataMapOutputPlaybackBGActionToJSON(action: SWMLSWAIGDataMapOutputPlaybackBGAction): any {
    return {
        playback_bg: {
            file: action.playbackBG.file,
            wait: action.playbackBG.wait
        }
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputPlaybackBGAction(json: any): SWMLSWAIGDataMapOutputPlaybackBGAction {
    return {
        type: 'playbackBG',
        playbackBG: {
            file: json.playback_bg.file,
            wait: json.playback_bg.wait
        }
    }
}

export function convertSWMLSWAIGDataMapOutputStopPlaybackBGActionToJSON(action: SWMLSWAIGDataMapOutputStopPlaybackBGAction): any {
    return {
        stop_playback_bg: action.stopPlaybackBG
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputStopPlaybackBGAction(json: any): SWMLSWAIGDataMapOutputStopPlaybackBGAction {
    return {
        type: 'stopPlaybackBG',
        stopPlaybackBG: json.stop_playback_bg
    }
}

export function convertSWMLSWAIGDataMapOutputUserInputActionToJSON(action: SWMLSWAIGDataMapOutputUserInputAction): any {
    return {
        user_input: action.userInput
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputUserInputAction(json: any): SWMLSWAIGDataMapOutputUserInputAction {
    return {
        type: 'userInput',
        userInput: json.user_input
    }
}

export function convertSWMLSWAIGDataMapOutputContextSwitchActionToJSON(action: SWMLSWAIGDataMapOutputContextSwitchAction): any {
    return {
        context_switch: {
            system_prompt: action.contextSwitch.systemPrompt,
            consolidate: action.contextSwitch.consolidate,
            user_prompt: action.contextSwitch.userPrompt
        }
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputContextSwitchAction(json: any): SWMLSWAIGDataMapOutputContextSwitchAction {
    return {
        type: 'contextSwitch',
        contextSwitch: {
            systemPrompt: json.context_switch.system_prompt,
            consolidate: json.context_switch.consolidate,
            userPrompt: json.context_switch.user_prompt
        }
    }
}

export function convertSWMLSWAIGDataMapOutputActionToJSON(action: SWMLSWAIGDataMapOutputAction): any {
    switch (action.type) {
        case 'swml':
            return convertSWMLSWAIGDataMapOutputSWMLActionToJSON(action);
        case 'say':
            return convertSWMLSWAIGDataMapOutputSayActionToJSON(action);
        case 'stop':
            return convertSWMLSWAIGDataMapOutputStopActionToJSON(action);
        case 'toggleFunctions':
            return convertSWMLSWAIGDataMapOutputToggleFunctionsActionToJSON(action);
        case 'setGlobalData':
            return convertSWMLSWAIGDataMapOutputSetGlobalDataActionToJSON(action);
        case 'setMetaData':
            return convertSWMLSWAIGDataMapOutputSetMetaDataActionToJSON(action);
        case 'unsetGlobalData':
            return convertSWMLSWAIGDataMapOutputUnsetGlobalDataActionToJSON(action);
        case 'unsetMetaData':
            return convertSWMLSWAIGDataMapOutputUnsetMetaDataActionToJSON(action);
        case 'playbackBG':
            return convertSWMLSWAIGDataMapOutputPlaybackBGActionToJSON(action);
        case 'stopPlaybackBG':
            return convertSWMLSWAIGDataMapOutputStopPlaybackBGActionToJSON(action);
        case 'userInput':
            return convertSWMLSWAIGDataMapOutputUserInputActionToJSON(action);
        case 'contextSwitch':
            return convertSWMLSWAIGDataMapOutputContextSwitchActionToJSON(action);
        default:
            throw Error("Unknown DataMap Output Action Type");
    }
}

export function convertJSONToSWMLSWAIGDataMapOutputAction(json: any): SWMLSWAIGDataMapOutputAction {
    const objectKeys = Object.keys(json);
    if (objectKeys.includes('SWML')) {
        return convertJSONToSWMLSWAIGDataMapOutputSWMLAction(json);
    } else if (objectKeys.includes('say')) {
        return convertJSONToSWMLSWAIGDataMapOutputSayAction(json);
    } else if (objectKeys.includes('stop')) {
        return convertJSONToSWMLSWAIGDataMapOutputStopAction(json);
    } else if (objectKeys.includes('toggle_functions')) {
        return convertJSONToSWMLSWAIGDataMapOutputToggleFunctionsAction(json);
    } else if (objectKeys.includes('set_global_data')) {
        return convertJSONToSWMLSWAIGDataMapOutputSetGlobalDataAction(json);
    } else if (objectKeys.includes('set_meta_data')) {
        return convertJSONToSWMLSWAIGDataMapOutputSetMetaDataAction(json);
    } else if (objectKeys.includes('unset_global_data')) {
        return convertJSONToSWMLSWAIGDataMapOutputUnsetGlobalDataAction(json);
    } else if (objectKeys.includes('unset_meta_data')) {
        return convertJSONToSWMLSWAIGDataMapOutputUnsetMetaDataAction(json);
    } else if (objectKeys.includes('playback_bg')) {
        return convertJSONToSWMLSWAIGDataMapOutputPlaybackBGAction(json);
    } else if (objectKeys.includes('stop_playback_bg')) {
        return convertJSONToSWMLSWAIGDataMapOutputStopPlaybackBGAction(json);
    } else if (objectKeys.includes('user_input')) {
        return convertJSONToSWMLSWAIGDataMapOutputUserInputAction(json);
    } else if (objectKeys.includes('context_switch')) {
        return convertJSONToSWMLSWAIGDataMapOutputContextSwitchAction(json);
    } else {
        throw Error("Unknown DataMap Output Action Type");
    }
}

export function convertSWMLSWAIGDataMapOutputToJSON(output: SWMLSWAIGDataMapOutput): any {
    if (output === undefined) {
        return undefined;
    }
    return {
        response: output.response,
        action: output.action.map(convertSWMLSWAIGDataMapOutputActionToJSON)
    }

}

export function convertJSONToSWMLSWAIGDataMapOutput(json: any): SWMLSWAIGDataMapOutput {
    return {
        response: json.response,
        action: json.action.map(convertJSONToSWMLSWAIGDataMapOutputAction)
    }
}

export function convertSWMLSWAIGDataMapExpressionToJSON(expression: SWMLSWAIGDataMapExpression): any {
    return {
        string: expression.string,
        pattern: expression.pattern,
        output: convertSWMLSWAIGDataMapOutputToJSON(expression.output)
    }
}

export function convertJSONToSWMLSWAIGDataMapExpression(json: any): SWMLSWAIGDataMapExpression {
    return {
        string: json.string,
        pattern: json.pattern,
        output: convertJSONToSWMLSWAIGDataMapOutput(json.output)
    }
}

export function convertSWMLSWAIGDataMapWebhookForeachToJSON(foreach?: SWMLSWAIGDataMapWebhookForeach): any {
    if (foreach === undefined) {
        return undefined;
    }
    return {
        append: foreach.append,
        input_key: foreach.inputKey,
        max: foreach.max,
        output_key: foreach.outputKey
    }
}

export function convertJSONToSWMLSWAIGDataMapWebhookForeach(json?: any): SWMLSWAIGDataMapWebhookForeach | undefined {
    if (json === undefined) {
        return undefined;
    }
    return {
        append: json.append,
        inputKey: json.input_key,
        max: json.max,
        outputKey: json.output_key
    }

}

export function convertSWMLSWAIGDataMapWebhookToJSON(webhook: SWMLSWAIGDataMapWebhook): any {
    return {
        expressions: webhook.expressions?.map(convertSWMLSWAIGDataMapExpressionToJSON),
        error_keys: webhook.errorKeys,
        url: webhook.url,
        foreach: convertSWMLSWAIGDataMapWebhookForeachToJSON(webhook.foreach),
        headers: webhook.headers,
        method: webhook.method,
        input_args_as_params: webhook.inputArgsAsParams,
        params: webhook.params,
        required_args: webhook.requiredArgs,
        output: convertSWMLSWAIGDataMapOutputToJSON(webhook.output)
    }
}

export function convertJSONToSWMLSWAIGDataMapWebhook(json: any): SWMLSWAIGDataMapWebhook {
    return {
        expressions: json.expressions?.map(convertJSONToSWMLSWAIGDataMapExpression),
        errorKeys: json.error_keys,
        url: json.url,
        foreach: convertJSONToSWMLSWAIGDataMapWebhookForeach(json.foreach),
        headers: json.headers,
        method: json.method,
        inputArgsAsParams: json.input_args_as_params,
        params: json.params,
        requiredArgs: json.required_args,
        output: convertJSONToSWMLSWAIGDataMapOutput(json.output)
    }
}

export function convertSWMLSWAIGDataMapToJSON(dataMap?: SWMLSWAIGDataMap): any {
    if (dataMap === undefined) {
        return undefined;
    }
    return {
        expressions: dataMap.expressions.map(convertSWMLSWAIGDataMapExpressionToJSON),
        webhooks: dataMap.webhooks.map(convertSWMLSWAIGDataMapWebhookToJSON),
        output: convertSWMLSWAIGDataMapOutputToJSON(dataMap.output)
    }
}

export function convertJSONToSWMLSWAIGDataMap(json?: any): SWMLSWAIGDataMap | undefined {
    if (json === undefined) {
        return undefined;
    }

    return {
        expressions: json.expressions.map(convertJSONToSWMLSWAIGDataMapExpression),
        webhooks: json.webhooks.map(convertJSONToSWMLSWAIGDataMapWebhook),
        output: convertJSONToSWMLSWAIGDataMapOutput(json.output)
    }
}

export function convertSWMLSWAIGFunctionParameterStringPropertyToJSON(property: SWMLSWAIGFunctionParameterStringProperty): any {
    return {
        type: 'string',
        description: property.description,
        enum: property.enum,
        default: property.default,
        pattern: property.pattern,
        nullable: property.nullable,
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterStringProperty(json: any): SWMLSWAIGFunctionParameterStringProperty {
    return {
        type: 'string',
        description: json.description,
        enum: json.enum,
        default: json.default,
        pattern: json.pattern,
        nullable: json.nullable,
    }
}

export function convertSWMLSWAIGFunctionParameterIntegerPropertyToJSON(property: SWMLSWAIGFunctionParameterIntegerProperty): any {
    return {
        type: 'integer',
        description: property.description,
        enum: property.enum,
        default: property.default,
        nullable: property.nullable,
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterIntegerProperty(json: any): SWMLSWAIGFunctionParameterIntegerProperty {
    return {
        type: 'integer',
        description: json.description,
        enum: json.enum,
        default: json.default,
        nullable: json.nullable,
    }
}

export function convertSWMLSWAIGFunctionParameterNumberPropertyToJSON(property: SWMLSWAIGFunctionParameterNumberProperty): any {
    return {
        type: 'number',
        description: property.description,
        enum: property.enum,
        default: property.default,
        nullable: property.nullable,
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterNumberProperty(json: any): SWMLSWAIGFunctionParameterNumberProperty {
    return {
        type: 'number',
        description: json.description,
        enum: json.enum,
        default: json.default,
        nullable: json.nullable,
    }
}

export function convertSWMLSWAIGFunctionParameterBooleanPropertyToJSON(property: SWMLSWAIGFunctionParameterBooleanProperty): any {
    return {
        type: 'boolean',
        description: property.description,
        default: property.default,
        nullable: property.nullable,
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterBooleanProperty(json: any): SWMLSWAIGFunctionParameterBooleanProperty {
    return {
        type: 'boolean',
        description: json.description,
        default: json.default,
        nullable: json.nullable,
    }
}

export function convertSWMLSWAIGFunctionParameterArrayPropertyToJSON(property: SWMLSWAIGFunctionParameterArrayProperty): any {
    return {
        type: 'array',
        description: property.description,
        items: property.items.map(convertSWMLSWAIGFunctionParameterPropertyToJSON),
        default: property.default,
        nullable: property.nullable,
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterArrayProperty(json: any): SWMLSWAIGFunctionParameterArrayProperty {
    return {
        type: 'array',
        description: json.description,
        items: json.items.map(convertJSONToSWMLSWAIGFunctionParameterProperty),
        default: json.default,
        nullable: json.nullable,
    }
}

export function convertSWMLSWAIGFunctionParameterPropertiesToJSON(properties: SWMLSWAIGFunctionParameterProperties): any {
    const propertiesEntries = Object.entries(properties).map(([key, value]) => {
        const tuple: [string, any] = [key, convertSWMLSWAIGFunctionParameterPropertyToJSON(value)];
        return tuple;
    });
    return Object.fromEntries(propertiesEntries);
}

export function convertJSONToSWMLSWAIGFunctionParameterProperties(json: any): SWMLSWAIGFunctionParameterProperties {
    const propertiesEntries = Object.entries(json).map(([key, value]) => {
        const tuple: [string, SWMLSWAIGFunctionParameterProperty] = [key, convertJSONToSWMLSWAIGFunctionParameterProperty(value)];
        return tuple;
    });
    return Object.fromEntries(propertiesEntries);

}

export function convertSWMLSWAIGFunctionParameterObjectPropertyToJSON(property: SWMLSWAIGFunctionParameterObjectProperty): any {

    return {
        type: 'object',
        description: property.description,
        properties: convertSWMLSWAIGFunctionParameterPropertiesToJSON(property.properties),
        required: property.required,
        default: property.default,
        nullable: property.nullable,
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterObjectProperty(json: any): SWMLSWAIGFunctionParameterObjectProperty {
    return {
        type: 'object',
        description: json.description,
        properties: convertJSONToSWMLSWAIGFunctionParameterProperties(json.properties),
        required: json.required,
        default: json.default,
        nullable: json.nullable,
    }
}

export function convertSWMLSWAIGFunctionParameterOneOfPropertyToJSON(property: SWMLSWAIGFunctionParameterOneOfProperty): any {
    return {
        oneOf: property.oneOf.map(convertSWMLSWAIGFunctionParameterPropertyToJSON)
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterOneOfProperty(json: any): SWMLSWAIGFunctionParameterOneOfProperty {
    return {
        type: 'oneOf',
        oneOf: json.oneOf.map(convertJSONToSWMLSWAIGFunctionParameterProperty)
    }
}

export function convertSWMLSWAIGFunctionParameterAllOfPropertyToJSON(property: SWMLSWAIGFunctionParameterAllOfProperty): any {
    return {
        allOf: property.allOf.map(convertSWMLSWAIGFunctionParameterPropertyToJSON)
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterAllOfProperty(json: any): SWMLSWAIGFunctionParameterAllOfProperty {
    return {
        type: 'allOf',
        allOf: json.allOf.map(convertJSONToSWMLSWAIGFunctionParameterProperty)
    }
}

export function convertSWMLSWAIGFunctionParameterAnyOfPropertyToJSON(property: SWMLSWAIGFunctionParameterAnyOfProperty): any {
    return {
        anyOf: property.anyOf.map(convertSWMLSWAIGFunctionParameterPropertyToJSON)
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterAnyOfProperty(json: any): SWMLSWAIGFunctionParameterAnyOfProperty {
    return {
        type: 'anyOf',
        anyOf: json.anyOf.map(convertJSONToSWMLSWAIGFunctionParameterProperty)
    }
}

export function convertSWMLSWAIGFunctionParameterConstPropertyToJSON(property: SWMLSWAIGFunctionParameterConstProperty): any {
    return {
        const: property.const
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterConstProperty(json: any): SWMLSWAIGFunctionParameterConstProperty {
    return {
        type: 'const',
        const: json.const
    }
}

export function convertSWMLSWAIGFunctionParameterPropertyToJSON(property: SWMLSWAIGFunctionParameterProperty): any {
    switch (property.type) {
        case 'string':
            return convertSWMLSWAIGFunctionParameterStringPropertyToJSON(property);
        case 'integer':
            return convertSWMLSWAIGFunctionParameterIntegerPropertyToJSON(property);
        case 'number':
            return convertSWMLSWAIGFunctionParameterNumberPropertyToJSON(property);
        case 'boolean':
            return convertSWMLSWAIGFunctionParameterBooleanPropertyToJSON(property);
        case 'array':
            return convertSWMLSWAIGFunctionParameterArrayPropertyToJSON(property);
        case 'object':
            return convertSWMLSWAIGFunctionParameterObjectPropertyToJSON(property);
        case 'oneOf':
            return convertSWMLSWAIGFunctionParameterOneOfPropertyToJSON(property);
        case 'allOf':
            return convertSWMLSWAIGFunctionParameterAllOfPropertyToJSON(property);
        case 'anyOf':
            return convertSWMLSWAIGFunctionParameterAnyOfPropertyToJSON(property);
        case 'const':
            return convertSWMLSWAIGFunctionParameterConstPropertyToJSON(property);
        default:
            throw Error("Unknown Function Parameter Type");
    }
}

export function convertJSONToSWMLSWAIGFunctionParameterProperty(json: any): SWMLSWAIGFunctionParameterProperty {
    switch (json.type) {
        case 'string':
            return convertJSONToSWMLSWAIGFunctionParameterStringProperty(json);
        case 'integer':
            return convertJSONToSWMLSWAIGFunctionParameterIntegerProperty(json);
        case 'number':
            return convertJSONToSWMLSWAIGFunctionParameterNumberProperty(json);
        case 'boolean':
            return convertJSONToSWMLSWAIGFunctionParameterBooleanProperty(json);
        case 'array':
            return convertJSONToSWMLSWAIGFunctionParameterArrayProperty(json);
        case 'object':
            return convertJSONToSWMLSWAIGFunctionParameterObjectProperty(json);
        default:
            const objectKeys = Object.keys(json);
            if (objectKeys.includes('oneOf')) {
                return convertJSONToSWMLSWAIGFunctionParameterOneOfProperty(json);
            } else if (objectKeys.includes('allOf')) {
                return convertJSONToSWMLSWAIGFunctionParameterAllOfProperty(json);
            } else if (objectKeys.includes('anyOf')) {
                return convertJSONToSWMLSWAIGFunctionParameterAnyOfProperty(json);
            } else if (objectKeys.includes('const')) {
                return convertJSONToSWMLSWAIGFunctionParameterConstProperty(json);
            } else {
                throw Error("Unknown Function Parameter Type");
            }
    }
}

export function convertSWMLSWAIGFunctionParametersToJSON(parameters?: SWMLSWAIGFunctionParameters): any {
    if (parameters === undefined) {
        return undefined;
    }

    return {
        type: parameters.type,
        properties: convertSWMLSWAIGFunctionParameterPropertiesToJSON(parameters.properties),
        required: parameters.required
    }
}

export function convertJSONToSWMLSWAIGFunctionParameters(json?: any): SWMLSWAIGFunctionParameters | undefined {
    if (json === undefined) {
        return undefined;
    }
    return {
        type: json.type,
        properties: convertJSONToSWMLSWAIGFunctionParameterProperties(json.properties),
        required: json.required
    }
}

export function convertSWMLSWAIGFunctionFillersToJSON(fillers?: SWMLSWAIGFunctionFillers): any {
    if (fillers === undefined) {
        return undefined;
    }
    const fillersEntries = Object.entries(fillers).map(([languageCode, value]) => {
        const tuple: [string, any] = [languageCode, value];
        return tuple;
    });
    return Object.fromEntries(fillersEntries);

}

export function convertJSONToSWMLSWAIGFunctionFillers(json: any): SWMLSWAIGFunctionFillers {
    const entries = Object.entries(json).map(([languageCode, value]) => {
        const tuple: [string, string[]] = [languageCode, value as string[]];
        return tuple;
    });

    return Object.fromEntries(entries);
}

export function convertSWMLSWAIGFunctionToJSON(func: SWMLSWAIGFunction): any {
    return {
        description: func.description,
        function: func.function,
        active: func.active,
        data_map: convertSWMLSWAIGDataMapToJSON(func.dataMap),
        parameters: convertSWMLSWAIGFunctionParametersToJSON(func.parameters),
        fillers: convertSWMLSWAIGFunctionFillersToJSON(func.fillers),
        meta_data: func.metaData,
        meta_data_token: func.metaDataToken,
        wait_file: func.waitFile,
        wait_file_loops: func.waitFileLoops,
        wait_for_fillers: func.waitForFillers,
        web_hook_url: func.webHookUrl,
    }
}

export function convertJSONToSWMLSWAIGFunction(json: any): SWMLSWAIGFunction {
    return {
        description: json.description,
        function: json.function,
        active: json.active,
        dataMap: convertJSONToSWMLSWAIGDataMap(json.data_map),
        parameters: convertJSONToSWMLSWAIGFunctionParameters(json.parameters),
        fillers: convertJSONToSWMLSWAIGFunctionFillers(json.fillers),
        metaData: json.meta_data,
        metaDataToken: json.meta_data_token,
        waitFile: json.wait_file,
        waitFileLoops: json.wait_file_loops,
        waitForFillers: json.wait_for_fillers,
        webHookUrl: json.web_hook_url,
    }
}

export function convertSWMLSWAIGIncludeToJSON(include: SWMLSWAIGInclude): any {
    return {
        url: include.url,
        function: include.function,
        meta_data: include.metaData,
    }
}

export function convertJSONToSWMLSWAIGInclude(json: any): SWMLSWAIGInclude {
    return {
        url: json.url,
        function: json.function,
        metaData: json.meta_data,
    }
}

export function convertSWMLSWAIGVisualInputFillerToJSON(filler: SWMLSWAIGVisualInputFiller): any {
    const objectEntries = Object.entries(filler).map(([languageCode, value]) => {
        const tuple: [string, any] = [languageCode, value];
        return tuple;
    })
    return Object.fromEntries(objectEntries);
}

export function convertJSONToSWMLSWAIGVisualInputFiller(json: any): SWMLSWAIGVisualInputFiller {
    const entries = Object.entries(json).map(([languageCode, value]) => {
        const tuple: [string, string[]] = [languageCode, value as string[]];
        return tuple;
    });
    return Object.fromEntries(entries);
}

export function convertSWMLSWAIGInternalFillerToJSON(filler?: SWMLSWAIGInternalFiller): any {
    if (filler === undefined) {
        return undefined;
    }
    return {
        get_visual_input: convertSWMLSWAIGVisualInputFillerToJSON(filler.getVisualInput)
    }
}

export function convertJSONToSWMLSWAIGInternalFiller(json?: any): SWMLSWAIGInternalFiller | undefined {
    if (json === undefined) {
        return undefined;
    }
    return {
        getVisualInput: convertJSONToSWMLSWAIGVisualInputFiller(json.get_visual_input)
    }
}

export function convertSWMLSWAIGToJSON(swaig?: SWMLSWAIG): any {
    if (swaig === undefined) {
        return undefined;
    }
    return {
        defaults: convertSWMLSWAIGDefaultsToJSON(swaig.defaults),
        functions: swaig.functions?.map(convertSWMLSWAIGFunctionToJSON),
        includes: swaig.includes?.map(convertSWMLSWAIGIncludeToJSON),
        internal_fillers: convertSWMLSWAIGInternalFillerToJSON(swaig.internalFillers),
        native_functions: swaig.nativeFunctions,
    }
}

export function convertJSONToSWMLSWAIG(json?: any): SWMLSWAIG | undefined {
    if (json === undefined) {
        return undefined;
    }
    return {
        defaults: convertJSONToSWMLSWAIGDefaults(json.defaults),
        functions: json.functions?.map(convertJSONToSWMLSWAIGFunction),
        includes: json.includes?.map(convertJSONToSWMLSWAIGInclude),
        internalFillers: convertJSONToSWMLSWAIGInternalFiller(json.internal_fillers),
        nativeFunctions: json.native_functions,
    }
}

export function convertSWMLAIHintsToJSON(hints?: string[] | SWMLAIHint[]): any {
    const isArrayOfStrings = Array.isArray(hints) && hints.every(element => typeof element === 'string');
    if (isArrayOfStrings) {
        return hints as string[];
    } else {
        return hints?.map(convertSWMLAIHintToJSON);
    }
}

export function convertJSONToSWMLAIHints(json?: any): string[] | SWMLAIHint[] | undefined {
    const isArrayOfStrings = Array.isArray(json) && json.every(element => typeof element === 'string');
    if (isArrayOfStrings) {
        return json as string[];
    } else {
        return json?.map(convertJSONToSWMLAIHint);
    }
}

export function convertSWMLAIParametersToJSON(parameters: SWMLAIParameters): any {
    return {
        global_data: parameters.globalData,
        hints: convertSWMLAIHintsToJSON(parameters.hints),
        languages: parameters.languages?.map(convertSWMLAILanguageToJSON),
        params: convertSWMLAIParamsToJSON(parameters.params),
        post_prompt: convertSWMLAIPromptToJSON(parameters.postPrompt),
        post_prompt_url: parameters.postPromptUrl,
        pronounce: parameters.pronounce?.map(convertSWMLAIPronounceToJSON),
        prompt: convertSWMLAIPromptToJSON(parameters.prompt),
        SWAIG: convertSWMLSWAIGToJSON(parameters.SWAIG)
    }
}

export function convertJSONToSWMLAIParameters(json: any): SWMLAIParameters {
    return {
        globalData: json.global_data,
        hints: convertJSONToSWMLAIHints(json.hints),
        languages: json.languages?.map(convertJSONToSWMLAILanguage),
        params: convertJSONToSWMLAIParams(json.params),
        postPrompt: convertJSONToSWMLAIPrompt(json.post_prompt),
        postPromptUrl: json.post_prompt_url,
        pronounce: json.pronounce?.map(convertJSONToSWMLAIPronounce),
        prompt: convertJSONToSWMLAIPrompt(json.prompt)!,
        SWAIG: convertJSONToSWMLSWAIG(json.SWAIG)
    }
}

export function convertSWMLAIMethodToJSON(method: SWMLAIMethod): any {
    return {
        ai: convertSWMLAIParametersToJSON(method.ai)
    }
}

export function convertJSONToSWMLAIMethod(json: any): SWMLAIMethod {
    return {
        type: 'ai',
        ai: convertJSONToSWMLAIParameters(json.ai)
    }
}

export function convertSWMLAnswerParametersToJSON(parameters: SWMLAnswerParameters): any {
    return {
        max_duration: parameters.maxDuration,
        sip_auth_username: parameters.sipAuthUsername,
        sip_auth_password: parameters.sipAuthPassword,
    }
}

export function convertJSONToSWMLAnswerParameters(json: any): SWMLAnswerParameters {
    return {
        maxDuration: json.max_duration,
        sipAuthUsername: json.sip_auth_username,
        sipAuthPassword: json.sip_auth_password,
    }
}

export function convertSWMLAnswerMethodToJSON(method: SWMLAnswerMethod): any {
    return {
        answer: convertSWMLAnswerParametersToJSON(method.answer)
    }
}

export function convertJSONToSWMLAnswerMethod(json: any): SWMLAnswerMethod {
    return {
        type: 'answer',
        answer: convertJSONToSWMLAnswerParameters(json.answer)
    }
}

export function convertSWMLCondWhenThenParametersToJSON(parameters: SWMLCondWhenThenParameters): any {
    return {
        when: parameters.when,
        then: parameters.then.map(convertSWMLMethodToJSON),
    }
}

export function convertJSONToSWMLCondWhenThenParameters(json: any): SWMLCondWhenThenParameters {
    return {
        type: 'whenThen',
        when: json.when,
        then: json.then.map(convertJSONToSWMLMethod),
    }
}

export function convertSWMLCondElseParametersToJSON(parameters: SWMLCondElseParameters): any {
    return {
        else: parameters.else?.map(convertSWMLMethodToJSON)
    }
}

export function convertJSONToSWMLCondElseParameters(json: any): SWMLCondElseParameters {
    return {
        type: 'else',
        else: json.else?.map(convertJSONToSWMLMethod),
    }
}

export function convertSWMLCondParametersToJSON(parameters: SWMLCondParameters): any {
    switch (parameters.type) {
        case 'whenThen':
            return convertSWMLCondWhenThenParametersToJSON(parameters);
        case 'else':
            return convertSWMLCondElseParametersToJSON(parameters);
        default:
            throw Error("Unknown Cond Type");
    }
}

export function convertJSONToSWMLCondParameters(json: any): SWMLCondParameters {
    const objectKeys = Object.keys(json);
    if (objectKeys.includes('when')) {
        return convertJSONToSWMLCondWhenThenParameters(json);
    } else if (objectKeys.includes('else') || json.else === undefined) {
        return convertJSONToSWMLCondElseParameters(json);
    } else {
        throw Error("Unknown Cond Type");
    }
}

export function convertSWMLCondMethodToJSON(method: SWMLCondMethod): any {
    return {
        cond: method.cond.map(convertSWMLCondParametersToJSON)
    }
}

export function convertJSONToSWMLCondMethod(json: any): SWMLCondMethod {
    return {
        type: 'cond',
        cond: json.cond.map(convertJSONToSWMLCondParameters),
    }
}

export function convertSWMLConnectHeaderToJSON(header: SWMLConnectHeader): any {
    return {
        name: header.name,
        value: header.value,
    }
}

export function convertJSONToSWMLConnectHeader(json: any): SWMLConnectHeader {
    return {
        name: json.name,
        value: json.value,
    }
}

export function convertSWMLConnectToDialingParameterToJSONObject(parameter: SWMLConnectToDialingParameter): any {
    return {
        to: parameter.to
    }
}

export function convertToParameterToSWMLConnectToDialingParameter(to: string): SWMLConnectToDialingParameter {
    return {
        type: 'to',
        to: to
    }
}

export function convertSWMLConnectDestinationToJSON(destination: SWMLConnectDestination): any {
    return {
        to: destination.to,
        from: destination.from,
        timeout: destination.timeout,
        call_state_url: destination.callStateUrl,
        call_state_events: destination.callStateEvents,
    }
}

export function convertJSONToSWMLConnectDestination(json: any): SWMLConnectDestination {
    return {
        to: json.to,
        from: json.from,
        timeout: json.timeout,
        callStateUrl: json.call_state_url,
        callStateEvents: json.call_state_events,
    }
}

export function convertSWMLConnectSerialDialingParameterToJSONObject(parameter: SWMLConnectSerialDialingParameter): any {
    return {
        serial: parameter.serial.map(convertSWMLConnectDestinationToJSON),
    }
}

export function convertJSONObjectToSWMLConnectSerialDialingParameter(json: any): SWMLConnectSerialDialingParameter {
    return {
        type: 'serial',
        serial: json.serial.map(convertJSONToSWMLConnectDestination),
    }
}

export function convertSWMLConnectParallelDialingParameterToJSONObject(parameter: SWMLConnectParallelDialingParameter): any {
    return {
        parallel: parameter.parallel.map(convertSWMLConnectDestinationToJSON),
    }
}

export function convertJSONObjectToSWMLConnectParallelDialingParameter(json: any): SWMLConnectParallelDialingParameter {
    return {
        type: 'parallel',
        parallel: json.parallel.map(convertJSONToSWMLConnectDestination),
    }
}

export function convertSWMLConnectSerialParallelDialingParameterToJSONObject(parameter: SWMLConnectSerialParallelDialingParameter): any {
    return {
        serial_parallel: parameter.serialParallel.map(parallel => parallel.map(convertSWMLConnectDestinationToJSON)),
    }
}

export function convertJSONObjectToSWMLConnectSerialParallelDialingParameter(json: any): SWMLConnectSerialParallelDialingParameter {
    return {
        type: 'serialParallel',
        serialParallel: json.serial_parallel.map((parallel: any[]) => parallel.map(convertJSONToSWMLConnectDestination)),
    }
}

export function convertSWMLConnectDialingParameterToJSONObject(parameter: SWMLConnectDialingParameter): any {
    switch (parameter.type) {
        case 'to':
            return convertSWMLConnectToDialingParameterToJSONObject(parameter);
        case 'serial':
            return convertSWMLConnectSerialDialingParameterToJSONObject(parameter);
        case 'parallel':
            return convertSWMLConnectParallelDialingParameterToJSONObject(parameter);
        case 'serialParallel':
            return convertSWMLConnectSerialParallelDialingParameterToJSONObject(parameter);
        default:
            throw Error("Unknown Dialing Parameter Type");
    }
}

export function convertJSONObjectToSWMLConnectDialingParameter(json: any): SWMLConnectDialingParameter {
    const objectKeys = Object.keys(json);
    if (objectKeys.includes('to')) {
        return convertToParameterToSWMLConnectToDialingParameter(json.to);
    } else if (objectKeys.includes('serial')) {
        return convertJSONObjectToSWMLConnectSerialDialingParameter(json);
    } else if (objectKeys.includes('parallel')) {
        return convertJSONObjectToSWMLConnectParallelDialingParameter(json);
    } else if (objectKeys.includes('serial_parallel')) {
        return convertJSONObjectToSWMLConnectSerialParallelDialingParameter(json);
    } else {
        throw Error("Unknown Dialing Parameter Type");
    }
}

export function convertSWMLConnectParametersToJSON(parameters: SWMLConnectParameters): any {
    const dialingParameter = convertSWMLConnectDialingParameterToJSONObject(parameters.dialing);
    return {
        answer_on_bridge: parameters.answerOnBridge,
        call_state_events: parameters.callStateEvents,
        codecs: parameters.codecs,
        confirm: parameters.confirm,
        confirm_timeout: parameters.confirmTimeout,
        encryption: parameters.encryption,
        from: parameters.from,
        headers: parameters.headers?.map(convertSWMLConnectHeaderToJSON),
        max_duration: parameters.maxDuration,
        result: parameters.result,
        ringback: parameters.ringback,
        session_timeout: parameters.sessionTimeout,
        status_url: parameters.statusUrl,
        timeout: parameters.timeout,
        username: parameters.username,
        password: parameters.password,
        webrtc_media: parameters.webRTCMedia,
        ...dialingParameter
    }
}

export function convertJSONToSWMLConnectParameters(json: any): SWMLConnectParameters {
    const dialingParameter = convertJSONObjectToSWMLConnectDialingParameter(json);

    return {
        answerOnBridge: json.answer_on_bridge,
        callStateEvents: json.call_state_events,
        codecs: json.codecs,
        confirm: json.confirm,
        confirmTimeout: json.confirm_timeout,
        encryption: json.encryption,
        from: json.from,
        headers: json.headers?.map(convertJSONToSWMLConnectHeader),
        maxDuration: json.max_duration,
        result: json.result,
        ringback: json.ringback,
        sessionTimeout: json.session_timeout,
        statusUrl: json.status_url,
        timeout: json.timeout,
        username: json.username,
        password: json.password,
        webRTCMedia: json.webrtc_media,
        dialing: dialingParameter
    }
}

export function convertSWMLConnectMethodToJSON(method: SWMLConnectMethod): any {
    return {
        connect: convertSWMLConnectParametersToJSON(method.connect)
    }
}

export function convertJSONToSWMLConnectMethod(json: any): SWMLConnectMethod {
    return {
        type: 'connect',
        connect: convertJSONToSWMLConnectParameters(json.connect)
    }
}

export function convertSWMLDenoiseMethodToJSON(method: SWMLDenoiseMethod): any {
    return {
        denoise: method.denoise,
    }
}

export function convertJSONToSWMLDenoiseMethod(json: any): SWMLDenoiseMethod {
    return {
        type: 'denoise',
        denoise: json.denoise,
    }
}

export function convertSWMLDetectMachineParametersToJSON(parameters: SWMLDetectMachineParameters): any {
    return {
        detect_message_end: parameters.detectMessageEnd,
        detectors: parameters.detectors.join(','),
        end_silence_timeout: parameters.endSilenceTimeout,
        initial_timeout: parameters.initialTimeout,
        machine_ready_timeout: parameters.machineReadyTimeout,
        machine_voice_threshold: parameters.machineVoiceThreshold,
        machine_words_threshold: parameters.machineWordsThreshold,
        status_url: parameters.statusUrl,
        timeout: parameters.timeout,
        tone: parameters.tone,
        wait: parameters.wait,
    }
}

export function convertJSONToSWMLDetectMachineParameters(json: any): SWMLDetectMachineParameters {
    return {
        detectMessageEnd: json.detect_message_end,
        detectors: json.detectors.split(',').map((detector: string) => detector.trim()),
        endSilenceTimeout: json.end_silence_timeout,
        initialTimeout: json.initial_timeout,
        machineReadyTimeout: json.machine_ready_timeout,
        machineVoiceThreshold: json.machine_voice_threshold,
        machineWordsThreshold: json.machine_words_threshold,
        statusUrl: json.status_url,
        timeout: json.timeout,
        tone: json.tone,
        wait: json.wait,
    }
}

export function convertSWMLDetectMachineMethodToJSON(method: SWMLDetectMachineMethod): any {
    return {
        detect_machine: convertSWMLDetectMachineParametersToJSON(method.detectMachine)
    }
}

export function convertJSONToSWMLDetectMachineMethod(json: any): SWMLDetectMachineMethod {
    return {
        type: 'detectMachine',
        detectMachine: convertJSONToSWMLDetectMachineParameters(json.detect_machine)
    }
}

export function convertSWMLExecuteParametersToJSON(parameters: SWMLExecuteParameters): any {
    return {
        dest: parameters.dest,
        params: parameters.params,
        on_return: parameters.onReturn?.map(convertSWMLMethodToJSON),
        result: parameters.result,
    }
}

export function convertJSONToSWMLExecuteParameters(json: any): SWMLExecuteParameters {
    return {
        dest: json.dest,
        params: json.params,
        onReturn: json.on_return?.map(convertJSONToSWMLMethod),
        result: json.result,
    }
}

export function convertSWMLExecuteMethodToJSON(method: SWMLExecuteMethod): any {
    return {
        execute: convertSWMLExecuteParametersToJSON(method.execute)
    }
}

export function convertJSONToSWMLExecuteMethod(json: any): SWMLExecuteMethod {
    return {
        type: 'execute',
        execute: convertJSONToSWMLExecuteParameters(json.execute)
    }
}

export function convertSWMLGotoParametersToJSON(parameters: SWMLGotoParameters): any {
    return {
        label: parameters.label,
        when: parameters.when,
        max: parameters.max
    }
}

export function convertJSONToSWMLGotoParameters(json: any): SWMLGotoParameters {
    return {
        label: json.label,
        when: json.when,
        max: json.max
    }
}

export function convertSWMLGotoMethodToJSON(method: SWMLGotoMethod): any {
    return {
        goto: convertSWMLGotoParametersToJSON(method.goto)
    }
}

export function convertJSONToSWMLGotoMethod(json: any): SWMLGotoMethod {
    return {
        type: 'goto',
        goto: convertJSONToSWMLGotoParameters(json.goto)
    }
}

export function convertSWMLHangupParametersToJSON(parameters: SWMLHangupParameters): any {
    return {
        reason: parameters.reason
    }
}

export function convertJSONToSWMLHangupParameters(json: any): SWMLHangupParameters {
    return {
        reason: json.reason
    }
}

export function convertSWMLHangupMethodToJSON(method: SWMLHangupMethod): any {
    return {
        hangup: convertSWMLHangupParametersToJSON(method.hangup)
    }
}

export function convertJSONToSWMLHangupMethod(json: any): SWMLHangupMethod {
    return {
        type: 'hangup',
        hangup: convertJSONToSWMLHangupParameters(json.hangup)
    }
}

export function convertSWMLJoinRoomParametersToJSON(parameters: SWMLJoinRoomParameters): any {
    return {
        name: parameters.name,
    }
}

export function convertJSONToSWMLJoinRoomParameters(json: any): SWMLJoinRoomParameters {
    return {
        name: json.name,
    }
}

export function convertSWMLJoinRoomMethodToJSON(method: SWMLJoinRoomMethod): any {
    return {
        join_room: convertSWMLJoinRoomParametersToJSON(method.joinRoom)
    }
}

export function convertJSONToSWMLJoinRoomMethod(json: any): SWMLJoinRoomMethod {
    return {
        type: 'joinRoom',
        joinRoom: convertJSONToSWMLJoinRoomParameters(json.join_room)
    }
}

export function convertSWMLLabelMethodToJSON(method: SWMLLabelMethod): any {
    return {
        label: method.label
    }
}

export function convertJSONToSWMLLabelMethod(json: any): SWMLLabelMethod {
    return {
        type: 'label',
        label: json.label
    }
}

export function convertSWMLLiveTranscribeStartActionToJSON(action: SWMLLiveTranscribeStartAction): any {
    return {
        webhook: action.webhook,
        lang: action.lang,
        live_events: action.liveEvents,
        ai_summary: action.aiSummary,
        speech_timeout: action.speechTimeout,
        vad_silence_ms: action.vadSilenceMS,
        vad_threshold: action.vadThreshold,
        debug_level: action.debugLevel,
        direction: action.direction,
        summary_prompt: action.summaryPrompt,
    }
}

export function convertJSONToSWMLLiveTranscribeStartAction(json: any): SWMLLiveTranscribeStartAction {
    return {
        type: 'liveTranscribeStart',
        webhook: json.webhook,
        lang: json.lang,
        liveEvents: json.live_events,
        aiSummary: json.ai_summary,
        speechTimeout: json.speech_timeout,
        vadSilenceMS: json.vad_silence_ms,
        vadThreshold: json.vad_threshold,
        debugLevel: json.debug_level,
        direction: json.direction,
        summaryPrompt: json.summary_prompt,
    }
}

export function convertSWMLLiveTranscribeStopActionToJSON(action: SWMLLiveTranscribeStopAction): any {
    if (action.type === 'liveTranscribeStop') {
        return "stop"
    }
}

export function convertJSONToSWMLLiveTranscribeStopAction(json: any): SWMLLiveTranscribeStopAction {
    if (json === 'stop') {
        return {
            type: 'liveTranscribeStop',
        }
    } else {
        throw Error('Unknown Live Transcribe Action');
    }
}

export function convertSWMLLiveTranscribeSummarizeActionToJSON(action: SWMLLiveTranscribeSummarizeAction): any {
    return {
        webhook: action.webhook,
        prompt: action.prompt,
    }
}

export function convertJSONToSWMLLiveTranscribeSummarizeAction(json: any): SWMLLiveTranscribeSummarizeAction {
    return {
        type: 'liveTranscribeSummarize',
        webhook: json.webhook,
        prompt: json.prompt,
    }
}

export function convertSWMLLiveTranscribeActionToJSON(action: SWMLLiveTranscribeAction): any {
    switch (action.type) {
        case 'liveTranscribeStart':
            return convertSWMLLiveTranscribeStartActionToJSON(action);
        case 'liveTranscribeStop':
            return convertSWMLLiveTranscribeStopActionToJSON(action);
        case 'liveTranscribeSummarize':
            return convertSWMLLiveTranscribeSummarizeActionToJSON(action);
        default:
            throw Error("Unknown Live Transcribe Action");
    }
}

export function convertJSONToSWMLLiveTranscribeAction(json: any): SWMLLiveTranscribeAction {
    const objectKeys = Object.keys(json);
    if (objectKeys.includes('lang') && objectKeys.includes('direction')) {
        return convertJSONToSWMLLiveTranscribeStartAction(json);
    } else if (json === 'stop') {
        return convertJSONToSWMLLiveTranscribeStopAction(json);
    } else if (objectKeys.includes('webhook') || objectKeys.includes('prompt') || objectKeys.length === 0) {
        return convertJSONToSWMLLiveTranscribeSummarizeAction(json);
    } else {
        throw Error("Unknown Live Transcribe Action");
    }
}

export function convertSWMLLiveTranscribeParametersToJSON(parameters: SWMLLiveTranscribeParameters): any {
    return {
        action: convertSWMLLiveTranscribeActionToJSON(parameters.action)
    }
}

export function convertJSONToSWMLLiveTranscribeParameters(json: any): SWMLLiveTranscribeParameters {
    return {
        action: convertJSONToSWMLLiveTranscribeAction(json.action)
    }
}

export function convertSWMLLiveTranscribeMethodToJSON(method: SWMLLiveTranscribeMethod): any {
    return {
        live_transcribe: convertSWMLLiveTranscribeParametersToJSON(method.liveTranscribe)
    }
}

export function convertJSONToSWMLLiveTranscribeMethod(json: any): SWMLLiveTranscribeMethod {
    return {
        type: 'liveTranscribe',
        liveTranscribe: convertJSONToSWMLLiveTranscribeParameters(json.live_transcribe)
    }
}

export function convertSWMLLiveTranslateStartActionToJSON(action: SWMLLiveTranslateStartAction): any {
    return {
        webhook: action.webhook,
        from_lang: action.fromLang,
        to_lang: action.toLang,
        from_voice: action.fromVoice,
        to_voice: action.toVoice,
        live_events: action.liveEvents,
        ai_summary: action.aiSummary,
        speech_timeout: action.speechTimeout,
        vad_silence_ms: action.vadSilenceMS,
        vad_threshold: action.vadThreshold,
        debug_level: action.debugLevel,
        direction: action.direction,
        summary_prompt: action.summaryPrompt,
    }
}

export function convertJSONToSWMLLiveTranslateStartAction(json: any): SWMLLiveTranslateStartAction {
    return {
        type: 'liveTranslateStart',
        webhook: json.webhook,
        fromLang: json.from_lang,
        toLang: json.to_lang,
        fromVoice: json.from_voice,
        toVoice: json.to_voice,
        liveEvents: json.live_events,
        aiSummary: json.ai_summary,
        speechTimeout: json.speech_timeout,
        vadSilenceMS: json.vad_silence_ms,
        vadThreshold: json.vad_threshold,
        debugLevel: json.debug_level,
        direction: json.direction,
        summaryPrompt: json.summary_prompt,
    }
}

export function convertSWMLLiveTranslateStopActionToJSON(action: SWMLLiveTranslateStopAction): any {
    if (action.type === 'liveTranslateStop') {
        return "stop"
    }
}

export function convertJSONToSWMLLiveTranslateStopAction(json: any): SWMLLiveTranslateStopAction {
    if (json === 'stop') {
        return {
            type: 'liveTranslateStop',
        }
    } else {
        throw Error('Unknown Live Translate Action');
    }
}

export function convertSWMLLiveTranslateSummarizeActionToJSON(action: SWMLLiveTranslateSummarizeAction): any {
    return {
        webhook: action.webhook,
        prompt: action.prompt,
    }
}

export function convertJSONToSWMLLiveTranslateSummarizeAction(json: any): SWMLLiveTranslateSummarizeAction {
    return {
        type: 'liveTranslateSummarize',
        webhook: json.webhook,
        prompt: json.prompt,
    }
}

export function convertSWMLLiveTranslateInjectActionToJSON(action: SWMLLiveTranslateInjectAction): any {
    return {
        message: action.message,
        direction: action.direction,
    }
}

export function convertJSONToSWMLLiveTranslateInjectAction(json: any): SWMLLiveTranslateInjectAction {
    return {
        type: 'liveTranslateInject',
        message: json.message,
        direction: json.direction,
    }
}

export function convertSWMLLiveTranslateActionToJSON(action: SWMLLiveTranslateAction): any {
    switch (action.type) {
        case 'liveTranslateStart':
            return convertSWMLLiveTranslateStartActionToJSON(action);
        case 'liveTranslateStop':
            return convertSWMLLiveTranslateStopActionToJSON(action);
        case 'liveTranslateSummarize':
            return convertSWMLLiveTranslateSummarizeActionToJSON(action);
        case 'liveTranslateInject':
            return convertSWMLLiveTranslateInjectActionToJSON(action);
        default:
            throw Error("Unknown Live Translate Action");
    }
}

export function convertJSONToSWMLLiveTranslateAction(json: any): SWMLLiveTranslateAction {
    const objectKeys = Object.keys(json);
    if (objectKeys.includes('from_lang') && objectKeys.includes('to_lang') && objectKeys.includes('direction')) {
        return convertJSONToSWMLLiveTranslateStartAction(json);
    } else if (json === 'stop') {
        return convertJSONToSWMLLiveTranslateStopAction(json);
    } else if (objectKeys.includes('webhook') || objectKeys.includes('prompt') || objectKeys.length === 0) {
        return convertJSONToSWMLLiveTranslateSummarizeAction(json);
    } else if (objectKeys.includes('message') && objectKeys.includes('direction')) {
        return convertJSONToSWMLLiveTranslateInjectAction(json);
    } else {
        throw Error("Unknown Live Translate Action");
    }
}

export function convertSWMLLiveTranslateParametersToJSON(parameters: SWMLLiveTranslateParameters): any {
    return {
        action: convertSWMLLiveTranslateActionToJSON(parameters.action)
    }
}

export function convertJSONToSWMLLiveTranslateParameters(json: any): SWMLLiveTranslateParameters {
    return {
        action: convertJSONToSWMLLiveTranslateAction(json.action)
    }
}

export function convertSWMLLiveTranslateMethodToJSON(method: SWMLLiveTranslateMethod): any {
    return {
        live_translate: convertSWMLLiveTranslateParametersToJSON(method.liveTranslate)
    }
}

export function convertJSONToSWMLLiveTranslateMethod(json: any): SWMLLiveTranslateMethod {
    return {
        type: 'liveTranslate',
        liveTranslate: convertJSONToSWMLLiveTranslateParameters(json.live_translate)
    }
}

export function convertSWMLPayParameterToJSON(parameter: SWMLPayParameter): any {
    return {
        name: parameter.name,
        value: parameter.value
    }
}

export function convertJSONToSWMLPayParameter(json: any): SWMLPayParameter {
    return {
        name: json.name,
        value: json.value
    }
}

export function convertSWMLPayPromptActionToJSON(action: SWMLPayPromptAction): any {
    return {
        phrase: action.phrase,
        type: action.type,
    }
}

export function convertJSONToSWMLPayPromptAction(json: any): SWMLPayPromptAction {
    return {
        phrase: json.phrase,
        type: json.type,
    }
}

export function convertSWMLPayPromptToJSON(prompt: SWMLPayPrompt): any {
    return {
        actions: prompt.actions.map(convertSWMLPayPromptActionToJSON),
        for: prompt.for,
        attempts: prompt.attempts,
        card_type: prompt.cardTypes?.join(' '),
        error_type: prompt.errorTypes?.join(' ')
    }
}

export function convertJSONToSWMLPayPrompt(json: any): SWMLPayPrompt {
    return {
        actions: json.actions.map(convertJSONToSWMLPayPromptAction),
        for: json.for,
        attempts: json.attempts,
        cardTypes: json.card_type?.split(' ').filter(Boolean),
        errorTypes: json.error_type?.split(' ').filter(Boolean),
    }
}

export function convertSWMLPayParametersToJSON(parameters: SWMLPayParameters): any {
    return {
        payment_connector_url: parameters.paymentConnectorUrl,
        charge_amount: parameters.chargeAmount,
        currency: parameters.currency,
        description: parameters.description,
        input: parameters.input,
        language: parameters.language,
        max_attempts: parameters.maxAttempts,
        min_postal_code_length: parameters.minPostalCodeLength,
        parameters: parameters.parameters?.map(convertSWMLPayParameterToJSON),
        postal_code: parameters.postalCode,
        prompts: parameters.prompts?.map(convertSWMLPayPromptToJSON),
        security_code: parameters.securityCode,
        status_url: parameters.statusUrl,
        timeout: parameters.timeout,
        token_type: parameters.tokenType,
        valid_card_types: parameters.validCardTypes?.join(' '),
        voice: parameters.voice,
    }
}

export function convertJSONToSWMLPayParameters(json: any): SWMLPayParameters {
    return {
        paymentConnectorUrl: json.payment_connector_url,
        chargeAmount: json.charge_amount,
        currency: json.currency,
        description: json.description,
        input: json.input,
        language: json.language,
        maxAttempts: json.max_attempts,
        minPostalCodeLength: json.min_postal_code_length,
        parameters: json.parameters?.map(convertJSONToSWMLPayParameter),
        postalCode: json.postal_code,
        prompts: json.prompts?.map(convertJSONToSWMLPayPrompt),
        securityCode: json.security_code,
        statusUrl: json.status_url,
        timeout: json.timeout,
        tokenType: json.token_type,
        validCardTypes: json.valid_card_types?.split(' ').filter(Boolean),
        voice: json.voice,
    }
}

export function convertSWMLPayMethodToJSON(method: SWMLPayMethod): any {
    return {
        pay: convertSWMLPayParametersToJSON(method.pay)
    }
}

export function convertJSONToSWMLPayMethod(json: any): SWMLPayMethod {
    return {
        type: 'pay',
        pay: convertJSONToSWMLPayParameters(json.pay)
    }
}

export function convertSWMLPlayUrlToJSONObject(playUrl: SWMLPlayUrl): any {
    return {
        url: playUrl.url
    }
}

export function convertJSONObjectToSWMLPlayUrl(json: any): SWMLPlayUrl {
    return {
        type: 'single',
        url: json.url
    }
}

export function convertSWMLPlayUrlsToJSONObject(playUrls: SWMLPlayUrls): any {
    return {
        urls: playUrls.urls
    }
}

export function convertJSONObjectToSWMLPlayUrls(json: any): SWMLPlayUrls {
    return {
        type: 'multiple',
        urls: json.urls
    }
}

export function convertSWMLPlayableSoundToJSONObject(playableSound: SWMLPlayableSound): any {
    switch (playableSound.type) {
        case 'single':
            return convertSWMLPlayUrlToJSONObject(playableSound);
        case 'multiple':
            return convertSWMLPlayUrlsToJSONObject(playableSound);
        default:
            throw Error('Unknown Playable Sound Type');
    }
}

export function convertJSONObjectToSWMLPlayableSound(json: any): SWMLPlayableSound {
    const objectKeys = Object.keys(json);
    if (objectKeys.includes('url')) {
        return convertJSONObjectToSWMLPlayUrl(json);
    } else if (objectKeys.includes('urls')) {
        return convertJSONObjectToSWMLPlayUrls(json);
    } else {
        throw Error('Unknown Playable Sound Type');
    }
}

export function convertSWMLPlayParametersToJSON(playParameters: SWMLPlayParameters): any {
    const playJSONObject = convertSWMLPlayableSoundToJSONObject(playParameters.playableSound);
    return {
        auto_answer: playParameters.autoAnswer,
        ...playJSONObject,
        volume: playParameters.volume,
        say_voice: playParameters.sayVoice,
        say_language: playParameters.sayLanguage,
        say_gender: playParameters.sayGender,
        status_url: playParameters.statusUrl,
    }
}

export function convertJSONToSWMLPlayParameters(json: any): SWMLPlayParameters {
    return {
        autoAnswer: json.auto_answer,
        playableSound: convertJSONObjectToSWMLPlayableSound(json),
        volume: json.volume,
        sayVoice: json.say_voice,
        sayLanguage: json.say_language,
        sayGender: json.say_gender,
        statusUrl: json.status_url,
    }
}

export function convertSWMLPlayMethodToJSON(method: SWMLPlayMethod): any {
    return {
        play: convertSWMLPlayParametersToJSON(method.play)
    }
}

export function convertJSONToSWMLPlayMethod(json: any): SWMLPlayMethod {
    return {
        type: 'play',
        play: convertJSONToSWMLPlayParameters(json.play)
    }
}

export function convertSWMLPromptParametersToJSON(parameters: SWMLPromptParameters): any {
    return {
        play: parameters.play,
        volume: parameters.volume,
        say_voice: parameters.sayVoice,
        say_language: parameters.sayLanguage,
        say_gender: parameters.sayGender,
        max_digits: parameters.maxDigits,
        terminators: parameters.terminators?.join(''),
        digit_timeout: parameters.digitTimeout,
        initial_timeout: parameters.initialTimeout,
        speech_timeout: parameters.speechTimeout,
        speech_end_timeout: parameters.speechEndTimeout,
        speech_language: parameters.speechLanguage,
        speech_hints: parameters.speechHints,
        status_url: parameters.statusUrl,
    }
}

export function convertJSONToSWMLPromptParameters(json: any): SWMLPromptParameters {
    return {
        play: json.play,
        volume: json.volume,
        sayVoice: json.say_voice,
        sayLanguage: json.say_language,
        sayGender: json.say_gender,
        maxDigits: json.max_digits,
        terminators: json.terminators?.split(''),
        digitTimeout: json.digit_timeout,
        initialTimeout: json.initial_timeout,
        speechTimeout: json.speech_timeout,
        speechEndTimeout: json.speech_end_timeout,
        speechLanguage: json.speech_language,
        speechHints: json.speech_hints,
        statusUrl: json.status_url,
    }
}

export function convertSWMLPromptMethodToJSON(method: SWMLPromptMethod): any {
    return {
        prompt: convertSWMLPromptParametersToJSON(method.prompt)
    }
}

export function convertJSONToSWMLPromptMethod(json: any): SWMLPromptMethod {
    return {
        type: 'prompt',
        prompt: convertJSONToSWMLPromptParameters(json.prompt)
    }
}

export function convertSWMLReceiveFaxParametersToJSON(parameters: SWMLReceiveFaxParameters): any {
    return {
        status_url: parameters.statusUrl
    }
}

export function convertJSONToSWMLReceiveFaxParameters(json: any): SWMLReceiveFaxParameters {
    return {
        statusUrl: json.status_url
    }
}

export function convertSWMLReceiveFaxMethodToJSON(method: SWMLReceiveFaxMethod): any {
    return {
        receive_fax: convertSWMLReceiveFaxParametersToJSON(method.receiveFax)
    }
}

export function convertJSONToSWMLReceiveFaxMethod(json: any): SWMLReceiveFaxMethod {
    return {
        type: 'receiveFax',
        receiveFax: convertJSONToSWMLReceiveFaxParameters(json.receive_fax)
    }
}

export function convertSWMLRecordParametersToJSON(parameters: SWMLRecordParameters): any {
    return {
        stereo: parameters.stereo,
        format: parameters.format,
        direction: parameters.direction,
        terminators: parameters.terminators?.join(''),
        beep: parameters.beep,
        input_sensitivity: parameters.inputSensitivity,
        initial_timeout: parameters.initialTimeout,
        end_silence_timeout: parameters.endSilenceTimeout,
        status_url: parameters.statusUrl,
    }
}

export function convertJSONToSWMLRecordParameters(json: any): SWMLRecordParameters {
    return {
        stereo: json.stereo,
        format: json.format,
        direction: json.direction,
        terminators: json.terminators?.split(''),
        beep: json.beep,
        inputSensitivity: json.input_sensitivity,
        initialTimeout: json.initial_timeout,
        endSilenceTimeout: json.end_silence_timeout,
        statusUrl: json.status_url,
    }
}

export function convertSWMLRecordMethodToJSON(method: SWMLRecordMethod): any {
    return {
        record: convertSWMLRecordParametersToJSON(method.record)
    }
}

export function convertJSONToSWMLRecordMethod(json: any): SWMLRecordMethod {
    return {
        type: 'record',
        record: convertJSONToSWMLRecordParameters(json.record)
    }
}

export function convertSWMLRecordCallParametersToJSON(parameters: SWMLRecordCallParameters): any {
    return {
        control_id: parameters.controlId,
        stereo: parameters.stereo,
        format: parameters.format,
        direction: parameters.direction,
        terminators: parameters.terminators?.join(''),
        beep: parameters.beep,
        input_sensitivity: parameters.inputSensitivity,
        initial_timeout: parameters.initialTimeout,
        end_silence_timeout: parameters.endSilenceTimeout,
        status_url: parameters.statusUrl,
    }
}

export function convertJSONToSWMLRecordCallParameters(json: any): SWMLRecordCallParameters {
    return {
        controlId: json.control_id,
        stereo: json.stereo,
        format: json.format,
        direction: json.direction,
        terminators: json.terminators?.split(''),
        beep: json.beep,
        inputSensitivity: json.input_sensitivity,
        initialTimeout: json.initial_timeout,
        endSilenceTimeout: json.end_silence_timeout,
        statusUrl: json.status_url,
    }
}

export function convertSWMLRecordCallMethodToJSON(method: SWMLRecordCallMethod): any {
    return {
        record_call: convertSWMLRecordCallParametersToJSON(method.recordCall)
    }
}

export function convertJSONToSWMLRecordCallMethod(json: any): SWMLRecordCallMethod {
    return {
        type: 'recordCall',
        recordCall: convertJSONToSWMLRecordCallParameters(json.record_call)
    }
}

export function convertSWMLRequestParametersToJSON(parameters: SWMLRequestParameters): any {
    return {
        url: parameters.url,
        method: parameters.method,
        headers: parameters.headers,
        body: parameters.body,
        connect_timeout: parameters.connectTimeout,
        timeout: parameters.timeout,
        save_variables: parameters.saveVariables,
    }
}

export function convertJSONToSWMLRequestParameters(json: any): SWMLRequestParameters {
    return {
        url: json.url,
        method: json.method,
        headers: json.headers,
        body: json.body,
        connectTimeout: json.connect_timeout,
        timeout: json.timeout,
        saveVariables: json.save_variables,
    }
}

export function convertSWMLRequestMethodToJSON(method: SWMLRequestMethod): any {
    return {
        request: convertSWMLRequestParametersToJSON(method.request)
    }
}

export function convertJSONToSWMLRequestMethod(json: any): SWMLRequestMethod {
    return {
        type: 'request',
        request: convertJSONToSWMLRequestParameters(json.request)
    }
}

export function convertSWMLReturnMethodToJSON(method: SWMLReturnMethod): any {
    return {
        return: method.return
    }
}

export function convertJSONToSWMLReturnMethod(json: any): SWMLReturnMethod {
    return {
        type: 'return',
        return: json.return
    }
}

export function convertSWMLSendDigitsParametersToJSON(parameters: SWMLSendDigitsParameters): any {
    return {
        digits: parameters.digits
    }
}

export function convertJSONToSWMLSendDigitsParameters(json: any): SWMLSendDigitsParameters {
    return {
        digits: json.digits
    }
}

export function convertSWMLSendDigitsMethodToJSON(method: SWMLSendDigitsMethod): any {
    return {
        send_digits: convertSWMLSendDigitsParametersToJSON(method.sendDigits)
    }
}

export function convertJSONToSWMLSendDigitsMethod(json: any): SWMLSendDigitsMethod {
    return {
        type: 'sendDigits',
        sendDigits: convertJSONToSWMLSendDigitsParameters(json.send_digits)
    }
}

export function convertSWMLSendFaxParametersToJSON(parameters: SWMLSendFaxParameters): any {
    return {
        document: parameters.document,
        header_info: parameters.headerInfo,
        identity: parameters.identity,
        status_url: parameters.statusUrl,
    }
}

export function convertJSONToSWMLSendFaxParameters(json: any): SWMLSendFaxParameters {
    return {
        document: json.document,
        headerInfo: json.header_info,
        identity: json.identity,
        statusUrl: json.status_url,
    }
}

export function convertSWMLSendFaxMethodToJSON(method: SWMLSendFaxMethod): any {
    return {
        send_fax: convertSWMLSendFaxParametersToJSON(method.sendFax)
    }
}

export function convertJSONToSWMLSendFaxMethod(json: any): SWMLSendFaxMethod {
    return {
        type: 'sendFax',
        sendFax: convertJSONToSWMLSendFaxParameters(json.send_fax)
    }
}

export function convertSWMLSendSMSMessageParametersToJSON(parameters: SWMLSendSMSMessageParameters): any {
    return {
        to_number: parameters.toNumber,
        from_number: parameters.fromNumber,
        body: parameters.body,
        region: parameters.region,
        tags: parameters.tags,
    }
}

export function convertJSONToSWMLSendSMSMessageParameters(json: any): SWMLSendSMSMessageParameters {
    return {
        type: 'sms',
        toNumber: json.to_number,
        fromNumber: json.from_number,
        body: json.body,
        region: json.region,
        tags: json.tags,
    }
}

export function convertSWMLSendMMSMessageParametersToJSON(parameters: SWMLSendMMSMessageParameters): any {
    return {
        to_number: parameters.toNumber,
        from_number: parameters.fromNumber,
        media: parameters.media,
        body: parameters.body,
        region: parameters.region,
        tags: parameters.tags,
    }
}

export function convertJSONToSWMLSendMMSMessageParameters(json: any): SWMLSendMMSMessageParameters {
    return {
        type: 'mms',
        toNumber: json.to_number,
        fromNumber: json.from_number,
        media: json.media,
        body: json.body,
        region: json.region,
        tags: json.tags,
    }
}

export function convertSWMLSendSMSParametersToJSON(parameters: SWMLSendSMSParameters): any {
    switch (parameters.type) {
        case 'sms':
            return convertSWMLSendSMSMessageParametersToJSON(parameters);
        case 'mms':
            return convertSWMLSendMMSMessageParametersToJSON(parameters);
        default:
            throw Error('Unknown Send SMS Type');
    }
}

export function convertJSONToSWMLSendSMSParameters(json: any): SWMLSendSMSParameters {
    const objectKeys = Object.keys(json);
    if (objectKeys.includes('to_number') && objectKeys.includes('from_number')) {
        if (objectKeys.includes('media')) {
            return convertJSONToSWMLSendMMSMessageParameters(json);
        } else if (objectKeys.includes('body')) {
            return convertJSONToSWMLSendSMSMessageParameters(json);
        }
    }
    throw Error('Unknown Send SMS Type');
}

export function convertSWMLSendSMSMethodToJSON(method: SWMLSendSMSMethod): any {
    return {
        send_sms: convertSWMLSendSMSParametersToJSON(method.sendSMS)
    }
}

export function convertJSONToSWMLSendSMSMethod(json: any): SWMLSendSMSMethod {
    return {
        type: 'sendSMS',
        sendSMS: convertJSONToSWMLSendSMSParameters(json.send_sms)
    }
}

export function convertSWMLSetMethodToJSON(method: SWMLSetMethod): any {
    return {
        set: method.set
    }
}

export function convertJSONToSWMLSetMethod(json: any): SWMLSetMethod {
    return {
        type: 'set',
        set: json.set
    }
}

export function convertSWMLSIPReferParametersToJSON(parameters: SWMLSIPReferParameters): any {
    return {
        to_uri: parameters.toUri,
        status_url: parameters.statusUrl,
        sip_auth_username: parameters.sipAuthUsername,
        sip_auth_password: parameters.sipAuthPassword,
    }
}

export function convertJSONToSWMLSIPReferParameters(json: any): SWMLSIPReferParameters {
    return {
        toUri: json.to_uri,
        statusUrl: json.status_url,
        sipAuthUsername: json.sip_auth_username,
        sipAuthPassword: json.sip_auth_password,
    }
}

export function convertSWMLSIPReferMethodToJSON(method: SWMLSIPReferMethod): any {
    return {
        sip_refer: convertSWMLSIPReferParametersToJSON(method.sipRefer)
    }
}

export function convertJSONToSWMLSIPReferMethod(json: any): SWMLSIPReferMethod {
    return {
        type: 'sipRefer',
        sipRefer: convertJSONToSWMLSIPReferParameters(json.sip_refer)
    }
}

export function convertSWMLSleepParametersToJSON(parameters: SWMLSleepParameters): any {
    return {
        duration: parameters.duration
    }
}

export function convertJSONToSWMLSleepParameters(json: any): SWMLSleepParameters {
    return {
        duration: json.duration
    }
}

export function convertSWMLSleepMethodToJSON(method: SWMLSleepMethod): any {
    return {
        sleep: convertSWMLSleepParametersToJSON(method.sleep)
    }
}

export function convertJSONToSWMLSleepMethod(json: any): SWMLSleepMethod {
    return {
        type: 'sleep',
        sleep: convertJSONToSWMLSleepParameters(json.sleep)
    }
}

export function convertSWMLStopDenoiseMethodToJSON(method: SWMLStopDenoiseMethod): any {
    return {
        stop_denoise: method.stopDenoise
    }
}

export function convertJSONToSWMLStopDenoiseMethod(json: any): SWMLStopDenoiseMethod {
    return {
        type: 'stopDenoise',
        stopDenoise: json.stop_denoise
    }
}

export function convertSWMLStopRecordCallParametersToJSON(parameters: SWMLStopRecordCallParameters): any {
    return {
        control_id: parameters.controlId
    }
}

export function convertJSONToSWMLStopRecordCallParameters(json: any): SWMLStopRecordCallParameters {
    return {
        controlId: json.control_id
    }
}

export function convertSWMLStopRecordCallMethodToJSON(method: SWMLStopRecordCallMethod): any {
    return {
        stop_record_call: convertSWMLStopRecordCallParametersToJSON(method.stopRecordCall)
    }
}

export function convertJSONToSWMLStopRecordCallMethod(json: any): SWMLStopRecordCallMethod {
    return {
        type: 'stopRecordCall',
        stopRecordCall: convertJSONToSWMLStopRecordCallParameters(json.stop_record_call)
    }
}

export function convertSWMLStopTapParametersToJSON(parameters: SWMLStopTapParameters): any {
    return {
        control_id: parameters.controlId
    }
}

export function convertJSONToSWMLStopTapParameters(json: any): SWMLStopTapParameters {
    return {
        controlId: json.control_id
    }
}

export function convertSWMLStopTapMethodToJSON(method: SWMLStopTapMethod): any {
    return {
        stop_tap: convertSWMLStopTapParametersToJSON(method.stopTap)
    }
}

export function convertJSONToSWMLStopTapMethod(json: any): SWMLStopTapMethod {
    return {
        type: 'stopTap',
        stopTap: convertJSONToSWMLStopTapParameters(json.stop_tap)
    }
}

export function convertSWMLSwitchCaseParametersToJSON(parameters: SWMLSwitchCaseParameters): any {
    const objectEntries = Object.entries(parameters).map(([key, methods]) => {
        const tuple: [string, any] = [key, methods.map(convertSWMLMethodToJSON)];
        return tuple;
    });
    return Object.fromEntries(objectEntries);
}

export function convertJSONToSWMLSwitchCaseParameters(json: any): SWMLSwitchCaseParameters {
    const objectEntries = Object.entries(json).map(([key, methods]) => {
        if (Array.isArray(methods)) {
            const tuple: [string, SWMLMethod[]] = [key, methods.map(convertJSONToSWMLMethod)];
            return tuple;
        } else {
            throw Error('Unknown Switch Case Type');
        }
    });
    return Object.fromEntries(objectEntries);
}

export function convertSWMLSwitchParametersToJSON(parameters: SWMLSwitchParameters): any {
    return {
        variable: parameters.variable,
        case: convertSWMLSwitchCaseParametersToJSON(parameters.case),
        default: parameters.default?.map(convertSWMLMethodToJSON),
    }
}

export function convertJSONToSWMLSwitchParameters(json: any): SWMLSwitchParameters {
    return {
        variable: json.variable,
        case: convertJSONToSWMLSwitchCaseParameters(json.case),
        default: json.default?.map(convertJSONToSWMLMethod),
    }
}

export function convertSWMLSwitchMethodToJSON(method: SWMLSwitchMethod): any {
    return {
        switch: convertSWMLSwitchParametersToJSON(method.switch)
    }
}

export function convertJSONToSWMLSwitchMethod(json: any): SWMLSwitchMethod {
    return {
        type: 'switch',
        switch: convertJSONToSWMLSwitchParameters(json.switch)
    }
}

export function convertSWMLTapParametersToJSON(parameters: SWMLTapParameters): any {
    return {
        uri: parameters.uri,
        control_id: parameters.controlId,
        direction: parameters.direction,
        codec: parameters.codec,
        rtp_ptime: parameters.rtpPTime,
        status_url: parameters.statusUrl,
    }
}

export function convertJSONToSWMLTapParameters(json: any): SWMLTapParameters {
    return {
        uri: json.uri,
        controlId: json.control_id,
        direction: json.direction,
        codec: json.codec,
        rtpPTime: json.rtp_ptime,
        statusUrl: json.status_url,
    }
}

export function convertSWMLTapMethodToJSON(method: SWMLTapMethod): any {
    return {
        tap: convertSWMLTapParametersToJSON(method.tap)
    }
}

export function convertJSONToSWMLTapMethod(json: any): SWMLTapMethod {
    return {
        type: 'tap',
        tap: convertJSONToSWMLTapParameters(json.tap)
    }
}

export function convertSWMLTransferParametersToJSON(parameters: SWMLTransferParameters): any {
    return {
        dest: parameters.dest,
        params: parameters.params,
    }
}

export function convertJSONToSWMLTransferParameters(json: any): SWMLTransferParameters {
    return {
        dest: json.dest,
        params: json.params,
    }
}

export function convertSWMLTransferMethodToJSON(method: SWMLTransferMethod): any {
    return {
        transfer: convertSWMLTransferParametersToJSON(method.transfer)
    }
}

export function convertJSONToSWMLTransferMethod(json: any): SWMLTransferMethod {
    return {
        type: 'transfer',
        transfer: convertJSONToSWMLTransferParameters(json.transfer)
    }
}

export function convertSWMLUnsetParametersToJSON(parameters: SWMLUnsetParameters): any {
    return {
        vars: parameters.vars,
    }
}

export function convertJSONToSWMLUnsetParameters(json: any): SWMLUnsetParameters {
    return {
        vars: json.vars,
    }
}

export function convertSWMLUnsetMethodToJSON(method: SWMLUnsetMethod): any {
    return {
        unset: convertSWMLUnsetParametersToJSON(method.unset)
    }
}

export function convertJSONToSWMLUnsetMethod(json: any): SWMLUnsetMethod {
    return {
        type: 'unset',
        unset: convertJSONToSWMLUnsetParameters(json.unset)
    }
}

export function convertSWMLUserEventParametersToJSON(parameters: SWMLUserEventParameters): any {
    return {
        event: parameters.event
    }
}

export function convertJSONToSWMLUserEventParameters(json: any): SWMLUserEventParameters {
    return {
        event: json.event
    }
}

export function convertSWMLUserEventMethodToJSON(method: SWMLUserEventMethod): any {
    return {
        user_event: convertSWMLUserEventParametersToJSON(method.userEvent)
    }
}

export function convertJSONToSWMLUserEventMethod(json: any): SWMLUserEventMethod {
    return {
        type: 'userEvent',
        userEvent: convertJSONToSWMLUserEventParameters(json.user_event)
    }
}

export function convertSWMLMethodToJSON(method: SWMLMethod): any {
    switch (method.type) {
        case 'ai':
            return convertSWMLAIMethodToJSON(method);
        case 'answer':
            return convertSWMLAnswerMethodToJSON(method);
        case 'cond':
            return convertSWMLCondMethodToJSON(method);
        case 'connect':
            return convertSWMLConnectMethodToJSON(method);
        case 'denoise':
            return convertSWMLDenoiseMethodToJSON(method);
        case 'detectMachine':
            return convertSWMLDetectMachineMethodToJSON(method);
        case 'execute':
            return convertSWMLExecuteMethodToJSON(method);
        case 'goto':
            return convertSWMLGotoMethodToJSON(method);
        case 'hangup':
            return convertSWMLHangupMethodToJSON(method);
        case 'joinRoom':
            return convertSWMLJoinRoomMethodToJSON(method);
        case 'label':
            return convertSWMLLabelMethodToJSON(method);
        case 'liveTranscribe':
            return convertSWMLLiveTranscribeMethodToJSON(method);
        case 'liveTranslate':
            return convertSWMLLiveTranslateMethodToJSON(method);
        case 'pay':
            return convertSWMLPayMethodToJSON(method);
        case 'play':
            return convertSWMLPlayMethodToJSON(method);
        case 'prompt':
            return convertSWMLPromptMethodToJSON(method);
        case 'receiveFax':
            return convertSWMLReceiveFaxMethodToJSON(method);
        case 'record':
            return convertSWMLRecordMethodToJSON(method);
        case 'recordCall':
            return convertSWMLRecordCallMethodToJSON(method);
        case 'request':
            return convertSWMLRequestMethodToJSON(method);
        case 'return':
            return convertSWMLReturnMethodToJSON(method);
        case 'sendDigits':
            return convertSWMLSendDigitsMethodToJSON(method);
        case 'sendFax':
            return convertSWMLSendFaxMethodToJSON(method);
        case 'sendSMS':
            return convertSWMLSendSMSMethodToJSON(method);
        case 'set':
            return convertSWMLSetMethodToJSON(method);
        case 'sipRefer':
            return convertSWMLSIPReferMethodToJSON(method);
        case 'sleep':
            return convertSWMLSleepMethodToJSON(method);
        case 'stopDenoise':
            return convertSWMLStopDenoiseMethodToJSON(method);
        case 'stopRecordCall':
            return convertSWMLStopRecordCallMethodToJSON(method);
        case 'stopTap':
            return convertSWMLStopTapMethodToJSON(method);
        case 'switch':
            return convertSWMLSwitchMethodToJSON(method);
        case 'tap':
            return convertSWMLTapMethodToJSON(method);
        case 'transfer':
            return convertSWMLTransferMethodToJSON(method);
        case 'unset':
            return convertSWMLUnsetMethodToJSON(method);
        case 'userEvent':
            return convertSWMLUserEventMethodToJSON(method);
        default:
            throw Error("Unknown Method Type");
    }
}

export function convertJSONToSWMLMethod(json: any): SWMLMethod {
    const objectKeys = Object.keys(json);
    if (objectKeys.includes('ai')) {
        return convertJSONToSWMLAIMethod(json);
    } else if (objectKeys.includes('answer')) {
        return convertJSONToSWMLAnswerMethod(json);
    } else if (objectKeys.includes('cond')) {
        return convertJSONToSWMLCondMethod(json);
    } else if (objectKeys.includes('connect')) {
        return convertJSONToSWMLConnectMethod(json);
    } else if (objectKeys.includes('denoise')) {
        return convertJSONToSWMLDenoiseMethod(json);
    } else if (objectKeys.includes('detect_machine')) {
        return convertJSONToSWMLDetectMachineMethod(json);
    } else if (objectKeys.includes('execute')) {
        return convertJSONToSWMLExecuteMethod(json);
    } else if (objectKeys.includes('goto')) {
        return convertJSONToSWMLGotoMethod(json);
    } else if (objectKeys.includes('hangup')) {
        return convertJSONToSWMLHangupMethod(json);
    } else if (objectKeys.includes('join_room')) {
        return convertJSONToSWMLJoinRoomMethod(json);
    } else if (objectKeys.includes('label')) {
        return convertJSONToSWMLLabelMethod(json);
    } else if (objectKeys.includes('live_transcribe')) {
        return convertJSONToSWMLLiveTranscribeMethod(json);
    } else if (objectKeys.includes('live_translate')) {
        return convertJSONToSWMLLiveTranslateMethod(json);
    } else if (objectKeys.includes('pay')) {
        return convertJSONToSWMLPayMethod(json);
    } else if (objectKeys.includes('play')) {
        return convertJSONToSWMLPlayMethod(json);
    } else if (objectKeys.includes('prompt')) {
        return convertJSONToSWMLPromptMethod(json);
    } else if (objectKeys.includes('receive_fax')) {
        return convertJSONToSWMLReceiveFaxMethod(json);
    } else if (objectKeys.includes('record')) {
        return convertJSONToSWMLRecordMethod(json);
    } else if (objectKeys.includes('record_call')) {
        return convertJSONToSWMLRecordCallMethod(json);
    } else if (objectKeys.includes('request')) {
        return convertJSONToSWMLRequestMethod(json);
    } else if (objectKeys.includes('return')) {
        return convertJSONToSWMLReturnMethod(json);
    } else if (objectKeys.includes('send_digits')) {
        return convertJSONToSWMLSendDigitsMethod(json);
    } else if (objectKeys.includes('send_fax')) {
        return convertJSONToSWMLSendFaxMethod(json);
    } else if (objectKeys.includes('send_sms')) {
        return convertJSONToSWMLSendSMSMethod(json);
    } else if (objectKeys.includes('set')) {
        return convertJSONToSWMLSetMethod(json);
    } else if (objectKeys.includes('sip_refer')) {
        return convertJSONToSWMLSIPReferMethod(json);
    } else if (objectKeys.includes('sleep')) {
        return convertJSONToSWMLSleepMethod(json);
    } else if (objectKeys.includes('stop_denoise')) {
        return convertJSONToSWMLStopDenoiseMethod(json);
    } else if (objectKeys.includes('stop_record_call')) {
        return convertJSONToSWMLStopRecordCallMethod(json);
    } else if (objectKeys.includes('stop_tap')) {
        return convertJSONToSWMLStopTapMethod(json);
    } else if (objectKeys.includes('switch')) {
        return convertJSONToSWMLSwitchMethod(json);
    } else if (objectKeys.includes('tap')) {
        return convertJSONToSWMLTapMethod(json);
    } else if (objectKeys.includes('transfer')) {
        return convertJSONToSWMLTransferMethod(json);
    } else if (objectKeys.includes('unset')) {
        return convertJSONToSWMLUnsetMethod(json);
    } else if (objectKeys.includes('user_event')) {
        return convertJSONToSWMLUserEventMethod(json);
    } else {
        throw Error("Unknown Method Type");
    }
}

export function convertSWMLToJSON(swml: SWML): any {
    const subroutineEntries = Object.entries(swml.sections).filter(
        ([name, _]) => name !== 'main')
        .map(([name, methods]) => {
            const tuple: [string, any] = [name, methods.map(convertSWMLMethodToJSON)];
            return tuple;
        })

    const json = {
        version: swml.version,
        sections: {
            main: swml.sections.main.map(convertSWMLMethodToJSON),
            ...Object.fromEntries(subroutineEntries),
        },
    }

    console.log(JSON.stringify(json, null, 2));

    return json;
}

export function convertJSONToSWML(json: any): SWML {
    const sections = json.sections;
    const main = sections.main;
    const subroutines = Object.entries(sections).filter(([name, _]) =>
        name !== 'main')
        .map(([name, methods]) => {
            if (Array.isArray(methods)) {
                const tuple: [string, SWMLMethod[]] = [name, methods.map(convertJSONToSWMLMethod)];
                return tuple;
            } else {
                throw Error("Unknown Method Type");
            }
        });
    return {
        version: json.version,
        sections: {
            main: main.map(convertJSONToSWMLMethod),
            ...Object.fromEntries(subroutines),
        },
    }
}