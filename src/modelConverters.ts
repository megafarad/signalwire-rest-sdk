import {
    PhoneNumberCallHandler,
    DomainApplication,
    LookupNumberResponse,
    PhoneNumberMessageHandler,
    PhoneNumber,
    UpdateDomainApplicationRequest,
    UpdatePhoneNumberRequest,
    DomainApplicationCallHandler,
    SipEndpoint,
    SipEndpointCallHandler,
    UpdateSipEndpointRequest,
    CreateSipEndpointRequest,
    Recording,
    BaseRecording,
    VideoRoomSession,
    VideoRoom,
    VideoRoomRecording,
    VideoRoomSessionMember,
    VideoRoomStream,
    VideoConference,
    VideoConferenceToken,
    VoiceLog,
    VideoLog,
    MessageLog,
    FaxLog,
    FabricSubscriber,
    UpdateCallFlowRequest,
    CallFlow,
    CreateCallFlowRequest,
    CallFlowVersion,
    AiAgentResponse,
    AiAgent,
    AiAgentPromptBase,
    ContextStep,
    AiAgentPromptContextsBase,
    AiAgentPostPromptBase,
    AiAgentParams,
    Pronounce,
    Language,
    SWAIGInclude,
    SWAIGFunction,
    SWAIGFunctionProperty,
    SWAIGDataMap,
    SWAIGAction,
    SWAIGToggleFunction,
    SWAIGWebhook,
    SWAIGExpression,
    CreateAiAgentRequest,
    UpdateAiAgentRequest,
    UpdateAiAgentPromptRequest,
    UpdateAiAgentPromptContexts,
    UpdateAiAgentPostPromptRequest,
    SwmlScriptResponse,
    SwmlScript,
    RelayApplicationResponse,
    UpdateRelayApplicationRequest,
    CreateRelayApplicationRequest,
    FabricSipEndpoint,
    FabricSipEndpointResponse,
    UpdateFabricSipEndpointRequest,
    CreateFabricSipEndpointRequest,
    FreeswitchConnector,
    FreeswitchConnectorResponse,
    UpdateFreeswitchConnectorRequest,
    CreateFreeswitchConnectorRequest,
    DialogflowAgent,
    DialogflowAgentResponse,
    UpdateDialogflowAgentRequest,
    FabricSubscriberResponse,
    CallFlowResponse,
    FabricResourceResponse,
    RelayApplication,
    FabricResourceAddress,
    LogCharge,
    CreateCallRequest,
    UpdateCallRequest,
    CallResponse,
    DatasphereDocument,
    SearchDocumentsResponse,
    CreateDocumentRequest,
    SearchDocumentRequest,
    DatasphereDocumentChunk,
    FabricAddress,
    SwmlWebhook,
    SwmlWebhookResponse,
    CreateSwmlWebhookRequest,
    UpdateSwmlWebhookRequest,
    LamlApplication,
    LamlApplicationResponse,
    UpdateLamlApplicationRequest,
    CXMLScript,
    CXMLScriptResponse,
    CXMLWebhook,
    CXMLWebhookResponse,
    CreateCXMLWebhookRequest,
    UpdateCXMLWebhookRequest,
    SipGateway,
    SipGatewayResponse,
    CreateSipGatewayRequest,
    UpdateSipGatewayRequest,
    SubscriberSipEndpoint,
    CreateSubscriberSipEndpointRequest,
    UpdateSubscriberSipEndpointRequest,
    SwmlApplication,
    SwmlApplicationResponse,
    CreateSwmlApplicationRequest,
    UpdateSwmlApplicationRequest,
    ConferenceRoom,
    ConferenceRoomResponse,
    CreateConferenceRoomRequest,
    UpdateConferenceRoomRequest, GeneratePubSubTokenRequest,
} from "./SignalWireRESTClientTypes";

export function convertCreateCallRequestToJSON(request: CreateCallRequest): any {
    switch (request.type) {
        case 'url':
            return {
                command: request.command,
                params: {
                    from: request.params.from,
                    to: request.params.to,
                    caller_id: request.params.callerId,
                    fallback_url: request.params.fallbackUrl,
                    url: request.params.url,
                },
            }
        case 'swml':
            return {
                command: request.command,
                params: {
                    from: request.params.from,
                    to: request.params.to,
                    caller_id: request.params.callerId,
                    fallback_url: request.params.fallbackUrl,
                    swml: request.params.swml,
                },
            }

    }
}

export function convertUpdateCallRequestToJSON(request: UpdateCallRequest): any {
    switch (request.type) {
        case 'url':
            return {
                command: request.command,
                params: {
                    id: request.params.id,
                    fallback_url: request.params.fallbackUrl,
                    status: request.params.status,
                    url: request.params.url,
                }
            }
        case 'swml':
            return {
                command: request.command,
                params: {
                    id: request.params.id,
                    fallback_url: request.params.fallbackUrl,
                    status: request.params.status,
                    swml: request.params.swml,
                }
            }
    }
}

export function convertJSONToCallResponse(json: any): CallResponse {
    return {
        id: json.id,
        from: json.from,
        to: json.to,
        direction: json.direction,
        status: json.status,
        duration: json.duration,
        durationMS: json.duration_ms,
        billableDuration: json.billable_duration,
        source: json.source,
        type: json.type,
        charge: json.charge.map((chargeJSON: any) => ({
            description: chargeJSON.description,
            amount: chargeJSON.amount
        })),
    }
}

export function convertJSONToDocument(json: any): DatasphereDocument {
    return {
        id: json.id,
        filename: json.filename,
        status: json.status,
        tags: json.tags,
        chunkingStrategy: json.chunking_strategy,
        maxSentencesPerChunk: json.max_sentences_per_chunk,
        splitNewlines: json.split_newlines,
        overlapSize: json.overlap_size,
        chunkSize: json.chunk_size,
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        numberOfChunks: json.number_of_chunks
    }
}

export function convertJSONToSearchDocumentsResponse(json: any): SearchDocumentsResponse {
    return {
        chunks: json.chunks.map((chunkJSON: any) => ({
            text: chunkJSON.text,
            documentId: chunkJSON.document_id
        }))
    }
}

export function convertCreateDocumentRequestToJSON(request: CreateDocumentRequest): any {
    const baseJSON: any = {
        url: request.url,
        tags: request.tags
    }
    switch (request.chunkingStrategy) {
        case 'sentence':
            return {
                ...baseJSON,
                chunking_strategy: 'sentence',
                max_sentences_per_chunk: request.maxSentencesPerChunk,
                split_newlines: request.splitNewlines
            }
        case 'sliding':
            return {
                ...baseJSON,
                chunking_strategy: 'sliding',
                overlap_size: request.overlapSize,
                chunk_size: request.chunkSize
            }
        case 'page':
            return {
                chunking_strategy: 'page',
                ...baseJSON,
            }
        case 'paragraph':
            return {
                chunking_strategy: 'paragraph',
                ...baseJSON,
            }
        default:
            throw new Error('Unknown chunking strategy');
    }
}

export function convertSearchDocumentRequestToJSON(request: SearchDocumentRequest): any {
    return {
        tags: request.tags,
        document_id: request.documentId,
        query_string: request.queryString,
        distance: request.distance,
        count: request.count,
        language: request.language,
        pos_to_expand: request.posToExpand,
        max_synonyms: request.maxSynonyms
    }
}

export function convertJSONToDatasphereDocumentChunk(json: any): DatasphereDocumentChunk {
    return {
        id: json.id,
        datasphereDocumentId: json.datasphere_document_id,
        projectId: json.project_id,
        status: json.status,
        tags: json.tags,
        content: json.content,
        createdAt: json.created_at,
        updatedAt: json.updated_at
    }
}

export function convertJSONToFabricAddress(json: any): FabricAddress {
    return {
        id: json.id,
        name: json.name,
        displayName: json.display_name,
        type: json.type,
        coverUrl: json.cover_url,
        previewUrl: json.preview_url,
        locked: json.locked,
        channels: {
            video: json.channels.video,
            audio: json.channels.audio,
            messaging: json.channels.messaging
        },
        createdAt: json.created_at,
    }
}

export function convertJSONToSwmlWebhook(json: any): SwmlWebhook {
    return {
        id: json.id,
        name: json.name,
        usedFor: json.used_for,
        primaryRequestUrl: json.primary_request_url,
        primaryRequestMethod: json.primary_request_method,
        fallbackRequestUrl: json.fallback_request_url,
        fallbackRequestMethod: json.fallback_request_method,
        statusCallbackUrl: json.status_callback_url,
        statusCallbackMethod: json.status_callback_method,
    }
}

export function convertJSONToSwmlWebhookResponse(json: any): SwmlWebhookResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: json.type,
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        swmlWebhook: convertJSONToSwmlWebhook(json.swml_webhook)
    }
}

export function convertCreateSwmlWebhookRequestToJSON(request: CreateSwmlWebhookRequest): any {
    return {
        name: request.name,
        used_for: request.usedFor,
        primary_request_url: request.primaryRequestUrl,
        primary_request_method: request.primaryRequestMethod,
        fallback_request_url: request.fallbackRequestUrl,
        fallback_request_method: request.fallbackRequestMethod,
        status_callback_url: request.statusCallbackUrl,
        status_callback_method: request.statusCallbackMethod,
    }
}

export function convertJSONToSwmlApplication(json: any): SwmlApplication {
    return {
        id: json.id,
        name: json.name,
        handleCallsUsing: json.handle_calls_using,
        callHandlerUrl: json.call_handler_url,
        callHandlerMethod: json.call_handler_method,
        callHandlerFallbackUrl: json.call_handler_fallback_url,
        callHandlerFallbackMethod: json.call_handler_fallback_method,
        callStatusCallbackUrl: json.call_status_callback_url,
        callStatusCallbackMethod: json.call_status_callback_method,
        callHandlerScript: json.call_handler_script
    }
}

export function convertJSONToSwmlApplicationResponse(json: any): SwmlApplicationResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'swml_application',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        swmlApplication: convertJSONToSwmlApplication(json.swml_application),
    }
}

export function convertCreateSwmlApplicationRequestToJSON(request: CreateSwmlApplicationRequest): any {
    return {
        name: request.name,
        handle_calls_using: request.handleCallsUsing,
        call_handler_url: request.callHandlerUrl,
        call_handler_method: request.callHandlerMethod,
        call_handler_fallback_url: request.callHandlerFallbackUrl,
        call_handler_fallback_method: request.callHandlerFallbackMethod,
        call_status_callback_url: request.callStatusCallbackUrl,
        call_status_callback_method: request.callStatusCallbackMethod,
        call_handler_script: request.callHandlerScript
    }
}

export function convertUpdateSwmlApplicationRequestToJSON(request: UpdateSwmlApplicationRequest): any {
    return {
        name: request.name,
        handle_calls_using: request.handleCallsUsing,
        call_handler_url: request.callHandlerUrl,
        call_handler_method: request.callHandlerMethod,
        call_handler_fallback_url: request.callHandlerFallbackUrl,
        call_handler_fallback_method: request.callHandlerFallbackMethod,
        call_status_callback_url: request.callStatusCallbackUrl,
        call_status_callback_method: request.callStatusCallbackMethod,
        call_handler_script: request.callHandlerScript
    }
}

