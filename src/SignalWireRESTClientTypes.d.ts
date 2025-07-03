import {PagedResponse} from "./PagedResponse";
import {SWML} from "./SWMLTypes";

export interface CreateCallRequestParamsBase {
    from: string;
    to: string;
    callerId?: string;
    fallbackUrl?: string;
}

export interface CreateCallRequestBase {
    command: 'dial',
    params: CreateCallRequestParamsBase
}

export interface CreateCallRequestUrlParams extends CreateCallRequestParamsBase {
    url: string;
}

export interface CreateCallRequestSwmlParams extends CreateCallRequestParamsBase {
    swml: SWML;
}

export interface CreateCallRequestWithUrl extends CreateCallRequestBase {
    type: 'url';
    params: CreateCallRequestUrlParams;
}

export interface CreateCallRequestWithSwml extends CreateCallRequestBase {
    type: 'swml';
    params: CreateCallRequestSwmlParams;
}

export type CreateCallRequest = CreateCallRequestWithUrl | CreateCallRequestWithSwml;

export interface UpdateCallRequestParamsBase {
    id: string;
    fallbackUrl?: string;
    status?: 'cancelled' | 'completed';
}

export interface UpdateCallRequestBase {
    command: 'update',
    params: UpdateCallRequestParamsBase
}

export interface UpdateCallRequestUrlParams extends UpdateCallRequestParamsBase {
    url: string;
}

export interface UpdateCallRequestSwmlParams extends UpdateCallRequestParamsBase {
    swml: SWML;
}

export interface UpdateCallRequestWithUrl extends UpdateCallRequestBase {
    type: 'url';
    params: UpdateCallRequestUrlParams;
}

export interface UpdateCallRequestWithSwml extends UpdateCallRequestBase {
    type: 'swml';
    params: UpdateCallRequestSwmlParams;
}

export type UpdateCallRequest = UpdateCallRequestWithUrl | UpdateCallRequestWithSwml;

export interface CallRequestCharge {
    description: string;
    amount: number;
}

export interface LogCharge {
    description: string;
    charge: number;
}

export interface CallResponse {
    id: string;
    from: string;
    to: string;
    direction: string;
    status: string;
    duration: number;
    durationMS: number;
    billableDuration: number;
    source: string;
    type: string;
    chargeDetails: CallRequestCharge[];
}

export interface CallsNamespace {
    createCall(request: CreateCallRequest): Promise<CallResponse>;

    updateCall(request: UpdateCallRequest): Promise<CallResponse>;
}

export interface CallingNamespace {
    calls: CallsNamespace;
}

export type ChunkingStrategy = 'sentence' | 'paragraph' | 'page' | 'sliding';

export type DocumentStatus = 'submitted' | 'in_process' | 'completed' | 'failed';

export interface DatasphereDocument {
    id: string;
    filename: string;
    status: DocumentStatus;
    tags: string[];
    chunkingStrategy: ChunkingStrategy;
    maxSentencesPerChunk: number;
    splitNewlines: boolean;
    overlapSize: number;
    chunkSize: number;
    numberOfChunks: number;
    createdAt: string;
    updatedAt: string;
}

export interface CreateDocumentRequestBase {
    chunkingStrategy: ChunkingStrategy;
    url: string;
    tags?: string[];
}

export interface CreateSentenceStrategyDocumentRequest extends CreateDocumentRequestBase {
    chunkingStrategy: 'sentence';
    maxSentencesPerChunk?: number;
    splitNewlines?: boolean;
}

export interface CreateSlidingStrategyDocumentRequest extends CreateDocumentRequestBase {
    chunkingStrategy: 'sliding';
    overlapSize?: number;
    chunkSize?: number;
}

export interface CreatePageStrategyDocumentRequest extends CreateDocumentRequestBase {
    chunkingStrategy: 'page';
}

export interface CreateParagraphStrategyDocumentRequest extends CreateDocumentRequestBase {
    chunkingStrategy: 'paragraph';
}

export type CreateDocumentRequest = CreateSentenceStrategyDocumentRequest | CreateSlidingStrategyDocumentRequest |
    CreatePageStrategyDocumentRequest | CreateParagraphStrategyDocumentRequest;

export interface SearchDocumentRequest {
    tags?: string[];
    documentId?: string;
    queryString: string;
    distance?: number;
    count?: number;
    language?: string;
    posToExpand?: string[];
    maxSynonyms?: number;
}

export interface SearchDocumentResult {
    text: string;
    documentId: string;
}

export interface SearchDocumentsResponse {
    chunks: SearchDocumentResult[];
}

export interface UpdateDocumentRequest {
    tags?: string[];
}

export interface DocumentsNamespace {
    listDocuments(): AsyncIterableIterator<DatasphereDocument>;

    listDocumentsPage(url?: string): Promise<PagedResponse<DatasphereDocument>>;

    createDocument(request: CreateDocumentRequest): Promise<DatasphereDocument>;

    searchDocument(request: SearchDocumentRequest): Promise<SearchDocumentsResponse>;

    updateDocument(id: string, request: UpdateDocumentRequest): Promise<DatasphereDocument>;

    deleteDocument(id: string): Promise<void>;
}

export interface DatasphereDocumentChunk {
    id: string;
    datasphereDocumentId: string;
    projectId: string;
    status: string;
    tags: string[];
    content: string;
    createdAt: string;
    updatedAt: string;
}

export interface ChunksNamespace {
    listChunks(documentId: string): AsyncIterableIterator<DatasphereDocumentChunk>;

    listChunksPage(documentId: string, url?: string): Promise<PagedResponse<DatasphereDocumentChunk>>;

    retrieveChunk(documentId: string, chunkId: string): Promise<DatasphereDocumentChunk>;

    deleteChunk(documentId: string, chunkId: string): Promise<void>;
}

export interface DatasphereNamespace {
    documents: DocumentsNamespace;
    chunks: ChunksNamespace;
}

export interface MfaTokenViaTextRequest {
    to: string;
    from?: string;
    message?: string
    tokenLength?: number;
    maxAttempts?: number;
    allowAlphas?: boolean;
    validFor?: number;
}

export interface MfaTokenViaTextResponse {
    id: string;
    success: boolean;
    to: string;
    channel: 'sms' | 'call';
}

export interface MfaTokenViaPhoneCallRequest {
    to: string;
    from?: string;
    message?: string;
    tokenLength?: string;
    maxAttempts?: string;
    allowAlphas?: string;
    validFor?: string;
}

export interface MfaTokenViaPhoneCallResponse {
    id: string;
    success: boolean;
    to: string;
    channel: 'sms' | 'call';
}

export interface VerifyMfaTokenRequest {
    token: string;
}

export interface VerifyMfaTokenResponse {
    success: boolean;
}

export interface MultiFactorAuthenticationNamespace {
    requestMfaTokenViaText(request: MfaTokenViaTextRequest): Promise<MfaTokenViaTextResponse>;

    requestMfaTokenViaPhoneCall(request: MfaTokenViaPhoneCallRequest): Promise<MfaTokenViaPhoneCallResponse>;

    verifyToken(mfaRequestId: string, request: VerifyMfaTokenRequest): Promise<VerifyMfaTokenResponse>;
}

export interface CreateVerifiedCallerIdRequest {
    name?: string;
    extension?: string;
    number: string;
}

export interface VerifiedCallerId {
    type: string;
    id: string;
    name: string;
    extension: string;
    number: string;
    verified: boolean;
    verifiedAt: string;
    status: 'Verified' | 'Awaiting Verification';
}

export interface ValidateVerificationCodeRequest {
    verificationCode: string;
}

export interface ListAllVerifiedCallerIdsOptions {
    filterName?: string,
    filterNumber?: string
}


export interface UpdateVerifiedCallerIdRequest {
    name: string;
}

export interface VerifiedCallerIdsNamespace {
    createVerifiedCallerId(request: CreateVerifiedCallerIdRequest): Promise<VerifiedCallerId>;

    validateVerificationCode(id: string, request: ValidateVerificationCodeRequest): Promise<VerifiedCallerId>;

    redialVerificationCall(id: string): Promise<VerifiedCallerId>;

    listAllVerifiedCallerIds(options?: ListAllVerifiedCallerIdsOptions): AsyncIterableIterator<VerifiedCallerId>;

    listAllVerifiedCallerIdsPage(options?: ListAllVerifiedCallerIdsOptions, url?: string): Promise<PagedResponse<VerifiedCallerId>>;

    retrieveVerifiedCallerId(id: string): Promise<VerifiedCallerId>;

    updateVerifiedCallerId(id: string, request: UpdateVerifiedCallerIdRequest): Promise<any>;

    deleteVerifiedCallerId(id: string): Promise<void>;
}

export type AddressType =
    'Apartment'
    | 'Basement'
    | 'Building'
    | 'Department'
    | 'Floor'
    | 'Office'
    | 'Penthouse'
    | 'Suite'
    | 'Trailer'
    | 'Unit';

export interface CreateAddressRequest {
    label: string;
    country: string;
    firstName: string;
    lastName: string;
    streetNumber: string;
    streetName: string;
    addressType?: AddressType;
    addressNumber?: string;
    city: string;
    state: string;
    postalCode: string;
}

export interface Address {
    id: string;
    label: string;
    country: string;
    firstName: string;
    lastName: string;
    streetNumber: string;
    streetName: string;
    addressType?: AddressType;
    addressNumber?: string;
    city: string;
    state: string;
    postalCode: string;
}

export interface AddressesNamespace {
    listAllAddresses(): AsyncIterableIterator<Address>;

    listAllAddressesPage(url?: string): Promise<PagedResponse<Address>>;

    retrieveAddress(addressId: string): Promise<Address>;

    deleteAddress(addressId: string): Promise<void>;

    createAddress(body: CreateAddressRequest): Promise<Address>;
}

export interface ListAllBrandsOptions {
    filterName?: string,
    filterState?: string
}

export type LegalEntityType = 'PRIVATE_PROFIT' | 'PUBLIC_PROFIT' | 'NON_PROFIT';

export type CompanyVertical =
    'REAL_ESTATE'
    | 'HEALTHCARE'
    | 'ENERGY'
    | 'ENTERTAINMENT'
    | 'RETAIL'
    | 'AGRICULTURE'
    | 'INSURANCE'
    | 'EDUCATION'
    | 'HOSPITALITY'
    | 'FINANCIAL'
    | 'GAMBLING'
    | 'CONSTRUCTION'
    | 'NGO'
    | 'MANUFACTURING'
    | 'GOVERNMENT'
    | 'TECHNOLOGY'
    | 'COMMUNICATION';

export interface CreateBrandRequest {
    name?: string;
    companyName: string;
    contactEmail?: string;
    contactPhone?: string;
    einIssuingCountry?: string;
    legalEntityType?: LegalEntityType;
    ein?: string;
    companyAddress?: string;
    companyVertical?: CompanyVertical
    companyWebsite?: string;
    cspBrandReference?: string;
    cspSelfRegistered?: boolean;
    statusCallbackUrl?: string;
}

export interface Brand {
    id: string;
    state: string;
    name: string;
    companyName: string;
    contactEmail: string;
    contactPhone: string;
    einIssuingCountry: string;
    legalEntityType: LegalEntityType;
    ein: string;
    companyAddress: string;
    companyVertical?: CompanyVertical
    companyWebsite: string;
    cspBrandReference?: string;
    cspSelfRegistered?: boolean;
    statusCallbackUrl?: string;
    createdAt: string;
    updatedAt: string;
}


export interface BrandsNamespace {
    listAllBrands(options?: ListAllBrandsOptions): AsyncIterableIterator<Brand>;

