export interface SWMLAIHint {
    hint: string;
    pattern: string;
    replace: string;
    ignoreCase?: boolean;
}

export interface SWMLAILanguage {
    name: string;
    code: string;
    voice: string;
    emotion?: string;
    functionFillers?: string[];
    model?: string;
    speechFillers?: string[];
    speed?: string;
}

export interface SWMLAIParams {
    aiModel?: string;
    conscience?: string;
    thinkingModel?: string;
    visionModel?: string;
    enableThinking?: boolean;
    enableVision?: boolean;
    waitForUser?: boolean;
    direction?: string;
    conversationId?: string;
    localTZ?: string;
    saveConversation?: boolean;
    transferSummary?: boolean;
    languagesEnabled?: boolean;
    conversationSlidingWindow?: number;
    summaryMode?: string;
}

export interface SWMLAIPrompt {
    text: string;
    temperature?: number;
    topP?: number;
    confidence?: number;
    presencePenalty?: number;
    frequencyPenalty?: number;
}

export interface SWMLAIPronounce {
    replace: string;
    with: string;
    ignoreCase?: boolean;
}

export interface SWMLSWAIGDefaults {
    webHookUrl?: string
}

export interface SWMLSWAIGDataMapOutputSWMLAction {
    type: 'swml'
    SWML: SWML
}

export interface SWMLSWAIGDataMapOutputSayAction {
    type: 'say',
    say: string;
}

export interface SWMLSWAIGDataMapOutputStopAction {
    type: 'stop'
    stop: boolean;
}

export interface SWMLSWAIGDataMapOutputToggleFunction {
    active?: boolean;
    function: string;
}

export interface SWMLSWAIGDataMapOutputToggleFunctionsAction {
    type: 'toggleFunctions',
    toggleFunctions: SWMLSWAIGDataMapOutputToggleFunction[];
}

export interface SWMLSWAIGDataMapOutputSetGlobalDataAction {
    type: 'setGlobalData',
    setGlobalData: object;
}

export interface SWMLSWAIGDataMapOutputSetMetaDataAction {
    type: 'setMetaData',
    setMetaData: string | object;
}

export interface SWMLSWAIGDataMapOutputUnsetGlobalDataAction {
    type: 'unsetGlobalData',
    unsetGlobalData: string | object;
}

export interface SWMLSWAIGDataMapOutputUnsetMetaDataAction {
    type: 'unsetMetaData',
    unsetMetaData: string | object;
}

export interface SWMLSWAIGDataMapOutputPlaybackBGAction {
    type: 'playbackBG',
    playbackBG: {
        file: string;
        wait?: boolean;
    };
}

export interface SWMLSWAIGDataMapOutputStopPlaybackBGAction {
    type: 'stopPlaybackBG',
    stopPlaybackBG: boolean;
}

export interface SWMLSWAIGDataMapOutputUserInputAction {
    type: 'userInput',
    userInput: string;
}

export interface SWMLSWAIGDataMapOutputContextSwitchAction {
    type: 'contextSwitch',
    contextSwitch: {
        systemPrompt: string;
        consolidate?: boolean;
        userPrompt: string;
    };
}

export type SWMLSWAIGDataMapOutputAction =
    SWMLSWAIGDataMapOutputSWMLAction
    | SWMLSWAIGDataMapOutputSayAction
    | SWMLSWAIGDataMapOutputStopAction
    | SWMLSWAIGDataMapOutputToggleFunctionsAction
    | SWMLSWAIGDataMapOutputSetGlobalDataAction
    | SWMLSWAIGDataMapOutputSetMetaDataAction
    | SWMLSWAIGDataMapOutputUnsetGlobalDataAction
    | SWMLSWAIGDataMapOutputUnsetMetaDataAction
    | SWMLSWAIGDataMapOutputPlaybackBGAction
    | SWMLSWAIGDataMapOutputStopPlaybackBGAction
    | SWMLSWAIGDataMapOutputUserInputAction
    | SWMLSWAIGDataMapOutputContextSwitchAction;

export interface SWMLSWAIGDataMapOutput {
    response: string;
    action: SWMLSWAIGDataMapOutputAction[];
}

export interface SWMLSWAIGDataMapExpression {
    string: string;
    pattern: string;
    output: SWMLSWAIGDataMapOutput;
}