export function convertJSONToLamlApplication(json: any): LamlApplication {
    return {
        id: json.id,
        accountSid: json.account_sid,
        voiceUrl: json.voice_url,
        voiceMethod: json.voice_method,
        voiceFallbackUrl: json.voice_fallback_url,
        voiceFallbackMethod: json.voice_fallback_method,
        statusCallbackUrl: json.status_callback_url,
        statusCallbackMethod: json.status_callback_method,
        voiceCallerIdLookup: json.voice_caller_id_lookup,
        smsUrl: json.sms_url,
        smsMethod: json.sms_method,
        smsFallbackUrl: json.sms_fallback_url,
        smsFallbackMethod: json.sms_fallback_method,
        smsStatusCallbackUrl: json.sms_status_callback_url,
        smsStatusCallbackMethod: json.sms_status_callback_method,
        messageStatusCallback: json.message_status_callback,
        apiVersion: json.api_version,
        requestUrl: json.request_url,
        displayName: json.display_name
    }
}

export function convertJSONToLamlApplicationResponse(json: any): LamlApplicationResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: "cxml_application",
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        lamlApplication: convertJSONToLamlApplication(json.laml_application),
    }
}

export function convertUpdateLamlApplicationRequestToJSON(request: UpdateLamlApplicationRequest): any {
    return {
        name: request.name,
        call_request_url: request.callRequestUrl,
        call_request_method: request.callRequestMethod,
        call_fallback_url: request.callFallbackUrl,
        call_fallback_method: request.callFallbackMethod,
        call_status_url: request.callStatusUrl,
        call_status_method: request.callStatusMethod,
        message_request_url: request.messageRequestUrl,
        message_request_method: request.messageRequestMethod,
        message_fallback_url: request.messageFallbackUrl,
        message_fallback_method: request.messageFallbackMethod,
        message_status_url: request.messageStatusUrl,
        message_status_method: request.messageStatusMethod,
    }
}

export function convertJSONToCXMLScript(json: any): CXMLScript {
    return {
        id: json.id,
        contents: json.contents,
        requestCount: json.request_count,
        lastAccessedAt: json.last_accessed_at,
        requestUrl: json.request_url,
        displayName: json.display_name
    }
}

export function convertJSONToCXMLScriptResponse(json: any): CXMLScriptResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: json.type,
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        lamlBin: convertJSONToCXMLScript(json.laml_bin)
    }
}

export function convertJSONToCXMLWebhook(json: any): CXMLWebhook {
    return {
        id: json.id,
        name: json.name,
        usedFor: json.used_for,
        primaryRequestUrl: json.primary_request_url,
        primaryRequestMethod: json.primary_request_method,
        fallbackRequestUrl: json.fallback_request_url,
        fallbackRequestMethod: json.fallback_request_method,
        statusCallbackUrl: json.status_callback_url,
        statusCallbackMethod: json.status_callback_method,
    }
}

export function convertJSONToCXMLWebhookResponse(json: any): CXMLWebhookResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: json.type,
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        cxmlWebhook: convertJSONToCXMLWebhook(json.cxml_webhook)
    }
}

export function convertCreateCXMLWebhookRequestToJSON(request: CreateCXMLWebhookRequest): any {
    return {
        name: request.name,
        used_for: request.usedFor,
        primary_request_url: request.primaryRequestUrl,
        primary_request_method: request.primaryRequestMethod,
        fallback_request_url: request.fallbackRequestUrl,
        fallback_request_method: request.fallbackRequestMethod,
        status_callback_url: request.statusCallbackUrl,
        status_callback_method: request.statusCallbackMethod
    }
}

export function convertUpdateCXMLWebhookRequestToJSON(request: UpdateCXMLWebhookRequest): any {
    return {
        name: request.name,
        used_for: request.usedFor,
        primary_request_url: request.primaryRequestUrl,
        primary_request_method: request.primaryRequestMethod,
        fallback_request_url: request.fallbackRequestUrl,
        fallback_request_method: request.fallbackRequestMethod,
        status_callback_url: request.statusCallbackUrl,
        status_callback_method: request.statusCallbackMethod
    }
}

export function convertUpdateSwmlWebhookRequestToJSON(request: UpdateSwmlWebhookRequest): any {
    return {
        name: request.name,
        used_for: request.usedFor,
        primary_request_url: request.primaryRequestUrl,
        primary_request_method: request.primaryRequestMethod,
        fallback_request_url: request.fallbackRequestUrl,
        fallback_request_method: request.fallbackRequestMethod,
        status_callback_url: request.statusCallbackUrl,
        status_callback_method: request.statusCallbackMethod
    }
}

function convertJSONToDomainApplicationCallHandler(json: any): DomainApplicationCallHandler {
    switch (json.call_handler) {
        case 'relay_application':
            return {
                type: 'relay_application',
                callRelayApplication: json.call_relay_application
            }
        case 'relay_context':
            return {
                type: 'relay_context',
                callRelayContext: json.call_relay_context,
                callRelayContextStatusCallbackUrl: json.call_relay_context_status_callback_url
            }
        case 'relay_script':
            return {
                type: 'relay_script',
                callRelayScriptUrl: json.call_relay_script_url
            }
        case 'laml_webhooks':
            return {
                type: 'laml_webhooks',
                callRequestUrl: json.call_request_url,
                callRequestMethod: json.call_request_method,
                callFallbackUrl: json.call_fallback_url,
                callFallbackMethod: json.call_fallback_method,
                callStatusCallbackUrl: json.call_status_callback_url,
                callStatusCallbackMethod: json.call_status_callback_method
            }
        case 'laml_application':
            return {
                type: 'laml_application',
                callLamlApplicationId: json.call_laml_application_id
            }
        case 'dialogflow':
            return {
                type: 'dialogflow',
                callDialogflowAgentId: json.call_dialogflow_agent_id
            }
        case 'relay_topic':
            return {
                type: 'relay_topic',
                callRelayTopic: json.call_relay_topic,
                callRelayTopicStatusCallbackUrl: json.call_relay_topic_status_callback_url
            }
        case 'video_room':
            return {
                type: 'video_room',
                callVideoRoomId: json.call_video_room_id
            }
        case 'ai_agent':
            return {
                type: 'ai_agent',
                callAiAgentId: json.call_ai_agent_id
            }
        case 'call_flow':
            return {
                type: 'call_flow',
                callFlowId: json.call_flow_id,
                callFlowVersion: json.call_flow_version
            }
        default:
            throw new Error('Unknown call handler type');
    }
}

export function convertJSONToDomainApplication(json: any): DomainApplication {

    const callHandler = convertJSONToDomainApplicationCallHandler(json);

    return {
        id: json.id,
        callHandler: callHandler,
        type: json.type,
        domain: json.domain,
        name: json.name,
        identifier: json.identifier,
        user: json.user,
        ipAuthEnabled: json.ip_auth_enabled,
        ipAuth: json.ip_auth,
        encryption: json.encryption,
        codecs: json.codecs,
        ciphers: json.ciphers,
    }

}

const convertCommonCreateDomainApplicationRequestToJSON =
    (request: UpdateDomainApplicationRequest): any => {
        const json: any = {};

        if (request.callHandler) {
            switch (request.callHandler.type) {
                case 'relay_topic':
                    json.call_handler = 'relay_topic';
                    if (request.callHandler.callRelayTopic) {
                        json.call_relay_topic = request.callHandler.callRelayTopic;
                    }
                    if (request.callHandler.callRelayTopicStatusCallbackUrl) {
                        json.call_relay_topic_status_callback_url = request.callHandler.callRelayTopicStatusCallbackUrl;
                    }
                    break;
                case 'relay_application':
                    json.call_handler = 'relay_application';
                    if (request.callHandler.callRelayApplication) {
                        json.call_relay_application = request.callHandler.callRelayApplication;
                    }
                    break;
                case "laml_webhooks":
                    json.call_handler = 'laml_webhooks';
                    if (request.callHandler.callRequestUrl) {
                        json.call_request_url = request.callHandler.callRequestUrl;
                    }
                    if (request.callHandler.callRequestMethod) {
                        json.call_request_method = request.callHandler.callRequestMethod;
                    }
                    if (request.callHandler.callFallbackUrl) {
                        json.call_fallback_url = request.callHandler.callFallbackUrl;
                    }
                    if (request.callHandler.callFallbackMethod) {
                        json.call_fallback_method = request.callHandler.callFallbackMethod;
                    }
                    if (request.callHandler.callStatusCallbackUrl) {
                        json.call_status_callback_url = request.callHandler.callStatusCallbackUrl;
                    }
                    if (request.callHandler.callStatusCallbackMethod) {
                        json.call_status_callback_method = request.callHandler.callStatusCallbackMethod;
                    }
                    break;
                case 'laml_application':
                    json.call_handler = 'laml_application';
                    if (request.callHandler.callLamlApplicationId) {
                        json.call_laml_application_id = request.callHandler.callLamlApplicationId;
                    }
                    break;
                case 'video_room':
                    json.call_handler = 'video_room';
                    if (request.callHandler.callVideoRoomId) {
                        json.call_video_room_id = request.callHandler.callVideoRoomId;
                    }
                    break;
                case 'relay_script':
                    json.call_handler = 'relay_script';
                    if (request.callHandler.callRelayScriptUrl) {
                        json.call_relay_script_url = request.callHandler.callRelayScriptUrl;
                    }
                    break;
                case 'dialogflow':
                    json.call_handler = 'dialogflow';
                    if (request.callHandler.callDialogflowAgentId) {
                        json.call_dialogflow_agent_id = request.callHandler.callDialogflowAgentId;
                    }
                    break;
                case 'ai_agent':
                    json.call_handler = 'ai_agent';
                    if (request.callHandler.callAiAgentId) {
                        json.call_ai_agent_id = request.callHandler.callAiAgentId;
                    }
                    break;
                case 'call_flow':
                    json.call_handler = 'call_flow';
                    if (request.callHandler.callFlowId) {
                        json.call_flow_id = request.callHandler.callFlowId;
                    }
                    if (request.callHandler.callFlowVersion) {
                        json.call_flow_version = request.callHandler.callFlowVersion;
                    }
                    break;
                case 'relay_context':
                    json.call_handler = 'relay_context';
                    if (request.callHandler.callRelayContext) {
                        json.call_relay_context = request.callHandler.callRelayContext;
                    }
                    if (request.callHandler.callRelayContextStatusCallbackUrl) {
                        json.call_relay_context_status_callback_url = request.callHandler.callRelayContextStatusCallbackUrl;
                    }
                    break;
                default:
                    throw new Error('Unknown call handler type');
            }
        }

        if (request.name) {
            json.name = request.name;
        }
        if (request.identifier) {
            json.identifier = request.identifier;
        }
        if (request.user) {
            json.user = request.user;
        }
        if (request.ipAuthEnabled) {
            json.ip_auth_enabled = request.ipAuthEnabled;
        }
        if (request.ipAuth) {
            json.ip_auth = request.ipAuth;
        }
        if (request.encryption) {
            json.encryption = request.encryption;
        }
        if (request.codecs) {
            json.codecs = request.codecs;
        }
        if (request.ciphers) {
            json.ciphers = request.ciphers;
        }
        return json;
    }