    listAllBrandsPage(options?: ListAllBrandsOptions, url?: string): Promise<PagedResponse<Brand>>;

    retrieveBrand(id: string): Promise<Brand>;

    createBrand(request: CreateBrandRequest): Promise<Brand>;
}

export interface UpdateCampaignRequest {
    name: string;
}

export type SMSUseCase =
    '2FA'
    | 'ACCOUNT_NOTIFICATION'
    | 'AGENTS_FRANCHISES'
    | 'CARRIER_EXEMPT'
    | 'CHARITY'
    | 'CUSTOMER_CARE'
    | 'DELIVERY_NOTIFICATION'
    | 'EMERGENCY'
    | 'FRAUD_ALERT'
    | 'HIGHER_EDUCATION'
    | 'K12_EDUCATION'
    | 'LOW_VOLUME_MIXED'
    | 'MARKETING'
    | 'MIXED'
    | 'POLITICAL'
    | 'POLITICAL_SECTION_527'
    | 'POLLING_VOTING'
    | 'PROXY'
    | 'PUBLIC_SERVICE_ANNOUNCEMENT'
    | 'SECURITY_ALERT'
    | 'SOCIAL'
    | 'SWEEPSTAKE'
    | 'TRIAL'
    | 'UCAAS_HIGH_VOLUME'
    | 'UCAAS_LOW_VOLUME'

export type SubUseCase =
    'CUSTOMER_CARE'
    | 'HIGHER_EDUCATION'
    | 'POLLING_VOTING'
    | 'PUBLIC_SERVICE_ANNOUNCEMENT'
    | 'MARKETING'
    | 'SECURITY_ALERT'
    | '2FA'
    | 'ACCOUNT_NOTIFICATION'
    | 'DELIVERY_NOTIFICATION'
    | 'FRAUD_ALERT'


export interface CreateCampaignRequest {
    name: string;
    smsUseCase: SMSUseCase;
    subUseCases?: SubUseCase[];
    description: string;
    sample1: string;
    sample2: string;
    sample3?: string;
    sample4?: string;
    sample5?: string;
    dynamicTemplates?: string;
    messageFlow: string;
    optInMessage?: string;
    optOutMessage: string;
    helpMessage: string;
    numberPoolingRequired: boolean;
    numberPoolingPerCampaign?: string;
    directLending: boolean;
    embeddedLink: boolean;
    embeddedPhone: boolean;
    ageGatedContent: boolean;
    leadGeneration: boolean;
    termsAndConditions: boolean;
}

export interface Campaign {
    id: string;
    name: string;
    smsUseCase: SMSUseCase;
    subUseCases?: SubUseCase[];
    description: string;
    sample1: string;
    sample2: string;
    sample3?: string;
    sample4?: string;
    sample5?: string;
    dynamicTemplates?: string;
    messageFlow: string;
    optInMessage?: string;
    optOutMessage: string;
    helpMessage: string;
    numberPoolingRequired: boolean;
    numberPoolingPerCampaign?: string;
    directLending: boolean;
    embeddedLink: boolean;
    embeddedPhone: boolean;
    ageGatedContent: boolean;
    leadGeneration: boolean;
    termsAndConditions: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CampaignsNamespace {
    listAllCampaigns(brandId: string): AsyncIterableIterator<Campaign>;

    listAllCampaignsPage(brandId: string, url?: string): Promise<PagedResponse<Campaign>>;

    retrieveCampaign(campaignId: string): Promise<Campaign>;

    updateCampaign(campaignId: string, request: UpdateCampaignRequest): Promise<Campaign>;

    createCampaign(brandId: string, request: CreateCampaignRequest): Promise<Campaign>;
}

export interface ListAllCampaignPhoneNumberAssignmentsOptions {
    filterState?: string
}


export interface ListAllCampaignPhoneNumberAssignmentOrdersOptions {
    filterState?: string
}


export interface CreateCampaignPhoneNumberAssignmentOrderRequest {
    phoneNumbers: string[];
    statusCallbackUrl?: string;
}

export interface CampaignPhoneNumberAssignmentOrder {
    id: string;
    state: string;
    processedAt: string;
    createdAt: string;
    updatedAt: string;
    statusCallbackUrl?: string;
}

export interface CampaignNumberAssignmentsNamespace {
    listAllPhoneNumberAssignments(campaignId: string, options?: ListAllCampaignPhoneNumberAssignmentsOptions): AsyncIterableIterator<any>;

    listAllPhoneNumberAssignmentsPage(campaignId: string, options?: ListAllCampaignPhoneNumberAssignmentsOptions, url?: string): Promise<PagedResponse<any>>;

    listAllPhoneNumberAssignmentOrders(campaignId: string, options?: ListAllCampaignPhoneNumberAssignmentOrdersOptions): AsyncIterableIterator<CampaignPhoneNumberAssignmentOrder>;

    listAllPhoneNumberAssignmentOrdersPage(campaignId: string, options?: ListAllCampaignPhoneNumberAssignmentOrdersOptions, url?: string): Promise<PagedResponse<CampaignPhoneNumberAssignmentOrder>>;

    retrievePhoneNumberAssignmentOrder(assignmentOrderId: string): Promise<CampaignPhoneNumberAssignmentOrder>;

    createPhoneNumberAssignmentOrder(campaignId: string, request: CreateCampaignPhoneNumberAssignmentOrderRequest): Promise<CampaignPhoneNumberAssignmentOrder>;

    deletePhoneNumberAssignment(numberAssignmentId: string): Promise<void>;
}

export interface CampaignRegistryApiNamespace {
    brands: BrandsNamespace;
    campaigns: CampaignsNamespace;
    campaignNumberAssignments: CampaignNumberAssignmentsNamespace;
}

export interface ListAllDomainApplicationsOptions {
    filterDomain?: string,
    filterName?: string
}

export interface RelayTopicDomainApplicationCallHandler {
    type: 'relay_topic'
    callRelayTopic?: string;
    callRelayTopicStatusCallbackUrl?: string;
}

export interface RelayApplicationDomainApplicationCallHandler {
    type: 'relay_application'
    callRelayApplication?: string;
}

export interface LamlWebhooksDomainApplicationCallHandler {
    type: 'laml_webhooks'
    callRequestUrl?: string;
    callRequestMethod?: HTTPMethod;
    callFallbackUrl?: string;
    callFallbackMethod?: HTTPMethod;
    callStatusCallbackUrl?: string;
    callStatusCallbackMethod?: HTTPMethod;
}

export interface LamlApplicationDomainApplicationCallHandler {
    type: 'laml_application'
    callLamlApplicationId?: string;
}

export interface VideoRoomDomainApplicationCallHandler {
    type: 'video_room'
    callVideoRoomId?: string;
}

export interface RelayScriptDomainApplicationCallHandler {
    type: 'relay_script'
    callRelayScriptUrl?: string;
}

export interface DialogflowDomainApplicationCallHandler {
    type: 'dialogflow'
    callDialogflowAgentId?: string;
}

export interface AiAgentDomainApplicationCallHandler {
    type: 'ai_agent'
    callAiAgentId?: string;
}

export interface CallFlowDomainApplicationCallHandler {
    type: 'call_flow'
    callFlowId?: string;
    callFlowVersion?: 'working_copy' | 'current_deployed';
}

export interface RelayContextDomainApplicationCallHandler {
    type: 'relay_context'
    callRelayContext?: string;
    callRelayContextStatusCallbackUrl?: string;
}

export type DomainApplicationCallHandler =
    RelayTopicDomainApplicationCallHandler
    | RelayApplicationDomainApplicationCallHandler
    | LamlWebhooksDomainApplicationCallHandler
    | LamlApplicationDomainApplicationCallHandler
    | VideoRoomDomainApplicationCallHandler
    | RelayScriptDomainApplicationCallHandler
    | DialogflowDomainApplicationCallHandler
    | AiAgentDomainApplicationCallHandler
    | CallFlowDomainApplicationCallHandler
    | RelayContextDomainApplicationCallHandler;

export type HTTPMethod = 'GET' | 'POST';

export interface UpdateDomainApplicationRequest {
    name?: string;
    identifier?: string;
    user?: string;
    callHandler?: DomainApplicationCallHandler;
    ipAuthEnabled?: boolean;
    ipAuth?: string[];
    encryption?: Encryption;
    codecs?: Codec[];
    ciphers?: Cipher[];
}

export type Encryption = 'optional' | 'required';

export type Codec = 'OPUS' | 'G722' | 'PCMU' | 'PCMA' | 'VP8' | 'H264';

export type Cipher =
    'AEAD_AES_256_GCM_8'
    | 'AES_256_CM_HMAC_SHA1_80'
    | 'AES_CM_128_HMAC_SHA1_80'
    | 'AES_256_CM_HMAC_SHA1_32'
    | 'AES_CM_128_HMAC_SHA1_32';

export type CreateDomainApplicationRequest = {
    name: string;
    identifier: string;
    user?: string;
    callHandler: DomainApplicationCallHandler;
    ipAuthEnabled?: boolean;
    ipAuth?: string[];
    encryption?: Encryption;
    codecs?: Codec[];
    ciphers?: Cipher[];
}

export interface DomainApplication {
    id: string;
    callHandler: DomainApplicationCallHandler;
    type?: string;
    domain?: string;
    name: string;
    identifier: string;
    user?: string;
    ipAuthEnabled?: boolean;
    ipAuth?: string[];
    encryption?: Encryption;
    codecs?: Codec[];
    ciphers?: Cipher[];
}

export interface DomainApplicationsNamespace {
    listAllDomainApplications(options?: ListAllDomainApplicationsOptions): AsyncIterableIterator<DomainApplication>;

    listAllDomainApplicationsPage(options?: ListAllDomainApplicationsOptions, url?: string): Promise<PagedResponse<DomainApplication>>;

    retrieveDomainApplication(id: string): Promise<DomainApplication>;

    updateDomainApplication(id: string, request: UpdateDomainApplicationRequest): Promise<DomainApplication>;

    createDomainApplication(request: CreateDomainApplicationRequest): Promise<DomainApplication>;

    deleteDomainApplication(id: string): Promise<void>;
}

export interface UpdateNumberGroupRequest {
    name: string;
}

export interface CreateNumberGroupRequest {
    name: string;
    stickySender: boolean;
}

export interface NumberGroup {
    id: string;
    name: string;
    stickySender: boolean;
    phoneNumberCount: number;
}

export interface NumberGroupsNamespace {
    listAllNumberGroups(): AsyncIterableIterator<NumberGroup>;

    listAllNumberGroupsPage(url?: string): Promise<PagedResponse<NumberGroup>>;

    retrieveNumberGroup(id: string): Promise<NumberGroup>;

    updateNumberGroup(id: string, body: UpdateNumberGroupRequest): Promise<NumberGroup>;

    createNumberGroup(request: CreateNumberGroupRequest): Promise<NumberGroup>;

    deleteNumberGroup(id: string): Promise<void>;
}

export interface CreateNumberGroupMemberRequest {
    phoneNumberId: string;
}

export type NumberCapability = 'sms' | 'mms' | 'voice' | 'fax';

export interface NumberGroupMembership {
    id: string;
    numberGroupId: string;
    phoneNumber: {
        id: string;
        name: string;
        number: string;
        capabilities: NumberCapability[];
    }
}

export interface NumberGroupsMembershipsNamespace {
    listAllNumberGroupMembers(numberGroupId: string): AsyncIterableIterator<NumberGroupMembership>;

    listAllNumberGroupMembersPage(numberGroupId: string, url?: string): Promise<PagedResponse<NumberGroupMembership>>;

    retrieveNumberGroupMember(numberGroupMemberId: string): Promise<NumberGroupMembership>;