export interface SWMLSWAIGDataMapWebhookForeach {
    append: string;
    inputKey: string;
    max: number;
    outputKey: string;
}

export interface SWMLSWAIGDataMapWebhook {
    expressions?: SWMLSWAIGDataMapExpression[];
    errorKeys?: string | string[];
    url: string;
    foreach?: SWMLSWAIGDataMapWebhookForeach;
    headers?: object;
    method: string;
    inputArgsAsParams?: boolean;
    params?: object;
    requiredArgs?: string | string[];
    output: SWMLSWAIGDataMapOutput;
}

export interface SWMLSWAIGDataMap {
    expressions: SWMLSWAIGDataMapExpression[];
    webhooks: SWMLSWAIGDataMapWebhook[];
    output: SWMLSWAIGDataMapOutput;
}

export interface SWMLSWAIGFunctionParameterStringProperty {
    type: 'string';
    description?: string;
    enum?: string[];
    default?: string;
    pattern?: string;
    nullable?: boolean;
}

export interface SWMLSWAIGFunctionParameterIntegerProperty {
    type: 'integer';
    description?: string;
    enum?: bigint[];
    default?: bigint;
    nullable?: boolean;
}

export interface SWMLSWAIGFunctionParameterNumberProperty {
    type: 'number';
    description?: string;
    enum?: number[];
    default?: number;
    nullable?: boolean;
}

export interface SWMLSWAIGFunctionParameterBooleanProperty {
    type: 'boolean';
    description?: string;
    default?: boolean;
    nullable?: boolean;
}

export interface SWMLSWAIGFunctionParameterArrayProperty {
    type: 'array',
    description?: string;
    items: SWMLSWAIGFunctionParameterProperty[];
    default?: any[];
    nullable?: boolean;
}

export interface SWMLSWAIGFunctionParameterObjectProperty {
    type: 'object';
    description?: string;
    properties: SWMLSWAIGFunctionParameterProperties;
    required?: string[];
    default?: object;
    nullable?: boolean;
}

export interface SWMLSWAIGFunctionParameterOneOfProperty {
    type: 'oneOf';
    oneOf: SWMLSWAIGFunctionParameterProperty[];
}

export interface SWMLSWAIGFunctionParameterAllOfProperty {
    type: 'allOf';
    allOf: SWMLSWAIGFunctionParameterProperty[];
}

export interface SWMLSWAIGFunctionParameterAnyOfProperty {
    type: 'anyOf';
    anyOf: SWMLSWAIGFunctionParameterProperty[];
}

export interface SWMLSWAIGFunctionParameterConstProperty {
    type: 'const';
    const: any;
}

export type SWMLSWAIGFunctionParameterProperty =
    SWMLSWAIGFunctionParameterStringProperty
    | SWMLSWAIGFunctionParameterIntegerProperty
    | SWMLSWAIGFunctionParameterNumberProperty
    | SWMLSWAIGFunctionParameterBooleanProperty
    | SWMLSWAIGFunctionParameterArrayProperty
    | SWMLSWAIGFunctionParameterObjectProperty
    | SWMLSWAIGFunctionParameterOneOfProperty
    | SWMLSWAIGFunctionParameterAllOfProperty
    | SWMLSWAIGFunctionParameterAnyOfProperty
    | SWMLSWAIGFunctionParameterConstProperty;


export interface SWMLSWAIGFunctionParameterProperties {
    [key: string]: SWMLSWAIGFunctionParameterProperty;
}

export interface SWMLSWAIGFunctionParameters {
    type: 'object';
    properties: SWMLSWAIGFunctionParameterProperties;
    required?: string[];
}

export interface SWMLSWAIGFunctionFillers {
    [languageCode: string]: string[];
}

export interface SWMLSWAIGFunction {
    description: string;
    function: string;
    active?: boolean;
    dataMap?: SWMLSWAIGDataMap;
    parameters?: SWMLSWAIGFunctionParameters;
    fillers?: SWMLSWAIGFunctionFillers;
    metaData?: object;
    metaDataToken?: string;
    waitFile: ? string;
    waitFileLoops: ? string | number;
    waitForFillers: ? boolean;
    webHookUrl?: string;
}

export interface SWMLSWAIGInclude {
    url: string;
    function: string[];
    metaData?: object;
}