export function convertUpdateDomainApplicationRequestToJSON(request: UpdateDomainApplicationRequest): any {
    const json = convertCommonCreateDomainApplicationRequestToJSON(request);

    if (request.callHandler) {
        switch (request.callHandler.type) {
            case 'relay_topic':
                json.call_handler = 'relay_topic';
                if (request.callHandler.callRelayTopic) {
                    json.call_relay_topic = request.callHandler.callRelayTopic;
                }
                if (request.callHandler.callRelayTopicStatusCallbackUrl) {
                    json.call_relay_topic_status_callback_url = request.callHandler.callRelayTopicStatusCallbackUrl;
                }
                return json;
            case 'relay_application':
                json.call_handler = 'relay_application';
                if (request.callHandler.callRelayApplication) {
                    json.call_relay_application = request.callHandler.callRelayApplication;
                }
                return json;
            case "laml_webhooks":
                json.call_handler = 'laml_webhooks';
                if (request.callHandler.callRequestUrl) {
                    json.call_request_url = request.callHandler.callRequestUrl;
                }
                if (request.callHandler.callRequestMethod) {
                    json.call_request_method = request.callHandler.callRequestMethod;
                }
                if (request.callHandler.callFallbackUrl) {
                    json.call_fallback_url = request.callHandler.callFallbackUrl;
                }
                if (request.callHandler.callFallbackMethod) {
                    json.call_fallback_method = request.callHandler.callFallbackMethod;
                }
                if (request.callHandler.callStatusCallbackUrl) {
                    json.call_status_callback_url = request.callHandler.callStatusCallbackUrl;
                }
                if (request.callHandler.callStatusCallbackMethod) {
                    json.call_status_callback_method = request.callHandler.callStatusCallbackMethod;
                }
                return json;
            case 'laml_application':
                json.call_handler = 'laml_application';
                if (request.callHandler.callLamlApplicationId) {
                    json.call_laml_application_id = request.callHandler.callLamlApplicationId;
                }
                return json;
            case 'video_room':
                json.call_handler = 'video_room';
                if (request.callHandler.callVideoRoomId) {
                    json.call_video_room_id = request.callHandler.callVideoRoomId;
                }
                return json;
            case 'relay_script':
                json.call_handler = 'relay_script';
                if (request.callHandler.callRelayScriptUrl) {
                    json.call_relay_script_url = request.callHandler.callRelayScriptUrl;
                }
                return json;
            case 'dialogflow':
                json.call_handler = 'dialogflow';
                if (request.callHandler.callDialogflowAgentId) {
                    json.call_dialogflow_agent_id = request.callHandler.callDialogflowAgentId;
                }
                return json;
            case 'ai_agent':
                json.call_handler = 'ai_agent';
                if (request.callHandler.callAiAgentId) {
                    json.call_ai_agent_id = request.callHandler.callAiAgentId;
                }
                return json;
            case 'call_flow':
                json.call_handler = 'call_flow';
                if (request.callHandler.callFlowId) {
                    json.call_flow_id = request.callHandler.callFlowId;
                }
                if (request.callHandler.callFlowVersion) {
                    json.call_flow_version = request.callHandler.callFlowVersion;
                }
                return json;
            case 'relay_context':
                json.call_handler = 'relay_context';
                if (request.callHandler.callRelayContext) {
                    json.call_relay_context = request.callHandler.callRelayContext;
                }
                if (request.callHandler.callRelayContextStatusCallbackUrl) {
                    json.call_relay_context_status_callback_url = request.callHandler.callRelayContextStatusCallbackUrl;
                }
                return json;
        }
    }
}

export function convertJSONToPhoneNumberCallHandler(json: any): PhoneNumberCallHandler {
    switch (json.call_handler) {
        case 'relay_script':
            return {
                type: 'relay_script',
                callRelayScriptUrl: json.call_relay_script_url
            }
        case 'laml_webhooks':
            return {
                type: 'laml_webhooks',
                callRequestUrl: json.call_request_url,
                callRequestMethod: json.call_request_method,
                callFallbackUrl: json.call_fallback_url,
                callFallbackMethod: json.call_fallback_method,
                callStatusCallbackUrl: json.call_status_callback_url,
                callStatusCallbackMethod: json.call_status_callback_method,
            }
        case 'laml_application':
            return {
                type: 'laml_application',
                callLamlApplicationId: json.call_laml_application_id
            }
        case 'dialogflow':
            return {
                type: 'dialogflow',
                callDialogflowAgentId: json.call_dialogflow_agent_id
            }
        case 'relay_topic':
            return {
                type: 'relay_topic',
                callRelayTopic: json.call_relay_topic,
                callRelayTopicStatusCallbackUrl: json.call_relay_topic_status_callback_url
            }
        case 'relay_context':
            return {
                type: 'relay_context',
                callRelayContext: json.call_relay_context,
                callRelayContextStatusCallbackUrl: json.call_relay_context_status_callback_url
            }
        case 'relay_application':
            return {
                type: 'relay_application',
                callRelayApplication: json.call_relay_application
            }
        case 'relay_connector':
            return {
                type: 'relay_connector',
                callRelayConnectorId: json.call_relay_connector_id
            }
        case 'relay_sip_endpoint':
            return {
                type: 'relay_sip_endpoint',
                callSipEndpointId: json.call_sip_endpoint_id
            }
        case 'relay_verto_endpoint':
            return {
                type: 'relay_verto_endpoint',
                callVertoResource: json.call_verto_resource
            }
        case 'video_room':
            return {
                type: 'video_room',
                callVideoRoomId: json.call_video_room_id
            }
        default:
            throw new Error('Unknown call handler type');
    }
}

export function convertJSONToMessageHandler(json: any): PhoneNumberMessageHandler {
    switch (json.message_handler) {
        case 'laml_webhooks':
            return {
                type: 'laml_webhooks',
                messageRequestUrl: json.message_request_url,
                messageRequestMethod: json.message_request_method,
                messageFallbackUrl: json.message_fallback_url,
                messageFallbackMethod: json.message_fallback_method,
                messageStatusCallbackUrl: json.message_status_callback_url,
                messageStatusCallbackMethod: json.message_status_callback_method
            }
        case 'laml_application':
            return {
                type: 'laml_application',
                messageLamlApplicationId: json.message_laml_application_id
            }
        case 'relay_application':
            return {
                type: 'relay_application',
                messageRelayApplicationId: json.message_relay_application_id
            }
        case 'relay_topic':
            return {
                type: 'relay_topic',
                messageRelayTopic: json.message_relay_topic
            }
        case 'relay_context':
            return {
                type: 'relay_context',
                messageRelayContext: json.message_relay_context
            }
        default:
            throw new Error('Unknown message handler type');
    }
}

export function convertJSONToPhoneNumber(json: any): PhoneNumber {
    return {
        id: json.id,
        number: json.number,
        name: json.name,
        callHandler: convertJSONToPhoneNumberCallHandler(json),
        messageHandler: convertJSONToMessageHandler(json),
        callReceiveMode: json.call_receive_mode,
        capabilities: json.capabilities,
        numberType: json.number_type,
        e911AddressId: json.e911_address_id,
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        nextBilledAt: json.next_billed_at,
        countryCode: json.country_code
    }
}

export function convertPhoneNumberCallHandlerToJSON(callHandler?: PhoneNumberCallHandler): any {
    if (!callHandler) {
        return {};
    } else {
        switch (callHandler.type) {
            case 'relay_script':
                return {
                    call_handler: 'relay_script',
                    call_relay_script_url: callHandler.callRelayScriptUrl
                }
            case 'laml_webhooks':
                return {
                    call_handler: 'laml_webhooks',
                    call_request_url: callHandler.callRequestUrl,
                    call_request_method: callHandler.callRequestMethod,
                    call_fallback_url: callHandler.callFallbackUrl,
                    call_fallback_method: callHandler.callFallbackMethod,
                    call_status_callback_url: callHandler.callStatusCallbackUrl,
                    call_status_callback_method: callHandler.callStatusCallbackMethod,
                }
            case 'laml_application':
                return {
                    call_handler: 'laml_application',
                    call_laml_application_id: callHandler.callLamlApplicationId
                }
            case 'dialogflow':
                return {
                    call_handler: 'dialogflow',
                    call_dialogflow_agent_id: callHandler.callDialogflowAgentId
                }
            case 'relay_topic':
                return {
                    call_handler: 'relay_topic',
                    call_relay_topic: callHandler.callRelayTopic,
                    call_relay_topic_status_callback_url: callHandler.callRelayTopicStatusCallbackUrl
                }
            case 'relay_context':
                return {
                    call_handler: 'relay_context',
                    call_relay_context: callHandler.callRelayContext,
                    call_relay_context_status_callback_url: callHandler.callRelayContextStatusCallbackUrl
                }
            case 'relay_application':
                return {
                    call_handler: 'relay_application',
                    call_relay_application: callHandler.callRelayApplication
                }
            case 'relay_connector':
                return {
                    call_handler: 'relay_connector',
                    call_relay_connector_id: callHandler.callRelayConnectorId
                }
            case 'relay_sip_endpoint':
                return {
                    call_handler: 'relay_sip_endpoint',
                    call_sip_endpoint_id: callHandler.callSipEndpointId
                }
            case 'relay_verto_endpoint':
                return {
                    call_handler: 'relay_verto_endpoint',
                    call_verto_resource: callHandler.callVertoResource
                }
            case 'video_room':
                return {
                    call_handler: 'video_room',
                    call_video_room_id: callHandler.callVideoRoomId
                }
            default:
                throw new Error('Unknown call handler type');
        }
    }
}

export function convertPhoneNumberMessageHandlerToJSON(messageHandler?: PhoneNumberMessageHandler): any {
    if (!messageHandler) {
        return {};
    } else {
        switch (messageHandler?.type) {
            case 'laml_webhooks':
                return {
                    message_handler: 'laml_webhooks',
                    message_request_url: messageHandler.messageRequestUrl,
                    message_request_method: messageHandler.messageRequestMethod,
                    message_fallback_url: messageHandler.messageFallbackUrl,
                    message_fallback_method: messageHandler.messageFallbackMethod,
                    message_status_callback_url: messageHandler.messageStatusCallbackUrl,
                    message_status_callback_method: messageHandler.messageStatusCallbackMethod
                }
            case 'laml_application':
                return {
                    message_handler: 'laml_application',
                    message_laml_application_id: messageHandler.messageLamlApplicationId
                }
            case 'relay_application':
                return {
                    message_handler: 'relay_application',
                    message_relay_application_id: messageHandler.messageRelayApplicationId
                }
            case 'relay_topic':
                return {
                    message_handler: 'relay_topic',
                    message_relay_topic: messageHandler.messageRelayTopic
                }
            case 'relay_context':
                return {
                    message_handler: 'relay_context',
                    message_relay_context: messageHandler.messageRelayContext
                }
            default:
                throw new Error('Unknown message handler type');
        }
    }
}

export function convertUpdatePhoneNumberRequestToJSON(request: UpdatePhoneNumberRequest): any {
    return {
        name: request.name,
        call_receive_mode: request.callReceiveMode,
        ...convertPhoneNumberCallHandlerToJSON(request.callHandler),
        ...convertPhoneNumberMessageHandlerToJSON(request.messageHandler)
    }
}