    createNumberGroupMember(numberGroupId: string, request: CreateNumberGroupMemberRequest): Promise<NumberGroupMembership>;

    deleteNumberGroupMember(numberGroupMemberId: string): Promise<void>;
}

export interface ListAllPhoneNumbersOptions {
    filterName?: string,
    filterNumber?: string
}

export type PhoneNumberListingType = 'local' | 'toll-free';

export type PhoneNumberType = 'longcode' | 'toll-free';

export type CallReceiveMode = 'voice' | 'fax';

export interface RelayScriptPhoneNumberCallHandler {
    type: 'relay_script';
    callRelayScriptUrl: string;
}

export interface LamlWebhooksPhoneNumberCallHandler {
    type: 'laml_webhooks';
    callRequestUrl: string;
    callRequestMethod?: HTTPMethod;
    callFallbackUrl: string;
    callFallbackMethod?: HTTPMethod;
    callStatusCallbackUrl: string;
    callStatusCallbackMethod?: HTTPMethod;
}

export interface LamlApplicationPhoneNumberCallHandler {
    type: 'laml_application';
    callLamlApplicationId: string;
}


export interface DialogflowPhoneNumberCallHandler {
    type: 'dialogflow';
    callDialogflowAgentId: string;
}

export interface RelayTopicPhoneNumberCallHandler {
    type: 'relay_topic';
    callRelayTopic: string;
    callRelayTopicStatusCallbackUrl: string;
}

export interface RelayContextPhoneNumberCallHandler {
    type: 'relay_context';
    callRelayContext: string;
    callRelayContextStatusCallbackUrl: string;
}

export interface RelayApplicationPhoneNumberCallHandler {
    type: 'relay_application';
    callRelayApplication: string;
}

export interface RelayConnectorPhoneNumberCallHandler {
    type: 'relay_connector';
    callRelayConnectorId: string;
}

export interface RelaySipEndpointPhoneNumberCallHandler {
    type: 'relay_sip_endpoint';
    callSipEndpointId: string;
}

export interface RelayVertoPhoneNumberCallHandler {
    type: 'relay_verto_endpoint';
    callVertoResource: string;
}

export interface VideoRoomPhoneNumberCallHandler {
    type: 'video_room';
    callVideoRoomId: string;
}

export type PhoneNumberCallHandler =
    RelayScriptPhoneNumberCallHandler
    | RelayConnectorPhoneNumberCallHandler
    | LamlWebhooksPhoneNumberCallHandler
    | LamlApplicationPhoneNumberCallHandler
    | DialogflowPhoneNumberCallHandler
    | RelayTopicPhoneNumberCallHandler
    | RelayContextPhoneNumberCallHandler
    | RelayApplicationPhoneNumberCallHandler
    | RelaySipEndpointPhoneNumberCallHandler
    | RelayVertoPhoneNumberCallHandler
    | VideoRoomPhoneNumberCallHandler;

export interface LamlWebhooksPhoneNumberMessageHandler {
    type: 'laml_webhooks';
    messageRequestUrl: string;
    messageRequestMethod?: HTTPMethod;
    messageFallbackUrl: string;
    messageFallbackMethod?: HTTPMethod;
    messageStatusCallbackUrl: string;
    messageStatusCallbackMethod?: HTTPMethod;
}

export interface LamlApplicationPhoneNumberMessageHandler {
    type: 'laml_application';
    messageLamlApplicationId: string;
}

export interface RelayApplicationPhoneNumberMessageHandler {
    type: 'relay_application';
    messageRelayApplicationId: string;
}

export interface RelayTopicPhoneNumberMessageHandler {
    type: 'relay_topic';
    messageRelayTopic: string;
}

export interface RelayContextPhoneNumberMessageHandler {
    type: 'relay_context';
    messageRelayContext: string;
}

export type PhoneNumberMessageHandler =
    LamlWebhooksPhoneNumberMessageHandler
    | RelayApplicationPhoneNumberMessageHandler
    | RelayTopicPhoneNumberMessageHandler
    | RelayContextPhoneNumberMessageHandler
    | LamlApplicationPhoneNumberMessageHandler;

export interface UpdatePhoneNumberRequest {
    name: string;
    callReceiveMode?: CallReceiveMode;
    callHandler?: PhoneNumberCallHandler;
    messageHandler?: PhoneNumberMessageHandler;
}

export interface PhoneNumber {
    id: string;
    number: string;
    name: string;
    callHandler?: PhoneNumberCallHandler;
    messageHandler?: PhoneNumberMessageHandler;
    callReceiveMode: CallReceiveMode;
    capabilities: NumberCapability[];
    numberType: PhoneNumberType;
    e911AddressId?: string;
    createdAt: string;
    updatedAt: string;
    nextBilledAt: string;
    countryCode: string;
}

export interface PhoneNumberListing {
    e164: string;
    nationalNumberFormatted: string;
    internationalNumberFormatted: string;
    rateCenter: string;
    region: string;
    countryCode: string;
    capabilities: NumberCapability[];
}

export interface SearchForAvailablePhoneNumbersOptions {
    areacode?: string,
    numberType?: PhoneNumberListingType,
    startsWith?: string,
    contains?: string,
    endsWith?: string,
    maxResults?: string,
    region?: string,
    city?: string
}


export interface PurchasePhoneNumberRequest {
    number: string;
}

export interface PhoneNumbersNamespace {
    listAllPhoneNumbers(options?: ListAllPhoneNumbersOptions): AsyncIterableIterator<PhoneNumber>;

    listAllPhoneNumbersPage(options?: ListAllPhoneNumbersOptions, url?: string): Promise<PagedResponse<PhoneNumber>>;

    retrievePhoneNumber(id: string): Promise<PhoneNumber>;

    updatePhoneNumber(id: string, request: UpdatePhoneNumberRequest): Promise<PhoneNumber>;

    searchForAvailablePhoneNumbers(options?: SearchForAvailablePhoneNumbersOptions): AsyncIterableIterator<PhoneNumberListing>;

    searchForAvailablePhoneNumbersPage(options?: SearchForAvailablePhoneNumbersOptions, url?: string): Promise<PagedResponse<PhoneNumberListing>>;

    purchasePhoneNumber(request: PurchasePhoneNumberRequest): Promise<PhoneNumber>;

    releasePhoneNumber(id: string): Promise<void>;
}

export type LookupNumberInclude = 'carrier' | 'cnam';

export interface LookupNumberOptions {
    include?: LookupNumberInclude[];
}

export interface LookupNumberResponse {
    countryCodeNumber: number;
    nationalNumber: string;
    possibleNumber: boolean;
    validNumber: boolean;
    nationalNumberFormatted: string;
    internationalNumberFormatted: string;
    e164: string;
    location: string;
    countryCode: string;
    timeZones: string[];
    numberType: string;
    carrier?: {
        lrn: string;
        spid: string;
        ocn: string;
        lata: string;
        city: string;
        state: string;
        jurisdiction: string;
        lec: string;
        lineType: string;
    }
    cnam?: {
        callerId: string;
    }
}


export interface PhoneNumberLookupNamespace {
    lookupNumber(phoneNumber: string, options?: LookupNumberOptions): Promise<LookupNumberResponse>;
}

export interface ListAllSipEndpointsOptions {
    filterUsername?: string,
    filterCallerId?: string
}

export interface SipEndpointDefaultCallHandler {
    type: 'default';
}

export interface SipEndpointPassthroughCallHandler {
    type: 'passthrough';
}

export interface SipEndpointBlockPSTNCallHandler {
    type: 'block-pstn';
}

export interface SipEndpointAiAgentCallHandler {
    type: 'ai_agent';
    callAiAgentId: string;
}

export interface SipEndpointRelayContextCallHandler {
    type: 'relay_context';
    callRelayContext: string;
    callRelayContextStatusCallbackUrl: string;
}

export interface SipEndpointRelayScriptCallHandler {
    type: 'relay_script';
    callRelayScriptUrl: string;
}

export interface SipEndpointLamlWebhooksCallHandler {
    type: 'laml_webhooks';
    callRequestUrl: string;
    callRequestMethod?: HTTPMethod;
    callFallbackUrl: string;
    callFallbackMethod?: HTTPMethod;
    callStatusCallbackUrl: string;
    callStatusCallbackMethod?: HTTPMethod;
}

export interface SipEndpointLamlApplicationCallHandler {
    type: 'laml_application';
    callLamlApplicationId: string;
}

export interface SipEndpointDialogflowCallHandler {
    type: 'dialogflow';
    callDialogflowAgentId: string;
}

export interface SipEndpointVideoRoomCallHandler {
    type: 'video_room';
    callVideoRoomId: string;
}

export type SipEndpointCallHandler =
    SipEndpointDefaultCallHandler
    | SipEndpointPassthroughCallHandler
    | SipEndpointBlockPSTNCallHandler
    | SipEndpointAiAgentCallHandler
    | SipEndpointRelayContextCallHandler
    | SipEndpointRelayScriptCallHandler
    | SipEndpointLamlWebhooksCallHandler
    | SipEndpointLamlApplicationCallHandler
    | SipEndpointDialogflowCallHandler
    | SipEndpointVideoRoomCallHandler;

export type SipEndpointEncryption = 'default' | 'optional' | 'required';

export interface UpdateSipEndpointRequest {
    username?: string;
    password?: string;
    callerId?: string;
    sendAs?: string;
    ciphers?: Cipher[];
    codecs?: Codec[];
    encryption?: SipEndpointEncryption;
    callHandler?: SipEndpointCallHandler;
}

export interface CreateSipEndpointRequest {
    username: string;
    password: string;
    callerId?: string;
    sendAs?: string;
    ciphers?: Cipher[];
    codecs?: Codec[];
    encryption?: SipEndpointEncryption;
    callHandler?: SipEndpointCallHandler;
}

export interface SipEndpoint {
    id: string;
    username: string;
    callerId: string;
    sendAs: string;
    ciphers: Cipher[];
    codecs: Codec[];
    encryption: SipEndpointEncryption;
    callHandler: SipEndpointCallHandler;
}

export interface SipEndpointsNamespace {
    listAllSipEndpoints(options?: ListAllSipEndpointsOptions): AsyncIterableIterator<SipEndpoint>;

    listAllSipEndpointsPage(options?: ListAllSipEndpointsOptions, url?: string): Promise<PagedResponse<SipEndpoint>>;

    retrieveSipEndpoint(id: string): Promise<SipEndpoint>;

    updateSipEndpoint(id: string, request: UpdateSipEndpointRequest): Promise<SipEndpoint>;

    createSipEndpoint(request: CreateSipEndpointRequest): Promise<SipEndpoint>;

    deleteSipEndpoint(id: string): Promise<void>;
}

export interface UpdateSipProfileRequest {
    domainIdentifier?: string;
    defaultCodecs?: Codec[];
    defaultCiphers?: Cipher[];
    defaultEncryption?: Encryption;
    defaultSendAs?: string;
}

export interface SipProfile {
    domain: string;
    domainIdentifier: string;
    defaultCodecs: Codec[];
    defaultCiphers: Cipher[];
    defaultEncryption: Encryption;
    defaultSendAs: string;
}

export interface SipProfileNamespace {
    retrieveSipProfile(): Promise<SipProfile>;

    updateSipProfile(body: UpdateSipProfileRequest): Promise<SipProfile>;
}

export interface BaseRecording {
    id: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
    durationInSeconds: number;
    errorCode: string;
    price: number;
    priceUnit: string;
    status: string;
    url: string;
    stereo: boolean;
    byteSize: number;
    track: string;
}

export interface PSTNRecording extends BaseRecording {
    relayPSTNLegId: string;
}

export interface SIPRecording extends BaseRecording {
    relaySIPLegId: string;
}

export interface WebRTCRecording extends BaseRecording {
    relayWebRTCLegId: string;
}

export type Recording = PSTNRecording | SIPRecording | WebRTCRecording;

export interface RelayRecordingsNamespace {
    listRelayRecordings(): AsyncIterableIterator<Recording>;