export interface SWMLSWAIGVisualInputFiller {
    [languageCode: string]: string[];
}

export interface SWMLSWAIGInternalFiller {
    getVisualInput: SWMLSWAIGVisualInputFiller;
}

export interface SWMLSWAIG {
    defaults?: SWMLSWAIGDefaults;
    functions?: SWMLSWAIGFunction[];
    includes?: SWMLSWAIGInclude[];
    internalFillers?: SWMLSWAIGInternalFiller;
    nativeFunctions?: string[];
}

export interface SWMLAIParameters {
    globalData?: object;
    hints?: string[] | SWMLAIHint[];
    languages?: SWMLAILanguage[];
    params?: SWMLAIParams;
    postPrompt?: SWMLAIPrompt;
    postPromptUrl?: string;
    pronounce?: SWMLAIPronounce[];
    prompt: SWMLAIPrompt;
    SWAIG?: SWMLSWAIG;
}

export interface SWMLAIMethod {
    type: 'ai';
    ai: SWMLAIParameters;
}

export interface SWMLAnswerParameters {
    maxDuration?: number;
    sipAuthUsername?: string;
    sipAuthPassword?: string;
}

export interface SWMLAnswerMethod {
    type: 'answer';
    answer: SWMLAnswerParameters;
}

export interface SWMLCondWhenThenParameters {
    type: 'whenThen';
    when: string;
    then: SWMLMethod[];
}

export interface SWMLCondElseParameters {
    type: 'else';
    else?: SWMLMethod[];
}

export type SWMLCondParameters = SWMLCondWhenThenParameters | SWMLCondElseParameters;

export interface SWMLCondMethod {
    type: 'cond';
    cond: SWMLCondParameters[];
}

export interface SWMLConnectHeader {
    name: string;
    value: string;
}

export interface SWMLConnectToDialingParameter {
    type: 'to';
    to: string;
}

export interface SWMLConnectDestination {
    to: string;
    from?: string;
    timeout?: number;
    callStateUrl?: string;
    callStateEvents?: string[];
}

export interface SWMLConnectSerialDialingParameter {
    type: 'serial';
    serial: SWMLConnectDestination[];
}

export interface SWMLConnectParallelDialingParameter {
    type: 'parallel';
    parallel: SWMLConnectDestination[];
}

export interface SWMLConnectSerialParallelDialingParameter {
    type: 'serialParallel';
    serialParallel: SWMLConnectDestination[][];
}

export type SWMLConnectDialingParameter =
    SWMLConnectToDialingParameter
    | SWMLConnectSerialDialingParameter
    | SWMLConnectParallelDialingParameter
    | SWMLConnectSerialParallelDialingParameter;

export interface SWMLConnectParameters {
    answerOnBridge?: boolean;
    callStateEvents?: string[];
    codecs?: string;
    confirm?: string;
    confirmTimeout?: number;
    encryption?: 'mandatory' | 'optional' | 'forbidden';
    from?: string;
    headers?: SWMLConnectHeader[];
    maxDuration?: number;
    result?: object | object[];
    ringback?: string;
    sessionTimeout?: number;
    statusUrl?: string;
    timeout?: number;
    username?: string;
    password?: string;
    webRTCMedia?: boolean;
    dialing: SWMLConnectDialingParameter;
}

export interface SWMLConnectMethod {
    type: 'connect';
    connect: SWMLConnectParameters;
}

export type SWMLDenoiseParameters = { }

export interface SWMLDenoiseMethod {
    type: 'denoise';
    denoise: SWMLDenoiseParameters;
}

export type SWMLDetectMachineDetectors = 'amd' | 'fax';

export interface SWMLDetectMachineParameters {
    detectMessageEnd?: boolean;
    detectors: SWMLDetectMachineDetectors[];
    endSilenceTimeout?: number;
    initialTimeout?: number;
    machineReadyTimeout?: number;
    machineVoiceThreshold?: number;
    machineWordsThreshold?: number;
    statusUrl?: string;
    timeout?: number;
    tone?: string;
    wait?: boolean;
}

export interface SWMLDetectMachineMethod {
    type: 'detectMachine';
    detectMachine: SWMLDetectMachineParameters;
}