export function convertJSONToLookupNumberResponse(json: any): LookupNumberResponse {

    const carrier = json.carrier ? {
        lrn: json.carrier.lrn,
        spid: json.carrier.spid,
        ocn: json.carrier.ocn,
        lata: json.carrier.lata,
        city: json.carrier.city,
        state: json.carrier.state,
        jurisdiction: json.carrier.jurisdiction,
        lec: json.carrier.lec,
        lineType: json.carrier.line_type,
    } : undefined;

    const cnam = json.cname ? {
        callerId: json.cnam.caller_id,
    } : undefined;

    return {
        countryCodeNumber: json.country_code_number,
        nationalNumber: json.national_number,
        possibleNumber: json.possible_number,
        validNumber: json.valid_number,
        nationalNumberFormatted: json.national_number_fornatted,
        internationalNumberFormatted: json.international_number_formatted,
        e164: json.e164,
        location: json.location,
        countryCode: json.country_code,
        timeZones: json.timezones,
        numberType: json.number_type,
        carrier,
        cnam
    }
}

export function convertJSONToSipEndpointCallHandler(json: any): SipEndpointCallHandler {
    switch (json.call_handler) {
        case 'default':
            return {
                type: 'default'
            }
        case 'passthrough':
            return {
                type: 'passthrough'
            }
        case 'block-pstn':
            return {
                type: 'block-pstn'
            }
        case 'ai_agent':
            return {
                type: 'ai_agent',
                callAiAgentId: json.call_ai_agent_id
            }
        case 'relay_context':
            return {
                type: 'relay_context',
                callRelayContext: json.call_relay_context,
                callRelayContextStatusCallbackUrl: json.call_relay_context_status_callback_url
            }
        case 'relay_script':
            return {
                type: 'relay_script',
                callRelayScriptUrl: json.call_relay_script_url
            }
        case 'laml_webhooks':
            return {
                type: 'laml_webhooks',
                callRequestUrl: json.call_request_url,
                callRequestMethod: json.call_request_method,
                callFallbackUrl: json.call_fallback_url,
                callFallbackMethod: json.call_fallback_method,
                callStatusCallbackUrl: json.call_status_callback_url,
                callStatusCallbackMethod: json.call_status_callback_method,
            }
        case 'laml_application':
            return {
                type: 'laml_application',
                callLamlApplicationId: json.call_laml_application_id
            }
        case 'dialogflow':
            return {
                type: 'dialogflow',
                callDialogflowAgentId: json.call_dialogflow_agent_id
            }
        case 'video_room':
            return {
                type: 'video_room',
                callVideoRoomId: json.call_video_room_id
            }
        default:
            throw new Error('Unknown call handler type');
    }
}

export function convertJSONToSipEndpoint(json: any): SipEndpoint {
    return {
        id: json.id,
        username: json.username,
        callerId: json.caller_id,
        sendAs: json.send_as,
        ciphers: json.ciphers,
        codecs: json.codecs,
        encryption: json.encryption,
        callHandler: convertJSONToSipEndpointCallHandler(json),
    }
}

export function convertSipEndpointCallHandlerToJSON(callHandler?: SipEndpointCallHandler): any {
    if (!callHandler) {
        return {};
    } else {
        switch (callHandler.type) {
            case 'default':
                return {
                    call_handler: 'default'
                }
            case 'passthrough':
                return {
                    call_handler: 'passthrough'
                }
            case 'block-pstn':
                return {
                    call_handler: 'block-pstn'
                }
            case 'ai_agent':
                return {
                    call_handler: 'ai_agent',
                    call_ai_agent_id: callHandler.callAiAgentId
                }
            case 'relay_context':
                return {
                    call_handler: 'relay_context',
                    call_relay_context: callHandler.callRelayContext,
                    call_relay_context_status_callback_url: callHandler.callRelayContextStatusCallbackUrl
                }
            case 'relay_script':
                return {
                    call_handler: 'relay_script',
                    call_relay_script_url: callHandler.callRelayScriptUrl
                }
            case 'laml_webhooks':
                return {
                    call_handler: 'laml_webhooks',
                    call_request_url: callHandler.callRequestUrl,
                    call_request_method: callHandler.callRequestMethod,
                    call_fallback_url: callHandler.callFallbackUrl,
                    call_fallback_method: callHandler.callFallbackMethod,
                    call_status_callback_url: callHandler.callStatusCallbackUrl,
                    call_status_callback_method: callHandler.callStatusCallbackMethod,
                }
            case 'laml_application':
                return {
                    call_handler: 'laml_application',
                    call_laml_application_id: callHandler.callLamlApplicationId
                }
            case 'dialogflow':
                return {
                    call_handler: 'dialogflow',
                    call_dialogflow_agent_id: callHandler.callDialogflowAgentId
                }
            case 'video_room':
                return {
                    call_handler: 'video_room',
                    call_video_room_id: callHandler.callVideoRoomId
                }
            default:
                throw new Error('Unknown call handler type');
        }
    }
}

export function convertUpdateSipEndpointRequestToJSON(request: UpdateSipEndpointRequest): any {
    return {
        username: request.username,
        password: request.password,
        callerId: request.callerId,
        sendAs: request.sendAs,
        ciphers: request.ciphers,
        codecs: request.codecs,
        encryption: request.encryption,
        ...convertSipEndpointCallHandlerToJSON(request.callHandler)
    }
}

export function convertCreateSipEndpointRequestToJSON(request: CreateSipEndpointRequest): any {
    return {
        username: request.username,
        password: request.password,
        callerId: request.callerId,
        sendAs: request.sendAs,
        ciphers: request.ciphers,
        codecs: request.codecs,
        encryption: request.encryption,
        ...convertSipEndpointCallHandlerToJSON(request.callHandler)
    }
}

export function convertJSONToRecording(json: any): Recording {
    const baseFields: BaseRecording = {
        id: json.id,
        projectId: json.project_id,
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        durationInSeconds: json.duration_in_seconds,
        errorCode: json.error_code,
        price: json.price,
        priceUnit: json.price_unit,
        status: json.status,
        url: json.url,
        stereo: json.stereo,
        byteSize: json.byte_size,
        track: json.track
    }

    if (json.relay_pstn_leg_id) {
        return {
            relayPSTNLegId: json.relay_pstn_leg_id,
            ...baseFields
        }
    } else if (json.relay_sip_leg_id) {
        return {
            relaySIPLegId: json.relay_sip_leg_id,
            ...baseFields
        }
    } else if (json.relay_webrtc_leg_id) {
        return {
            relayWebRTCLegId: json.relay_webrtc_leg_id,
            ...baseFields
        }
    } else {
        throw new Error('Unknown recording type');
    }
}

export function convertJSONToVideoRoomSession(json: any): VideoRoomSession {
    return {
        id: json.id,
        roomId: json.room_id,
        name: json.name,
        displayName: json.display_name,
        joinFrom: json.join_from,
        joinUntil: json.join_until,
        removeAt: json.remove_at,
        removeAfterSecondsElapsed: json.remove_after_seconds_elapsed,
        layout: json.layout,
        maxMembers: json.max_members,
        fps: json.fps,
        quality: json.quality,
        startTime: json.start_time,
        endTime: json.end_time,
        duration: json.duration,
        status: json.status,
        recordOnStart: json.record_on_start,
        enableRoomPreviews: json.enable_room_previews,
        previewUrl: json.preview_url,
        audioVideoSync: json.audio_video_sync
    }
}

export function convertJSONToVideoRoom(json: any): VideoRoom {
    const activeSession = json.active_session ?
        convertJSONToVideoRoomSession(json.active_session) : undefined;

    return {
        id: json.id,
        name: json.name,
        displayName: json.display_name,
        description: json.description,
        maxMembers: json.max_members,
        quality: json.quality,
        joinFrom: json.join_from,
        joinUntil: json.join_until,
        removeAt: json.remove_at,
        removeAfterSecondsElapsed: json.remove_after_seconds_elapsed,
        layout: json.layout,
        recordOnStart: json.record_on_start,
        enableRoomPreviews: json.enable_room_previews,
        audioVideoSync: json.audio_video_sync,
        fps: json.fps,
        activeSession,
        createdAt: json.created_at,
        updatedAt: json.updated_at
    }
}

export function convertJSONToVideoRoomRecording(json: any): VideoRoomRecording {
    return {
        id: json.id,
        roomSessionId: json.room_session_id,
        status: json.status,
        startedAt: json.started_at,
        finishedAt: json.finished_at,
        duration: json.duration,
        sizeInBytes: json.size_in_bytes,
        format: json.format,
        uri: json.uri,
        createdAt: json.created_at,
        updatedAt: json.updated_at
    }
}

export function convertJSONToVideoRoomSessionMember(json: any): VideoRoomSessionMember {
    return {
        id: json.id,
        name: json.name,
        roomSessionId: json.room_session_id,
        joinTime: json.join_time,
        leaveTime: json.leave_time,
        duration: json.duration
    }
}

export function convertJSONToVideoRoomStream(json: any): VideoRoomStream {
    return {
        id: json.id,
        url: json.url,
        streamType: json.stream_type,
        width: json.width,
        height: json.height,
        fps: json.fps,
        createdAt: json.created_at,
        updatedAt: json.updated_at
    }
}

export function convertJSONToVideoConference(json: any): VideoConference {
    return {
        id: json.id,
        name: json.name,
        displayName: json.display_name,
        description: json.description,
        joinFrom: json.join_from,
        joinUntil: json.join_until,
        quality: json.quality,
        layout: json.layout,
        size: json.size,
        recordOnStart: json.record_on_start,
        enableRoomPreviews: json.enable_room_previews,
        enableChat: json.enable_chat,
        darkPrimary: json.dark_primary,
        darkBackground: json.dark_background,
        darkForeground: json.dark_foreground,
        darkSuccess: json.dark_success,
        darkNegative: json.dark_negative,
        lightPrimary: json.light_primary,
        lightBackground: json.light_background,
        lightForeground: json.light_foreground,
        lightSuccess: json.light_success,
        lightNegative: json.light_negative,
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        activeSession: json.active_session ?
            convertJSONToVideoRoomSession(json.active_session) : undefined
    }
}

export function convertJSONToVideoConferenceToken(json: any): VideoConferenceToken {
    return {
        id: json.id,
        name: json.name,
        token: json.token,
        scopes: json.scopes
    }
}

export function convertJSONToCharge(json: any): LogCharge {
    return {
        description: json.description,
        charge: json.charge
    }
}

export function convertJSONToVoiceLog(json: any): VoiceLog {
    return {
        id: json.id,
        from: json.from,
        to: json.to,
        direction: json.direction,
        status: json.status,
        duration: json.duration,
        durationMS: json.duration_ms,
        billingMS: json.billing_ms,
        source: json.source,
        type: json.type,
        url: json.url,
        charge: json.charge,
        chargeDetails: json.charge_details.map(convertJSONToCharge),
        createdAt: json.created_at,
    }
}

export function convertJSONToVideoLog(json: any): VideoLog {
    return {
        id: json.id,
        source: json.source,
        type: json.type,
        url: json.url,
        roomName: json.room_name,
        status: json.status,
        startTime: json.start_time,
        endTime: json.end_time,
        charge: json.charge,
        chargeDetails: json.charge_details.map(convertJSONToCharge),
        createdAt: json.created_at,
        updatedAt: json.updated_at
    }
}