    listRelayRecordingsPage(url?: string): Promise<PagedResponse<Recording>>;

    getRelayRecording(id: string): Promise<Recording>;

    deleteRelayRecording(id: string): Promise<void>;
}

export interface SpaceManagementNamespace {
    multiFactorAuthentication: MultiFactorAuthenticationNamespace;
    verifiedCallerIds: VerifiedCallerIdsNamespace;
    addresses: AddressesNamespace;
    campaignRegistryApi: CampaignRegistryApiNamespace;
    domainApplications: DomainApplicationsNamespace;
    numberGroups: NumberGroupsNamespace;
    numberGroupsMemberships: NumberGroupsMembershipsNamespace;
    phoneNumbers: PhoneNumbersNamespace;
    phoneNumberLookup: PhoneNumberLookupNamespace;
    sipEndpoints: SipEndpointsNamespace;
    sipProfile: SipProfileNamespace;
    relayRecordings: RelayRecordingsNamespace;
}

export type VideoRoomResolution = '720p' | '1080p';

export interface CreateVideoRoomRequest {
    name: string;
    displayName: string;
    description?: string;
    maxMembers?: number;
    quality?: VideoRoomResolution;
    joinFrom?: string;
    joinUntil?: string;
    removeAt?: string;
    removeAfterSecondsElapsed?: number;
    layout?: string;
    recordOnStart?: boolean;
    enableRoomPreviews?: boolean;
    audioVideoSync?: boolean;
}

export interface UpdateVideoRoomRequest {
    name?: string;
    displayName?: string;
    description?: string;
    maxMembers?: number;
    quality?: VideoRoomResolution;
    joinFrom?: string;
    joinUntil?: string;
    removeAt?: string;
    removeAfterSecondsElapsed?: number;
    layout?: string;
    recordOnStart?: boolean;
    enableRoomPreviews?: boolean;
    audioVideoSync?: boolean;
}

export interface VideoRoom {
    id: string;
    name: string;
    displayName: string;
    description: string;
    maxMembers: number;
    quality: VideoRoomResolution;
    joinFrom: string;
    joinUntil: string;
    removeAt: string;
    removeAfterSecondsElapsed: number;
    layout: string;
    recordOnStart: boolean;
    enableRoomPreviews: boolean;
    audioVideoSync: boolean;
    fps: number;
    activeSession?: VideoRoomSession;
    createdAt: string;
    updatedAt: string;
}

export interface VideoRoomSession {
    id: string;
    roomId: string;
    name: string;
    displayName: string;
    joinFrom: string;
    joinUntil: string;
    removeAt: string;
    removeAfterSecondsElapsed: number;
    layout: string;
    maxMembers: number;
    fps: number;
    quality: VideoRoomResolution;
    startTime: string;
    endTime: string;
    duration: number;
    status: string;
    recordOnStart: boolean;
    enableRoomPreviews: boolean;
    previewUrl: string;
    audioVideoSync: boolean;
}

export interface GetVideoRoomOptions {
    includeActiveSession?: string
}

export interface VideoRoomsNamespace {
    listRooms(options?: GetVideoRoomOptions): AsyncIterableIterator<VideoRoom>;

    listRoomsPage(options?: GetVideoRoomOptions, url?: string): Promise<PagedResponse<VideoRoom>>;

    retrieveRoomById(id: string): Promise<VideoRoom>;

    retrieveRoomByUniqueName(videoRoomName: string, options?: GetVideoRoomOptions): Promise<VideoRoom>;

    createRoom(request: CreateVideoRoomRequest): Promise<VideoRoom>;

    updateRoom(id: string, request: UpdateVideoRoomRequest): Promise<VideoRoom>;

    deleteRoom(id: string): Promise<void>;
}

export interface ListRoomSessionsRecordingsOptions {
    mediaTtl?: string
}

export interface ListRoomSessionsOptions {
    roomId?: string,
    roomName?: string,
    status?: string
}

export interface VideoRoomRecording {
    id: string;
    roomSessionId: string;
    status: string;
    startedAt: string;
    finishedAt: string;
    duration: number;
    sizeInBytes: number;
    format: string;
    uri: string;
    createdAt: string;
    updatedAt: string;
}

export interface VideoRoomSessionMember {
    id: string;
    name: string;
    roomSessionId: string;
    joinTime: string;
    leaveTime: string;
    duration: number;
}


export interface VideoRoomSessionsNamespace {
    listRoomSessions(options?: ListRoomSessionsOptions): AsyncIterableIterator<VideoRoomSession>;

    listRoomSessionsPage(options?: ListRoomSessionsOptions, url?: string): Promise<PagedResponse<VideoRoomSession>>;

    findRoomSessionById(sessionId: string): Promise<VideoRoomSession>;

    listRoomSessionsRecordings(sessionId: string, options?: ListRoomSessionsRecordingsOptions):
        AsyncIterableIterator<VideoRoomRecording>;

    listRoomSessionsRecordingsPage(sessionId: string, options?: ListRoomSessionsRecordingsOptions, url?: string):
        Promise<PagedResponse<VideoRoomRecording>>;

    listRoomSessionsMembers(sessionId: string): AsyncIterableIterator<VideoRoomSessionMember>;

    listRoomSessionsMembersPage(sessionId: string, url?: string): Promise<PagedResponse<VideoRoomSessionMember>>;
}

export interface VideoRoomTokenRequest {
    roomName: string;
    userName?: string;
    permissions?: string[];
    joinFrom?: string;
    joinUntil?: string;
    removeAt?: string;
    removeAfterSecondsElapsed?: number;
    joinAudioMuted?: boolean;
    joinVideoMuted?: boolean;
    autoCreateRoom?: boolean;
    enableRoomPreviews?: boolean;
    roomDisplayName?: string;
    endRoomSessionOnLeave?: boolean;
    joinAs?: 'audience' | 'member';
    mediaAllowed?: 'all' | 'video-only' | 'audio-only';
    roomMeta?: object;
    meta?: object;
    audioVideoSync?: boolean;
}

export interface VideoRoomToken {
    token: string;
}

export interface VideoRoomTokensNamespace {
    generateNewVideoRoomToken(request: VideoRoomTokenRequest): Promise<any>;
}

export interface ListRecordingsForVideoRoomOptions {
    mediaTtl?: string
}


export interface RetrieveVideoRoomRecordingOptions {
    mediaTtl?: string
}


export interface VideoRoomRecordingsNamespace {
    listRecordingsForRoom(options?: ListRecordingsForVideoRoomOptions): AsyncIterableIterator<VideoRoomRecording>;

    listRecordingsForRoomPage(options?: ListRecordingsForVideoRoomOptions, url?: string): Promise<PagedResponse<VideoRoomRecording>>;

    retrieveRecording(recordingId: string, options?: RetrieveVideoRoomRecordingOptions): Promise<any>;

    deleteRoomRecording(recordingId: string): Promise<any>;
}

export interface VideoRoomStream {
    id: string;
    url: string;
    streamType: string;
    width: number;
    height: number;
    fps: number;
    createdAt: string;
    updatedAt: string;
}

export interface CreateStreamRequest {
    url: string;
}

export interface UpdateStreamRequest {
    url?: string;
}

export interface VideoStreamsNamespace {
    listStreamsByRoomId(roomId: string): AsyncIterableIterator<VideoRoomStream>;

    listStreamsByRoomIdPage(roomId: string, url?: string): Promise<PagedResponse<VideoRoomStream>>;

    listStreamsByConferenceId(conferenceId: string): AsyncIterableIterator<VideoRoomStream>;

    listStreamsByConferenceIdPage(conferenceId: string, url?: string): Promise<PagedResponse<VideoRoomStream>>;

    createStreamForRoom(roomId: string, request: CreateStreamRequest): Promise<VideoRoomStream>;

    createStreamForConference(conferenceId: string, request: CreateStreamRequest): Promise<VideoRoomStream>;

    retrieveStream(streamId: string): Promise<VideoRoomStream>;

    updateStream(streamId: string, request: UpdateStreamRequest): Promise<VideoRoomStream>;

    deleteStream(streamId: string): Promise<void>;
}

export interface ListVideoConferencesOptions {
    includeActiveSession?: string
}


export interface RetrieveVideoConferenceOptions {
    includeActiveSession?: string
}

export type VideoConferenceSize = 'small' | 'medium' | 'large';

export interface CreateVideoConferenceRequest {
    name: string;
    displayName?: string;
    description?: string;
    joinFrom?: string;
    joinUntil?: string;
    quality?: VideoRoomResolution;
    layout?: string;
    size?: VideoConferenceSize;
    recordOnStart?: boolean;
    enableRoomPreviews?: boolean;
    enableChat?: boolean;
    darkPrimary?: string;
    darkBackground?: string;
    darkForeground?: string;
    darkSuccess?: string;
    darkNegative?: string;
    lightPrimary?: string;
    lightBackground?: string;
    lightForeground?: string;
    lightSuccess?: string;
    lightNegative?: string;
}

export interface UpdateVideoConferenceRequest {
    name?: string;
    displayName?: string;
    description?: string;
    joinFrom?: string;
    joinUntil?: string
    quality?: VideoRoomResolution;
    layout?: string;
    size?: VideoConferenceSize;
    recordOnStart?: boolean;
    enableRoomPreviews?: boolean;
    enableChat?: boolean;
    darkPrimary?: string;
    darkBackground?: string;
    darkForeground?: string;
    darkSuccess?: string;
    darkNegative?: string;
    lightPrimary?: string;
    lightBackground?: string;
    lightForeground?: string;
    lightSuccess?: string;
    lightNegative?: string;
}

export interface VideoConference {
    id: string;
    name: string;
    displayName: string;
    description: string;
    joinFrom: string;
    joinUntil: string;
    quality: VideoRoomResolution;
    layout: string;
    size: VideoConferenceSize;
    recordOnStart: boolean;
    enableRoomPreviews: boolean;
    enableChat: boolean;
    darkPrimary: string;
    darkBackground: string;
    darkForeground: string;
    darkSuccess: string;
    darkNegative: string;
    lightPrimary: string;
    lightBackground: string;
    lightForeground: string;
    lightSuccess: string;
    lightNegative: string;
    createdAt: string;
    updatedAt: string;
    activeSession?: VideoRoomSession;
}

export interface VideoConferencesNamespace {
    listVideoConferences(options?: ListVideoConferencesOptions): AsyncIterableIterator<VideoConference>;

    listVideoConferencesPage(options?: ListVideoConferencesOptions, url?: string): Promise<PagedResponse<VideoConference>>;

    retrieveVideoConference(conferenceId: string, options?: RetrieveVideoConferenceOptions): Promise<VideoConference>;

    createVideoConference(request: CreateVideoConferenceRequest): Promise<VideoConference>;

    updateVideoConference(conferenceId: string, request: UpdateVideoConferenceRequest): Promise<VideoConference>;

    deleteVideoConference(conferenceId: string): Promise<void>;
}

export interface VideoConferenceToken {
    id: string;
    name: string;
    token: string;
    scopes: string[];
}

export interface VideoConferenceTokensNamespace {
    listConferenceTokens(conferenceId: string): AsyncIterableIterator<VideoConferenceToken>;

    listConferenceTokensPage(conferenceId: string, url?: string): Promise<PagedResponse<VideoConferenceToken>>;

    retrieveConferenceToken(conferenceTokenId: string): Promise<VideoConferenceToken>;