export interface SWMLExecuteParameters {
    dest: string;
    params?: object;
    onReturn?: SWMLMethod[];
    result?: object | object[];
}

export interface SWMLExecuteMethod {
    type: 'execute';
    execute: SWMLExecuteParameters;
}

export interface SWMLGotoParameters {
    label: string;
    when?: string;
    max?: number;
}

export interface SWMLGotoMethod {
    type: 'goto';
    goto: SWMLGotoParameters;
}

export interface SWMLHangupParameters {
    reason?: 'hangup' | 'busy' | 'decline';
}

export interface SWMLHangupMethod {
    type: 'hangup';
    hangup: SWMLHangupParameters;
}

export interface SWMLJoinRoomParameters {
    name: string;
}

export interface SWMLJoinRoomMethod {
    type: 'joinRoom';
    joinRoom: SWMLJoinRoomParameters;
}

export interface SWMLLabelMethod {
    type: 'label';
    label: string;
}

export type SWMLCallDirection = 'remote-caller' | 'local-caller';

export interface SWMLLiveTranscribeStartAction {
    type: 'liveTranscribeStart';
    webhook?: string;
    lang: string;
    liveEvents?: boolean;
    aiSummary?: boolean;
    speechTimeout?: number;
    vadSilenceMS?: number;
    vadThreshold?: number;
    debugLevel?: number;
    direction: SWMLCallDirection[];
    summaryPrompt?: string;
}

export interface SWMLLiveTranscribeStopAction {
    type: 'liveTranscribeStop';
}

export interface SWMLLiveTranscribeSummarizeAction {
    type: 'liveTranscribeSummarize';
    webhook?: string;
    prompt?: string;
}

export type SWMLLiveTranscribeAction =
    SWMLLiveTranscribeStartAction
    | SWMLLiveTranscribeStopAction
    | SWMLLiveTranscribeSummarizeAction;

export interface SWMLLiveTranscribeParameters {
    action: SWMLLiveTranscribeAction;
}

export interface SWMLLiveTranscribeMethod {
    type: 'liveTranscribe';
    liveTranscribe: SWMLLiveTranscribeParameters;
}

export interface SWMLLiveTranslateStartAction {
    type: 'liveTranslateStart';
    webhook?: string;
    fromLang: string;
    toLang: string;
    fromVoice?: string;
    toVoice?: string;
    liveEvents?: boolean;
    aiSummary?: boolean;
    speechTimeout?: number;
    vadSilenceMS?: number;
    vadThreshold?: number;
    debugLevel?: number;
    direction: SWMLCallDirection[];
    summaryPrompt?: string;
}

export interface SWMLLiveTranslateStopAction {
    type: 'liveTranslateStop';
}

export interface SWMLLiveTranslateSummarizeAction {
    type: 'liveTranslateSummarize';
    webhook?: string;
    prompt?: string;
}

export interface SWMLLiveTranslateInjectAction {
    type: 'liveTranslateInject';
    message: string;
    direction: SWMLCallDirection;
}

export type SWMLLiveTranslateAction =
    SWMLLiveTranslateStartAction
    | SWMLLiveTranslateStopAction
    | SWMLLiveTranslateSummarizeAction
    | SWMLLiveTranslateInjectAction;

export interface SWMLLiveTranslateParameters {
    action: SWMLLiveTranslateAction;
}

export interface SWMLLiveTranslateMethod {
    type: 'liveTranslate';
    liveTranslate: SWMLLiveTranslateParameters;
}

export interface SWMLPayParameter {
    name: string;
    value: string;
}

export type SWMLPayStep = 'payment-card-number' |
    'expiration-date' |
    'security-code' |
    'postal-code' |
    'payment-processing' |
    'payment-completed' |
    'payment-failed' |
    'payment-canceled';

export type SWMLPayCardType = 'visa' |
    'mastercard' |
    'amex' |
    'maestro' |
    'discover' |
    'optima' |
    'jcb' |
    'diners-club';

export type SWMLPayErrorType = 'timeout' |
    'invalid-card-number' |
    'invalid-card-type' |
    'invalid-date' |
    'invalid-security-code' |
    'invalid-postal-code' |
    'session-in-progress' |
    'card-declined';

export interface SWMLPayPromptAction {
    phrase: string;
    type: 'Say' | 'Play';
}