export function convertJSONToMessageLog(json: any): MessageLog {
    return {
        id: json.id,
        from: json.from,
        to: json.to,
        status: json.status,
        direction: json.direction,
        kind: json.kind,
        source: json.source,
        type: json.type,
        url: json.url,
        numberOfSegments: json.number_of_segments,
        charge: json.charge,
        chargeDetails: json.charge_details.map(convertJSONToCharge),
        createdAt: json.created_at
    }
}

export function convertJSONToFaxLog(json: any): FaxLog {
    return {
        id: json.id,
        from: json.from,
        to: json.to,
        status: json.status,
        direction: json.direction,
        source: json.source,
        type: json.type,
        url: json.url,
        remoteStation: json.remote_station,
        charge: json.charge,
        numberOfPages: json.number_of_pages,
        quality: json.quality,
        chargeDetails: json.charge_details.map(convertJSONToCharge),
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        errorCode: json.error_code,
        errorMessage: json.error_message,
    }
}

export function convertJSONToFabricResourceAddress(json: any): FabricResourceAddress {
    return {
        id: json.id,
        resourceId: json.resource_id,
        name: json.name,
        displayName: json.display_name,
        coverUrl: json.cover_url,
        previewUrl: json.preview_url,
        locked: json.locked,
        channels: {
            video: json.channels.video,
            audio: json.channels.audio,
            messaging: json.channels.messaging
        }
    }
}

export function convertJSONToFabricSubscriber(json: any): FabricSubscriber {
    return {
        id: json.subscriber.id,
        email: json.subscriber.email,
        firstName: json.subscriber.first_name,
        lastName: json.subscriber.last_name,
        displayName: json.subscriber.display_name,
        jobTitle: json.subscriber.job_title,
        timezone: json.subscriber.timezone,
        country: json.subscriber.country,
        region: json.subscriber.region,
        companyName: json.subscriber.company_name
    }
}

export function convertJSONToFabricSubscriberResponse(json: any): FabricSubscriberResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'subscriber',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        subscriber: convertJSONToFabricSubscriber(json)
    }
}

export function convertUpdateCallFlowRequestToJSON(request: UpdateCallFlowRequest): any {
    return {
        title: request.title,
        document_version: request.documentVersion,
        flow_data: request.flowData,
        relayml: request.relayml
    }
}

export function convertCreateCallFlowRequestToJSON(request: CreateCallFlowRequest): any {
    return {
        title: request.title,
        relayml: request.relayml,
        flow_data: request.flowData
    }
}

export function convertJSONToCallFlow(json: any): CallFlow {
    return {
        id: json.id,
        title: json.title,
        documentVersion: json.document_version,
        flowData: json.flow_data,
        relayml: json.relayml
    }
}

export function convertJSONToCallFlowResponse(json: any): CallFlowResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'call_flow',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        callFlow: convertJSONToCallFlow(json.call_flow)
    }
}

export function convertJSONToCallFlowVersion(json: any): CallFlowVersion {
    return {
        id: json.id,
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        documentVersion: json.document_version,
        flowData: json.flow_data,
        relayml: json.relayml
    }
}

export function convertJSONToContextStep(json: any): ContextStep {
    if (Object.keys(json).includes('end')) {
        return {
            name: json.name,
            stepType: 'end',
            text: json.text,
            stepCriteria: json.step_criteria,
            functions: json.functions,
            validContexts: json.valid_contexts,
            skipUserTurn: json.skip_user_turn,
            end: json.end
        }
    } else if (Object.keys(json).includes('valid_steps')) {
        return {
            name: json.name,
            stepType: 'validSteps',
            text: json.text,
            stepCriteria: json.step_criteria,
            functions: json.functions,
            validContexts: json.valid_contexts,
            skipUserTurn: json.skip_user_turn,
            validSteps: json.valid_steps
        }
    } else {
        throw Error('Unknown context step type');
    }
}


export function convertJSONToAiAgentPromptBase(json: any): AiAgentPromptBase | undefined {
    if (json) {
        const contextsEntries: [string, { steps: ContextStep[] }][] | undefined = json.contexts ?
            Object.entries<any>(json.contexts)
                .filter(([key, _]) => key !== 'default')
                .map(([name, value]) => {
                    const tuple: [string, {
                        steps: ContextStep[]
                    }] = [name, {
                        steps: Array.isArray(value.steps) ? value.steps.map(convertJSONToContextStep) : [],
                    }];
                    return tuple;
                }) : undefined;

        const defaultContext: { steps: ContextStep[] } | undefined = json.contexts ?
            json.contexts.default ? {
                steps: Array.isArray(json.contexts.default.steps) ?
                    json.contexts.default.steps.map(convertJSONToContextStep) : []
            } : undefined : undefined;

        const contextsObject = contextsEntries ? Object.fromEntries(contextsEntries)
            : {};
        const defaultContextsObject = defaultContext ? {default: defaultContext}
            : undefined;

        const contexts: AiAgentPromptContextsBase | undefined = defaultContextsObject ? {
            ...defaultContextsObject,
            ...contextsObject
        } : undefined

        return {
            text: json.text,
            temperature: json.temperature,
            topP: json.top_p,
            confidence: json.confidence,
            frequencyPenalty: json.frequency_penalty,
            presencePenalty: json.presence_penalty,
            contexts: contexts
        }
    } else {
        return undefined;
    }
}

export function convertJSONToAiAgentPostPromptBase(json: any): AiAgentPostPromptBase | undefined {
    if (json) {
        return {
            text: json.text,
            temperature: json.temperature,
            topP: json.top_p,
            confidence: json.confidence,
            presencePenalty: json.presence_penalty,
            frequencyPenalty: json.frequency_penalty,
        }
    } else {
        return undefined;
    }
}

export function convertJSONToAiAgentParams(json: any): AiAgentParams | undefined {
    if (json) {
        return {
            acknowledgeInterruptions: json.acknowledge_interruptions,
            aiVolume: json.ai_volume,
            attentionTimeout: json.attention_timeout,
            attentionTimeoutPrompt: json.attention_timeout_prompt,
            backgroundFile: json.background_file,
            backgroundFileLoops: json.background_file_loops,
            backgroundFileVolume: json.background_file_volume,
            bargeMatchString: json.barge_match_string,
            bargeMinWords: json.barge_min_words,
            conscience: json.conscience,
            conversationId: json.conversation_id,
            debugWebhookLevel: json.debug_webhook_level,
            debugWebhookUrl: json.debug_webhook_url,
            direction: json.direction,
            digitTerminators: json.digit_terminators,
            digitTimeout: json.digit_timeout,
            endOfSpeechTimeout: json.end_of_speech_timeout,
            elevenLabsStability: json.eleven_labs_stability,
            elevenLabsSimilarity: json.eleven_labs_similarity,
            energyLevel: json.energy_level,
            holdMusic: json.hold_music,
            holdOnProcess: json.hold_on_process,
            inactivityTimeout: json.inactivity_timeout,
            inputPollFreq: json.input_poll_freq,
            interruptOnNoise: json.interrupt_on_noise,
            interruptPrompt: json.interrupt_prompt,
            languagesEnabled: json.languages_enabled,
            localTZ: json.local_tz,
            outboundAttentionTimeout: json.outbound_attention_timeout,
            saveConversation: json.save_conversation,
            swaigAllowSettings: json.swaig_allow_settings,
            swaigAllowSWML: json.swaig_allow_swml,
            swaigPostConversation: json.swaig_post_conversation,
            transferSummary: json.transfer_summary,
            verboseLogs: json.verbose_logs,
            waitForUser: json.wait_for_user,
        }
    } else {
        return undefined;
    }
}

export function convertJSONToAiAgentPronounce(json: any): Pronounce[] | undefined {
    if (Array.isArray(json)) {
        return json.map((pronounce: any) => ({
            replace: pronounce.replace,
            with: pronounce.with,
            ignoreCase: pronounce.ignore_case,
        }))
    } else {
        return undefined;
    }
}

export function convertJSONToAiAgentLanguages(json: any): Language[] | undefined {
    if (Array.isArray(json)) {
        return json.map((language: any) => {
            const functionFillers = Array.isArray(language.function_fillers) ? language.function_fillers
                : undefined;
            const speechFillers = Array.isArray(language.speech_fillers) ? language.speech_fillers : undefined;

            return {
                name: language.name,
                code: language.code,
                voice: language.voice,
                functionFillers: functionFillers,
                speechFillers: speechFillers,
            }
        })
    } else {
        return undefined;
    }
}

export function convertJSONToAiAgentSWAIGIncludes(json: any): SWAIGInclude[] | undefined {
    if (Array.isArray(json)) {
        return json.map((swaig_include: any) => {
            const metaDataEntries: [string, any][] | undefined = swaig_include.meta_data ? Object.entries(swaig_include.meta_data) : undefined
            const metaDataObject = metaDataEntries ? Object.fromEntries(metaDataEntries) : {};
            return {
                functions: Array.isArray(swaig_include.functions) ? swaig_include.functions : [],
                url: swaig_include.url,
                metaDataObject: metaDataObject
            }
        })
    } else {
        return undefined;
    }
}

export function convertJSONToSWAIGFunctionProperty(json: any): SWAIGFunctionProperty {
    if (typeof json === 'object') {
        const objectKeys = Object.keys(json);
        if (json.type === 'string') {
            return {
                description: json.description,
                nullable: json.nullable,
                type: 'string',
                enum: json.enum,
                default: json.default,
                pattern: json.pattern,
                format: json.format,
            }
        } else if (json.type === 'number') {
            return {
                description: json.description,
                nullable: json.nullable,
                type: 'number',
                enum: json.enum,
                default: json.default,
            }
        } else if (json.type === 'boolean') {
            return {
                description: json.description,
                nullable: json.nullable,
                type: 'boolean',
                default: json.default,
            }
        } else if (json.type === 'array') {
            return {
                description: json.description,
                nullable: json.nullable,
                type: 'array',
                default: json.default,
                items: json.items,
            }
        } else if (json.type === 'object') {
            return {
                description: json.description,
                nullable: json.nullable,
                type: 'object',
                default: json.default,
                properties: json.properties,
                required: json.required,
            }
        } else if (json.type === 'null') {
            return {
                type: 'null',
                description: json.description,
            }
        } else if (objectKeys.includes('oneOf')) {
            return {
                type: 'oneOf',
                oneOf: json.oneOf,
            }
        } else if (objectKeys.includes('allOf')) {
            return {
                type: 'allOf',
                allOf: json.allOf,
            }
        } else if (objectKeys.includes('anyOf')) {
            return {
                type: 'anyOf',
                anyOf: json.anyOf,
            }
        } else if (objectKeys.includes('const')) {
            return {
                type: 'const',
                const: json.const,
            }
        } else {
            throw Error('Unknown SWAIG function property type');
        }
    } else throw Error('Unknown SWAIG Function Property type');
}

export function convertJSONToSWAIGFunctionParameters(json: any) {
    if (typeof json === 'object') {
        const propertyEntries = Object.entries<any>(json.properties).map(([key, value]) => {
            const tuple: [string, any] = [key, convertJSONToSWAIGFunctionProperty(value)];
            return tuple
        })
        return {
            type: json.type,
            properties: Object.fromEntries(propertyEntries),
            required: json.required
        }
    } else {
        return undefined;
    }
}