    resetConferenceToken(conferenceTokenId: string): Promise<VideoConferenceToken>;
}

export interface ListVideoLogsOptions {
    includeDeleted?: string,
    createdBefore?: string,
    createdOn?: string,
    createdAfter?: string,
    pageSize?: string
}

export interface VideoLog {
    id: string;
    source: string;
    type: string;
    url: string;
    roomName: string;
    status: string;
    startTime: string;
    endTime: string;
    charge: number;
    chargeDetails: LogCharge[];
    createdAt: string;
    updatedAt: string;
}


export interface VideoLogsNamespace {
    listLogs(options?: ListVideoLogsOptions): AsyncIterableIterator<VideoLog>;

    listLogsPage(options?: ListVideoLogsOptions, url?: string): Promise<PagedResponse<VideoLog>>;

    retrieveLog(id: string): Promise<VideoLog>;
}

export interface VideoNamespace {
    rooms: VideoRoomsNamespace;
    roomSessions: VideoRoomSessionsNamespace;
    roomTokens: VideoRoomTokensNamespace;
    roomRecordings: VideoRoomRecordingsNamespace;
    streams: VideoStreamsNamespace;
    conferences: VideoConferencesNamespace;
    conferenceTokens: VideoConferenceTokensNamespace;
    logs: VideoLogsNamespace;
}

export interface ListMessageLogsOptions {
    includeDeleted?: string,
    createdBefore?: string,
    createdOn?: string,
    createdAfter?: string,
    pageSize?: string
}

export interface MessageLog {
    id: string;
    from: string;
    to: string;
    status: string;
    direction: string;
    kind: string;
    source: string;
    type: string;
    url: string;
    numberOfSegments: number;
    charge: number;
    chargeDetails: LogCharge[];
    createdAt: string;
}


export interface MessageLogsNamespace {
    listLogs(options?: ListMessageLogsOptions): AsyncIterableIterator<MessageLog>;

    listLogsPage(options?: ListMessageLogsOptions, url?: string): Promise<PagedResponse<MessageLog>>;

    retrieveLog(id: string): Promise<MessageLog>;
}

export interface MessageNamespace {
    logs: MessageLogsNamespace;
}

export interface VoiceLogsListLogsOptions {
    includeDeleted?: string,
    createdBefore?: string,
    createdOn?: string,
    createdAfter?: string,
    pageSize?: number
}

export interface VoiceLog {
    id: string;
    from: string;
    to: string;
    direction: string;
    status: string;
    duration: number;
    durationMS: number;
    billingMS: number;
    source: string;
    type: string;
    url: string;
    charge: number;
    chargeDetails: LogCharge[];
    createdAt: string;
}

export interface VoiceLogsNamespace {
    listLogs(options?: VoiceLogsListLogsOptions): AsyncIterableIterator<VoiceLog>;

    listLogsPage(options?: VoiceLogsListLogsOptions, url?: string): Promise<PagedResponse<VoiceLog>>;

    retrieveLog(voiceLogId: string): Promise<any>;
}

export interface VoiceNamespace {
    logs: VoiceLogsNamespace;
}

export interface ListFaxLogsOptions {
    includeDeleted?: string,
    createdBefore?: string,
    createdOn?: string,
    createdAfter?: string,
    pageSize?: string
}

export interface FaxLog {
    id: string;
    from: string;
    to: string;
    status: string;
    direction: string;
    source: string;
    type: string;
    url: string;
    remoteStation: string;
    charge: number;
    numberOfPages: number;
    quality: string;
    chargeDetails: LogCharge[];
    createdAt: string;
    updatedAt: string;
    errorCode: string;
    errorMessage: string;
}


export interface FaxLogsNamespace {
    listLogs(options?: ListFaxLogsOptions): AsyncIterableIterator<FaxLog>;

    listLogsPage(options?: ListFaxLogsOptions, url?: string): Promise<PagedResponse<FaxLog>>;

    retrieveFaxLog(id: string): Promise<FaxLog>;
}

export interface FaxNamespace {
    logs: FaxLogsNamespace;
}

export type Permission = 'calling' | 'chat' | 'fax' | 'management' | 'messaging' | 'numbers' | 'pubsub' | 'storage'
    | 'tasking' | 'video' | 'datasphere';

export interface CreateApiTokenRequest {
    name: string;
    permissions: Permission[];
    subProjectId?: string;
}

export interface UpdateApiTokenRequest {
    name?: string;
    permissions?: Permission[];
}

export interface ApiToken {
    id: string;
    name: string;
    permissions: Permission[];
    token: string;
}

export interface ProjectApiTokensNamespace {
    createApiToken(request: CreateApiTokenRequest): Promise<ApiToken>;

    updateApiToken(id: string, request: UpdateApiTokenRequest): Promise<ApiToken>;

    deleteApiToken(id: string): Promise<void>;
}

export interface ProjectNamespace {
    apiTokens: ProjectApiTokensNamespace;
}

export interface GeneratePubSubTokenRequest {
    ttl: number;
    channels: {
        [name: string]: {
            read: boolean;
            write: boolean;
        }
    }
    memberId?: string;
    state?: object;
}

export interface GeneratePubSubTokenResponse {
    token: string;
}

export interface PubSubTokenNamespace {
    generateToken(request: GeneratePubSubTokenRequest): Promise<GeneratePubSubTokenResponse>;
}

export interface PubSubNamespace {
    tokens: PubSubTokenNamespace;
}

export interface GenerateChatTokenRequest {
    ttl: number;
    channels: {
        [name: string]: {
            read: boolean;
            write: boolean;
        }
    };
    memberId?: string;
    state?: any;
}

export interface ChatToken {
    token: string;
}

export interface ChatNamespace {
    generateChatToken(request: GenerateChatTokenRequest): Promise<ChatToken>;
}

export interface ListFabricResourcesOptions {
    type?: string
}


export interface AssignResourceAsPhoneRouteHandlerRequest {
    phoneRouteId: string;
    handler: string;
}

export interface AssignResourceAsSipEndpointHandlerRequest {
    sipEndpointId: string;
}

export interface AssignResourceAsDomainApplicationHandlerRequest {
    domainApplicationId: string;
}

export interface FabricResourceBase {
    id: string;
    projectId: string;
    displayName: string;
    type: 'ai_agent' | 'call_flow' | 'dialogflow_agent' | 'sip_endpoint' | 'subscriber' | 'freeswitch_connector' |
        'relay_application' | 'swml_script';
    createdAt: string;
    updatedAt: string;
}

export interface FabricResourceAddress {
    id: string;
    resourceId: string;
    name: string;
    displayName: string;
    coverUrl: string;
    previewUrl: string;
    locked: boolean;
    channels: {
        video: string;
        audio: string;
        messaging: string;
    }

}

export interface UpdateFabricSubscriberRequest {
    password?: string;
    email: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
    jobTitle?: string;
    timezone?: string
    country?: string;
    region?: string;
    companyName?: string;
}

export interface CreateFabricSubscriberRequest {
    password?: string;
    email: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
    jobTitle?: string;
    timezone?: string;
    country?: string;
    region?: string;
    companyName?: string;
}

export interface FabricSubscriber {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    jobTitle: string;
    timezone: string;
    country: string;
    region: string;
    companyName: string;
}

export interface FabricSubscriberResponse extends FabricResourceBase {
    type: 'subscriber';
    subscriber: FabricSubscriber;
}

export interface CreateFabricSubscriberTokenRequest {
    reference: string;
    expireAt?: number;
    applicationId?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
    jobTitle?: string;
    timezone?: string;
    country?: string;
    region?: string;
    companyName?: string;
}

export interface FabricSubscriberToken {
    subscriberId: string;
    token: string;
    refreshToken: string;
}

export interface FabricSubscribersNamespace {
    listSubscribers(): AsyncIterableIterator<FabricSubscriberResponse>;

    listSubscribersPage(url?: string): Promise<PagedResponse<FabricSubscriberResponse>>;

    retrieveSubscriber(id: string): Promise<FabricSubscriberResponse>;

    listAddressesForSubscribers(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForSubscribersPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    updateSubscriber(id: string, request: UpdateFabricSubscriberRequest): Promise<FabricSubscriberResponse>;

    deleteSubscriber(id: string): Promise<void>;

    createSubscriber(request: CreateFabricSubscriberRequest): Promise<FabricSubscriberResponse>;

    createSubscriberToken(request: CreateFabricSubscriberTokenRequest): Promise<FabricSubscriberToken>;
}

export interface CreateSubscriberGuestTokenRequest {
    allowedAddresses: string[];
    expireAt?: number;
}

export interface SubscriberGuestToken {
    token: string;
    refreshToken: string;
}

export interface ExchangeRefreshTokenRequest {
    refreshToken: string;
}

export interface CreateSubscriberInviteTokenRequest {
    addressId: string;
    expireAt?: number;
}

export interface SubscriberInviteToken {
    token: string;
}

export interface SubscriberTokenNamespace {
    createSubscriberGuestToken(request: CreateSubscriberGuestTokenRequest): Promise<SubscriberGuestToken>;

    exchangeRefreshToken(request: ExchangeRefreshTokenRequest): Promise<SubscriberGuestToken>;

    createSubscriberInviteToken(request: CreateSubscriberInviteTokenRequest): Promise<SubscriberInviteToken>;
}

export interface SubscriberSipEndpoint {
    id: string;
    username: string;
    callerId: string;
    sendAs: string;
    ciphers: Cipher[];
    codecs: Codec[];
    encryption: 'default' | 'required' | 'optional';
}

export interface CreateSubscriberSipEndpointRequest {
    username: string;
    password: string;
    callerId: string;
    sendAs: string;
    ciphers: Cipher[];
    codecs: Codec[];
    encryption: 'default' | 'required' | 'optional';
}

export interface UpdateSubscriberSipEndpointRequest {
    username?: string;
    password?: string;
    callerId?: string;
    sendAs?: string;
    ciphers?: Cipher[];
    codecs?: Codec[];
    encryption?: 'default' | 'required' | 'optional';
}

export interface SubscriberSipEndpointsNamespace {
    listSipEndpoints(fabricSubscriberId: string): AsyncIterableIterator<SubscriberSipEndpoint>;

    listSipEndpointsPage(fabricSubscriberId: string, url?: string): Promise<PagedResponse<SubscriberSipEndpoint>>;

    retrieveSipEndpoint(id: string, fabricSubscriberId: string): Promise<SubscriberSipEndpoint>;

    createSipEndpoint(fabricSubscriberId: string, request: CreateSubscriberSipEndpointRequest): Promise<SubscriberSipEndpoint>;

    updateSipEndpoint(id: string, fabricSubscriberId: string, request: UpdateSubscriberSipEndpointRequest): Promise<SubscriberSipEndpoint>;

    deleteSipEndpoint(id: string, fabricSubscriberId: string): Promise<void>;
}

export interface FabricAddress {
    id: string;
    name: string;
    displayName: string;
    type: string;
    coverUrl: string;
    previewUrl: string;
    locked: boolean;
    channels: {
        video: string;
        audio: string;
        messaging: string;
    }
    createdAt: string;
}

export interface FabricAddressNamespace {
    listAddresses(token: String): AsyncIterableIterator<FabricAddress>;

    listAddressesPage(token: String, url?: string): Promise<PagedResponse<FabricAddress>>;

