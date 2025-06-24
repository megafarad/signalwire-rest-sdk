import {isNode} from 'browser-or-node';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {
    Address,
    Brand,
    Campaign,
    CampaignPhoneNumberAssignmentOrder,
    GenerateChatTokenRequest,
    ChatNamespace,
    CreateAddressRequest,
    CreateCampaignPhoneNumberAssignmentOrderRequest,
    CreateCampaignRequest,
    CreateDomainApplicationRequest,
    CreateNumberGroupMemberRequest,
    CreateNumberGroupRequest,
    CreateVerifiedCallerIdRequest,
    DomainApplication,
    CreateAiAgentRequest,
    UpdateAiAgentRequest,
    AssignResourceAsDomainApplicationHandlerRequest,
    AssignResourceAsPhoneRouteHandlerRequest,
    AssignResourceAsSipEndpointHandlerRequest,
    CreateCallFlowRequest,
    UpdateCallFlowRequest,
    UpdateDialogflowAgentRequest,
    CreateFreeswitchConnectorRequest,
    UpdateFreeswitchConnectorRequest,
    ListFabricResourcesOptions,
    FabricNamespace,
    CreateRelayApplicationRequest,
    UpdateRelayApplicationRequest,
    CreateFabricSipEndpointRequest,
    UpdateFabricSipEndpointRequest,
    CreateFabricSubscriberRequest,
    UpdateFabricSubscriberRequest,
    CreateSwmlScriptRequest,
    UpdateSwmlScriptRequest,
    ListFaxLogsOptions,
    FaxNamespace,
    Headers,
    ListAllBrandsOptions,
    ListAllCampaignPhoneNumberAssignmentOrdersOptions,
    ListAllCampaignPhoneNumberAssignmentsOptions,
    ListAllDomainApplicationsOptions,
    ListAllPhoneNumbersOptions,
    ListAllVerifiedCallerIdsOptions,
    ListMessageLogsOptions,
    MessageNamespace,
    MfaTokenViaPhoneCallRequest,
    MfaTokenViaPhoneCallResponse,
    MfaTokenViaTextRequest,
    MfaTokenViaTextResponse,
    NumberGroup,
    NumberGroupMembership,
    PhoneNumber,
    PhoneNumberListing,
    CreateApiTokenRequest,
    UpdateApiTokenRequest,
    ProjectNamespace,
    PurchasePhoneNumberRequest,
    QueryParams,
    SearchForAvailablePhoneNumbersOptions,
    SpaceManagementNamespace,
    LookupNumberOptions,
    CreateSipEndpointRequest,
    ListAllSipEndpointsOptions,
    UpdateSipEndpointRequest,
    UpdateSipProfileRequest,
    UpdateCampaignRequest,
    UpdateDomainApplicationRequest,
    UpdateNumberGroupRequest,
    UpdatePhoneNumberRequest,
    UpdateVerifiedCallerIdRequest,
    ValidateVerificationCodeRequest,
    VerifiedCallerId,
    VerifyMfaTokenRequest,
    VerifyMfaTokenResponse,
    CreateVideoConferenceRequest,
    ListVideoConferencesOptions,
    RetrieveVideoConferenceOptions,
    UpdateVideoConferenceRequest,
    ListVideoLogsOptions,
    VideoNamespace,
    ListRecordingsForVideoRoomOptions,
    RetrieveVideoRoomRecordingOptions,
    ListRoomSessionsRecordingsOptions,
    VoiceLogsListLogsOptions,
    VoiceNamespace,
    LookupNumberResponse,
    SipEndpoint,
    SipProfile,
    Recording,
    VideoRoom,
    GetVideoRoomOptions,
    ListRoomSessionsOptions,
    VideoRoomSession,
    VideoRoomRecording,
    VideoRoomSessionMember,
    VideoRoomTokenRequest,
    CreateVideoRoomRequest,
    UpdateVideoRoomRequest,
    VideoRoomToken,
    VideoRoomStream,
    CreateStreamRequest,
    UpdateStreamRequest,
    VideoConference,
    VideoConferenceToken,
    VoiceLog,
    VideoLog,
    MessageLog,
    FaxLog,
    ApiToken,
    ChatToken,
    CreateFabricSubscriberTokenRequest,
    FabricSubscriberToken,
    CreateBrandRequest,
    CallFlowVersion,
    AiAgentResponse,
    SwmlScriptResponse,
    RelayApplicationResponse,
    FabricSipEndpointResponse,
    FreeswitchConnectorResponse,
    DialogflowAgentResponse,
    FabricSubscriberResponse,
    CallFlowResponse,
    FabricResourceAddress,
    FabricResourceResponse,
    CallingNamespace,
    CallResponse,
    CreateCallRequest,
    UpdateCallRequest,
    DatasphereNamespace,
    DatasphereDocument,
    CreateDocumentRequest,
    SearchDocumentRequest,
    UpdateDocumentRequest,
    SearchDocumentsResponse,
    DatasphereDocumentChunk,
    FabricAddress,
    CreateEmbedsTokenRequest,
    EmbedsToken,
    SwmlWebhookResponse,
    CreateSwmlWebhookRequest,
    UpdateSwmlWebhookRequest,
    LamlApplicationResponse,
    UpdateLamlApplicationRequest,
    CXMLScriptResponse,
    CreateCXMLScriptRequest,
    UpdateCXMLScriptRequest,
    CXMLWebhookResponse,
    CreateCXMLWebhookRequest,
    UpdateCXMLWebhookRequest,
    SipGatewayResponse,
    UpdateSipGatewayRequest,
    CreateSipGatewayRequest,
    CreateSubscriberGuestTokenRequest,
    SubscriberGuestToken,
    ExchangeRefreshTokenRequest,
    CreateSubscriberInviteTokenRequest,
    SubscriberInviteToken,
    SubscriberSipEndpoint,
    CreateSubscriberSipEndpointRequest,
    UpdateSubscriberSipEndpointRequest,
    SwmlApplicationResponse,
    CreateSwmlApplicationRequest,
    UpdateSwmlApplicationRequest,
    ConferenceRoomResponse,
    UpdateConferenceRoomRequest,
    CreateConferenceRoomRequest,
    PubSubNamespace, GeneratePubSubTokenRequest, GeneratePubSubTokenResponse
} from './SignalWireRESTClientTypes';
import {
    convertCreateSipEndpointRequestToJSON,
    convertJSONToDomainApplication,
    convertJSONToLookupNumberResponse,
    convertJSONToPhoneNumber,
    convertJSONToRecording,
    convertJSONToSipEndpoint,
    convertJSONToVideoRoom,
    convertJSONToVideoRoomSession,
    convertJSONToVideoRoomSessionMember,
    convertJSONToVideoRoomRecording,
    convertUpdateDomainApplicationRequestToJSON,
    convertUpdatePhoneNumberRequestToJSON,
    convertUpdateSipEndpointRequestToJSON,
    convertJSONToVideoRoomStream,
    convertJSONToVideoConference,
    convertJSONToVideoConferenceToken,
    convertJSONToVoiceLog,
    convertJSONToVideoLog,
    convertJSONToMessageLog,
    convertJSONToFaxLog,
    convertJSONToCallFlowVersion,
    convertUpdateCallFlowRequestToJSON,
    convertCreateCallFlowRequestToJSON,
    convertJSONToAiAgentResponse,
    convertCreateAiAgentRequestToJSON,
    convertUpdateAiAgentRequestToJSON,
    convertJSONToSwmlScriptResponse,
    convertJSONToRelayApplicationResponse,
    convertUpdateRelayApplicationRequestToJSON,
    convertCreateRelayApplicationRequestToJSON,
    convertJSONToFabricSipEndpointResponse,
    convertUpdateFabricSipEndpointRequestToJSON,
    convertCreateFabricSipEndpointRequestToJSON,
    convertJSONToFreeswitchConnectorResponse,
    convertUpdateFreeswitchConnectorRequestToJson,
    convertCreateFreeswitchConnectorRequestToJson,
    convertJSONToDialogflowAgentResponse,
    convertUpdateDialogflowAgentRequestToJSON,
    convertJSONToFabricSubscriberResponse,
    convertJSONToCallFlowResponse,
    convertJSONToFabricResourceAddress,
    convertJSONToFabricResourceResponse,
    convertCreateCallRequestToJSON,
    convertJSONToCallResponse,
    convertUpdateCallRequestToJSON,
    convertJSONToDocument,
    convertCreateDocumentRequestToJSON,
    convertSearchDocumentRequestToJSON,
    convertJSONToSearchDocumentsResponse,
    convertJSONToDatasphereDocumentChunk,
    convertJSONToFabricAddress,
    convertJSONToSwmlWebhookResponse,
    convertCreateSwmlWebhookRequestToJSON,
    convertUpdateSwmlWebhookRequestToJSON,
    convertJSONToLamlApplicationResponse,
    convertUpdateLamlApplicationRequestToJSON,
    convertJSONToCXMLScriptResponse,
    convertJSONToCXMLWebhookResponse,
    convertCreateCXMLWebhookRequestToJSON,
    convertUpdateCXMLWebhookRequestToJSON,
    convertJSONToSipGatewayResponse,
    convertUpdateSipGatewayRequestToJSON,
    convertCreateSipGatewayRequestToJSON,
    convertJSONToSubscriberSipEndpoint,
    convertCreateSubscriberSipEndpointRequestToJSON,
    convertUpdateSubscriberEndpointRequestToJSON,
    convertJSONToSwmlApplicationResponse,
    convertCreateSwmlApplicationRequestToJSON,
    convertUpdateSwmlApplicationRequestToJSON,
    convertJSONToConferenceRoomResponse,
    convertUpdateConferenceRoomRequestToJSON,
    convertCreateConferenceRoomRequestToJSON,
    convertGeneratePubSubTokenRequestToJSON
} from "./modelConverters";

import {defaultMakePagedResponse, PagedResponse} from "./PagedResponse";

export class SignalWireRESTClient {
    readonly spaceManagement: SpaceManagementNamespace;
    readonly video: VideoNamespace;
    readonly message: MessageNamespace;
    readonly voice: VoiceNamespace;
    readonly fax: FaxNamespace;
    readonly project: ProjectNamespace;
    readonly chat: ChatNamespace;
    readonly fabric: FabricNamespace;
    readonly calling: CallingNamespace;
    readonly datasphere: DatasphereNamespace;
    readonly pubsub: PubSubNamespace;
    private readonly username: string
    private readonly password: string
    private readonly axiosInstance: AxiosInstance
    private readonly baseUrl: string;
    private readonly defaultHeaders: Headers;