export interface SWMLPayPrompt {
    actions: SWMLPayPromptAction[];
    for: SWMLPayStep;
    attempts?: string;
    cardTypes?: SWMLPayCardType[];
    errorTypes?: SWMLPayErrorType[];
}

export interface SWMLPayParameters {
    paymentConnectorUrl: string;
    chargeAmount: string;
    currency?: string;
    description?: string;
    input:? 'dtmf';
    language?: string;
    maxAttempts?: number;
    minPostalCodeLength?: number;
    parameters?: SWMLPayParameter[];
    postalCode?: boolean | string;
    prompts?: SWMLPayPrompt[];
    securityCode?: boolean;
    statusUrl?: string;
    timeout?: number;
    tokenType?: 'one-time' | 'reusable';
    validCardTypes?: SWMLPayCardType[];
    voice?: string;
}

export interface SWMLPayMethod {
    type: 'pay';
    pay: SWMLPayParameters;
}

export interface SWMLPlayUrl {
    type: 'single';
    url: string;
}

export interface SWMLPlayUrls {
    type: 'multiple';
    urls: string[];
}

export type SWMLPlayableSound = SWMLPlayUrl | SWMLPlayUrls;

export interface SWMLPlayParameters {
    autoAnswer?: boolean;
    play: SWMLPlayableSound;
    volume?: number;
    sayVoice?: string;
    sayLanguage?: string;
    sayGender?: string;
    statusUrl?: string;
}

export interface SWMLPlayMethod {
    type: 'play';
    play: SWMLPlayParameters;
}

export interface SWMLPromptParameters {
    play: string | string[];
    volume?: number;
    sayVoice?: string;
    sayLanguage?: string;
    sayGender?: string;
    maxDigits?: number;
    terminators?: string[];
    digitTimeout?: number;
    initialTimeout?: number;
    speechTimeout?: number;
    speechEndTimeout?: number;
    speechLanguage?: string;
    speechHints?: string[];
    statusUrl?: string;
}

export interface SWMLPromptMethod {
    type: 'prompt';
    prompt: SWMLPromptParameters;
}

export interface SWMLReceiveFaxParameters {
    statusUrl?: string;
}

export interface SWMLReceiveFaxMethod {
    type: 'receiveFax';
    receiveFax: SWMLReceiveFaxParameters;
}

export interface SWMLRecordParameters {
    stereo?: boolean;
    format?: 'wav' | 'mp3';
    direction:? 'speak' | 'listen';
    terminators?: string[];
    beep?: boolean;
    inputSensitivity?: number;
    initialTimeout?: number;
    endSilenceTimeout?: number;
    statusUrl?: string;
}

export interface SWMLRecordMethod {
    type: 'record';
    record: SWMLRecordParameters;
}

export interface SWMLRecordCallParameters {
    controlId?: string;
    stereo?: boolean;
    format?: 'wav' | 'mp3' | 'mp4';
    direction?: 'speak' | 'listen' | 'both';
    terminators?: string[];
    beep?: boolean;
    inputSensitivity?: number;
    initialTimeout?: number;
    endSilenceTimeout?: number;
    statusUrl?: string;
}

export interface SWMLRecordCallMethod {
    type: 'recordCall';
    recordCall: SWMLRecordCallParameters;
}

export interface SWMLRequestParameters {
    url: string;
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    headers?: object;
    body?: string | object;
    connectTimeout?: number;
    timeout?: number;
    saveVariables?: boolean;
}

export interface SWMLRequestMethod {
    type: 'request';
    request: SWMLRequestParameters;
}

export interface SWMLReturnMethod {
    type: 'return';
    return: any;
}

export interface SWMLSendDigitsParameters {
    digits: string;
}

export interface SWMLSendDigitsMethod {
    type: 'sendDigits';
    sendDigits: SWMLSendDigitsParameters;
}

export interface SWMLSendFaxParameters {
    document: string;
    headerInfo?: string;
    identity?: string;
    statusUrl?: string;
}

export interface SWMLSendFaxMethod {
    type: 'sendFax';
    sendFax: SWMLSendFaxParameters;
}

export interface SWMLSendSMSMessageParameters {
    type: 'sms';
    toNumber: string;
    fromNumber: string;
    body: string;
    region?: string;
    tags?: string[];
}