    getAddress(id: string, token: string): Promise<FabricAddress>;
}

export interface CreateEmbedsTokenRequest {
    token: string;
}

export interface EmbedsToken {
    token: string;
}

export interface EmbedsTokenNamespace {
    createEmbedsToken(request: CreateEmbedsTokenRequest): Promise<EmbedsToken>;
}

export interface SwmlWebhook {
    id: string;
    name: string;
    usedFor: string;
    primaryRequestUrl: string;
    primaryRequestMethod: HTTPMethod;
    fallbackRequestUrl: string;
    fallbackRequestMethod: HTTPMethod;
    statusCallbackUrl: string;
    statusCallbackMethod: HTTPMethod;
}

export interface SwmlWebhookResponse extends FabricResourceBase {
    type: 'swml_webhook';
    swmlWebhook: SwmlWebhook;
}

export interface CreateSwmlWebhookRequest {
    name?: string;
    usedFor?: string;
    primaryRequestUrl: string;
    primaryRequestMethod?: HTTPMethod;
    fallbackRequestUrl?: string;
    fallbackRequestMethod?: HTTPMethod;
    statusCallbackUrl?: string;
    statusCallbackMethod?: HTTPMethod;
}

export interface UpdateSwmlWebhookRequest {
    name?: string;
    usedFor?: string;
    primaryRequestUrl?: string;
    primaryRequestMethod?: HTTPMethod;
    fallbackRequestUrl?: string;
    fallbackRequestMethod?: HTTPMethod;
    statusCallbackUrl?: string;
    statusCallbackMethod?: HTTPMethod;
}

export interface SwmlWebhookNamespace {
    listSwmlWebhooks(): AsyncIterableIterator<SwmlWebhookResponse>;

    listSwmlWebhooksPage(url?: string): Promise<PagedResponse<SwmlWebhookResponse>>;

    retrieveSwmlWebhook(id: string): Promise<SwmlWebhookResponse>;

    createSwmlWebhook(request: CreateSwmlWebhookRequest): Promise<SwmlWebhookResponse>;

    updateSwmlWebhook(id: string, request: UpdateSwmlWebhookRequest): Promise<SwmlWebhookResponse>;

    deleteSwmlWebhook(id: string): Promise<void>;

    listSwmlWebhookAddresses(id: string): AsyncIterableIterator<FabricAddress>;

    listSwmlWebhookAddressesPage(id: string, url?: string): Promise<PagedResponse<FabricAddress>>;

}

export interface SwmlApplication {
    id: string;
    name: string;
    handleCallsUsing: 'external_url' | 'script';
    callHandlerUrl: string;
    callHandlerMethod: HTTPMethod;
    callHandlerFallbackUrl: string;
    callHandlerFallbackMethod: HTTPMethod;
    callStatusCallbackUrl: string;
    callStatusCallbackMethod: HTTPMethod;
    callHandlerScript: any;
}

export interface SwmlApplicationResponse extends FabricResourceBase {
    type: 'swml_application';
    swmlApplication: SwmlApplication;
}

export interface CreateSwmlApplicationRequest {
    name: string;
    handleCallsUsing: 'external_url' | 'script';
    callHandlerUrl?: string;
    callHandlerMethod?: HTTPMethod;
    callHandlerFallbackUrl?: string;
    callHandlerFallbackMethod?: HTTPMethod;
    callStatusCallbackUrl?: string;
    callStatusCallbackMethod?: HTTPMethod;
    callHandlerScript?: SWML;
}

export interface UpdateSwmlApplicationRequest {
    name?: string;
    handleCallsUsing?: 'external_url' | 'script';
    callHandlerUrl?: string;
    callHandlerMethod?: HTTPMethod;
    callHandlerFallbackUrl?: string;
    callHandlerFallbackMethod?: HTTPMethod;
    callStatusCallbackUrl?: string;
    callStatusCallbackMethod?: HTTPMethod;
    callHandlerScript?: SWML;
}

export interface SwmlApplicationNamespace {
    listSwmlApplications(): AsyncIterableIterator<SwmlApplicationResponse>;

    listSwmlApplicationsPage(url?: string): Promise<PagedResponse<SwmlApplicationResponse>>;

    retrieveSwmlApplication(id: string): Promise<SwmlApplicationResponse>;

    createSwmlApplication(request: CreateSwmlApplicationRequest): Promise<SwmlApplicationResponse>;

    updateSwmlApplication(id: string, request: UpdateSwmlApplicationRequest): Promise<SwmlApplicationResponse>;

    deleteSwmlApplication(id: string): Promise<void>;

    listSwmlApplicationAddresses(id: string): AsyncIterableIterator<FabricAddress>;

    listSwmlApplicationAddressesPage(id: string, url?: string): Promise<PagedResponse<FabricAddress>>;
}

export interface LamlApplication {
    id: string;
    accountSid: string;
    voiceUrl: string;
    voiceMethod: HTTPMethod;
    voiceFallbackUrl: string;
    voiceFallbackMethod: HTTPMethod;
    statusCallbackUrl: string;
    statusCallbackMethod: HTTPMethod;
    voiceCallerIdLookup: boolean;
    smsUrl: string;
    smsMethod: HTTPMethod;
    smsFallbackUrl: string;
    smsFallbackMethod: HTTPMethod;
    smsStatusCallbackUrl: string;
    smsStatusCallbackMethod: HTTPMethod;
    messageStatusCallback: string;
    apiVersion: string;
    requestUrl: string;
    displayName: string;
}

export interface LamlApplicationResponse extends FabricResourceBase {
    type: 'cxml_application';
    lamlApplication: LamlApplication;
}

export interface UpdateLamlApplicationRequest {
    name?: string;
    callRequestUrl?: string;
    callRequestMethod?: HTTPMethod;
    callFallbackUrl?: string;
    callFallbackMethod?: HTTPMethod;
    callStatusUrl?: string;
    callStatusMethod?: HTTPMethod;
    messageRequestUrl?: string;
    messageRequestMethod?: HTTPMethod;
    messageFallbackUrl?: string;
    messageFallbackMethod?: HTTPMethod;
    messageStatusUrl?: string;
    messageStatusMethod?: HTTPMethod;
}

export interface LamlApplicationNamespace {
    listLamlApplications(): AsyncIterableIterator<LamlApplicationResponse>;

    listLamlApplicationsPage(url?: string): Promise<PagedResponse<LamlApplicationResponse>>;

    retrieveLamlApplication(id: string): Promise<LamlApplicationResponse>;

    updateLamlApplication(id: string, request: UpdateLamlApplicationRequest): Promise<LamlApplicationResponse>;

    deleteLamlApplication(id: string): Promise<void>;

    listLamlApplicationAddresses(id: string): AsyncIterableIterator<FabricAddress>;

    listLamlApplicationAddressesPage(id: string, url?: string): Promise<PagedResponse<FabricAddress>>;
}

export interface CXMLScript {
    id: string;
    contents: string;
    requestCount: number;
    lastAccessedAt: string;
    requestUrl: string;
    displayName: string;
}

export interface CXMLScriptResponse extends FabricResourceBase {
    type: 'laml_bin';
    lamlBin: CXMLScript;
}

export interface CreateCXMLScriptRequest {
    name: string;
    contents: string;
}

export interface UpdateCXMLScriptRequest {
    name?: string;
    contents?: string;
}

export interface CXMLScriptNamespace {
    listCXMLScripts(): AsyncIterableIterator<CXMLScriptResponse>;

    listCXMLScriptsPage(url?: string): Promise<PagedResponse<CXMLScriptResponse>>;

    retrieveCXMLScript(id: string): Promise<CXMLScriptResponse>;

    createCXMLScript(request: CreateCXMLScriptRequest): Promise<CXMLScriptResponse>;

    updateCXMLScript(id: string, request: UpdateCXMLScriptRequest): Promise<CXMLScriptResponse>;

    deleteCXMLScript(id: string): Promise<void>;

    listCXMLScriptAddresses(id: string): AsyncIterableIterator<FabricAddress>;

    listCXMLScriptAddressesPage(id: string, url?: string): Promise<PagedResponse<FabricAddress>>;
}

export interface CXMLWebhook {
    id: string;
    name: string;
    usedFor: 'calling' | 'messaging';
    primaryRequestUrl: string;
    primaryRequestMethod: HTTPMethod;
    fallbackRequestUrl: string;
    fallbackRequestMethod: HTTPMethod;
    statusCallbackUrl: string;
    statusCallbackMethod: HTTPMethod;
}

export interface CXMLWebhookResponse extends FabricResourceBase {
    type: 'cxml_webhook';
    cxmlWebhook: CXMLWebhook;
}

export interface CreateCXMLWebhookRequest {
    name?: string;
    usedFor?: 'calling' | 'messaging';
    primaryRequestUrl: string;
    primaryRequestMethod?: HTTPMethod;
    fallbackRequestUrl?: string;
    fallbackRequestMethod?: HTTPMethod;
    statusCallbackUrl?: string;
    statusCallbackMethod?: HTTPMethod;
}

export interface UpdateCXMLWebhookRequest {
    name?: string;
    usedFor?: 'calling' | 'messaging';
    primaryRequestUrl?: string;
    primaryRequestMethod?: HTTPMethod;
    fallbackRequestUrl?: string;
    fallbackRequestMethod?: HTTPMethod;
    statusCallbackUrl?: string;
    statusCallbackMethod?: HTTPMethod;
}

export interface CXMLWebhookNamespace {
    listCXMLWebhooks(): AsyncIterableIterator<CXMLWebhookResponse>;

    listCXMLWebhooksPage(url?: string): Promise<PagedResponse<CXMLWebhookResponse>>;

    retrieveCXMLWebhook(id: string): Promise<CXMLWebhookResponse>;

    createCXMLWebhook(request: CreateCXMLWebhookRequest): Promise<CXMLWebhookResponse>;

    updateCXMLWebhook(id: string, request: UpdateCXMLWebhookRequest): Promise<CXMLWebhookResponse>;

    deleteCXMLWebhook(id: string): Promise<void>;

    listCXMLWebhookAddresses(id: string): AsyncIterableIterator<FabricAddress>;

    listCXMLWebhookAddressesPage(id: string, url?: string): Promise<PagedResponse<FabricAddress>>;
}

export interface UpdateCallFlowRequest {
    title: string;
    documentVersion: number;
    flowData?: object;
    relayml?: object;
}

export interface CreateCallFlowRequest {
    title: string;
    relayml: object;
    flowData: object;
}

export interface CallFlow {
    id: string;
    title: string;
    flowData: object;
    relayml: object;
    documentVersion: number;
}

export interface CallFlowResponse extends FabricResourceBase {
    type: 'call_flow'
    callFlow: CallFlow
}

export interface CallFlowVersion {
    id: string;
    createdAt: string;
    updatedAt: string;
    documentVersion: number;
    flowData: object;
    relayml: object;
}

export interface CallFlowsNamespace {
    listCallFlows(): AsyncIterableIterator<CallFlowResponse>;

    listCallFlowsPage(url?: string): Promise<PagedResponse<CallFlowResponse>>;

    retrieveCallFlow(id: string): Promise<CallFlowResponse>;