export function convertJSONToSWAIGAction(json: any): SWAIGAction {
    if (typeof json === 'object') {
        if (json.context_switch) {
            return {
                type: 'contextSwitch',
                contextSwitch: {
                    systemPrompt: json.context_switch.system_prompt,
                    consolidate: json.context_switch.consolidate,
                    userPrompt: json.context_switch.user_prompt,
                }
            }
        } else if (json.playback_bg) {
            return {
                type: 'playbackBG',
                playbackBG: {
                    file: json.playback_bg.file,
                    wait: json.playback_bg.wait
                }
            }
        } else if (json.say) {
            return {
                type: 'say',
                say: json.say
            }
        } else if (typeof json.set_global_data === 'object') {
            const setGlobalDataEntries = Object.entries<any>(json.set_global_data.properties);
            const setGlobalDataObject = Object.fromEntries(setGlobalDataEntries);
            return {
                type: 'setGlobalData',
                setGlobalData: setGlobalDataObject
            };
        } else if (typeof json.set_meta_data === 'object') {
            const setMetaDataEntries = Object.entries<any>(json.set_meta_data.properties);
            const setMetaDataObject = Object.fromEntries(setMetaDataEntries);
            return {
                type: 'setMetaData',
                setMetaData: setMetaDataObject
            };
        } else if (json.stop) {
            return {
                type: 'stop',
                stop: json.stop
            };
        } else if (json.stop_playback_bg) {
            return {
                type: 'stopPlaybackBG',
                stopPlaybackBG: json.stop_playback_bg
            };
        } else if (Array.isArray(json.toggle_functions)) {
            const toggleFunctions: SWAIGToggleFunction[] = json.toggle_functions.map((toggle_function: any) => ({
                active: toggle_function.active,
                function: toggle_function.function,
            }))
            return {
                type: 'toggleFunctions',
                toggleFunctions: toggleFunctions
            };
        } else if (json.unset_global_data) {
            return {
                type: 'unsetGlobalData',
                unsetGlobalData: json.unset_global_data
            };
        } else if (json.unset_meta_data) {
            return {
                type: 'unsetMetaData',
                unsetMetaData: json.unset_meta_data
            };
        } else if (json.user_input) {
            return {
                type: 'userInput',
                userInput: json.user_input
            };
        } else {
            throw Error('Unknown SWAIG Action type');
        }
    } else {
        throw Error('Unknown SWAIG Action type');
    }
}

export function convertJSONToSWAIGExpression(json: any): SWAIGExpression {
    return {
        string: json.string,
        pattern: json.pattern,
        output: {
            response: json.output.response,
            action: Array.isArray(json.output.action) ? json.output.action.map(convertJSONToSWAIGAction)
                : undefined
        }
    }
}

export function convertJSONToSWAIGDataMap(json: any): SWAIGDataMap | undefined {
    if (json) {
        if (json.output) {
            const action = (Array.isArray(json.output.action)) ? json.output.action.map(convertJSONToSWAIGAction)
                : undefined;
            return {
                type: 'output',
                output: {
                    response: json.output.response,
                    action: action
                }
            }
        }
    } else if (Array.isArray(json.expressions)) {
        return {
            type: 'expressions',
            expressions: json.expressions.map(convertJSONToSWAIGExpression)
        }
    } else if (Array.isArray(json.webhooks)) {
        const webhooks: SWAIGWebhook[] = json.webhooks.map((webhook: any) => {
            const headersEntries: [string, string][] | undefined = webhook.headers ? Object.entries(webhook.headers)
                : undefined;
            const headersObject = headersEntries ? Object.fromEntries(headersEntries) : undefined;
            const paramsEntries: [string, string][] | undefined = webhook.params ? Object.entries(webhook.params) : undefined;
            const paramsObject = paramsEntries ? Object.fromEntries(paramsEntries) : undefined;
            return {
                expressions: json.expressions.map((expressions: any) => {
                    return {
                        expressions: expressions.map(convertJSONToSWAIGExpression)
                    }
                }),
                errorKeys: json.error_keys,
                url: webhook.url,
                foreach: {
                    inputKey: webhook.foreach.input_key,
                    outputKey: webhook.foreach.output_key,
                    max: webhook.foreach.max,
                    append: webhook.foreach.append
                },
                headers: headersObject,
                method: webhook.method,
                inputArgsAsParams: webhook.input_args_as_params,
                params: paramsObject,
                requireArgs: webhook.require_args,
                output: {
                    response: webhook.output.response,
                    action: Array.isArray(webhook.output.action) ? webhook.output.action.map(convertJSONToSWAIGAction)
                        : undefined
                }
            }
        })
        return {
            type: 'webhooks',
            webhooks: webhooks
        }
    } else {
        return undefined;
    }
}

export function convertJSONToAiAgentSWAIGFunctions(json: any): SWAIGFunction[] | undefined {
    if (Array.isArray(json)) {
        return json.map((swaig_function: any) => {
            const metaDataEntries: [string, any][] | undefined = swaig_function.meta_data ? Object.entries(swaig_function.meta_data) : undefined

            return {
                function: swaig_function.function,
                description: swaig_function.description,
                parameters: convertJSONToSWAIGFunctionParameters(swaig_function.parameters),
                active: swaig_function.active,
                metaData: metaDataEntries ? Object.fromEntries(metaDataEntries) : undefined,
                metaDataToken: swaig_function.meta_data_token,
                dataMap: convertJSONToSWAIGDataMap(swaig_function.data_map),
                webHookUrl: swaig_function.webhook_url,
                waitFile: swaig_function.wait_file,
                waitFileLoops: swaig_function.wait_file_loops,
            }
        })
    } else {
        return undefined;
    }
}

export function convertJSONToAiAgentSWAIG(json: any) {
    const defaults = json.defaults ? {
        webHookUrl: json.defaults.web_hook_url
    } : undefined;

    return {
        defaults: defaults,
        nativeFunctions: json.native_functions,
        includes: convertJSONToAiAgentSWAIGIncludes(json.includes),
        functions: convertJSONToAiAgentSWAIGFunctions(json.functions)
    }
}

export function convertJSONToAiAgent(json: any): AiAgent {
    return {
        id: json.id,
        name: json.name,
        prompt: convertJSONToAiAgentPromptBase(json.prompt),
        postPrompt: convertJSONToAiAgentPostPromptBase(json.post_prompt),
        params: convertJSONToAiAgentParams(json.params),
        pronounce: convertJSONToAiAgentPronounce(json.pronounce),
        hints: Array.isArray(json.hints) ? json.hints : undefined,
        languages: convertJSONToAiAgentLanguages(json.languages),
        SWAIG: convertJSONToAiAgentSWAIG(json.SWAIG)
    }
}

export function convertJSONToAiAgentResponse(json: any): AiAgentResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'ai_agent',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        aiAgent: convertJSONToAiAgent(json.ai_agent)
    }
}

export function convertContextStepToJSON(contextStep: ContextStep): any {
    return {
        name: contextStep.name,
        text: contextStep.text,
        step_criteria: contextStep.stepCriteria,
        functions: contextStep.functions,
        valid_contexts: contextStep.validContexts,
        skip_user_turn: contextStep.skipUserTurn,
        end: contextStep.stepType === 'end' ? contextStep.end : undefined,
        valid_steps: contextStep.stepType === 'validSteps' ? contextStep.validSteps : undefined
    }
}

export function convertAiAgentPromptContextsBaseToJSON(contexts: AiAgentPromptContextsBase) {
    const contextsEntries = Object.entries(contexts).map(([name, context]) => {
        const tuple: [string, { steps: any[] }] = [name, {
            steps: context.steps.map(convertContextStepToJSON)
        }];
        return tuple
    });
    return Object.fromEntries(contextsEntries);
}

export function convertAiAgentPromptBaseToJSON(prompt: AiAgentPromptBase): any {
    return {
        text: prompt.text,
        temperature: prompt.temperature,
        top_p: prompt.topP,
        confidence: prompt.confidence,
        presence_penalty: prompt.presencePenalty,
        frequency_penalty: prompt.frequencyPenalty,
        contexts: prompt.contexts ? convertAiAgentPromptContextsBaseToJSON(prompt.contexts)
            : undefined,
    }
}

export function convertAiAgentPostPromptBaseToJSON(postPrompt: AiAgentPostPromptBase): any {
    return {
        text: postPrompt.text,
        temperature: postPrompt.temperature,
        top_p: postPrompt.topP,
        confidence: postPrompt.confidence,
        presence_penalty: postPrompt.presencePenalty,
        frequency_penalty: postPrompt.frequencyPenalty,
    }
}

export function convertAiAgentParamsToJSON(params: AiAgentParams): any {
    return {
        acknowledge_interruptions: params.acknowledgeInterruptions,
        ai_volume: params.aiVolume,
        attention_timeout: params.attentionTimeout,
        attention_timeout_prompt: params.attentionTimeoutPrompt,
        background_file: params.backgroundFile,
        background_file_loops: params.backgroundFileLoops,
        background_file_volume: params.backgroundFileVolume,
        barge_match_string: params.bargeMatchString,
        barge_min_words: params.bargeMinWords,
        conscience: params.conscience,
        conversation_id: params.conversationId,
        debug_webhook_level: params.debugWebhookLevel,
        debug_webhook_url: params.debugWebhookUrl,
        direction: params.direction,
        digit_terminators: params.digitTerminators,
        digit_timeout: params.digitTimeout,
        end_of_speech_timeout: params.endOfSpeechTimeout,
        eleven_labs_stability: params.elevenLabsStability,
        eleven_labs_similarity: params.elevenLabsSimilarity,
        energy_level: params.energyLevel,
        hold_music: params.holdMusic,
        hold_on_process: params.holdOnProcess,
        inactivity_timeout: params.inactivityTimeout,
        input_poll_freq: params.inputPollFreq,
        interrupt_on_noise: params.interruptOnNoise,
        interrupt_prompt: params.interruptPrompt,
        languages_enabled: params.languagesEnabled,
        local_tz: params.localTZ,
        outbound_attention_timeout: params.outboundAttentionTimeout,
        save_conversation: params.saveConversation,
        swaig_allow_settings: params.swaigAllowSettings,
        swaig_allow_swml: params.swaigAllowSWML,
        swaig_post_conversation: params.swaigPostConversation,
        transfer_summary: params.transferSummary,
        verbose_logs: params.verboseLogs,
        wait_for_user: params.waitForUser,
    }
}

export function convertPronounceToJSON(pronounce: Pronounce[]): any {
    return pronounce.map((pronounce: Pronounce) => {
        return {
            replace: pronounce.replace,
            with: pronounce.with,
            ignore_case: pronounce.ignoreCase,
        }
    })
}

export function convertLanguagesToJSON(languages: Language[]): any {
    return languages.map((language: Language) => {
        return {
            name: language.name,
            code: language.code,
            voice: language.voice,
            function_fillers: language.functionFillers,
            speech_fillers: language.speechFillers,
        }
    })
}

export function convertSWAIGIncludesToJSON(swaigIncludes: SWAIGInclude[]): any {
    return swaigIncludes.map((swaigInclude) => {
        const metaDataEntries = swaigInclude.metaData ? Object.entries(swaigInclude.metaData)
            : undefined;
        const metaDataObject = metaDataEntries ? Object.fromEntries(metaDataEntries)
            : undefined;
        return {
            functions: swaigInclude.functions,
            url: swaigInclude.url,
            meta_data: metaDataObject
        }
    })
}