    constructor(space: string, projectId: string, token: string, axiosConfig?: AxiosRequestConfig) {
        const self = this;
        this.baseUrl = `https://${space}`;
        this.username = projectId;
        this.password = token;
        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            ...axiosConfig
        });
        this.defaultHeaders = {
            Accept: "application/json",
            Authorization: `Basic ${isNode ?
                Buffer.from(self.username + ":" + self.password).toString("base64") :
                btoa(self.username + ":" + self.password)}`
        };

        this.datasphere = {
            documents: {
                listDocuments(): AsyncIterableIterator<DatasphereDocument> {
                    return self.getRequestIterator('/api/datasphere/documents', convertJSONToDocument)
                },

                async listDocumentsPage(url?: string): Promise<PagedResponse<DatasphereDocument>> {
                    return self.getRequestPage('/api/datasphere/documents', convertJSONToDocument, url);
                },

                async createDocument(request: CreateDocumentRequest): Promise<DatasphereDocument> {
                    return self.postRequest('/api/datasphere/documents', request,
                        convertCreateDocumentRequestToJSON, convertJSONToDocument);
                },

                async searchDocument(request: SearchDocumentRequest): Promise<SearchDocumentsResponse> {
                    return self.postRequest('/api/datasphere/documents/search', request,
                        convertSearchDocumentRequestToJSON, convertJSONToSearchDocumentsResponse);
                },

                async updateDocument(id: string, request: UpdateDocumentRequest): Promise<DatasphereDocument> {
                    return self.patchRequest(`/api/datasphere/documents/${id}`, request,
                        (request) => ({
                            tags: request.tags
                        }), convertJSONToDocument);
                },

                async deleteDocument(id: string): Promise<void> {
                    return self.deleteRequest(`/api/datasphere/documents/${id}`);
                }

            },

            chunks: {
                listChunks(documentId: string): AsyncIterableIterator<DatasphereDocumentChunk> {
                    return self.getRequestIterator(`/api/datasphere/documents/${documentId}/chunks`,
                        convertJSONToDatasphereDocumentChunk)
                },

                async listChunksPage(documentId: string, url?: string): Promise<PagedResponse<DatasphereDocumentChunk>> {
                    return self.getRequestPage(`/api/datasphere/documents/${documentId}/chunks`,
                        convertJSONToDatasphereDocumentChunk, url);
                },

                async retrieveChunk(documentId: string, chunkId: string): Promise<DatasphereDocumentChunk> {
                    return self.getRequest(`/api/datasphere/documents/${documentId}/chunks/${chunkId}`,
                        convertJSONToDatasphereDocumentChunk)
                },

                async deleteChunk(documentId: string, chunkId: string): Promise<void> {
                    return self.deleteRequest(`/api/datasphere/documents/${documentId}/chunks/${chunkId}`);
                }
            }
        }

        this.calling = {
            calls: {
                async createCall(request: CreateCallRequest): Promise<CallResponse> {
                    return self.postRequest('/api/calling/calls', request, convertCreateCallRequestToJSON,
                        convertJSONToCallResponse);
                },

                async updateCall(request: UpdateCallRequest): Promise<CallResponse> {
                    return self.putRequest('/api/calling/calls', request, convertUpdateCallRequestToJSON,
                        convertJSONToCallResponse);
                }

            }
        };

        this.spaceManagement = {
            multiFactorAuthentication: {

                async requestMfaTokenViaText(request: MfaTokenViaTextRequest): Promise<MfaTokenViaTextResponse> {
                    return self.postRequest('/api/relay/rest/mfa/sms', request, (request) => {
                        return {
                            to: request.to,
                            from: request.from,
                            message: request.message,
                            token_length: request.tokenLength,
                            max_attempts: request.maxAttempts,
                            allow_alphas: request.allowAlphas,
                            valid_for: request.validFor,
                        }
                    }, (json) => (
                        {
                            id: json.id,
                            success: json.success,
                            to: json.to,
                            channel: json.channel
                        }
                    ));
                },


                async requestMfaTokenViaPhoneCall(request: MfaTokenViaPhoneCallRequest): Promise<MfaTokenViaPhoneCallResponse> {
                    return self.postRequest('/api/relay/rest/mfa/call', request, (request) =>
                            ({
                                to: request.to,
                                from: request.from,
                                message: request.message,
                                token_length: request.tokenLength,
                                max_attempts: request.maxAttempts,
                                allow_alphas: request.allowAlphas,
                                valid_for: request.validFor,
                            }),
                        (json) => (
                            {
                                id: json.id,
                                success: json.success,
                                to: json.to,
                                channel: json.channel
                            }
                        )
                    );
                },


                async verifyToken(mfaRequestId: string, request: VerifyMfaTokenRequest): Promise<VerifyMfaTokenResponse> {
                    return self.postRequest(`/api/relay/rest/mfa/${mfaRequestId}/verify`, request, (request) => ({
                        token: request.token,
                    }), (json) => (
                        {
                            success: json.data.success,
                        }
                    ));
                }
            },
            verifiedCallerIds: {

                async createVerifiedCallerId(request: CreateVerifiedCallerIdRequest): Promise<VerifiedCallerId> {
                    return self.postRequest('/api/relay/rest/verified_caller_ids', request, (request) => ({
                        name: request.name,
                        extension: request.extension,
                        number: request.number,
                    }), (json) => ({
                        type: json.type,
                        id: json.id,
                        name: json.name,
                        extension: json.extension,
                        number: json.number,
                        verified: json.verified,
                        verifiedAt: json.verified_at,
                        status: json.status
                    }))
                },


                async validateVerificationCode(id: string, request: ValidateVerificationCodeRequest): Promise<VerifiedCallerId> {
                    return self.putRequest(`/api/relay/rest/verified_caller_ids/${id}/verification`, request,
                        (request) => ({
                            verification_code: request.verificationCode
                        }), (json) => ({
                            type: json.type,
                            id: json.id,
                            name: json.name,
                            extension: json.extension,
                            number: json.number,
                            verified: json.verified,
                            verifiedAt: json.verified_at,
                            status: json.status
                        }));

                },


                async redialVerificationCall(id: string): Promise<VerifiedCallerId> {
                    return self.postEmptyRequest(`/api/relay/rest/verified_caller_ids/${id}/verification`, (json) => ({
                        type: json.type,
                        id: json.id,
                        name: json.name,
                        extension: json.extension,
                        number: json.number,
                        verified: json.verified,
                        verifiedAt: json.verified_at,
                        status: json.status
                    }))

                },

                listAllVerifiedCallerIds(options?: ListAllVerifiedCallerIdsOptions): AsyncIterableIterator<VerifiedCallerId> {
                    const params: QueryParams = {};

                    if (options?.filterName) {
                        params.filter_name = options.filterName;
                    }
                    if (options?.filterNumber) {
                        params.filter_number = options.filterNumber;
                    }

                    return self.getRequestIterator("/api/relay/rest/verified_caller_ids", (item) => ({
                        type: item.type,
                        id: item.id,
                        name: item.name,
                        extension: item.extension,
                        number: item.number,
                        verified: item.verified,
                        verifiedAt: item.verified_at,
                        status: item.status
                    }), params);
                },

                async listAllVerifiedCallerIdsPage(options?: ListAllVerifiedCallerIdsOptions, url?: string): Promise<PagedResponse<VerifiedCallerId>> {
                    const params: QueryParams = {};

                    if (options?.filterName) {
                        params.filter_name = options.filterName;
                    }
                    if (options?.filterNumber) {
                        params.filter_number = options.filterNumber;
                    }

                    return self.getRequestPage('/api/relay/rest/verified_caller_ids', (item) => ({
                        type: item.type,
                        id: item.id,
                        name: item.name,
                        extension: item.extension,
                        number: item.number,
                        verified: item.verified,
                        verifiedAt: item.verified_at,
                        status: item.status
                    }), url, params);

                },


                async retrieveVerifiedCallerId(id: string): Promise<VerifiedCallerId> {
                    return self.getRequest(`/api/relay/rest/verified_caller_ids/${id}`, (json) => ({
                        type: json.type,
                        id: json.id,
                        name: json.name,
                        extension: json.extension,
                        number: json.number,
                        verified: json.verified,
                        verifiedAt: json.verified_at,
                        status: json.status
                    }))
                },


                async updateVerifiedCallerId(id: string, request: UpdateVerifiedCallerIdRequest): Promise<VerifiedCallerId> {
                    return self.putRequest(`/api/relay/rest/verified_caller_ids/${id}`, request, (request) => ({
                        name: request.name,
                    }), (json) => ({
                        type: json.type,
                        id: json.id,
                        name: json.name,
                        extension: json.extension,
                        number: json.number,
                        verified: json.verified,
                        verifiedAt: json.verified_at,
                        status: json.status
                    }))
                },


                async deleteVerifiedCallerId(id: string): Promise<void> {
                    return self.deleteRequest(`/api/relay/rest/verified_caller_ids/${id}`)
                }
            },
            addresses: {

                listAllAddresses(): AsyncIterableIterator<Address> {
                    return self.getRequestIterator("/api/relay/rest/addresses", (item) => ({
                        id: item.id,
                        label: item.label,
                        country: item.country,
                        firstName: item.first_name,
                        lastName: item.last_name,
                        streetNumber: item.street_number,
                        streetName: item.street_name,
                        addressType: item.address_type,
                        addressNumber: item.address_number,
                        city: item.city,
                        state: item.state,
                        postalCode: item.postal_code,
                    }));

                },

                async listAllAddressesPage(url?: string): Promise<PagedResponse<Address>> {
                    return self.getRequestPage('/api/relay/rest/addresses', (item) => ({
                        id: item.id,
                        label: item.label,
                        country: item.country,
                        firstName: item.first_name,
                        lastName: item.last_name,
                        streetNumber: item.street_number,
                        streetName: item.street_name,
                        addressType: item.address_type,
                        addressNumber: item.address_number,
                        city: item.city,
                        state: item.state,
                        postalCode: item.postal_code
                    }), url);
                },


                async retrieveAddress(id: string): Promise<Address> {
                    return self.getRequest(`/api/relay/rest/addresses/${id}`, (json) => ({
                        id: json.id,
                        label: json.label,
                        country: json.country,
                        firstName: json.first_name,
                        lastName: json.last_name,
                        streetNumber: json.street_number,
                        streetName: json.street_name,
                        addressType: json.address_type,
                        addressNumber: json.address_number,
                        city: json.city,
                        state: json.state,
                        postalCode: json.postal_code,
                    }));
                },


                async deleteAddress(id: string): Promise<void> {
                    return self.deleteRequest(`/api/relay/rest/addresses/${id}`)
                },


                async createAddress(request: CreateAddressRequest): Promise<Address> {
                    return self.postRequest('/api/relay/rest/addresses', request, (request) => ({
                        label: request.label,
                        country: request.country,
                        first_name: request.firstName,
                        last_name: request.lastName,
                        street_number: request.streetNumber,
                        street_name: request.streetName,
                        address_type: request.addressType,
                        address_number: request.addressNumber,
                        city: request.city,
                        state: request.state,
                        postal_code: request.postalCode
                    }), (json) => ({
                        id: json.id,
                        label: json.label,
                        country: json.country,
                        firstName: json.first_name,
                        lastName: json.last_name,
                        streetNumber: json.street_number,
                        streetName: json.street_name,
                        addressType: json.address_type,
                        addressNumber: json.address_number,
                        city: json.city,
                        state: json.state,
                        postalCode: json.postal_code
                    }));
                }
            },
            campaignRegistryApi: {
                brands: {

                    listAllBrands(options?: ListAllBrandsOptions): AsyncIterableIterator<Brand> {
                        const params: QueryParams = {};
                        if (options?.filterName) {
                            params.filter_name = options.filterName;
                        }
                        if (options?.filterState) {
                            params.filter_state = options.filterState;
                        }

                        return self.getRequestIterator("/api/relay/rest/registry/beta/brands", (item) => ({
                            id: item.id,
                            state: item.state,
                            name: item.name,
                            companyName: item.company_name,
                            contactEmail: item.contact_email,
                            contactPhone: item.contact_phone,
                            einIssuingCountry: item.ein_issuing_country,
                            legalEntityType: item.legal_entity_type,
                            ein: item.ein,
                            companyAddress: item.company_address,
                            companyVertical: item.company_vertical,
                            companyWebsite: item.company_website,
                            cspBrandReference: item.csp_brand_reference,
                            cspSelfRegistered: item.csp_self_registered,
                            statusCallbackUrl: item.status_callback_url,
                            createdAt: item.created_at,
                            updatedAt: item.updated_at
                        }), params)

                    },

                    async listAllBrandsPage(options?: ListAllBrandsOptions, url?: string): Promise<PagedResponse<Brand>> {
                        const params: QueryParams = {};
                        if (options?.filterName) {
                            params.filter_name = options.filterName;
                        }
                        if (options?.filterState) {
                            params.filter_state = options.filterState;
                        }

                        return self.getRequestPage('/api/relay/rest/registry/beta/brands', (item) => ({
                            id: item.id,
                            state: item.state,
                            name: item.name,
                            companyName: item.company_name,
                            contactEmail: item.contact_email,
                            contactPhone: item.contact_phone,
                            einIssuingCountry: item.ein_issuing_country,
                            legalEntityType: item.legal_entity_type,
                            ein: item.ein,
                            companyAddress: item.company_address,
                            companyVertical: item.company_vertical,
                            companyWebsite: item.company_website,
                            cspBrandReference: item.csp_brand_reference,
                            cspSelfRegistered: item.csp_self_registered,
                            statusCallbackUrl: item.status_callback_url,
                            createdAt: item.created_at,
                            updatedAt: item.updated_at
                        }), url, params);
                    },

                    async retrieveBrand(id: string): Promise<Brand> {
                        return self.getRequest(`/api/relay/rest/registry/beta/brands/${id}`, (json) => ({
                            id: json.id,
                            state: json.state,
                            name: json.name,
                            companyName: json.company_name,
                            contactEmail: json.contact_email,
                            contactPhone: json.contact_phone,
                            einIssuingCountry: json.ein_issuing_country,
                            legalEntityType: json.legal_entity_type,
                            ein: json.ein,
                            companyAddress: json.company_address,
                            companyVertical: json.company_vertical,
                            companyWebsite: json.company_website,
                            cspBrandReference: json.csp_brand_reference,
                            cspSelfRegistered: json.csp_self_registered,
                            statusCallbackUrl: json.status_callback_url,
                            createdAt: json.created_at,
                            updatedAt: json.updated_at
                        }))
                    },


                    createBrand: async function (request: CreateBrandRequest): Promise<Brand> {
                        return self.postRequest('/api/relay/rest/registry/beta/brands', request, (request) => ({
                            name: request.name,
                            company_name: request.companyName,
                            contact_email: request.contactEmail,
                            contact_phone: request.contactPhone,
                            ein_issuing_country: request.einIssuingCountry,
                            legal_entity_type: request.legalEntityType,
                            ein: request.ein,
                            company_address: request.companyAddress,
                            company_vertical: request.companyVertical,
                            company_website: request.companyWebsite,
                            csp_brand_reference: request.cspBrandReference,
                            csp_self_registered: request.cspSelfRegistered,
                            status_callback_url: request.statusCallbackUrl
                        }), (json) => ({
                            id: json.id,
                            state: json.state,
                            name: json.name,
                            companyName: json.company_name,
                            contactEmail: json.contact_email,
                            contactPhone: json.contact_phone,
                            einIssuingCountry: json.ein_issuing_country,
                            legalEntityType: json.legal_entity_type,
                            ein: json.ein,
                            companyAddress: json.company_address,
                            companyVertical: json.company_vertical,
                            companyWebsite: json.company_website,
                            cspBrandReference: json.csp_brand_reference,
                            cspSelfRegistered: json.csp_self_registered,
                            statusCallbackUrl: json.status_callback_url,
                            createdAt: json.created_at,
                            updatedAt: json.updated_at
                        }))
                    }
                },
                campaigns: {

                    listAllCampaigns(brandId: string): AsyncIterableIterator<Campaign> {

                        return self.getRequestIterator(`/api/relay/rest/registry/beta/brands/${brandId}/campaigns`,
                            (item) => ({
                                id: item.id,
                                name: item.name,
                                smsUseCase: item.sms_use_case,
                                subUseCases: item.sub_use_cases,
                                description: item.description,
                                sample1: item.sample1,
                                sample2: item.sample2,
                                sample3: item.sample3,
                                sample4: item.sample4,
                                sample5: item.sample5,
                                dynamicTemplates: item.dynamic_templates,
                                messageFlow: item.message_flow,
                                optInMessage: item.opt_in_message,
                                optOutMessage: item.opt_out_message,
                                helpMessage: item.help_message,
                                numberPoolingRequired: item.number_pooling_required,
                                numberPoolingPerCampaign: item.number_pooling_per_campaign,
                                directLending: item.direct_lending,
                                embeddedLink: item.embedded_link,
                                embeddedPhone: item.embedded_phone,
                                ageGatedContent: item.age_gated_content,
                                leadGeneration: item.lead_generation,
                                termsAndConditions: item.terms_and_conditions,
                                createdAt: item.created_at,
                                updatedAt: item.updated_at
                            }));

                    },

                    async listAllCampaignsPage(brandId: string, url?: string): Promise<PagedResponse<Campaign>> {
                        return self.getRequestPage(`/api/relay/rest/registry/beta/brands/${brandId}/campaigns`,
                            (item) => ({
                                id: item.id,
                                name: item.name,
                                smsUseCase: item.sms_use_case,
                                subUseCases: item.sub_use_cases,
                                description: item.description,
                                sample1: item.sample1,
                                sample2: item.sample2,
                                sample3: item.sample3,
                                sample4: item.sample4,
                                sample5: item.sample5,
                                dynamicTemplates: item.dynamic_templates,
                                messageFlow: item.message_flow,
                                optInMessage: item.opt_in_message,
                                optOutMessage: item.opt_out_message,
                                helpMessage: item.help_message,
                                numberPoolingRequired: item.number_pooling_required,
                                numberPoolingPerCampaign: item.number_pooling_per_campaign,
                                directLending: item.direct_lending,
                                embeddedLink: item.embedded_link,
                                embeddedPhone: item.embedded_phone,
                                ageGatedContent: item.age_gated_content,
                                leadGeneration: item.lead_generation,
                                termsAndConditions: item.terms_and_conditions,
                                createdAt: item.created_at,
                                updatedAt: item.updated_at
                            }), url);
                    },

                    async retrieveCampaign(campaignId: string): Promise<Campaign> {
                        return self.getRequest(`/api/relay/rest/registry/beta/campaigns/${campaignId}`,
                            (json) => ({
                                id: json.id,
                                name: json.name,
                                smsUseCase: json.sms_use_case,
                                subUseCases: json.sub_use_cases,
                                description: json.description,
                                sample1: json.sample1,
                                sample2: json.sample2,
                                sample3: json.sample3,
                                sample4: json.sample4,
                                sample5: json.sample5,
                                dynamicTemplates: json.dynamic_templates,
                                messageFlow: json.message_flow,
                                optInMessage: json.opt_in_message,
                                optOutMessage: json.opt_out_message,
                                helpMessage: json.help_message,
                                numberPoolingRequired: json.number_pooling_required,
                                numberPoolingPerCampaign: json.number_pooling_per_campaign,
                                directLending: json.direct_lending,
                                embeddedLink: json.embedded_link,
                                embeddedPhone: json.embedded_phone,
                                ageGatedContent: json.age_gated_content,
                                leadGeneration: json.lead_generation,
                                termsAndConditions: json.terms_and_conditions,
                                createdAt: json.created_at,
                                updatedAt: json.updated_at

                            }));
                    },


                    async updateCampaign(campaignId: string, request: UpdateCampaignRequest): Promise<Campaign> {
                        return self.putRequest(`/api/relay/rest/registry/beta/campaigns/${campaignId}`,
                            request, (request) => ({
                                name: request.name
                            }), (json) => ({
                                id: json.id,
                                name: json.name,
                                smsUseCase: json.sms_use_case,
                                subUseCases: json.sub_use_cases,
                                description: json.description,
                                sample1: json.sample1,
                                sample2: json.sample2,
                                sample3: json.sample3,
                                sample4: json.sample4,
                                sample5: json.sample5,
                                dynamicTemplates: json.dynamic_templates,
                                messageFlow: json.message_flow,
                                optInMessage: json.opt_in_message,
                                optOutMessage: json.opt_out_message,
                                helpMessage: json.help_message,
                                numberPoolingRequired: json.number_pooling_required,
                                numberPoolingPerCampaign: json.number_pooling_per_campaign,
                                directLending: json.direct_lending,
                                embeddedLink: json.embedded_link,
                                embeddedPhone: json.embedded_phone,
                                ageGatedContent: json.age_gated_content,
                                leadGeneration: json.lead_generation,
                                termsAndConditions: json.terms_and_conditions,
                                createdAt: json.created_at,
                                updatedAt: json.updated_at
                            }));
                    },


                    async createCampaign(brandId: string, request: CreateCampaignRequest): Promise<Campaign> {
                        return self.postRequest(`/api/relay/rest/registry/beta/brands/${brandId}/campaigns`,
                            request, (request) => ({
                                name: request.name,
                                sms_use_case: request.smsUseCase,
                                sub_use_cases: request.subUseCases,
                                description: request.description,
                                sample1: request.sample1,
                                sample2: request.sample2,
                                sample3: request.sample3,
                                sample4: request.sample4,
                                sample5: request.sample5,
                                dynamic_templates: request.dynamicTemplates,
                                message_flow: request.messageFlow,
                                opt_in_message: request.optInMessage,
                                opt_out_message: request.optOutMessage,
                                help_message: request.helpMessage,
                                number_pooling_required: request.numberPoolingRequired,
                                number_pooling_per_campaign: request.numberPoolingPerCampaign,
                                direct_lending: request.directLending,
                                embedded_link: request.embeddedLink,
                                embedded_phone: request.embeddedPhone,
                                age_gated_content: request.ageGatedContent,
                                lead_generation: request.leadGeneration,
                                terms_and_conditions: request.termsAndConditions,
                            }), (json) => ({
                                id: json.id,
                                name: json.name,
                                smsUseCase: json.sms_use_case,
                                subUseCases: json.sub_use_cases,
                                description: json.description,
                                sample1: json.sample1,
                                sample2: json.sample2,
                                sample3: json.sample3,
                                sample4: json.sample4,
                                sample5: json.sample5,
                                dynamicTemplates: json.dynamic_templates,
                                messageFlow: json.message_flow,
                                optInMessage: json.opt_in_message,
                                optOutMessage: json.opt_out_message,
                                helpMessage: json.help_message,
                                numberPoolingRequired: json.number_pooling_required,
                                numberPoolingPerCampaign: json.number_pooling_per_campaign,
                                directLending: json.direct_lending,
                                embeddedLink: json.embedded_link,
                                embeddedPhone: json.embedded_phone,
                                ageGatedContent: json.age_gated_content,
                                leadGeneration: json.lead_generation,
                                termsAndConditions: json.terms_and_conditions,
                                createdAt: json.created_at,
                                updatedAt: json.updated_at
                            }));
                    }
                },
                campaignNumberAssignments: {

                    listAllPhoneNumberAssignments(campaignId: string, options?: ListAllCampaignPhoneNumberAssignmentsOptions): AsyncIterableIterator<any> {
                        const params: QueryParams = {};
                        if (options?.filterState) {
                            params.filter_state = options.filterState;
                        }

                        return self.getRequestIterator(`/api/relay/rest/registry/beta/campaigns/${campaignId}/numbers`,
                            (item) => (item), params);

                    },

                    async listAllPhoneNumberAssignmentsPage(campaignId: string, options?: ListAllCampaignPhoneNumberAssignmentsOptions, url?: string): Promise<PagedResponse<any>> {
                        const params: QueryParams = {};
                        if (options?.filterState) {
                            params.filter_state = options.filterState;
                        }

                        return self.getRequestPage(`/api/relay/rest/registry/beta/campaigns/${campaignId}/numbers`,
                            (item) => (item), url, params);

                    },

                    listAllPhoneNumberAssignmentOrders(campaignId: string, options?: ListAllCampaignPhoneNumberAssignmentOrdersOptions): AsyncIterableIterator<CampaignPhoneNumberAssignmentOrder> {
                        const params: QueryParams = {};
                        if (options?.filterState) {
                            params.filter_state = options.filterState;
                        }

                        return self.getRequestIterator(
                            `/api/relay/rest/registry/beta/campaigns/${campaignId}/orders`,
                            (item) => ({
                                id: item.id,
                                state: item.state,
                                processedAt: item.processed_at,
                                createdAt: item.created_at,
                                updatedAt: item.updated_at,
                                statusCallbackUrl: item.status_callback_url
                            }), params);

                    },

                    async listAllPhoneNumberAssignmentOrdersPage(campaignId: string, options?: ListAllCampaignPhoneNumberAssignmentOrdersOptions, url?: string): Promise<PagedResponse<CampaignPhoneNumberAssignmentOrder>> {
                        const params: QueryParams = {};
                        if (options?.filterState) {
                            params.filter_state = options.filterState;
                        }

                        return self.getRequestPage(
                            `/api/relay/rest/registry/beta/campaigns/${campaignId}/numbers`,
                            (item) => ({
                                id: item.id,
                                state: item.state,
                                processedAt: item.processed_at,
                                createdAt: item.created_at,
                                updatedAt: item.updated_at,
                                statusCallbackUrl: item.status_callback_url
                            }), url, params);
                    },


                    async retrievePhoneNumberAssignmentOrder(assignmentOrderId: string): Promise<CampaignPhoneNumberAssignmentOrder> {
                        return self.getRequest(`/api/relay/rest/registry/beta/orders/${assignmentOrderId}`,
                            (json) => ({
                                id: json.id,
                                state: json.state,
                                processedAt: json.processed_at,
                                createdAt: json.created_at,
                                updatedAt: json.updated_at,
                                statusCallbackUrl: json.status_callback_url
                            }));
                    },


                    async createPhoneNumberAssignmentOrder(campaignId: string, request: CreateCampaignPhoneNumberAssignmentOrderRequest): Promise<CampaignPhoneNumberAssignmentOrder> {
                        return self.postRequest(`/api/relay/rest/registry/beta/campaigns/${campaignId}/orders`,
                            request, (request) => ({
                                phone_numbers: request.phoneNumbers,
                            }), (json) => ({
                                id: json.id,
                                state: json.state,
                                processedAt: json.processed_at,
                                createdAt: json.created_at,
                                updatedAt: json.updated_at,
                                statusCallbackUrl: json.status_callback_url
                            }));
                    },


                    async deletePhoneNumberAssignment(numberAssignmentId: string): Promise<void> {
                        return self.deleteRequest(`/api/relay/rest/registry/beta/numbers/${numberAssignmentId}`);
                    }
                },
            },
            domainApplications: {

                listAllDomainApplications(options?: ListAllDomainApplicationsOptions): AsyncIterableIterator<DomainApplication> {
                    const params: QueryParams = {};
                    if (options?.filterDomain) {
                        params.filter_domain = options.filterDomain;
                    }
                    if (options?.filterName) {
                        params.filter_name = options.filterName;
                    }

                    return self.getRequestIterator('/api/relay/rest/domain_applications',
                        convertJSONToDomainApplication, params);

                },

                async listAllDomainApplicationsPage(options?: ListAllDomainApplicationsOptions, url?: string): Promise<PagedResponse<DomainApplication>> {
                    const params: QueryParams = {};
                    if (options?.filterDomain) {
                        params.filter_domain = options.filterDomain;
                    }
                    if (options?.filterName) {
                        params.filter_name = options.filterName;
                    }

                    return self.getRequestPage('/api/relay/rest/domain_applications',
                        convertJSONToDomainApplication, url, params);
                },

                async retrieveDomainApplication(domainApplicationId: string): Promise<DomainApplication> {
                    return self.getRequest(`/api/relay/rest/domain_applications/${domainApplicationId}`,
                        convertJSONToDomainApplication);
                },


                async updateDomainApplication(domainApplicationId: string, request: UpdateDomainApplicationRequest): Promise<DomainApplication> {
                    return self.putRequest(`/api/relay/rest/domain_applications/${domainApplicationId}`,
                        request, convertUpdateDomainApplicationRequestToJSON, convertJSONToDomainApplication);
                },


                async createDomainApplication(request: CreateDomainApplicationRequest): Promise<DomainApplication> {
                    return self.postRequest('/api/relay/rest/domain_applications', request, (request) => ({
                        name: request.name,
                        identifier: request.identifier,
                        ip_auth_enabled: request.ipAuthEnabled,
                        ip_auth: request.ipAuth,
                        encryption: request.encryption,
                        codecs: request.codecs,
                        ciphers: request.ciphers
                    }), convertJSONToDomainApplication);
                },


                async deleteDomainApplication(domainApplicationId: string): Promise<void> {
                    return self.deleteRequest(`/api/relay/rest/domain_applications/${domainApplicationId}`);
                }
            },
            numberGroups: {

                listAllNumberGroups(): AsyncIterableIterator<NumberGroup> {

                    return self.getRequestIterator('/api/relay/rest/number_groups', (item) => ({
                        id: item.id,
                        name: item.name,
                        stickySender: item.sticky_sender,
                        phoneNumberCount: item.phone_number_count
                    }))
                },

                async listAllNumberGroupsPage(url?: string): Promise<PagedResponse<NumberGroup>> {
                    return self.getRequestPage(`/api/relay/rest/number_groups`, (item) => ({
                        id: item.id,
                        name: item.name,
                        stickySender: item.sticky_sender,
                        phoneNumberCount: item.phone_number_count
                    }), url);
                },


                async retrieveNumberGroup(id: string): Promise<NumberGroup> {
                    return self.getRequest(`/api/relay/rest/number_groups/${id}`, (json) => ({
                        id: json.id,
                        name: json.name,
                        stickySender: json.sticky_sender,
                        phoneNumberCount: json.phone_number_count
                    }))
                },


                async updateNumberGroup(id: string, request: UpdateNumberGroupRequest): Promise<NumberGroup> {
                    return self.putRequest(`/api/relay/rest/number_groups/${id}`, request, (request) => ({
                        name: request.name,
                    }), (json) => ({
                        id: json.id,
                        name: json.name,
                        stickySender: json.sticky_sender,
                        phoneNumberCount: json.phone_number_count
                    }))
                },


                async createNumberGroup(request: CreateNumberGroupRequest): Promise<NumberGroup> {
                    return self.postRequest('/api/relay/rest/number_groups', request, (request) => ({
                        name: request.name,
                        sticky_sender: request.stickySender
                    }), (json) => ({
                        id: json.id,
                        name: json.name,
                        stickySender: json.sticky_sender,
                        phoneNumberCount: json.phone_number_count
                    }))
                },


                async deleteNumberGroup(id: string): Promise<void> {
                    return self.deleteRequest(`/api/relay/rest/number_groups/${id}`);
                }
            },
            numberGroupsMemberships: {

                listAllNumberGroupMembers(numberGroupId: string): AsyncIterableIterator<NumberGroupMembership> {

                    return self.getRequestIterator(`/api/relay/rest/number_groups/${numberGroupId}/number_group_memberships`,
                        (item) => ({
                            id: item.id,
                            numberGroupId: item.number_group_id,
                            phoneNumber: {
                                id: item.phone_number.id,
                                name: item.phone_number.name,
                                number: item.phone_number.number,
                                capabilities: item.phone_number.capabilities
                            }
                        }));

                },

                async listAllNumberGroupMembersPage(numberGroupId: string, url?: string): Promise<PagedResponse<NumberGroupMembership>> {
                    return self.getRequestPage(`/api/relay/rest/number_groups/${numberGroupId}/number_group_memberships`,
                        (item) => ({
                            id: item.id,
                            numberGroupId: item.number_group_id,
                            phoneNumber: {
                                id: item.phone_number.id,
                                name: item.phone_number.name,
                                number: item.phone_number.number,
                                capabilities: item.phone_number.capabilities
                            }
                        }), url);
                },


                async retrieveNumberGroupMember(numberGroupMemberId: string): Promise<NumberGroupMembership> {
                    return self.getRequest(`/api/relay/rest/number_group_memberships/${numberGroupMemberId}`,
                        (json) => ({
                            id: json.id,
                            numberGroupId: json.number_group_id,
                            phoneNumber: {
                                id: json.phone_number.id,
                                name: json.phone_number.name,
                                number: json.phone_number.number,
                                capabilities: json.phone_number.capabilities
                            }
                        }));
                },


                async createNumberGroupMember(numberGroupId: string, request: CreateNumberGroupMemberRequest): Promise<NumberGroupMembership> {
                    return self.postRequest(`/api/relay/rest/number_groups/${numberGroupId}/number_group_memberships`,
                        request, (request) => ({
                            phone_number_id: request.phoneNumberId
                        }), (json) => ({
                            id: json.id,
                            numberGroupId: json.number_group_id,
                            phoneNumber: {
                                id: json.phone_number.id,
                                name: json.phone_number.name,
                                number: json.phone_number.number,
                                capabilities: json.phone_number.capabilities
                            }
                        }));
                },


                async deleteNumberGroupMember(numberGroupMemberId: string): Promise<void> {
                    return self.deleteRequest(`/api/relay/rest/number_group_memberships/${numberGroupMemberId}`);
                }
            },
            phoneNumbers: {

                listAllPhoneNumbers(options?: ListAllPhoneNumbersOptions): AsyncIterableIterator<PhoneNumber> {
                    const params: QueryParams = {};
                    if (options?.filterName) {
                        params.filter_name = options.filterName;
                    }
                    if (options?.filterNumber) {
                        params.filter_number = options.filterNumber;
                    }

                    return self.getRequestIterator('/api/relay/rest/phone_numbers', convertJSONToPhoneNumber,
                        params);

                },

                async listAllPhoneNumbersPage(options?: ListAllPhoneNumbersOptions, url?: string): Promise<PagedResponse<PhoneNumber>> {
                    const params: QueryParams = {};
                    if (options?.filterName) {
                        params.filter_name = options.filterName;
                    }
                    if (options?.filterNumber) {
                        params.filter_number = options.filterNumber;
                    }

                    return self.getRequestPage('/api/relay/rest/phone_numbers', convertJSONToPhoneNumber, url,
                        params);

                },


                async retrievePhoneNumber(id: string): Promise<PhoneNumber> {
                    return self.getRequest(`/api/relay/rest/phone_numbers/${id}`, convertJSONToPhoneNumber);
                },


                async updatePhoneNumber(id: string, request: UpdatePhoneNumberRequest): Promise<any> {
                    return self.putRequest(`/api/relay/rest/phone_numbers/${id}`, request,
                        convertUpdatePhoneNumberRequestToJSON, convertJSONToPhoneNumber);
                },


                searchForAvailablePhoneNumbers(options?: SearchForAvailablePhoneNumbersOptions): AsyncIterableIterator<PhoneNumberListing> {
                    const params: QueryParams = {};
                    if (options?.areacode) {
                        params.areacode = options.areacode;
                    }
                    if (options?.numberType) {
                        params.number_type = options.numberType;
                    }
                    if (options?.startsWith) {
                        params.starts_with = options.startsWith;
                    }
                    if (options?.contains) {
                        params.contains = options.contains;
                    }
                    if (options?.endsWith) {
                        params.ends_with = options.endsWith;
                    }
                    if (options?.maxResults) {
                        params.max_results = options.maxResults;
                    }
                    if (options?.region) {
                        params.region = options.region;
                    }
                    if (options?.city) {
                        params.city = options.city;
                    }

                    return self.getRequestIterator('/api/relay/rest/phone_numbers/search', (item) => ({
                        e164: item.e164,
                        nationalNumberFormatted: item.national_number_formatted,
                        internationalNumberFormatted: item.international_number_formatted,
                        rateCenter: item.rate_center,
                        region: item.region,
                        countryCode: item.country_code,
                        capabilities: item.capabilities
                    }), params);

                },

                async searchForAvailablePhoneNumbersPage(options?: SearchForAvailablePhoneNumbersOptions, url?: string): Promise<PagedResponse<PhoneNumberListing>> {
                    const params: QueryParams = {};
                    if (options?.areacode) {
                        params.areacode = options.areacode;
                    }
                    if (options?.numberType) {
                        params.number_type = options.numberType;
                    }
                    if (options?.startsWith) {
                        params.starts_with = options.startsWith;
                    }
                    if (options?.contains) {
                        params.contains = options.contains;
                    }
                    if (options?.endsWith) {
                        params.ends_with = options.endsWith;
                    }
                    if (options?.maxResults) {
                        params.max_results = options.maxResults;
                    }
                    if (options?.region) {
                        params.region = options.region;
                    }
                    if (options?.city) {
                        params.city = options.city;
                    }

                    return self.getRequestPage('/api/relay/rest/phone_numbers/search', (item) => ({
                        e164: item.e164,
                        nationalNumberFormatted: item.national_number_formatted,
                        internationalNumberFormatted: item.international_number_formatted,
                        rateCenter: item.rate_center,
                        region: item.region,
                        countryCode: item.country_code,
                        capabilities: item.capabilities
                    }), url, params);
                },

                async purchasePhoneNumber(request: PurchasePhoneNumberRequest): Promise<PhoneNumber> {
                    return self.postRequest('/api/relay/rest/phone_numbers', request, (request) => ({
                        number: request.number
                    }), convertJSONToPhoneNumber);
                },

                async releasePhoneNumber(id: string): Promise<void> {
                    return self.deleteRequest(`/api/relay/rest/phone_numbers/${id}`);
                }
            },
            phoneNumberLookup: {

                async lookupNumber(phoneNumber: string, options?: LookupNumberOptions): Promise<LookupNumberResponse> {
                    const params: QueryParams = {};
                    if (options?.include) {
                        params.include = options.include.join(',');
                    }
                    return self.getRequest(`/api/relay/rest/lookup/phone_number/${phoneNumber}`,
                        convertJSONToLookupNumberResponse, params);
                }
            },
            sipEndpoints: {

                listAllSipEndpoints(options?: ListAllSipEndpointsOptions): AsyncIterableIterator<SipEndpoint> {
                    const params: QueryParams = {};
                    if (options?.filterUsername) {
                        params.filter_username = options.filterUsername;
                    }
                    if (options?.filterCallerId) {
                        params.filter_caller_id = options.filterCallerId;
                    }

                    return self.getRequestIterator('/api/relay/rest/sip_endpoints', convertJSONToSipEndpoint,
                        params);

                },

                async listAllSipEndpointsPage(options?: ListAllSipEndpointsOptions, url?: string): Promise<PagedResponse<SipEndpoint>> {
                    const params: QueryParams = {};
                    if (options?.filterUsername) {
                        params.filter_username = options.filterUsername;
                    }
                    if (options?.filterCallerId) {
                        params.filter_caller_id = options.filterCallerId;
                    }

                    return self.getRequestPage('/api/relay/rest/sip_endpoints', convertJSONToSipEndpoint, url,
                        params)

                },


                async retrieveSipEndpoint(id: string): Promise<SipEndpoint> {
                    return self.getRequest(`/api/relay/rest/sip_endpoints/${id}`, convertJSONToSipEndpoint);
                },


                async updateSipEndpoint(id: string, request: UpdateSipEndpointRequest): Promise<SipEndpoint> {
                    return self.putRequest(`/api/relay/rest/endpoints/sip/${id}`, request,
                        convertUpdateSipEndpointRequestToJSON, convertJSONToSipEndpoint);
                },


                async createSipEndpoint(request: CreateSipEndpointRequest): Promise<SipEndpoint> {
                    return self.postRequest('/api/relay/rest/endpoints/sip', request,
                        convertCreateSipEndpointRequestToJSON, convertJSONToSipEndpoint);
                },


                async deleteSipEndpoint(d: string): Promise<void> {
                    return self.deleteRequest(`/api/relay/rest/endpoints/sip/${d}`);
                }
            },
            sipProfile: {

                async retrieveSipProfile(): Promise<SipProfile> {
                    return self.getRequest('/api/relay/rest/sip_profile', (json) => ({
                        domain: json.domain,
                        domainIdentifier: json.domain_identifier,
                        defaultCodecs: json.default_codecs,
                        defaultCiphers: json.default_ciphers,
                        defaultEncryption: json.default_encryption,
                        defaultSendAs: json.default_send_as
                    }));
                },


                async updateSipProfile(request: UpdateSipProfileRequest): Promise<SipProfile> {
                    return self.putRequest('/api/relay/rest/sip_profile', request, (request) => ({
                        domain_identifier: request.domainIdentifier,
                        default_codecs: request.defaultCodecs,
                        default_ciphers: request.defaultCiphers,
                        default_encryption: request.defaultEncryption,
                        default_send_as: request.defaultSendAs,
                    }), (json) => ({
                        domain: json.domain,
                        domainIdentifier: json.domain_identifier,
                        defaultCodecs: json.default_codecs,
                        defaultCiphers: json.default_ciphers,
                        defaultEncryption: json.default_encryption,
                        defaultSendAs: json.default_send_as
                    }));
                }
            },
            relayRecordings: {
                listRelayRecordings(): AsyncIterableIterator<Recording> {
                    return self.getRequestIterator('/api/relay/rest/recordings', convertJSONToRecording);
                },

                async listRelayRecordingsPage(url?: string): Promise<PagedResponse<Recording>> {
                    return self.getRequestPage('/api/relay/rest/recordings', convertJSONToRecording, url);
                },

                async getRelayRecording(id: string): Promise<Recording> {
                    return self.getRequest(`/api/relay/rest/recordings/${id}`, convertJSONToRecording);
                },

                async deleteRelayRecording(id: string): Promise<void> {
                    return self.deleteRequest(`/api/relay/rest/recordings/${id}`);
                }
            }
        }
        this.video = {
            rooms: {

                listRooms(options?: GetVideoRoomOptions): AsyncIterableIterator<VideoRoom> {
                    const params: QueryParams = {};

                    if (options?.includeActiveSession) {
                        params.include_active_session = options.includeActiveSession;
                    }

                    return self.getRequestIterator('/api/video/rooms', convertJSONToVideoRoom, params);
                },

                async listRoomsPage(options?: GetVideoRoomOptions, url?: string): Promise<PagedResponse<VideoRoom>> {
                    const params: QueryParams = {};
                    if (options?.includeActiveSession) {
                        params.include_active_session = options.includeActiveSession;
                    }
                    return self.getRequestPage('/api/video/rooms', convertJSONToVideoRoom, url, params);
                },


                async retrieveRoomById(id: string): Promise<VideoRoom> {
                    return self.getRequest(`/api/video/rooms/${id}`, convertJSONToVideoRoom);
                },


                async retrieveRoomByUniqueName(videoRoomName: string, options?: GetVideoRoomOptions): Promise<VideoRoom> {
                    const params: QueryParams = {};
                    if (options?.includeActiveSession) {
                        params.include_active_session = options.includeActiveSession;
                    }
                    return self.getRequest(`/api/video/rooms/unique_name/${videoRoomName}`, convertJSONToVideoRoom,
                        params);
                },


                async createRoom(request: CreateVideoRoomRequest): Promise<VideoRoom> {
                    return self.postRequest('/api/video/rooms', request, (request) => ({
                        name: request.name,
                        display_name: request.displayName,
                        description: request.description,
                        max_members: request.maxMembers,
                        quality: request.quality,
                        join_from: request.joinFrom,
                        join_until: request.joinUntil,
                        remove_at: request.removeAt,
                        remove_after_seconds_elapsed: request.removeAfterSecondsElapsed,
                        layout: request.layout,
                        record_on_start: request.recordOnStart,
                        enable_room_previews: request.enableRoomPreviews,
                        audio_video_sync: request.audioVideoSync
                    }), convertJSONToVideoRoom);
                },


                async updateRoom(videoRoomId: string, request: UpdateVideoRoomRequest): Promise<VideoRoom> {
                    return self.putRequest(`/api/video/rooms/${videoRoomId}`, request, (request) => ({
                        name: request.name,
                        display_name: request.displayName,
                        description: request.description,
                        max_members: request.maxMembers,
                        quality: request.quality,
                        join_from: request.joinFrom,
                        join_until: request.joinUntil,
                        remove_at: request.removeAt,
                        remove_after_seconds_elapsed: request.removeAfterSecondsElapsed,
                        layout: request.layout,
                        record_on_start: request.recordOnStart,
                        enable_room_previews: request.enableRoomPreviews,
                        audio_video_sync: request.audioVideoSync
                    }), convertJSONToVideoRoom);
                },


                async deleteRoom(videoRoomId: string): Promise<void> {
                    return self.deleteRequest(`/api/video/rooms/${videoRoomId}`);
                }
            },
            roomSessions: {

                listRoomSessions(options?: ListRoomSessionsOptions): AsyncIterableIterator<VideoRoomSession> {
                    const params: QueryParams = {};
                    if (options?.roomId) {
                        params.room_id = options.roomId;
                    }
                    if (options?.roomName) {
                        params.room_name = options.roomName;
                    }
                    if (options?.status) {
                        params.status = options.status;
                    }

                    return self.getRequestIterator('/api/video/rooms/sessions', convertJSONToVideoRoomSession,
                        params);

                },

                async listRoomSessionsPage(options?: ListRoomSessionsOptions, url?: string): Promise<PagedResponse<VideoRoomSession>> {
                    const params: QueryParams = {};
                    if (options?.roomId) {
                        params.room_id = options.roomId;
                    }
                    if (options?.roomName) {
                        params.room_name = options.roomName;
                    }
                    if (options?.status) {
                        params.status = options.status;
                    }
                    return self.getRequestPage('/api/video/rooms/sessions', convertJSONToVideoRoomSession,
                        url, params);

                },

                async findRoomSessionById(sessionId: string): Promise<VideoRoomSession> {
                    return self.getRequest(`/api/video/rooms/sessions/${sessionId}`, convertJSONToVideoRoomSession);
                },


                listRoomSessionsRecordings(sessionId: string, options?: ListRoomSessionsRecordingsOptions): AsyncIterableIterator<VideoRoomRecording> {
                    const params: QueryParams = {};
                    if (options?.mediaTtl) {
                        params.media_ttl = options.mediaTtl;
                    }

                    return self.getRequestIterator(`/api/video/room_sessions/${sessionId}/recordings`,
                        convertJSONToVideoRoomRecording, params);

                },

                async listRoomSessionsRecordingsPage(sessionId: string, options?: ListRoomSessionsRecordingsOptions, url?: string): Promise<PagedResponse<VideoRoomRecording>> {
                    const params: QueryParams = {};
                    if (options?.mediaTtl) {
                        params.media_ttl = options.mediaTtl;
                    }
                    return self.getRequestPage(`/api/video/room_sessions/${sessionId}/recordings`, convertJSONToVideoRoomRecording, url, params);
                },


                listRoomSessionsMembers(sessionId: string): AsyncIterableIterator<VideoRoomSessionMember> {
                    return self.getRequestIterator(`/api/video/room_sessions/${sessionId}/members`,
                        convertJSONToVideoRoomSessionMember);
                },

                async listRoomSessionsMembersPage(sessionId: string, url?: string): Promise<PagedResponse<VideoRoomSessionMember>> {
                    return self.getRequestPage(`/api/video/room_sessions/${sessionId}/members`,
                        convertJSONToVideoRoomSessionMember, url);
                }
            },

            roomTokens: {
                async generateNewVideoRoomToken(request: VideoRoomTokenRequest): Promise<VideoRoomToken> {
                    return self.postRequest('/api/video/room_tokens', request, (request) => ({
                        room_name: request.roomName,
                        user_name: request.userName,
                        permissions: request.permissions,
                        join_from: request.joinFrom,
                        join_until: request.joinUntil,
                        remove_at: request.removeAt,
                        remove_after_seconds_elapsed: request.removeAfterSecondsElapsed,
                        join_audio_muted: request.joinAudioMuted,
                        join_video_muted: request.joinVideoMuted,
                        auto_create_room: request.autoCreateRoom,
                        enable_room_previews: request.enableRoomPreviews,
                        room_display_name: request.roomDisplayName,
                        end_room_session_on_leave: request.endRoomSessionOnLeave,
                        join_as: request.joinAs,
                        media_allowed: request.mediaAllowed,
                        room_meta: request.roomMeta,
                        meta: request.meta,
                        audio_video_sync: request.audioVideoSync
                    }), (json) => ({
                        token: json.token
                    }))
                }
            },
            roomRecordings: {

                listRecordingsForRoom(options?: ListRecordingsForVideoRoomOptions): AsyncIterableIterator<VideoRoomRecording> {
                    const params: QueryParams = {};
                    if (options?.mediaTtl) {
                        params.media_ttl = options.mediaTtl;
                    }
                    return self.getRequestIterator('/api/video/recordings', convertJSONToVideoRoomRecording,
                        params);
                },

                async listRecordingsForRoomPage(options?: ListRecordingsForVideoRoomOptions, url?: string): Promise<PagedResponse<VideoRoomRecording>> {
                    const params: QueryParams = {};
                    if (options?.mediaTtl) {
                        params.media_ttl = options.mediaTtl;
                    }

                    return self.getRequestPage('/api/video/recordings', convertJSONToVideoRoomRecording, url,
                        params);

                },


                async retrieveRecording(recordingId: string, options?: RetrieveVideoRoomRecordingOptions): Promise<VideoRoomRecording> {
                    const params: QueryParams = {};
                    if (options?.mediaTtl) {
                        params.media_ttl = options.mediaTtl;
                    }
                    return self.getRequest(`/api/video/room_recordings/${recordingId}`,
                        convertJSONToVideoRoomRecording, params);
                },


                async deleteRoomRecording(recordingId: string): Promise<void> {
                    return self.deleteRequest(`/api/video/room_recordings/${recordingId}`);
                }
            },
            streams: {

                listStreamsByRoomId(roomId: string): AsyncIterableIterator<VideoRoomStream> {
                    return self.getRequestIterator(`/api/video/rooms/${roomId}/streams`, convertJSONToVideoRoomStream);
                },

                async listStreamsByRoomIdPage(roomId: string, url?: string): Promise<PagedResponse<VideoRoomStream>> {
                    return self.getRequestPage(`/api/video/rooms/${roomId}/streams`,
                        convertJSONToVideoRoomStream, url);
                },


                listStreamsByConferenceId(conferenceId: string): AsyncIterableIterator<VideoRoomStream> {
                    return self.getRequestIterator(`/api/video/conferences/${conferenceId}/streams`,
                        convertJSONToVideoRoomStream);
                },

                async listStreamsByConferenceIdPage(conferenceId: string, url?: string): Promise<PagedResponse<VideoRoomStream>> {
                    return self.getRequestPage(`/api/video/conferences/${conferenceId}/streams`,
                        convertJSONToVideoRoomStream, url);
                },


                async createStreamForRoom(roomId: string, request: CreateStreamRequest): Promise<VideoRoomStream> {
                    return self.postRequest(`/api/video/rooms/${roomId}/streams`, request, (request) => ({
                        url: request.url,
                    }), convertJSONToVideoRoomStream);
                },


                async createStreamForConference(conferenceId: string, request: CreateStreamRequest): Promise<VideoRoomStream> {
                    return self.postRequest(`/api/video/conference/${conferenceId}/streams`, request, (request) => ({
                        url: request.url,
                    }), convertJSONToVideoRoomStream);
                },


                async retrieveStream(streamId: string): Promise<VideoRoomStream> {
                    return self.getRequest(`/api/video/streams/${streamId}`, convertJSONToVideoRoomStream);
                },


                async updateStream(streamId: string, request: UpdateStreamRequest): Promise<VideoRoomStream> {
                    return self.putRequest(`/api/video/streams/${streamId}`, request, (request) => ({
                        url: request.url
                    }), convertJSONToVideoRoomStream);
                },


                async deleteStream(streamId: string): Promise<void> {
                    return self.deleteRequest(`/api/video/streams/${streamId}`);
                }
            },
            conferences: {

                listVideoConferences(options?: ListVideoConferencesOptions): AsyncIterableIterator<VideoConference> {
                    const params: QueryParams = {};
                    if (options?.includeActiveSession) {
                        params.include_active_session = options.includeActiveSession;
                    }

                    return self.getRequestIterator('/api/video/conferences', convertJSONToVideoConference,
                        params);
                },

                async listVideoConferencesPage(options?: ListVideoConferencesOptions, url?: string): Promise<PagedResponse<VideoConference>> {
                    const params: QueryParams = {};
                    if (options?.includeActiveSession) {
                        params.include_active_session = options.includeActiveSession;
                    }
                    return self.getRequestPage('/api/video/conferences', convertJSONToVideoConference, url,
                        params);
                },


                async retrieveVideoConference(conferenceId: string, options?: RetrieveVideoConferenceOptions): Promise<VideoConference> {
                    const params: QueryParams = {};
                    if (options?.includeActiveSession) {
                        params.include_active_session = options.includeActiveSession;
                    }
                    return self.getRequest(`/api/video/conferences/${conferenceId}`, convertJSONToVideoConference,
                        params);
                },


                async createVideoConference(request: CreateVideoConferenceRequest): Promise<VideoConference> {
                    return self.postRequest('/api/video/conferences', request,
                        (request) => ({
                            name: request.name,
                            display_name: request.displayName,
                            description: request.description,
                            join_from: request.joinFrom,
                            join_until: request.joinUntil,
                            quality: request.quality,
                            layout: request.layout,
                            size: request.size,
                            record_on_start: request.recordOnStart,
                            enable_room_previews: request.enableRoomPreviews,
                            enable_chat: request.enableChat,
                            dark_primary: request.darkPrimary,
                            dark_background: request.darkBackground,
                            dark_foreground: request.darkForeground,
                            dark_success: request.darkSuccess,
                            dark_negative: request.darkNegative,
                            light_primary: request.lightPrimary,
                            light_background: request.lightBackground,
                            light_foreground: request.lightForeground,
                            light_success: request.lightSuccess,
                            light_negative: request.lightNegative,
                        }), convertJSONToVideoConference);
                },


                async updateVideoConference(conferenceId: string, request: UpdateVideoConferenceRequest): Promise<VideoConference> {
                    return self.putRequest(`/api/video/conferences/${conferenceId}`, request,
                        (request) => ({
                            name: request.name,
                            display_name: request.displayName,
                            description: request.description,
                            join_from: request.joinFrom,
                            join_until: request.joinUntil,
                            quality: request.quality,
                            layout: request.layout,
                            size: request.size,
                            record_on_start: request.recordOnStart,
                            enable_room_previews: request.enableRoomPreviews,
                            enable_chat: request.enableChat,
                            dark_primary: request.darkPrimary,
                            dark_background: request.darkBackground,
                            dark_foreground: request.darkForeground,
                            dark_success: request.darkSuccess,
                            dark_negative: request.darkNegative,
                            light_primary: request.lightPrimary,
                            light_background: request.lightBackground,
                            light_foreground: request.lightForeground,
                            light_success: request.lightSuccess,
                            light_negative: request.lightNegative
                        }), convertJSONToVideoConference);
                },


                async deleteVideoConference(conferenceId: string): Promise<void> {
                    return self.deleteRequest(`/api/video/conferences/${conferenceId}`);
                }
            },
            conferenceTokens: {

                listConferenceTokens(conferenceId: string): AsyncIterableIterator<VideoConferenceToken> {
                    return self.getRequestIterator(`/api/video/conferences/${conferenceId}/conference_tokens`,
                        convertJSONToVideoConferenceToken);
                },

                async listConferenceTokensPage(conferenceId: string, url?: string): Promise<PagedResponse<VideoConferenceToken>> {
                    return self.getRequestPage(`/api/video/conferences/${conferenceId}/conference_tokens`,
                        convertJSONToVideoConferenceToken, url);
                },


                async retrieveConferenceToken(conferenceTokenId: string): Promise<VideoConferenceToken> {
                    return self.getRequest(`/api/video/conference_tokens/${conferenceTokenId}`,
                        convertJSONToVideoConferenceToken);
                },


                async resetConferenceToken(conferenceTokenId: string): Promise<VideoConferenceToken> {
                    return self.postEmptyRequest(`/api/video/conference_tokens/${conferenceTokenId}/reset`,
                        convertJSONToVideoConferenceToken);
                }
            },
            logs: {

                listLogs(options?: ListVideoLogsOptions): AsyncIterableIterator<VideoLog> {
                    const params: QueryParams = {};
                    if (options?.includeDeleted) {
                        params.include_deleted = options.includeDeleted;
                    }
                    if (options?.createdBefore) {
                        params.created_before = options.createdBefore;
                    }
                    if (options?.createdOn) {
                        params.created_on = options.createdOn;
                    }
                    if (options?.createdAfter) {
                        params.created_after = options.createdAfter;
                    }
                    if (options?.pageSize) {
                        params.page_size = options.pageSize;
                    }

                    return self.getRequestIterator('/api/video/logs', convertJSONToVideoLog, params);

                },

                async listLogsPage(options?: ListVideoLogsOptions, url?: string): Promise<PagedResponse<VideoLog>> {
                    const params: QueryParams = {};
                    if (options?.includeDeleted) {
                        params.include_deleted = options.includeDeleted;
                    }
                    if (options?.createdBefore) {
                        params.created_before = options.createdBefore;
                    }
                    if (options?.createdOn) {
                        params.created_on = options.createdOn;
                    }
                    if (options?.createdAfter) {
                        params.created_after = options.createdAfter;
                    }
                    if (options?.pageSize) {
                        params.page_size = options.pageSize;
                    }

                    return self.getRequestPage('/api/video/logs', convertJSONToVideoLog, url, params);

                },


                async retrieveLog(videoLogId: string): Promise<VideoLog> {
                    return self.getRequest(`/api/video/logs/${videoLogId}`, convertJSONToVideoLog);
                }
            },
        }
        this.message = {
            logs: {

                listLogs(options?: ListMessageLogsOptions): AsyncIterableIterator<MessageLog> {
                    const params: QueryParams = {};
                    if (options?.includeDeleted) {
                        params.include_deleted = options.includeDeleted;
                    }
                    if (options?.createdBefore) {
                        params.created_before = options.createdBefore;
                    }
                    if (options?.createdOn) {
                        params.created_on = options.createdOn;
                    }
                    if (options?.createdAfter) {
                        params.created_after = options.createdAfter;
                    }
                    if (options?.pageSize) {
                        params.page_size = options.pageSize;
                    }

                    return self.getRequestIterator('/api/message/logs', convertJSONToMessageLog, params);

                },

                async listLogsPage(options?: ListMessageLogsOptions, url?: string): Promise<PagedResponse<MessageLog>> {
                    const params: QueryParams = {};
                    if (options?.includeDeleted) {
                        params.include_deleted = options.includeDeleted;
                    }
                    if (options?.createdBefore) {
                        params.created_before = options.createdBefore;
                    }
                    if (options?.createdOn) {
                        params.created_on = options.createdOn;
                    }
                    if (options?.createdAfter) {
                        params.created_after = options.createdAfter;
                    }
                    if (options?.pageSize) {
                        params.page_size = options.pageSize;
                    }

                    return self.getRequestPage('/api/message/logs', convertJSONToMessageLog, url, params);

                },


                async retrieveLog(id: string): Promise<MessageLog> {
                    return self.getRequest(`/api/message/logs/${id}`, convertJSONToMessageLog);
                }
            },
        }
        this.voice = {
            logs: {
                listLogs(options?: VoiceLogsListLogsOptions): AsyncIterableIterator<VoiceLog> {
                    const params: QueryParams = {};
                    if (options?.includeDeleted) {
                        params.include_deleted = options.includeDeleted;
                    }
                    if (options?.createdBefore) {
                        params.created_before = options.createdBefore;
                    }
                    if (options?.createdOn) {
                        params.created_on = options.createdOn;
                    }
                    if (options?.createdAfter) {
                        params.created_after = options.createdAfter;
                    }
                    if (options?.pageSize) {
                        params.page_size = options.pageSize;
                    }
                    return self.getRequestIterator('/api/voice/logs', convertJSONToVoiceLog, params);

                },

                async listLogsPage(options?: VoiceLogsListLogsOptions, url?: string): Promise<PagedResponse<VoiceLog>> {
                    const params: QueryParams = {};
                    if (options?.includeDeleted) {
                        params.include_deleted = options.includeDeleted;
                    }
                    if (options?.createdBefore) {
                        params.created_before = options.createdBefore;
                    }
                    if (options?.createdOn) {
                        params.created_on = options.createdOn;
                    }
                    if (options?.createdAfter) {
                        params.created_after = options.createdAfter;
                    }
                    if (options?.pageSize) {
                        params.page_size = options.pageSize;
                    }

                    return self.getRequestPage('/api/voice/logs', convertJSONToVoiceLog, url, params);

                },


                async retrieveLog(id: string): Promise<VoiceLog> {
                    return self.getRequest(`/api/voice/logs/${id}`, convertJSONToVoiceLog);
                }
            },
        }
        this.fax = {
            logs: {

                listLogs(options?: ListFaxLogsOptions): AsyncIterableIterator<FaxLog> {
                    const params: QueryParams = {};
                    if (options?.includeDeleted) {
                        params.include_deleted = options.includeDeleted;
                    }
                    if (options?.createdBefore) {
                        params.created_before = options.createdBefore;
                    }
                    if (options?.createdOn) {
                        params.created_on = options.createdOn;
                    }
                    if (options?.createdAfter) {
                        params.created_after = options.createdAfter;
                    }
                    if (options?.pageSize) {
                        params.page_size = options.pageSize;
                    }
                    return self.getRequestIterator('/api/fax/logs', convertJSONToFaxLog, params);

                },

                async listLogsPage(options?: ListFaxLogsOptions, url?: string): Promise<PagedResponse<FaxLog>> {
                    const params: QueryParams = {};
                    if (options?.includeDeleted) {
                        params.include_deleted = options.includeDeleted;
                    }
                    if (options?.createdBefore) {
                        params.created_before = options.createdBefore;
                    }
                    if (options?.createdOn) {
                        params.created_on = options.createdOn;
                    }
                    if (options?.createdAfter) {
                        params.created_after = options.createdAfter;
                    }
                    if (options?.pageSize) {
                        params.page_size = options.pageSize;
                    }

                    return self.getRequestPage('/api/fax/logs', convertJSONToFaxLog, url, params);

                },

                async retrieveFaxLog(id: string): Promise<FaxLog> {
                    return self.getRequest(`/api/fax/logs/${id}`, convertJSONToFaxLog);
                }
            },
        }
        this.project = {
            apiTokens: {

                async createApiToken(request: CreateApiTokenRequest): Promise<ApiToken> {
                    return self.postRequest('/api/project/tokens', request, (request) => ({
                        name: request.name,
                        permissions: request.permissions,
                        subproject_id: request.subProjectId
                    }), (json) => ({
                        id: json.id,
                        name: json.name,
                        permissions: json.permissions,
                        token: json.token
                    }));
                },


                async updateApiToken(id: string, request: UpdateApiTokenRequest): Promise<ApiToken> {
                    return self.patchRequest(`/api/project/tokens/${id}`, request, (request) => ({
                        name: request.name,
                        permissions: request.permissions,
                    }), (json) => ({
                        id: json.id,
                        name: json.name,
                        permissions: json.permissions,
                        token: json.token
                    }));
                },


                async deleteApiToken(id: string): Promise<void> {
                    return self.deleteRequest(`/api/project/tokens/${id}`);
                }
            },
        }
        this.chat = {

            async generateChatToken(request: GenerateChatTokenRequest): Promise<ChatToken> {
                return self.postRequest('/api/chat/tokens', request, (request) => ({
                    channels: request.channels,
                    state: request.state,
                    ttl: request.ttl,
                    member_id: request.memberId
                }), (json) => ({
                    token: json.token
                }));
            }
        }

        this.pubsub = {
            tokens: {
                generateToken(request: GeneratePubSubTokenRequest): Promise<GeneratePubSubTokenResponse> {
                    return self.postRequest('/api/pubsub/tokens', request, convertGeneratePubSubTokenRequestToJSON,
                        (json) => ({
                            token: json.token,
                        }))
                }
            }
        }

        this.fabric = {
            subscribers: {

                listSubscribers(): AsyncIterableIterator<FabricSubscriberResponse> {
                    return self.getRequestIterator('/api/fabric/resources/subscribers',
                        convertJSONToFabricSubscriberResponse);
                },

                async listSubscribersPage(url?: string): Promise<PagedResponse<FabricSubscriberResponse>> {
                    return self.getRequestPage('/api/fabric/resources/subscribers',
                        convertJSONToFabricSubscriberResponse, url);
                },

                async retrieveSubscriber(id: string): Promise<FabricSubscriberResponse> {
                    return self.getRequest(`/api/fabric/resources/subscribers/${id}`,
                        convertJSONToFabricSubscriberResponse);
                },


                listAddressesForSubscribers(id: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/subscribers/${id}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                async listAddressesForSubscribersPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/subscribers/${id}/addresses`,
                        convertJSONToFabricResourceAddress, url);
                },

                async updateSubscriber(id: string, request: UpdateFabricSubscriberRequest): Promise<FabricSubscriberResponse> {
                    return self.putRequest(`/api/fabric/resources/subscribers/${id}`, request,
                        (request) => ({
                            password: request.password,
                            email: request.email,
                            first_name: request.firstName,
                            last_name: request.lastName,
                            display_name: request.displayName,
                            job_title: request.jobTitle,
                            timezone: request.timezone,
                            country: request.country,
                            region: request.region,
                            company_name: request.companyName
                        }), convertJSONToFabricSubscriberResponse);
                },


                async deleteSubscriber(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/subscribers/${id}`);
                },


                async createSubscriber(request: CreateFabricSubscriberRequest): Promise<FabricSubscriberResponse> {
                    return self.postRequest('/api/fabric/resources/subscribers', request, (request) => ({
                        password: request.password,
                        email: request.email,
                        first_name: request.firstName,
                        last_name: request.lastName,
                        display_name: request.displayName,
                        job_title: request.jobTitle,
                        timezone: request.timezone,
                        country: request.country,
                        region: request.region,
                        company_name: request.companyName
                    }), convertJSONToFabricSubscriberResponse);
                },

                async createSubscriberToken(request: CreateFabricSubscriberTokenRequest): Promise<FabricSubscriberToken> {
                    return self.postRequest('/api/fabric/subscribers/tokens', request, (request) => ({
                        reference: request.reference,
                        expire_at: request.expireAt,
                        application_id: request.applicationId,
                        password: request.password,
                        first_name: request.firstName,
                        last_name: request.lastName,
                        display_name: request.displayName,
                        job_title: request.jobTitle,
                        time_zone: request.timezone,
                        country: request.country,
                        region: request.region,
                        company_name: request.companyName
                    }), (json) => ({
                        subscriberId: json.subscriber_id,
                        token: json.token,
                        refreshToken: json.refresh_token
                    }));
                }
            },

            subscriberTokens: {
                createSubscriberGuestToken(request: CreateSubscriberGuestTokenRequest): Promise<SubscriberGuestToken> {
                    return self.postRequest('/api/fabric/guests/tokens', request,
                        (request) => ({
                            allowed_addresses: request.allowedAddresses,
                            expires_at: request.expireAt
                        }),
                        (json) => ({
                            token: json.token,
                            refreshToken: json.refresh_token
                        }));
                },

                exchangeRefreshToken(request: ExchangeRefreshTokenRequest): Promise<SubscriberGuestToken> {
                    return self.postRequest('/api/fabric/subscribers/tokens/refresh', request,
                        (request) => ({
                            refresh_token: request.refreshToken
                        }), (json) => ({
                            token: json.token,
                            refreshToken: json.refresh_token
                        }))
                },

                createSubscriberInviteToken(request: CreateSubscriberInviteTokenRequest): Promise<SubscriberInviteToken> {
                    return self.postRequest('/api/fabric/subscriber/invites', request,
                        (request) => ({
                            address_id: request.addressId,
                            expires_at: request.expireAt
                        }), (json) => ({
                            token: json.token
                        }));
                }
            },

            subscriberSipEndpoints: {
                listSipEndpoints(fabricSubscriberId: string): AsyncIterableIterator<SubscriberSipEndpoint> {
                    return self.getRequestIterator(
                        `/api/fabric/resources/subscribers/${fabricSubscriberId}/sip_endpoints`,
                        convertJSONToSubscriberSipEndpoint)
                },

                listSipEndpointsPage(fabricSubscriberId: string, url?: string): Promise<PagedResponse<SubscriberSipEndpoint>> {
                    return self.getRequestPage(
                        `/api/fabric/resources/subscribers/${fabricSubscriberId}/sip_endpoints`,
                        convertJSONToSubscriberSipEndpoint, url)
                },

                retrieveSipEndpoint(id: string, fabricSubscriberId: string): Promise<SubscriberSipEndpoint> {
                    return self.getRequest(
                        `/api/fabric/resources/subscribers/${fabricSubscriberId}/sip_endpoints/${id}`,
                        convertJSONToSubscriberSipEndpoint
                    )
                },

                createSipEndpoint(fabricSubscriberId: string, request: CreateSubscriberSipEndpointRequest): Promise<SubscriberSipEndpoint> {
                    return self.postRequest(`/api/fabric/resources/subscribers/${fabricSubscriberId}/sip_endpoints`,
                        request, convertCreateSubscriberSipEndpointRequestToJSON, convertJSONToSubscriberSipEndpoint)
                },

                updateSipEndpoint(id: string, fabricSubscriberId: string, request: UpdateSubscriberSipEndpointRequest): Promise<SubscriberSipEndpoint> {
                    return self.patchRequest(
                        `/api/fabric/resources/subscribers/${fabricSubscriberId}/sip_endpoints/${id}`,
                        request, convertUpdateSubscriberEndpointRequestToJSON, convertJSONToSubscriberSipEndpoint)
                },

                deleteSipEndpoint(id: string, fabricSubscriberId: string): Promise<void> {
                    return self.deleteRequest(
                        `/api/fabric/resources/subscribers/${fabricSubscriberId}/sip_endpoints/${id}`)
                }
            },

            address: {
                listAddresses(token: String): AsyncIterableIterator<FabricAddress> {
                    return (async function* () {
                        let nextUrl: string | null = '/api/fabric/addresses';

                        while (nextUrl) {
                            const headers: Headers = {
                                'Accept': 'application/json',
                                'Authorization': `Bearer ${token}`
                            };
                            const axiosCallOpts: AxiosRequestConfig = {
                                url: nextUrl,
                                method: 'get',
                                headers
                            };

                            const res = await self.axiosInstance.request(axiosCallOpts);
                            const json = res.data;

                            for (const address of json.data) {
                                yield convertJSONToFabricAddress(address);
                            }

                            nextUrl = json.links?.next ?? null;
                        }

                    })();
                },

                async listAddressesPage(token: String, url?: string): Promise<PagedResponse<FabricAddress>> {
                    const headers: Headers = {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                    const axiosCallOpts: AxiosRequestConfig = {
                        url: url ?? '/api/fabric/addresses',
                        method: 'get',
                        headers
                    }
                    const res = await self.axiosInstance.request(axiosCallOpts);
                    const json = res.data;

                    return defaultMakePagedResponse(json, self.axiosInstance, headers, convertJSONToFabricAddress,
                        self.baseUrl);
                },

                async getAddress(id: string, token: string): Promise<FabricAddress> {
                    const headers: Headers = {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                    const axiosCallOpts: AxiosRequestConfig = {
                        url: `/api/fabric/addresses/${id}`,
                        method: 'get',
                        headers
                    }
                    const res = await self.axiosInstance.request(axiosCallOpts);
                    const json = res.data;
                    return convertJSONToFabricAddress(json);
                }
            },

            embedsToken: {
                async createEmbedsToken(request: CreateEmbedsTokenRequest): Promise<EmbedsToken> {
                    return self.postRequest('/api/fabric/embeds/tokens', request,
                        (request) => ({
                            token: request.token
                        }), (json) => ({
                            token: json.token
                        }))
                }
            },

            swmlWebhooks: {
                listSwmlWebhooks(): AsyncIterableIterator<SwmlWebhookResponse> {
                    return self.getRequestIterator('/api/fabric/resources/swml_webhooks',
                        convertJSONToSwmlWebhookResponse);
                },

                async listSwmlWebhooksPage(url?: string): Promise<PagedResponse<SwmlWebhookResponse>> {
                    return self.getRequestPage('/api/fabric/resources/swml_webhooks',
                        convertJSONToSwmlWebhookResponse, url);
                },

                async retrieveSwmlWebhook(id: string): Promise<SwmlWebhookResponse> {
                    return self.getRequest(`/api/fabric/resources/swml_webhooks/${id}`,
                        convertJSONToSwmlWebhookResponse);
                },

                async createSwmlWebhook(request: CreateSwmlWebhookRequest): Promise<SwmlWebhookResponse> {
                    return self.postRequest('/api/fabric/resources/swml_webhooks', request,
                        convertCreateSwmlWebhookRequestToJSON, convertJSONToSwmlWebhookResponse);
                },

                async updateSwmlWebhook(id: string, request: UpdateSwmlWebhookRequest): Promise<SwmlWebhookResponse> {
                    return self.patchRequest(`/api/fabric/resources/swml_webhooks/${id}`, request,
                        convertUpdateSwmlWebhookRequestToJSON, convertJSONToSwmlWebhookResponse);
                },

                async deleteSwmlWebhook(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/swml_webhooks/${id}`);
                },

                listSwmlWebhookAddresses(id: string): AsyncIterableIterator<FabricAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/swml_webhooks/${id}/addresses`,
                        convertJSONToFabricAddress);
                },

                async listSwmlWebhookAddressesPage(id: string, url?: string): Promise<PagedResponse<FabricAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/swml_webhooks/${id}/addresses`,
                        convertJSONToFabricAddress, url);
                }
            },

            swmlApplications: {
                listSwmlApplications(): AsyncIterableIterator<SwmlApplicationResponse> {
                    return self.getRequestIterator('/api/fabric/resources/swml_applications',
                        convertJSONToSwmlApplicationResponse);
                },

                async listSwmlApplicationsPage(url?: string): Promise<PagedResponse<SwmlApplicationResponse>> {
                    return self.getRequestPage('/api/fabric/resources/swml_applications',
                        convertJSONToSwmlApplicationResponse, url);
                },

                async retrieveSwmlApplication(id: string): Promise<SwmlApplicationResponse> {
                    return self.getRequest(`/api/fabric/resources/swml_applications/${id}`,
                        convertJSONToSwmlApplicationResponse);
                },

                async createSwmlApplication(request: CreateSwmlApplicationRequest): Promise<SwmlApplicationResponse> {
                    return self.postRequest('/api/fabric/resources/swml_applications', request,
                        convertCreateSwmlApplicationRequestToJSON, convertJSONToSwmlApplicationResponse);
                },

                async updateSwmlApplication(id: string, request: UpdateSwmlApplicationRequest): Promise<SwmlApplicationResponse> {
                    return self.putRequest(`/api/fabric/resources/swml_applications/${id}`, request,
                        convertUpdateSwmlApplicationRequestToJSON, convertJSONToSwmlApplicationResponse);
                },

                async deleteSwmlApplication(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/swml_applications/${id}`);
                },

                listSwmlApplicationAddresses(id: string): AsyncIterableIterator<FabricAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/swml_applications/${id}/addresses`,
                        convertJSONToFabricAddress);
                },

                async listSwmlApplicationAddressesPage(id: string, url?: string): Promise<PagedResponse<FabricAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/swml_applications/${id}/addresses`,
                        convertJSONToFabricAddress, url);
                }
            },

            lamlApplications: {
                listLamlApplications(): AsyncIterableIterator<LamlApplicationResponse> {
                    return self.getRequestIterator('/api/fabric/resources/laml_applications',
                        convertJSONToLamlApplicationResponse);
                },

                async listLamlApplicationsPage(url?: string): Promise<PagedResponse<LamlApplicationResponse>> {
                    return self.getRequestPage('/api/fabric/resources/laml_applications',
                        convertJSONToLamlApplicationResponse, url);
                },

                async retrieveLamlApplication(id: string): Promise<LamlApplicationResponse> {
                    return self.getRequest(`/api/fabric/resources/laml_applications/${id}`,
                        convertJSONToLamlApplicationResponse);
                },

                async updateLamlApplication(id: string, request: UpdateLamlApplicationRequest): Promise<LamlApplicationResponse> {
                    return self.putRequest(`/api/fabric/resources/laml_applications/${id}`, request,
                        convertUpdateLamlApplicationRequestToJSON, convertJSONToLamlApplicationResponse);
                },

                async deleteLamlApplication(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/laml_applications/${id}`);
                },

                listLamlApplicationAddresses(id: string): AsyncIterableIterator<FabricAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/laml_applications/${id}/addresses`,
                        convertJSONToFabricAddress);
                },

                async listLamlApplicationAddressesPage(id: string, url?: string): Promise<PagedResponse<FabricAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/laml_applications/${id}/addresses`,
                        convertJSONToFabricAddress, url);
                }
            },

            cxmlScripts: {
                listCXMLScripts(): AsyncIterableIterator<CXMLScriptResponse> {
                    return self.getRequestIterator('/api/fabric/resources/cxml_scripts',
                        convertJSONToCXMLScriptResponse);
                },

                listCXMLScriptsPage(url?: string): Promise<PagedResponse<CXMLScriptResponse>> {
                    return self.getRequestPage('/api/fabric/resources/cxml_scripts',
                        convertJSONToCXMLScriptResponse, url);
                },

                retrieveCXMLScript(id: string): Promise<CXMLScriptResponse> {
                    return self.getRequest(`/api/fabric/resources/cxml_scripts/${id}`,
                        convertJSONToCXMLScriptResponse)
                },

                createCXMLScript(request: CreateCXMLScriptRequest): Promise<CXMLScriptResponse> {
                    return self.postRequest('/api/fabric/resources/cxml_scripts', request,
                        (request) => ({
                            name: request.name,
                            contents: request.contents
                        }), convertJSONToCXMLScriptResponse);
                },

                updateCXMLScript(id: string, request: UpdateCXMLScriptRequest): Promise<CXMLScriptResponse> {
                    return self.putRequest(`/api/fabric/resources/cxml_scripts/${id}`, request,
                        (request) => ({
                            name: request.name,
                            contents: request.contents
                        }), convertJSONToCXMLScriptResponse);
                },

                deleteCXMLScript(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/cxml_scripts/${id}`);
                },

                listCXMLScriptAddresses(id: string): AsyncIterableIterator<FabricAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/cxml_scripts/${id}/addresses`,
                        convertJSONToFabricAddress);
                },

                listCXMLScriptAddressesPage(id: string, url?: string): Promise<PagedResponse<FabricAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/cxml_scripts/${id}/addresses`,
                        convertJSONToFabricAddress, url);
                }
            },

            cxmlWebhooks: {
                listCXMLWebhooks(): AsyncIterableIterator<CXMLWebhookResponse> {
                    return self.getRequestIterator('/api/fabric/resources/cxml_webhooks',
                        convertJSONToCXMLWebhookResponse);
                },

                listCXMLWebhooksPage(url?: string): Promise<PagedResponse<CXMLWebhookResponse>> {
                    return self.getRequestPage('/api/fabric/resources/cxml_webhooks',
                        convertJSONToCXMLWebhookResponse, url);
                },

                retrieveCXMLWebhook(id: string): Promise<CXMLWebhookResponse> {
                    return self.getRequest(`/api/fabric/resources/cxml_webhooks/${id}`,
                        convertJSONToCXMLWebhookResponse);
                },

                createCXMLWebhook(request: CreateCXMLWebhookRequest): Promise<CXMLWebhookResponse> {
                    return self.postRequest('/api/fabric/resources/cxml_webhooks', request,
                        convertCreateCXMLWebhookRequestToJSON, convertJSONToCXMLWebhookResponse);
                },

                updateCXMLWebhook(id: string, request: UpdateCXMLWebhookRequest): Promise<CXMLWebhookResponse> {
                    return self.patchRequest(`/api/fabric/resources/cxml_webhooks/${id}`, request,
                        convertUpdateCXMLWebhookRequestToJSON, convertJSONToCXMLWebhookResponse);
                },

                deleteCXMLWebhook(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/cxml_webhooks/${id}`);
                },

                listCXMLWebhookAddresses(id: string): AsyncIterableIterator<FabricAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/cxml_webhooks/${id}/addresses`,
                        convertJSONToFabricAddress);
                },

                listCXMLWebhookAddressesPage(id: string, url?: string): Promise<PagedResponse<FabricAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/cxml_webhooks/${id}/addresses`,
                        convertJSONToFabricAddress, url);
                }
            },

            callFlows: {

                listCallFlows(): AsyncIterableIterator<CallFlowResponse> {
                    return self.getRequestIterator('/api/fabric/resources/call_flows',
                        convertJSONToCallFlowResponse);
                },

                async listCallFlowsPage(url?: string): Promise<PagedResponse<CallFlowResponse>> {
                    return self.getRequestPage('/api/fabric/resources/call_flows',
                        convertJSONToCallFlowResponse, url);
                },

                async retrieveCallFlow(id: string): Promise<CallFlowResponse> {
                    return self.getRequest(`/api/fabric/resources/call_flows/${id}`, convertJSONToCallFlowResponse);
                },

                listAddressesForCallFlow(resourceId: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/call_flows/${resourceId}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                async listAddressesForCallFlowPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/call_flows/${id}/addresses`,
                        convertJSONToFabricResourceAddress, url);
                },


                listCallFlowVersions(id: string): AsyncIterableIterator<CallFlowVersion> {
                    return self.getRequestIterator(`/api/fabric/resources/call_flows/${id}/versions`,
                        convertJSONToCallFlowVersion);
                },

                async listCallFlowVersionsPage(id: string, url?: string): Promise<PagedResponse<CallFlowVersion>> {
                    return self.getRequestPage(`/api/fabric/resources/call_flows/${id}/versions`,
                        convertJSONToCallFlowVersion, url);
                },

                async updateCallFlow(id: string, request: UpdateCallFlowRequest): Promise<CallFlowResponse> {
                    return self.putRequest(`/api/fabric/resources/call_flows/${id}`, request,
                        convertUpdateCallFlowRequestToJSON, convertJSONToCallFlowResponse);
                },


                async deleteCallFlow(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/call_flows/${id}`);
                },


                async createCallFlow(request: CreateCallFlowRequest): Promise<CallFlowResponse> {
                    return self.postRequest('/api/fabric/resources/call_flows', request,
                        convertCreateCallFlowRequestToJSON, convertJSONToCallFlowResponse);
                }
            },
            aiAgents: {

                listAiAgents(): AsyncIterableIterator<AiAgentResponse> {
                    return self.getRequestIterator('/api/fabric/resources/ai_agents', convertJSONToAiAgentResponse);
                },

                listAiAgentsPage(url?: string): Promise<PagedResponse<AiAgentResponse>> {
                    return self.getRequestPage('/api/fabric/resources/ai_agents', convertJSONToAiAgentResponse, url);
                },

                async retrieveAiAgent(id: string): Promise<AiAgentResponse> {
                    return self.getRequest(`/api/fabric/resources/ai_agents/${id}`, convertJSONToAiAgentResponse);
                },


                listAddressesForAiAgent(id: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/ai_agents/${id}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                listAddressesForAiAgentPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/ai_agents/${id}/addresses`,
                        convertJSONToFabricResourceAddress, url);
                },

                async updateAiAgent(id: string, request: UpdateAiAgentRequest): Promise<AiAgentResponse> {
                    return self.patchRequest(`/api/fabric/resources/ai_agents/${id}`, request,
                        convertUpdateAiAgentRequestToJSON, convertJSONToAiAgentResponse);
                },


                async deleteAiAgent(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/ai_agents/${id}`);
                },


                async createAiAgent(request: CreateAiAgentRequest): Promise<AiAgentResponse> {
                    return self.postRequest(`/api/fabric/resources/ai_agents`, request,
                        convertCreateAiAgentRequestToJSON, convertJSONToAiAgentResponse);
                }
            },
            swmlScripts: {

                listSwmlScripts(): AsyncIterableIterator<SwmlScriptResponse> {
                    return self.getRequestIterator('/api/fabric/resources/swml_scripts',
                        convertJSONToSwmlScriptResponse);
                },

                async listSwmlScriptsPage(url?: string): Promise<PagedResponse<SwmlScriptResponse>> {
                    return self.getRequestPage('/api/fabric/resources/swml_scripts', convertJSONToSwmlScriptResponse,
                        url);
                },

                async retrieveSwmlScript(id: string): Promise<SwmlScriptResponse> {
                    return self.getRequest(`/api/fabric/resources/swml_scripts/${id}`,
                        convertJSONToSwmlScriptResponse);
                },

                listAddressesForSwmlScript(id: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/swml_scripts/${id}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                async listAddressesForSwmlScriptPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/swml_scripts/${id}/addresses`,
                        convertJSONToFabricResourceAddress, url)
                },


                async updateSwmlScript(id: string, request: UpdateSwmlScriptRequest): Promise<SwmlScriptResponse> {
                    return self.putRequest(`/api/fabric/resources/swml_scripts/${id}`, request, (request) => ({
                        name: request.name,
                        contents: request.contents
                    }), convertJSONToSwmlScriptResponse);
                },


                async deleteSwmlScript(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/swml_scripts/${id}`);
                },


                async createSwmlScript(request: CreateSwmlScriptRequest): Promise<SwmlScriptResponse> {
                    return self.postRequest(`/api/fabric/resources/swml_scripts`, request, (request) => ({
                        name: request.name,
                        contents: request.contents
                    }), convertJSONToSwmlScriptResponse);
                }
            },

            relayApplications: {

                listRelayApplications(): AsyncIterableIterator<RelayApplicationResponse> {
                    return self.getRequestIterator('/api/fabric/resources/relay_applications',
                        convertJSONToRelayApplicationResponse);
                },

                async listRelayApplicationsPage(url?: string): Promise<PagedResponse<RelayApplicationResponse>> {
                    return self.getRequestPage('/api/fabric/resources/relay_applications',
                        convertJSONToRelayApplicationResponse, url);
                },

                async retrieveRelayApplication(id: string): Promise<RelayApplicationResponse> {
                    return self.getRequest(`/api/fabric/resources/relay_applications/${id}`,
                        convertJSONToRelayApplicationResponse);
                },

                listAddressesForRelayApplication(id: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/relay_applications/${id}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                async listAddressesForRelayApplicationPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/relay_applications/${id}/addresses`,
                        convertJSONToFabricResourceAddress, url);
                },

                async updateRelayApplication(id: string, request: UpdateRelayApplicationRequest): Promise<RelayApplicationResponse> {
                    return self.putRequest(`/api/fabric/resources/relay_applications/${id}`, request,
                        convertUpdateRelayApplicationRequestToJSON, convertJSONToRelayApplicationResponse);
                },


                async deleteRelayApplication(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/relay_applications/${id}`);
                },


                async createRelayApplication(request: CreateRelayApplicationRequest): Promise<RelayApplicationResponse> {
                    return self.postRequest('/api/fabric/resources/relay_applications', request,
                        convertCreateRelayApplicationRequestToJSON, convertJSONToRelayApplicationResponse);
                }
            },
            sipEndpoints: {

                listSipEndpoints(): AsyncIterableIterator<FabricSipEndpointResponse> {
                    return self.getRequestIterator('/api/fabric/resources/sip_endpoints',
                        convertJSONToFabricSipEndpointResponse);
                },

                listSipEndpointsPage(url?: string): Promise<PagedResponse<FabricSipEndpointResponse>> {
                    return self.getRequestPage(`/api/fabric/resources/sip_endpoints`,
                        convertJSONToFabricSipEndpointResponse, url);
                },


                async retrieveSipEndpoint(id: string): Promise<FabricSipEndpointResponse> {
                    return self.getRequest(`/api/fabric/resources/sip_endpoints/${id}`,
                        convertJSONToFabricSipEndpointResponse);
                },


                listAddressesForSipEndpoint(id: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/sip_endpoints/${id}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                listAddressesForSipEndpointPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/sip_endpoints/${id}/addresses`,
                        convertJSONToFabricResourceAddress, url);
                },

                async updateSipEndpoint(id: string, request: UpdateFabricSipEndpointRequest): Promise<FabricSipEndpointResponse> {
                    return self.putRequest(`/api/fabric/resources/sip_endpoints/${id}`, request,
                        convertUpdateFabricSipEndpointRequestToJSON, convertJSONToFabricSipEndpointResponse);
                },


                async deleteSipEndpoint(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/sip_endpoints/${id}`);
                },


                async createSipEndpoint(request: CreateFabricSipEndpointRequest): Promise<FabricSipEndpointResponse> {
                    return self.postRequest(`/api/fabric/resources/sip_endpoints`, request,
                        convertCreateFabricSipEndpointRequestToJSON, convertJSONToFabricSipEndpointResponse);
                }
            },

            sipGateways: {
                listSipGateways(): AsyncIterableIterator<SipGatewayResponse> {
                    return self.getRequestIterator('/api/fabric/resources/sip_gateways',
                        convertJSONToSipGatewayResponse);
                },

                listSipGatewaysPage(url?: string): Promise<PagedResponse<SipGatewayResponse>> {
                    return self.getRequestPage('/api/fabric/resources/sip_gateways',
                        convertJSONToSipGatewayResponse, url);
                },

                retrieveSipGateway(id: string): Promise<SipGatewayResponse> {
                    return self.getRequest(`/api/fabric/resources/sip_gateways/${id}`,
                        convertJSONToSipGatewayResponse);
                },

                listAddressesForSipGateway(id: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/sip_gateways/${id}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                listAddressesForSipGatewayPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/sip_gateways/${id}/addresses`,
                        convertJSONToFabricResourceAddress, url);
                },

                updateSipGateway(id: string, request: UpdateSipGatewayRequest): Promise<SipGatewayResponse> {
                    return self.patchRequest(`/api/fabric/resources/sip_gateways/${id}`, request,
                        convertUpdateSipGatewayRequestToJSON, convertJSONToSipGatewayResponse);
                },

                deleteSipGateway(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/sip_gateways/${id}`);
                },

                createSipGateway(request: CreateSipGatewayRequest): Promise<SipGatewayResponse> {
                    return self.postRequest(`/api/fabric/resources/sip_gateways`, request,
                        convertCreateSipGatewayRequestToJSON, convertJSONToSipGatewayResponse);
                }
            },

            freeswitchConnectors: {

                listFreeswitchConnectors(): AsyncIterableIterator<FreeswitchConnectorResponse> {
                    return self.getRequestIterator('/api/fabric/resources/freeswitch_connectors',
                        convertJSONToFreeswitchConnectorResponse);
                },

                async listFreeswitchConnectorsPage(url?: string): Promise<PagedResponse<FreeswitchConnectorResponse>> {
                    return self.getRequestPage('/api/fabric/resources/freeswitch_connectors',
                        convertJSONToFreeswitchConnectorResponse, url);
                },


                async retrieveFreeswitchConnector(id: string): Promise<FreeswitchConnectorResponse> {
                    return self.getRequest(`/api/fabric/resources/freeswitch_connectors/${id}`,
                        convertJSONToFreeswitchConnectorResponse)
                },


                listAddressesForFreeswitchConnector(id: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/freeswitch_connectors/${id}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                async listAddressesForFreeswitchConnectorPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/freeswitch_connectors/${id}/addresses`,
                        convertJSONToFabricResourceAddress, url);
                },


                async updateFreeswitchConnector(id: string, request: UpdateFreeswitchConnectorRequest): Promise<any> {
                    return self.putRequest(`/api/fabric/resources/freeswitch_connectors/${id}`, request,
                        convertUpdateFreeswitchConnectorRequestToJson, convertJSONToFreeswitchConnectorResponse);
                },


                async deleteFreeswitchConnector(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/freeswitch_connectors/${id}`);
                },


                async createFreeswitchConnector(request: CreateFreeswitchConnectorRequest): Promise<FreeswitchConnectorResponse> {
                    return self.postRequest('/api/fabric/resources/freeswitch_connectors', request,
                        convertCreateFreeswitchConnectorRequestToJson, convertJSONToFreeswitchConnectorResponse);
                }
            },
            dialogflowAgents: {

                listDialogflowAgents(): AsyncIterableIterator<DialogflowAgentResponse> {
                    return self.getRequestIterator('/api/fabric/resources/dialogflow_agents',
                        convertJSONToDialogflowAgentResponse);
                },

                async listDialogflowAgentsPage(url?: string): Promise<PagedResponse<DialogflowAgentResponse>> {
                    return self.getRequestPage('/api/fabric/resources/dialogflow_agents',
                        convertJSONToDialogflowAgentResponse, url);
                },


                async retrieveDialogflowAgent(id: string): Promise<DialogflowAgentResponse> {
                    return self.getRequest(`/api/fabric/resources/dialogflow_agents/${id}`,
                        convertJSONToDialogflowAgentResponse);
                },


                listAddressesForDialogflowAgent(id: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(
                        `/api/fabric/resources/dialogflow_agents/${id}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                listAddressesForDialogflowAgentPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/dialogflow_agents/${id}/addresses`,
                        convertJSONToFabricResourceAddress, url);
                },

                async updateDialogflowAgent(id: string, request: UpdateDialogflowAgentRequest): Promise<DialogflowAgentResponse> {
                    return self.putRequest(`/api/fabric/resources/dialogflow_agents/${id}`, request,
                        convertUpdateDialogflowAgentRequestToJSON, convertJSONToDialogflowAgentResponse);
                },


                async deleteDialogflowAgent(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/dialogflow_agents/${id}`);
                }
            },

            conferenceRooms: {
                listConferenceRooms(): AsyncIterableIterator<ConferenceRoomResponse> {
                    return self.getRequestIterator('/api/fabric/resources/conference_rooms',
                        convertJSONToConferenceRoomResponse);
                },

                async listConferenceRoomsPage(url?: string): Promise<PagedResponse<ConferenceRoomResponse>> {
                    return self.getRequestPage('/api/fabric/resources/conference_rooms',
                        convertJSONToConferenceRoomResponse, url);
                },

                async retrieveConferenceRoom(id: string): Promise<ConferenceRoomResponse> {
                    return self.getRequest(`/api/fabric/resources/conference_rooms/${id}`,
                        convertJSONToConferenceRoomResponse);
                },

                listAddressesForConferenceRoom(id: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/conference_rooms/${id}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                async listAddressesForConferenceRoomPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/conference_rooms/${id}/addresses`,
                        convertJSONToFabricResourceAddress, url);
                },

                async updateConferenceRoom(id: string, request: UpdateConferenceRoomRequest): Promise<ConferenceRoomResponse> {
                    return self.putRequest(`/api/fabric/resources/conference_rooms/${id}`, request,
                        convertUpdateConferenceRoomRequestToJSON, convertJSONToConferenceRoomResponse);
                },

                async deleteConferenceRoom(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/conference_rooms/${id}`);
                },

                async createConferenceRoom(request: CreateConferenceRoomRequest): Promise<ConferenceRoomResponse> {
                    return self.postRequest('/api/fabric/resources/conference_rooms', request,
                        convertCreateConferenceRoomRequestToJSON, convertJSONToConferenceRoomResponse);
                }
            },

            resources: {
                listFabricResources(options?: ListFabricResourcesOptions): AsyncIterableIterator<FabricResourceResponse> {
                    const params: QueryParams = {};
                    if (options?.type) {
                        params.type = options.type;
                    }
                    return self.getRequestIterator(`/api/fabric/resources`, convertJSONToFabricResourceResponse,
                        params);
                },

                listFabricResourcesPage(url?: string, options?: ListFabricResourcesOptions): Promise<PagedResponse<FabricResourceResponse>> {
                    const params: QueryParams = {};
                    if (options?.type) {
                        params.type = options.type;
                    }
                    return self.getRequestPage(`/api/fabric/resources`, convertJSONToFabricResourceResponse, url,
                        params);
                },

                async retrieveFabricResource(id: string): Promise<FabricResourceResponse> {
                    return self.getRequest(`/api/fabric/resources/${id}`, convertJSONToFabricResourceResponse);
                },


                async deleteFabricResource(id: string): Promise<void> {
                    return self.deleteRequest(`/api/fabric/resources/${id}`);
                },

                listAddressesForFabricResource(resourceId: string): AsyncIterableIterator<FabricResourceAddress> {
                    return self.getRequestIterator(`/api/fabric/resources/${resourceId}/addresses`,
                        convertJSONToFabricResourceAddress);
                },

                listAddressesForFabricResourcePage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>> {
                    return self.getRequestPage(`/api/fabric/resources/${id}/addresses`, convertJSONToFabricResourceAddress, url);
                },

                async assignResourceAsPhoneRouteHandler(id: string, request: AssignResourceAsPhoneRouteHandlerRequest): Promise<FabricResourceAddress> {
                    return self.postRequest(`/api/fabric/resources/${id}/phone_routes`, request,
                        (request) => ({
                            phone_route_id: request.phoneRouteId,
                            handler: request.handler
                        }), convertJSONToFabricResourceAddress);
                },


                async assignResourceAsSipEndpointHandler(id: string, request: AssignResourceAsSipEndpointHandlerRequest): Promise<FabricResourceAddress> {
                    return self.postRequest(`/api/fabric/resources/${id}/sip_endpoints`,
                        request, (request) => ({
                            sip_endpoint_id: request.sipEndpointId
                        }), convertJSONToFabricResourceAddress);
                },


                async assignResourceAsDomainApplicationHandler(id: string, request: AssignResourceAsDomainApplicationHandlerRequest): Promise<FabricResourceAddress> {
                    return self.postRequest(`/api/fabric/resources/${id}/domain_applications`, request,
                        (request) => ({
                            domain_application_id: request.domainApplicationId
                        }), convertJSONToFabricResourceAddress);
                }

            },

        }
    }

    private async postRequest<RequestType, ResponseType>(url: string, request: RequestType, serializer: (request: RequestType) => any,
                                                         deserializer: (json: any) => ResponseType): Promise<ResponseType> {
        const axiosCallOpts: AxiosRequestConfig = {
            url: url,
            method: 'post',
            headers: this.defaultHeaders,
            data: serializer(request)
        }
        const res = await this.axiosInstance.request(axiosCallOpts);
        return deserializer(res.data);
    }

    private async postEmptyRequest<ResponseType>(url: string, deserializer: (json: any) => ResponseType): Promise<ResponseType> {
        const axiosCallOpts: AxiosRequestConfig = {
            url: url,
            method: 'post',
            headers: this.defaultHeaders
        }
        let res = await this.axiosInstance.request(axiosCallOpts);
        return deserializer(res.data);
    }

    private async putRequest<RequestType, ResponseType>(url: string, request: RequestType, serializer: (request: RequestType) => any,
                                                        deserializer: (json: any) => ResponseType): Promise<ResponseType> {
        const axiosCallOpts: AxiosRequestConfig = {
            url: url,
            method: 'put',
            headers: this.defaultHeaders,
            data: serializer(request)
        }
        const res = await this.axiosInstance.request(axiosCallOpts);
        return deserializer(res.data);
    }

    private async patchRequest<RequestType, ResponseType>(url: string, request: RequestType, serializer: (request: RequestType) => any,
                                                          deserializer: (json: any) => ResponseType): Promise<ResponseType> {
        const axiosCallOpts: AxiosRequestConfig = {
            url: url,
            method: 'patch',
            headers: this.defaultHeaders,
            data: serializer(request)
        };
        const res = await this.axiosInstance.request(axiosCallOpts);
        return deserializer(res.data);
    }

    private async getRequest<ResponseType>(url: string, deserializer: (json: any) => ResponseType, params?: QueryParams): Promise<ResponseType> {
        const axiosCallOpts: AxiosRequestConfig = {
            url: url,
            method: 'get',
            headers: this.defaultHeaders
        }
        if (params) {
            axiosCallOpts.params = params
        }
        let res = await this.axiosInstance.request(axiosCallOpts);
        return deserializer(res.data);
    }

    private getRequestIterator<ItemType>(initialUrl: string, deserializer: (item: any) => ItemType, params?: QueryParams): AsyncIterableIterator<ItemType> {
        const self = this;
        return (async function* () {
            let nextUrl: string | null = initialUrl;
            while (nextUrl) {
                const axiosCallOpts: AxiosRequestConfig = {
                    url: nextUrl,
                    method: 'get',
                    headers: self.defaultHeaders
                }
                if (params) {
                    if (nextUrl === initialUrl && Object.keys(params).length > 0) {
                        axiosCallOpts.params = params
                    }
                }
                const res = await self.axiosInstance.request(axiosCallOpts);
                const json = res.data;

                for (const item of json.data) {
                    yield deserializer(item);
                }
                nextUrl = json.links?.next ?? null;
            }
        })();
    }

    private async getRequestPage<ItemType>(initialUrl: string, deserializer: (item: any) => ItemType, url?: string,
                                           params?: QueryParams): Promise<PagedResponse<ItemType>> {
        const pageUrl = url ?? initialUrl;

        const axiosCallOpts: AxiosRequestConfig = {
            url: pageUrl,
            method: 'get',
            headers: this.defaultHeaders
        }
        if (params) {
            if (pageUrl === initialUrl && Object.keys(params).length > 0) {
                axiosCallOpts.params = params;
            }
        }
        const res = await this.axiosInstance.request(axiosCallOpts);
        const json = res.data;

        return defaultMakePagedResponse(json, this.axiosInstance, this.defaultHeaders, deserializer, this.baseUrl);
    }

    private async deleteRequest(url: string): Promise<void> {
        const axiosCallOpts: AxiosRequestConfig = {
            url: url,
            method: 'delete',
            headers: this.defaultHeaders
        }
        return this.axiosInstance.request(axiosCallOpts);
    }


}