    listAddressesForCallFlow(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForCallFlowPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    listCallFlowVersions(id: string): AsyncIterableIterator<CallFlowVersion>;

    listCallFlowVersionsPage(id: string, url?: string): Promise<PagedResponse<CallFlowVersion>>;

    updateCallFlow(id: string, request: UpdateCallFlowRequest): Promise<CallFlowResponse>;

    deleteCallFlow(id: string): Promise<void>;

    createCallFlow(request: CreateCallFlowRequest): Promise<CallFlowResponse>;
}

export interface ContextStepEnd {
    name: string;
    stepType: 'end';
    text: string;
    stepCriteria?: string;
    functions?: string[];
    validContexts?: string[];
    skipUserTurn?: boolean;
    end?: boolean;
}

export interface ContextStepValidSteps {
    name: string;
    stepType: 'validSteps';
    text: string;
    stepCriteria?: string;
    functions?: string[];
    validContexts?: string[];
    skipUserTurn?: boolean;
    validSteps?: string[];
}

export type ContextStep = ContextStepEnd | ContextStepValidSteps;

export interface Pronounce {
    replace: string;
    with: string;
    ignoreCase?: boolean;
}

export interface Language {
    name: string;
    code: string;
    voice: string;
    functionFillers?: string[];
    speechFillers?: string[];
}

export type NativeFunction = 'check_time' | 'wait_seconds';

export interface SWAIGInclude {
    functions: string[];
    url: string;
    metaData?: {
        [key: string]: any;
    };
}

export interface SWAIGStringFunctionProperty {
    description?: string;
    nullable?: boolean;
    type: 'string';
    enum?: string[];
    default?: string;
    pattern?: string;
    format?: 'date_time' | 'time' | 'date' | 'duration' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'uri' | 'uuid';
}

export interface SWAIGIntegerFunctionProperty {
    description?: string;
    nullable?: boolean;
    type: 'integer';
    enum?: number[];
    default?: number;
}

export interface SWAIGNumberFunctionProperty {
    description?: string;
    nullable?: boolean;
    type: 'number';
    enum?: object[];
    default?: object;
}

export interface SWAIGBooleanFunctionProperty {
    description?: string;
    nullable?: boolean;
    type: 'boolean';
    default?: boolean;
}

export interface SWAIGArrayFunctionProperty {
    description?: string;
    nullable?: boolean;
    type: 'array'
    default?: any[];
    items?: any
}

export interface SWAIGObjectFunctionProperty {
    description?: string;
    nullable?: boolean;
    type: 'object';
    default?: object;
    properties?: object;
    required?: string[];
}

export interface SWAIGNullFunctionProperty {
    type: 'null';
    description: string;
}

export interface SWAIGOneOfFunctionProperty {
    type: 'oneOf'
    oneOf: any[];
}

export interface SWAIGAllOfFunctionProperty {
    type: 'allOf';
    allOf: any[];
}

export interface SWAIGAnyOfFunctionProperty {
    type: 'anyOf';
    anyOf: any[];
}

export interface SWAIGConstantFunctionProperty {
    type: 'const';
    const: any;
}

export type SWAIGFunctionProperty =
    SWAIGStringFunctionProperty
    | SWAIGIntegerFunctionProperty
    | SWAIGNumberFunctionProperty
    | SWAIGBooleanFunctionProperty
    | SWAIGArrayFunctionProperty
    | SWAIGObjectFunctionProperty
    | SWAIGNullFunctionProperty
    | SWAIGOneOfFunctionProperty
    | SWAIGAllOfFunctionProperty
    | SWAIGAnyOfFunctionProperty
    | SWAIGConstantFunctionProperty;

export interface SWAIGToggleFunction {
    active: boolean;
    function: string | string[];
}


export interface SWAIGContextSwitchAction {
    type: 'contextSwitch';
    contextSwitch: {
        systemPrompt: string;
        consolidate?: boolean;
        userPrompt?: string;
    }
}

export interface SWAIGPlaybackBGAction {
    type: 'playbackBG';
    playbackBG: {
        file: string;
        wait?: boolean;
    }
}

export interface SWAIGSayAction {
    type: 'say';
    say: string;
}

export interface SWAIGSetGlobalAction {
    type: 'setGlobalData';
    setGlobalData: {
        [name: string]: any;
    }
}

export interface SWAIGSetMetaDataAction {
    type: 'setMetaData';
    setMetaData: {
        [name: string]: any;
    }
}

export interface SWAIGStopAction {
    type: 'stop';
    stop: boolean;
}

export interface SWAIGStopPlaybackBGAction {
    type: 'stopPlaybackBG';
    stopPlaybackBG: boolean;
}

export interface SWAIGToggleFunctionsAction {
    type: 'toggleFunctions';
    toggleFunctions: SWAIGToggleFunction[];
}

export interface SWAIGUnsetGlobalDataAction {
    type: 'unsetGlobalData';
    unsetGlobalData: string | object;
}

export interface SWAIGUnsetMetaDataAction {
    type: 'unsetMetaData';
    unsetMetaData: string | object;
}

export interface SWAIGUserInputAction {
    type: 'userInput';
    userInput: string;
}


export type SWAIGAction =
    SWAIGContextSwitchAction
    | SWAIGPlaybackBGAction
    | SWAIGSayAction
    | SWAIGSetGlobalAction
    | SWAIGSetMetaDataAction
    | SWAIGStopAction
    | SWAIGStopPlaybackBGAction
    | SWAIGToggleFunctionsAction
    | SWAIGUnsetGlobalDataAction
    | SWAIGUnsetMetaDataAction
    | SWAIGUserInputAction;

export interface SWAIGOutputDataMap {
    type: 'output';
    output: {
        response: string;
        action?: SWAIGAction[];
    }
}

export interface SWAIGExpression {
    string: string;
    pattern: string;
    output: {
        response: string;
        action?: SWAIGAction[];
    }
}

export interface SWAIGExpressionsDataMap {
    type: 'expressions';
    expressions: SWAIGExpression[];
}

export interface SWAIGWebhook {
    expressions: {
        expressions: SWAIGExpression[];
    }[];
    errorKeys: ? string | string[];
    url: string;
    foreach?: {
        inputKey: string;
        outputKey: string;
        max?: number;
        append: string;
    }
    headers?: {
        [name: string]: string;
    }
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    inputArgsAsParams?: boolean;
    params?: {
        [name: string]: string;
    }
    requireArgs?: string | string[];
    output: {
        response: string;
        action?: SWAIGAction[];
    }
}

export interface SWAIGWebhooksDataMap {
    type: 'webhooks';
    webhooks: SWAIGWebhook[];
}

export type SWAIGDataMap = SWAIGOutputDataMap | SWAIGExpressionsDataMap | SWAIGWebhooksDataMap;

export interface SWAIGFunction {
    function: string;
    description: string;
    parameters?: {
        type: string;
        properties: {
            [name: string]: SWAIGFunctionProperty;
        }
        required?: string[];
    }
    active?: boolean;
    metaData?: {
        [name: string]: any;
    };
    metaDataToken?: string;
    dataMap?: SWAIGDataMap;
    webHookUrl?: string;
    waitFile?: string;
    waitFileLoops?: number | string;

}

export interface AiAgentPromptContextsBase {
    default: {
        steps: ContextStep[];
    }

    [name: string]: {
        steps: ContextStep[];
    }
}


export interface AiAgentPromptBase {
    text: string;
    temperature?: number;
    topP?: number;
    confidence?: number;
    presencePenalty?: number;
    frequencyPenalty?: number;
    contexts?: AiAgentPromptContextsBase
}

export interface UpdateAiAgentPromptContexts extends AiAgentPromptContextsBase {
    default?: {
        steps: ContextStep[];
    };
}

export interface UpdateAiAgentPromptRequest extends AiAgentPromptBase {
    text?: string;
    contexts?: UpdateAiAgentPromptContexts;
}

export interface AiAgentPostPromptBase {
    text: string;
    temperature?: number;
    topP?: number;
    confidence?: number;
    presencePenalty?: number;
    frequencyPenalty?: number;
}

export interface UpdateAiAgentPostPromptRequest extends AiAgentPostPromptBase {
    text?: string;
}

export interface AiAgentParams {
    acknowledgeInterruptions?: boolean;
    aiVolume?: number;
    attentionTimeout?: object;
    attentionTimeoutPrompt?: string;
    backgroundFile?: string;
    backgroundFileLoops?: number;
    backgroundFileVolume?: number;
    bargeMatchString?: string;
    bargeMinWords?: number;
    conscience?: string;
    conversationId?: string;
    debugWebhookLevel?: number;
    debugWebhookUrl?: string;
    direction?: 'inbound' | 'outbound';
    digitTerminators?: string;
    digitTimeout?: number;
    endOfSpeechTimeout?: number;
    elevenLabsStability?: number;
    elevenLabsSimilarity?: number;
    energyLevel?: number;
    holdMusic?: string;
    holdOnProcess?: boolean;
    inactivityTimeout?: number;
    inputPollFreq?: number;
    interruptOnNoise?: boolean;
    interruptPrompt?: string;
    languagesEnabled?: boolean;
    localTZ?: string;
    outboundAttentionTimeout?: number;
    saveConversation?: boolean;
    swaigAllowSettings?: boolean;
    swaigAllowSWML?: boolean;
    swaigPostConversation?: boolean;
    transferSummary?: boolean;
    verboseLogs?: boolean;
    waitForUser?: boolean;
}

export interface AiAgentBase {
    name: string;
    prompt?: AiAgentPromptBase;
    postPrompt?: AiAgentPostPromptBase;
    params?: AiAgentParams;
    pronounce?: Pronounce[];
    hints?: string[];
    languages?: Language[];
    SWAIG?: {
        defaults?: {
            webHookUrl?: string;
        }
        nativeFunctions?: NativeFunction[];
        includes?: SWAIGInclude[];
        functions?: SWAIGFunction[];
    }
}

export interface AiAgent extends AiAgentBase {
    id: string;
}

export type CreateAiAgentRequest = AiAgentBase;

export interface UpdateAiAgentRequest extends AiAgentBase {
    name?: string;
    prompt?: UpdateAiAgentPromptRequest;
    postPrompt?: UpdateAiAgentPostPromptRequest;
}

export interface AiAgentResponse extends FabricResourceBase {
    type: 'ai_agent';
    aiAgent: AiAgent;
}

export interface AiAgentsNamespace {
    listAiAgents(): AsyncIterableIterator<AiAgentResponse>;

    listAiAgentsPage(url?: string): Promise<PagedResponse<AiAgentResponse>>;

    retrieveAiAgent(id: string): Promise<AiAgentResponse>;

    listAddressesForAiAgent(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForAiAgentPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    updateAiAgent(id: string, request: UpdateAiAgentRequest): Promise<any>;

    deleteAiAgent(id: string): Promise<any>;

    createAiAgent(request: CreateAiAgentRequest): Promise<any>;
}

export interface UpdateSwmlScriptRequest {
    name?: string;
    contents?: SWML;
}

export interface CreateSwmlScriptRequest {
    name: string;
    contents: SWML;
}

export interface SwmlScript {
    id: string;
    contents: SWML;
    requestUrl: string;
    displayName: string;
}

export interface SwmlScriptResponse extends FabricResourceBase {
    type: 'swml_script';
    swmlScript: SwmlScript;
}

export interface SwmlScriptsNamespace {
    listSwmlScripts(): AsyncIterableIterator<SwmlScriptResponse>;

    listSwmlScriptsPage(url?: string): Promise<PagedResponse<SwmlScriptResponse>>;

    retrieveSwmlScript(id: string): Promise<SwmlScriptResponse>;

    listAddressesForSwmlScript(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForSwmlScriptPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    updateSwmlScript(id: string, request: UpdateSwmlScriptRequest): Promise<SwmlScriptResponse>;

    deleteSwmlScript(id: string): Promise<void>;

    createSwmlScript(request: CreateSwmlScriptRequest): Promise<SwmlScriptResponse>;
}

export interface UpdateRelayApplicationRequest {
    name?: string;
    topic?: string;
    callStatusCallbackUrl?: string;
}

export interface CreateRelayApplicationRequest {
    name: string;
    topic: string;
    callStatusCallbackUrl?: string;
}

export interface RelayApplicationResponse extends FabricResourceBase {
    type: 'relay_application',
    relayApplication: RelayApplication;
}

export interface RelayApplication {
    id: string;
    name: string;
    topic: string;
    callStatusCallbackUrl: string;
}

export interface RelayApplicationsNamespace {
    listRelayApplications(): AsyncIterableIterator<RelayApplicationResponse>;