export interface SWMLSendMMSMessageParameters {
    type: 'mms';
    toNumber: string;
    fromNumber: string;
    media: string[];
    body?: string;
    region?: string;
    tags?: string[];
}

export type SWMLSendSMSParameters = SWMLSendSMSMessageParameters | SWMLSendMMSMessageParameters;

export interface SWMLSendSMSMethod {
    type: 'sendSMS';
    sendSMS: SWMLSendSMSParameters;
}

export interface SWMLSetMethod {
    type: 'set';
    set: object;
}

export interface SWMLSIPReferParameters {
    toUri: string;
    statusUrl?: string;
    sipAuthUsername?: string;
    sipAuthPassword?: string;
}

export interface SWMLSIPReferMethod {
    type: 'sipRefer';
    sipRefer: SWMLSIPReferParameters;
}

export interface SWMLSleepParameters {
    duration: number;
}

export interface SWMLSleepMethod {
    type: 'sleep';
    sleep: SWMLSleepParameters;
}

export type SWMLStopDenoiseParameters = { }

export interface SWMLStopDenoiseMethod {
    type: 'stopDenoise';
    stopDenoise: SWMLStopDenoiseParameters;
}

export interface SWMLStopRecordCallParameters {
    controlId?: string;
}

export interface SWMLStopRecordCallMethod {
    type: 'stopRecordCall';
    stopRecordCall: SWMLStopRecordCallParameters;
}

export interface SWMLStopTapParameters {
    controlId?: string;
}

export interface SWMLStopTapMethod {
    type: 'stopTap';
    stopTap: SWMLStopTapParameters;
}

export interface SWMLSwitchCaseParameters {
    [key: string]: SWMLMethod[];
}

export interface SWMLSwitchParameters {
    variable: string;
    case: SWMLSwitchCaseParameters;
    default?: SWMLMethod[];
}

export interface SWMLSwitchMethod {
    type: 'switch';
    switch: SWMLSwitchParameters;
}

export interface SWMLTapParameters {
    uri: string;
    controlId?: string;
    direction?: 'speak' | 'listen' | 'both';
    codec?: 'PCMU' | 'PCMA';
    rtpPTime?: number;
    statusUrl?: string;
}

export interface SWMLTapMethod {
    type: 'tap';
    tap: SWMLTapParameters;
}

export interface SWMLTransferParameters {
    dest: string;
    params?: object;
}

export interface SWMLTransferMethod {
    type: 'transfer';
    transfer: SWMLTransferParameters;
}

export interface SWMLUnsetParameters {
    vars: string | string[];
}

export interface SWMLUnsetMethod {
    type: 'unset';
    unset: SWMLUnsetParameters;
}

export interface SWMLUserEventParameters {
    event: any;
}

export interface SWMLUserEventMethod {
    type: 'userEvent';
    userEvent: SWMLUserEventParameters;
}

export type SWMLMethod =
    SWMLAIMethod
    | SWMLAnswerMethod
    | SWMLCondMethod
    | SWMLConnectMethod
    | SWMLDenoiseMethod
    | SWMLDetectMachineMethod
    | SWMLExecuteMethod
    | SWMLGotoMethod
    | SWMLHangupMethod
    | SWMLJoinRoomMethod
    | SWMLLabelMethod
    | SWMLLiveTranscribeMethod
    | SWMLLiveTranslateMethod
    | SWMLPayMethod
    | SWMLPlayMethod
    | SWMLPromptMethod
    | SWMLReceiveFaxMethod
    | SWMLRecordMethod
    | SWMLRecordCallMethod
    | SWMLRequestMethod
    | SWMLReturnMethod
    | SWMLSendDigitsMethod
    | SWMLSendFaxMethod
    | SWMLSendSMSMethod
    | SWMLSetMethod
    | SWMLSIPReferMethod
    | SWMLSleepMethod
    | SWMLStopDenoiseMethod
    | SWMLStopRecordCallMethod
    | SWMLStopTapMethod
    | SWMLSwitchMethod
    | SWMLTapMethod
    | SWMLTransferMethod
    | SWMLUnsetMethod
    | SWMLUserEventMethod;

export interface SWML {
    version: '1.0.0';
    sections: {
        main: SWMLMethod[];
        [subroutineName: string]: SWMLMethod[];
    }
}