export function convertSWAIGFunctionPropertyToJSON(swaigFunctionProperty: SWAIGFunctionProperty): any {
    switch (swaigFunctionProperty.type) {
        case 'string':
            return {
                description: swaigFunctionProperty.description,
                nullable: swaigFunctionProperty.nullable,
                type: 'string',
                enum: swaigFunctionProperty.enum,
                default: swaigFunctionProperty.default,
                pattern: swaigFunctionProperty.pattern,
                format: swaigFunctionProperty.format,
            }
        case 'integer':
            return {
                description: swaigFunctionProperty.description,
                nullable: swaigFunctionProperty.nullable,
                type: 'integer',
                enum: swaigFunctionProperty.enum,
                default: swaigFunctionProperty.default,
            }
        case 'number':
            return {
                description: swaigFunctionProperty.description,
                nullable: swaigFunctionProperty.nullable,
                type: 'number',
                enum: swaigFunctionProperty.enum,
                default: swaigFunctionProperty.default,
            }
        case 'boolean':
            return {
                description: swaigFunctionProperty.description,
                nullable: swaigFunctionProperty.nullable,
                type: 'boolean',
                default: swaigFunctionProperty.default,
            }
        case 'array':
            return {
                description: swaigFunctionProperty.description,
                nullable: swaigFunctionProperty.nullable,
                type: 'array',
                default: swaigFunctionProperty.default,
                items: swaigFunctionProperty.items,
            }
        case 'object':
            return {
                description: swaigFunctionProperty.description,
                nullable: swaigFunctionProperty.nullable,
                type: 'object',
                default: swaigFunctionProperty.default,
                properties: swaigFunctionProperty.properties,
                required: swaigFunctionProperty.required,
            }
        case 'null':
            return {
                type: 'null',
                description: swaigFunctionProperty.description,
            }
        case 'oneOf':
            return {
                oneOf: swaigFunctionProperty.oneOf,
            }
        case 'allOf':
            return {
                allOf: swaigFunctionProperty.allOf,
            }
        case 'anyOf':
            return {
                anyOf: swaigFunctionProperty.anyOf,
            }
        case 'const':
            return {
                const: swaigFunctionProperty.const,
            }
        default:
            throw Error('Unknown SWAIG function property type');
    }
}

export function convertSWAIGToggleFunctionToJSON(swaigToggleFunction: SWAIGToggleFunction): any {
    return {
        active: swaigToggleFunction.active,
        function: swaigToggleFunction.function,
    }
}

export function convertSWAIGActionToJSON(swaigAction: SWAIGAction): any {
    switch (swaigAction.type) {
        case 'contextSwitch': {
            return {
                contextSwitch: {
                    system_prompt: swaigAction.contextSwitch.systemPrompt,
                    consolidate: swaigAction.contextSwitch.consolidate,
                    user_prompt: swaigAction.contextSwitch.userPrompt
                }
            }
        }
        case 'playbackBG': {
            return {
                playback_bg: {
                    file: swaigAction.playbackBG.file,
                    wait: swaigAction.playbackBG.wait
                }
            }
        }
        case 'say': {
            return {
                say: swaigAction.say
            }
        }
        case 'setGlobalData': {
            const setGlobalDataEntries = Object.entries<any>(swaigAction.setGlobalData);
            const setGlobalDataObject = Object.fromEntries(setGlobalDataEntries);
            return {
                set_global_data: setGlobalDataObject
            }
        }
        case 'setMetaData': {
            const setMetaDataEntries = Object.entries<any>(swaigAction.setMetaData);
            const setMetaDataObject = Object.fromEntries(setMetaDataEntries);
            return {
                set_meta_data: setMetaDataObject
            }
        }
        case 'stop': {
            return {
                stop: swaigAction.stop
            }
        }
        case 'stopPlaybackBG': {
            return {
                stop_playback_bg: swaigAction.stopPlaybackBG
            }
        }
        case 'toggleFunctions': {
            const toggleFunctions = swaigAction.toggleFunctions.map(convertSWAIGToggleFunctionToJSON);
            return {
                toggle_functions: toggleFunctions
            }
        }
        case 'unsetGlobalData': {
            return {
                unset_global_data: swaigAction.unsetGlobalData
            }
        }
        case 'unsetMetaData': {
            return {
                unset_meta_data: swaigAction.unsetMetaData
            }
        }
        case 'userInput': {
            return {
                user_input: swaigAction.userInput
            }
        }
        default:
            throw Error('Unknown SWAIG Action type');

    }
}

export function convertSWAIGExpressionToJSON(swaigExpression: SWAIGExpression): any {
    return {
        string: swaigExpression.string,
        pattern: swaigExpression.pattern,
        output: {
            response: swaigExpression.output.response,
            action: Array.isArray(swaigExpression.output.action) ? swaigExpression.output.action.map(convertSWAIGActionToJSON)
                : undefined
        }
    }
}

export function convertSWAIGWebhookToJSON(swaigWebhook: SWAIGWebhook): any {
    const expressions = swaigWebhook.expressions.map((expressions: any) => {
        return {
            expressions: expressions.map(convertSWAIGExpressionToJSON)
        }
    })
    const headersEntries = swaigWebhook.headers ? Object.entries(swaigWebhook.headers)
        : undefined;
    const headersObject = headersEntries ? Object.fromEntries(headersEntries) : undefined;
    const paramsEntries = swaigWebhook.params ? Object.entries(swaigWebhook.params) : undefined;
    const paramsObject = paramsEntries ? Object.fromEntries(paramsEntries) : undefined;

    return {
        expressions: expressions,
        error_keys: swaigWebhook.errorKeys,
        url: swaigWebhook.url,
        foreach: {
            input_key: swaigWebhook.foreach?.inputKey,
            output_key: swaigWebhook.foreach?.outputKey,
            max: swaigWebhook.foreach?.max,
            append: swaigWebhook.foreach?.append
        },
        headers: headersObject,
        method: swaigWebhook.method,
        input_args_as_params: swaigWebhook.inputArgsAsParams,
        params: paramsObject,
        require_args: swaigWebhook.requireArgs,
        output: {
            response: swaigWebhook.output.response,
            action: Array.isArray(swaigWebhook.output.action) ? swaigWebhook.output.action.map(convertSWAIGActionToJSON)
                : undefined
        }
    }
}

export function convertSWAIGDataMapToJSON(swaigDataMap: SWAIGDataMap): any {
    switch (swaigDataMap.type) {
        case 'output':
            return {
                output: {
                    response: swaigDataMap.output.response,
                    action: Array.isArray(swaigDataMap.output.action) ? swaigDataMap.output.action
                        .map(convertSWAIGActionToJSON) : undefined
                }
            }
        case 'expressions':
            return {
                expressions: swaigDataMap.expressions.map(convertSWAIGExpressionToJSON)
            }
        case 'webhooks':
            return {
                webhooks: swaigDataMap.webhooks.map(convertSWAIGWebhookToJSON)
            }
        default:
            throw Error('Unknown SWAIG DataMap type');
    }
}

export function convertSWAIGFunctionsToJSON(swaigFunctions: SWAIGFunction[]): any {
    return swaigFunctions.map((swaigFunction) => {
        const metaDataEntries = swaigFunction.metaData ? Object.entries(swaigFunction.metaData)
            : undefined;
        const metaDataObject = metaDataEntries ? Object.fromEntries(metaDataEntries) : undefined;

        const parametersPropertiesEntries = swaigFunction.parameters?.properties
            ? Object.entries(swaigFunction.parameters.properties).map(([name, property]) => {
                const tuple: [string, any] = [name, convertSWAIGFunctionPropertyToJSON(property)];
                return tuple
            }) : undefined;
        const parametersPropertiesObject = parametersPropertiesEntries ?
            Object.fromEntries(parametersPropertiesEntries) : undefined;

        return {
            function: swaigFunction.function,
            description: swaigFunction.description,
            parameters: swaigFunction.parameters ? {
                type: swaigFunction.parameters.type,
                properties: parametersPropertiesObject,
                required: swaigFunction.parameters.required,
            } : undefined,
            active: swaigFunction.active,
            meta_data: metaDataObject,
            meta_data_token: swaigFunction.metaDataToken,
            data_map: swaigFunction.dataMap ? convertSWAIGDataMapToJSON(swaigFunction.dataMap) : undefined,
            web_hook_url: swaigFunction.webHookUrl,
            wait_file: swaigFunction.waitFile,
            wait_file_loops: swaigFunction.waitFileLoops
        }
    })
}

export function convertCreateAiAgentRequestToJSON(request: CreateAiAgentRequest): any {

    const swaigDefaults = request.SWAIG?.defaults ? {
        web_hook_url: request.SWAIG.defaults.webHookUrl
    } : undefined;

    return {
        name: request.name,
        prompt: request.prompt ? convertAiAgentPromptBaseToJSON(request.prompt) : undefined,
        post_prompt: request.postPrompt ? convertAiAgentPostPromptBaseToJSON(request.postPrompt) : undefined,
        params: request.params ? convertAiAgentParamsToJSON(request.params) : undefined,
        pronounce: request.pronounce ? convertPronounceToJSON(request.pronounce) : undefined,
        hints: request.hints,
        languages: request.languages ? convertLanguagesToJSON(request.languages) : undefined,
        SWAIG: {
            defaults: swaigDefaults,
            native_functions: request.SWAIG?.nativeFunctions,
            includes: request.SWAIG?.includes ? convertSWAIGIncludesToJSON(request.SWAIG.includes) : undefined,
            functions: request.SWAIG?.functions ? convertSWAIGFunctionsToJSON(request.SWAIG.functions) : undefined,
        }
    }
}

export function convertUpdateAiAgentPromptContextsToJSON(contexts: UpdateAiAgentPromptContexts) {
    const contextsEntries = Object.entries(contexts).map(([name, context]) => {
        const tuple: [string, { steps: any[] }] = [name, {
            steps: context.steps.map(convertContextStepToJSON)
        }];
        return tuple
    });
    return Object.fromEntries(contextsEntries);
}

export function convertUpdateAiAgentPromptRequestToJSON(request: UpdateAiAgentPromptRequest): any {
    return {
        text: request.text,
        temperature: request.temperature,
        top_p: request.topP,
        confidence: request.confidence,
        presence_penalty: request.presencePenalty,
        frequency_penalty: request.frequencyPenalty,
        contexts: request.contexts ? convertUpdateAiAgentPromptContextsToJSON(request.contexts) : undefined,
    }
}

export function convertUpdateAiAgentPostPromptRequestToJSON(request: UpdateAiAgentPostPromptRequest): any {
    return {
        text: request.text,
        temperature: request.temperature,
        top_p: request.topP,
        confidence: request.confidence,
        presence_penalty: request.presencePenalty,
        frequency_penalty: request.frequencyPenalty,
    }
}