    listRelayApplicationsPage(url?: string): Promise<PagedResponse<RelayApplicationResponse>>;

    retrieveRelayApplication(id: string): Promise<RelayApplicationResponse>;

    listAddressesForRelayApplication(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForRelayApplicationPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    updateRelayApplication(id: string, request: UpdateRelayApplicationRequest): Promise<RelayApplicationResponse>;

    deleteRelayApplication(id: string): Promise<void>;

    createRelayApplication(request: CreateRelayApplicationRequest): Promise<RelayApplicationResponse>;
}

export interface UpdateFabricSipEndpointRequest {
    username?: string;
    password?: number;
    callerId?: string;
    sendAs?: string;
    ciphers?: Cipher[];
    codecs?: Codec[];
    encryption?: Encryption;
    callHandler?: string;
    callingHandlerResourceId?: string;
}

export interface CreateFabricSipEndpointRequest {
    username: string;
    password: number;
    callerId: string;
    sendAs: string;
    ciphers: Cipher[];
    codecs: Codec[];
    encryption: Encryption;
    callHandler: string;
    callingHandlerResourceId: string;
}

export interface FabricSipEndpoint {
    id: string;
    username: string;
    callerId: string;
    sendAs: string;
    ciphers: Cipher[];
    codecs: Codec[];
    encryption: Encryption;
    callHandler: string;
    callingHandlerResourceId: string;
}

export interface FabricSipEndpointResponse extends FabricResourceBase {
    type: 'sip_endpoint';
    fabricSipEndpoint: FabricSipEndpoint;
}

export interface FabricSipEndpointsNamespace {
    listSipEndpoints(): AsyncIterableIterator<FabricSipEndpointResponse>;

    listSipEndpointsPage(url?: string): Promise<PagedResponse<FabricSipEndpointResponse>>;

    retrieveSipEndpoint(id: string): Promise<FabricSipEndpointResponse>;

    listAddressesForSipEndpoint(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForSipEndpointPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    updateSipEndpoint(id: string, request: UpdateFabricSipEndpointRequest): Promise<FabricSipEndpointResponse>;

    deleteSipEndpoint(id: string): Promise<void>;

    createSipEndpoint(request: CreateFabricSipEndpointRequest): Promise<FabricSipEndpointResponse>;
}

export interface SipGateway {
    id: string;
    uri: string;
    name: string;
    ciphers: Cipher[];
    codecs: Codec[];
    encryption: 'optional' | 'required' | 'disabled';
}

export interface SipGatewayResponse extends FabricResourceBase {
    type: 'sip_gateway';
    sipGateway: SipGateway;
}

export interface CreateSipGatewayRequest {
    name: string;
    uri: string;
    ciphers: Cipher[];
    codecs: Codec[];
    encryption: 'optional' | 'required' | 'disabled';
}

export interface UpdateSipGatewayRequest {
    name?: string;
    uri?: string;
    ciphers?: Cipher[];
    codecs?: Codec[];
    encryption?: 'optional' | 'required' | 'disabled';
}

export interface SipGatewayNamespace {
    listSipGateways(): AsyncIterableIterator<SipGatewayResponse>;

    listSipGatewaysPage(url?: string): Promise<PagedResponse<SipGatewayResponse>>;

    retrieveSipGateway(id: string): Promise<SipGatewayResponse>;

    listAddressesForSipGateway(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForSipGatewayPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    updateSipGateway(id: string, request: UpdateSipGatewayRequest): Promise<SipGatewayResponse>;

    deleteSipGateway(id: string): Promise<void>;

    createSipGateway(request: CreateSipGatewayRequest): Promise<SipGatewayResponse>;
}

export interface UpdateFreeswitchConnectorRequest {
    name?: string;
    callerId?: string;
    sendAs?: string;
}

export interface CreateFreeswitchConnectorRequest {
    name: string;
    token: string;
}

export interface FreeswitchConnector {
    id: string;
    name: string;
    callerId: string;
    sendAs: string;
}

export interface FreeswitchConnectorResponse extends FabricResourceBase {
    type: 'freeswitch_connector';
    freeswitchConnector: FreeswitchConnector;
}

export interface FreeswitchConnectorsNamespace {
    listFreeswitchConnectors(): AsyncIterableIterator<FreeswitchConnectorResponse>;

    listFreeswitchConnectorsPage(url?: string): Promise<PagedResponse<FreeswitchConnectorResponse>>;

    retrieveFreeswitchConnector(id: string): Promise<FreeswitchConnectorResponse>;

    listAddressesForFreeswitchConnector(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForFreeswitchConnectorPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    updateFreeswitchConnector(id: string, request: UpdateFreeswitchConnectorRequest): Promise<FreeswitchConnectorResponse>;

    deleteFreeswitchConnector(id: string): Promise<void>;

    createFreeswitchConnector(request: CreateFreeswitchConnectorRequest): Promise<FreeswitchConnectorResponse>;
}

export interface UpdateDialogflowAgentRequest {
    name?: string;
    sayEnabled?: boolean;
    say?: string;
    voice?: string;
}

export interface DialogflowAgent {
    id: string;
    sayEnabled: boolean;
    say: string;
    voice: string;
    displayName: string;
    dialogflowRefenceId: string;
    dialogflowRefenceName: string;
}

export interface DialogflowAgentResponse extends FabricResourceBase {
    type: 'dialogflow_agent';
    dialogflowAgent: DialogflowAgent;
}

export interface DialogflowAgentsNamespace {
    listDialogflowAgents(): AsyncIterableIterator<DialogflowAgentResponse>;

    listDialogflowAgentsPage(url?: string): Promise<PagedResponse<DialogflowAgentResponse>>;

    retrieveDialogflowAgent(id: string): Promise<DialogflowAgentResponse>;

    listAddressesForDialogflowAgent(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForDialogflowAgentPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    updateDialogflowAgent(id: string, body: UpdateDialogflowAgentRequest): Promise<DialogflowAgentResponse>;

    deleteDialogflowAgent(id: string): Promise<void>;
}

export type FabricResourceResponse =
    AiAgentResponse
    | CallFlowResponse
    | DialogflowAgentResponse
    | FabricSipEndpointResponse
    | FabricSubscriberResponse
    | FreeswitchConnectorResponse
    | RelayApplicationResponse
    | SwmlScriptResponse
    | SwmlWebhookResponse
    | SwmlApplicationResponse
    | CXMLWebhookResponse
    | CXMLScriptResponse
    | LamlApplicationResponse
    | SipGatewayResponse
    | ConferenceRoomResponse;

export interface FabricResourceNamespace {

    listFabricResources(options?: ListFabricResourcesOptions): AsyncIterableIterator<FabricResourceResponse>;

    listFabricResourcesPage(url?: string, options?: ListFabricResourcesOptions): Promise<PagedResponse<FabricResourceResponse>>;

    retrieveFabricResource(id: string): Promise<FabricResourceResponse>;

    deleteFabricResource(id: string): Promise<void>;

    listAddressesForFabricResource(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForFabricResourcePage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    assignResourceAsPhoneRouteHandler(id: string, request: AssignResourceAsPhoneRouteHandlerRequest): Promise<FabricResourceAddress>;

    assignResourceAsSipEndpointHandler(id: string, request: AssignResourceAsSipEndpointHandlerRequest): Promise<FabricResourceAddress>;

    assignResourceAsDomainApplicationHandler(id: string, request: AssignResourceAsDomainApplicationHandlerRequest): Promise<FabricResourceAddress>;

}

export interface ConferenceRoom {
    displayName: string;
    maxMembers: number;
    quality: VideoRoomResolution,
    joinFrom: string;
    joinUntil: string;
    removeAt: string;
    removeAfterSecondsElapsed: number;
    layout: string;
    recordOnStart: boolean;
    enableRoomPreviews: boolean;
    syncAudioVideo: boolean;
    meta: object;
    name: string;
    id: string;
    fps: number;
    prioritizeHandRaise: boolean;
}

export interface ConferenceRoomResponse extends FabricResourceBase {
    type: 'video_room';
    conferenceRoom: ConferenceRoom;
}
``
export interface CreateConferenceRoomRequest {
    displayName?: string;
    maxMembers?: number;
    quality?: VideoRoomResolution,
    joinFrom?: string;
    joinUntil?: string;
    removeAt?: string;
    removeAfterSecondsElapsed?: number;
    layout?: string;
    recordOnStart?: boolean;
    enableRoomPreviews?: boolean;
    syncAudioVideo?: boolean;
    meta?: object;
    name?: string;
    fps?: number;
    prioritizeHandRaise?: boolean;
}

export interface UpdateConferenceRoomRequest {
    displayName?: string;
    maxMembers?: number;
    quality?: VideoRoomResolution,
    joinFrom?: string;
    joinUntil?: string;
    removeAt?: string;
    removeAfterSecondsElapsed?: number;
    layout?: string;
    recordOnStart?: boolean;
    enableRoomPreviews?: boolean;
    syncAudioVideo?: boolean;
    meta?: object;
    name?: string;
    fps?: number;
    prioritizeHandRaise?: boolean;
}

export interface ConferenceRoomsNamespace {
    listConferenceRooms(): AsyncIterableIterator<ConferenceRoomResponse>;

    listConferenceRoomsPage(url?: string): Promise<PagedResponse<ConferenceRoomResponse>>;

    retrieveConferenceRoom(id: string): Promise<ConferenceRoomResponse>;

    listAddressesForConferenceRoom(id: string): AsyncIterableIterator<FabricResourceAddress>;

    listAddressesForConferenceRoomPage(id: string, url?: string): Promise<PagedResponse<FabricResourceAddress>>;

    updateConferenceRoom(id: string, request: UpdateConferenceRoomRequest): Promise<ConferenceRoomResponse>;

    deleteConferenceRoom(id: string): Promise<void>;

    createConferenceRoom(request: CreateConferenceRoomRequest): Promise<ConferenceRoomResponse>;
}

export interface FabricNamespace {
    resources: FabricResourceNamespace;
    subscribers: FabricSubscribersNamespace;
    subscriberTokens: SubscriberTokenNamespace;
    subscriberSipEndpoints: SubscriberSipEndpointsNamespace;
    address: FabricAddressNamespace;
    embedsToken: EmbedsTokenNamespace;
    lamlApplications: LamlApplicationNamespace;
    cxmlScripts: CXMLScriptNamespace;
    cxmlWebhooks: CXMLWebhookNamespace;
    callFlows: CallFlowsNamespace;
    aiAgents: AiAgentsNamespace;
    swmlScripts: SwmlScriptsNamespace;
    swmlWebhooks: SwmlWebhookNamespace;
    swmlApplications: SwmlApplicationNamespace;
    relayApplications: RelayApplicationsNamespace;
    sipEndpoints: FabricSipEndpointsNamespace;
    sipGateways: SipGatewayNamespace;
    freeswitchConnectors: FreeswitchConnectorsNamespace;
    dialogflowAgents: DialogflowAgentsNamespace;
    conferenceRooms: ConferenceRoomsNamespace;
}



export interface Namespace {
    spaceManagement: SpaceManagementNamespace;
    video: VideoNamespace;
    message: MessageNamespace;
    voice: VoiceNamespace;
    fax: FaxNamespace;
    project: ProjectNamespace;
    chat: ChatNamespace;
    fabric: FabricNamespace;
    calling: CallingNamespace;
    datasphere: DatasphereNamespace;
    pubsub: PubSubNamespace;
}

export interface Headers {
    [key: string]: string;
}

export interface QueryParams {
    [key: string]: any;
}