export function convertUpdateAiAgentRequestToJSON(request: UpdateAiAgentRequest): any {
    const swaigDefaults = request.SWAIG?.defaults ? {
        web_hook_url: request.SWAIG.defaults.webHookUrl
    } : undefined;

    return {
        name: request.name,
        prompt: request.prompt ? convertUpdateAiAgentPromptRequestToJSON(request.prompt) : undefined,
        post_prompt: request.postPrompt ? convertUpdateAiAgentPostPromptRequestToJSON(request.postPrompt) : undefined,
        params: request.params ? convertAiAgentParamsToJSON(request.params) : undefined,
        pronounce: request.pronounce ? convertPronounceToJSON(request.pronounce) : undefined,
        hints: request.hints,
        languages: request.languages ? convertLanguagesToJSON(request.languages) : undefined,
        SWAIG: {
            defaults: swaigDefaults,
            native_functions: request.SWAIG?.nativeFunctions,
            includes: request.SWAIG?.includes ? convertSWAIGIncludesToJSON(request.SWAIG.includes) : undefined,
            functions: request.SWAIG?.functions ? convertSWAIGFunctionsToJSON(request.SWAIG.functions) : undefined,
        }
    }
}

export function convertJSONToSwmlScript(json: any): SwmlScript {
    return {
        id: json.id,
        contents: json.contents,
        requestUrl: json.request_url,
        displayName: json.display_name
    }
}

export function convertJSONToSwmlScriptResponse(json: any): SwmlScriptResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'swml_script',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        swmlScript: convertJSONToSwmlScript(json.swml_script)
    }
}

export function convertJSONToRelayApplication(json: any): RelayApplication {
    return {
        id: json.id,
        name: json.name,
        topic: json.topic,
        callStatusCallbackUrl: json.call_status_callback_url
    }
}

export function convertJSONToRelayApplicationResponse(json: any): RelayApplicationResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'relay_application',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        relayApplication: convertJSONToRelayApplication(json.relay_application)
    }
}

export function convertUpdateRelayApplicationRequestToJSON(request: UpdateRelayApplicationRequest): any {
    return {
        name: request.name,
        topic: request.topic,
        call_status_callback_url: request.callStatusCallbackUrl
    }
}

export function convertCreateRelayApplicationRequestToJSON(request: CreateRelayApplicationRequest): any {
    return {
        name: request.name,
        topic: request.topic,
        call_status_callback_url: request.callStatusCallbackUrl
    }
}

export function convertJSONToFabricSipEndpoint(json: any): FabricSipEndpoint {
    return {
        id: json.id,
        username: json.username,
        callerId: json.caller_id,
        sendAs: json.send_as,
        ciphers: json.ciphers,
        codecs: json.codecs,
        encryption: json.encryption,
        callHandler: json.call_handler,
        callingHandlerResourceId: json.calling_handler_resource_id
    }
}

export function convertJSONToFabricSipEndpointResponse(json: any): FabricSipEndpointResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'sip_endpoint',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        fabricSipEndpoint: convertJSONToFabricSipEndpoint(json.sip_endpoint)
    }
}

export function convertUpdateFabricSipEndpointRequestToJSON(request: UpdateFabricSipEndpointRequest): any {
    return {
        username: request.username,
        callerId: request.callerId,
        sendAs: request.sendAs,
        ciphers: request.ciphers,
        codecs: request.codecs,
        encryption: request.encryption,
        callHandler: request.callHandler,
        callingHandlerResourceId: request.callingHandlerResourceId
    }
}

export function convertCreateFabricSipEndpointRequestToJSON(request: CreateFabricSipEndpointRequest): any {
    return {
        username: request.username,
        callerId: request.callerId,
        sendAs: request.sendAs,
        ciphers: request.ciphers,
        codecs: request.codecs,
        encryption: request.encryption,
        callHandler: request.callHandler,
        callingHandlerResourceId: request.callingHandlerResourceId
    }
}

export function convertJSONToSipGateway(json: any): SipGateway {
    return {
        id: json.id,
        uri: json.uri,
        name: json.name,
        ciphers: json.ciphers,
        codecs: json.codecs,
        encryption: json.encryption
    }
}

export function convertJSONToSipGatewayResponse(json: any): SipGatewayResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'sip_gateway',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        sipGateway: convertJSONToSipGateway(json.sip_gateway)
    }
}

export function convertCreateSipGatewayRequestToJSON(request: CreateSipGatewayRequest): any {
    return {
        uri: request.uri,
        name: request.name,
        ciphers: request.ciphers,
        codecs: request.codecs,
        encryption: request.encryption
    }
}

export function convertUpdateSipGatewayRequestToJSON(request: UpdateSipGatewayRequest): any {
    return {
        uri: request.uri,
        name: request.name,
        ciphers: request.ciphers,
        codecs: request.codecs,
        encryption: request.encryption
    }
}

export function convertJSONToSubscriberSipEndpoint(json: any): SubscriberSipEndpoint {
    return {
        id: json.id,
        username: json.username,
        callerId: json.caller_id,
        sendAs: json.send_as,
        ciphers: json.ciphers,
        codecs: json.codecs,
        encryption: json.encryption
    }
}

export function convertCreateSubscriberSipEndpointRequestToJSON(request: CreateSubscriberSipEndpointRequest): any {
    return {
        username: request.username,
        password: request.password,
        caller_id: request.callerId,
        send_as: request.sendAs,
        ciphers: request.ciphers,
        codecs: request.codecs,
        encryption: request.encryption
    }
}

export function convertUpdateSubscriberEndpointRequestToJSON(request: UpdateSubscriberSipEndpointRequest): any {
    return {
        username: request.username,
        password: request.password,
        caller_id: request.callerId,
        send_as: request.sendAs,
        ciphers: request.ciphers,
        codecs: request.codecs,
        encryption: request.encryption
    }
}

export function convertJSONToFreeswitchConnector(json: any): FreeswitchConnector {
    return {
        id: json.id,
        name: json.name,
        callerId: json.caller_id,
        sendAs: json.send_as
    }
}

export function convertJSONToFreeswitchConnectorResponse(json: any): FreeswitchConnectorResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'freeswitch_connector',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        freeswitchConnector: convertJSONToFreeswitchConnector(json.freeswitch_connector)
    }
}

export function convertUpdateFreeswitchConnectorRequestToJson(request: UpdateFreeswitchConnectorRequest): any {
    return {
        name: request.name,
        caller_id: request.callerId,
        send_as: request.sendAs
    }
}

export function convertCreateFreeswitchConnectorRequestToJson(request: CreateFreeswitchConnectorRequest): any {
    return {
        name: request.name,
        token: request.token
    }
}

export function convertJSONToDialogflowAgent(json: any): DialogflowAgent {
    return {
        id: json.id,
        sayEnabled: json.say_enabled,
        say: json.say,
        voice: json.voice,
        displayName: json.display_name,
        dialogflowRefenceId: json.dialogflow_refence_id,
        dialogflowRefenceName: json.dialogflow_refence_name
    }
}

export function convertJSONToDialogflowAgentResponse(json: any): DialogflowAgentResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'dialogflow_agent',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        dialogflowAgent: convertJSONToDialogflowAgent(json.dialogflow_agent)
    }
}

export function convertUpdateDialogflowAgentRequestToJSON(request: UpdateDialogflowAgentRequest): any {
    return {
        name: request.name,
        say_enabled: request.sayEnabled,
        say: request.say,
        voice: request.voice
    }
}

export function convertJSONToConferenceRoom(json: any): ConferenceRoom {
    return {
        displayName: json.display_name,
        maxMembers: json.max_members,
        quality: json.quality,
        joinFrom: json.join_from,
        joinUntil: json.join_until,
        removeAt: json.remove_at,
        removeAfterSecondsElapsed: json.remove_after_seconds_elapsed,
        layout: json.layout,
        recordOnStart: json.record_on_start,
        enableRoomPreviews: json.enable_room_previews,
        syncAudioVideo: json.sync_audio_video,
        meta: json.meta,
        name: json.name,
        id: json.id,
        fps: json.fps,
        prioritizeHandRaise: json.prioritize_hand_raise
    }
}

export function convertJSONToConferenceRoomResponse(json: any): ConferenceRoomResponse {
    return {
        id: json.id,
        projectId: json.project_id,
        displayName: json.display_name,
        type: 'video_room',
        createdAt: json.created_at,
        updatedAt: json.updated_at,
        conferenceRoom: convertJSONToConferenceRoom(json.conference_room)
    }
}

export function convertCreateConferenceRoomRequestToJSON(request: CreateConferenceRoomRequest): any {
    return {
        display_name: request.displayName,
        max_members: request.maxMembers,
        quality: request.quality,
        join_from: request.joinFrom,
        join_until: request.joinUntil,
        remove_at: request.removeAt,
        remove_after_seconds_elapsed: request.removeAfterSecondsElapsed,
        layout: request.layout,
        record_on_start: request.recordOnStart,
        enable_room_previews: request.enableRoomPreviews,
        sync_audio_video: request.syncAudioVideo,
        meta: request.meta,
        name: request.name,
        fps: request.fps,
        prioritize_hand_raise: request.prioritizeHandRaise
    }
}

export function convertUpdateConferenceRoomRequestToJSON(request: UpdateConferenceRoomRequest): any {
    return {
        display_name: request.displayName,
        max_members: request.maxMembers,
        quality: request.quality,
        join_from: request.joinFrom,
        join_until: request.joinUntil,
        remove_at: request.removeAt,
        remove_after_seconds_elapsed: request.removeAfterSecondsElapsed,
        layout: request.layout,
        record_on_start: request.recordOnStart,
        enable_room_previews: request.enableRoomPreviews,
        sync_audio_video: request.syncAudioVideo,
        meta: request.meta,
        name: request.name,
        fps: request.fps,
        prioritize_hand_raise: request.prioritizeHandRaise
    }
}

export function convertGeneratePubSubTokenRequestToJSON(request: GeneratePubSubTokenRequest): any {
    const channelsJSONEntries = Object.entries(request.channels).map(([name, permissions]) => {
        const tuple: [string, { read: boolean, write: boolean }] = [name, {
            read: permissions.read,
            write: permissions.write
        }];
        return tuple
    });
    const channelsJSON = Object.fromEntries(channelsJSONEntries);
    return {
        channels: channelsJSON,
        ttl: request.ttl,
        member_id: request.memberId,
        state: request.state
    }
}

export function convertJSONToFabricResourceResponse(json: any): FabricResourceResponse {
    switch (json.type) {
        case 'relay_application':
            return convertJSONToRelayApplicationResponse(json);
        case 'sip_endpoint':
            return convertJSONToFabricSipEndpointResponse(json);
        case 'sip_gateway':
            return convertJSONToSipGatewayResponse(json);
        case 'freeswitch_connector':
            return convertJSONToFreeswitchConnectorResponse(json);
        case 'dialogflow_agent':
            return convertJSONToDialogflowAgentResponse(json);
        case 'ai_agent':
            return convertJSONToAiAgentResponse(json);
        case 'call_flow':
            return convertJSONToCallFlowResponse(json);
        case 'subscriber':
            return convertJSONToFabricSubscriberResponse(json);
        case 'swml_script':
            return convertJSONToSwmlScriptResponse(json);
        case 'video_room':
            return convertJSONToConferenceRoomResponse(json);
        case 'swml_webhook':
            return convertJSONToSwmlWebhookResponse(json);
        case 'swml_application':
            return convertJSONToSwmlApplicationResponse(json);
        case 'cxml_application':
            return convertJSONToLamlApplicationResponse(json);
        case 'laml_bin':
            return convertJSONToCXMLScriptResponse(json);
        case 'cxml_webhook':
            return convertJSONToCXMLWebhookResponse(json);
        default:
            throw Error('Unknown Fabric Resource type');
    }
}
