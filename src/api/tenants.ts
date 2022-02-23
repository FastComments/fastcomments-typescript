import {FastCommentsSiteType} from "../constants";

export interface FastCommentsAPITenantDomainConfig {
    domain: string;
    emailFromName?: string;
    emailFromEmail?: string;
    createdAt: string,
    siteType: FastCommentsSiteType, // you probably want Unknown
    logoSrc: string, // raw image path
    logoSrc100px: string, // resized for thumbnails
    footerUnsubscribeURL: string,
    emailHeaders: Record<string, string>,
    disableUnsubscribeLinks: boolean,
    dkim: {
        domainName: string,
        keySelector: string,
        privateKey: string
    }
}

export interface FastCommentsAPITenantBillingInfo {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export enum TenantPaymentFrequency {
    Monthly = 0,
    Annually = 1
}

export interface FastCommentsAPITenant {
    id: string;
    name: string;
    email: string;
    signUpDate: number; // number due to "legacy" reasons
    packageId?: string | null;
    paymentFrequency?: TenantPaymentFrequency;
    billingInfoValid?: boolean;
    billingHandledExternally?: boolean;
    createdBy?: string;
    isSetup?: boolean;
    domainConfiguration: FastCommentsAPITenantDomainConfig[];
    billingInfo?: FastCommentsAPITenantBillingInfo;
    stripeCustomerId?: string;
    stripeSubscriptionId?: string;
    stripePlanId?: string;
    enableProfanityFilter?: boolean;
    enableSpamFilter?: boolean;
    lastBillingIssueReminderDate?: string;
    removeUnverifiedComments?: boolean;
    unverifiedCommentsTTLms?: number;
    commentsRequireApproval?: boolean;
    autoApproveCommentOnVerification?: boolean;
    sendProfaneToSpam?: boolean;
    /** @readonly - Is calculated based on packageId. **/
    hasAuditing?: boolean;
    /** @readonly - Is calculated based on packageId. **/
    hasFlexPricing?: boolean;
    flexLastBilledAmount?: number;
}

export interface FastCommentsAPITenantCreate extends FastCommentsAPITenant {
    name: string;
    email: string;
    domainConfiguration: FastCommentsAPITenantDomainConfig[];
}

export interface FastCommentsAPITenantUpdate {
    name?: string;
    email?: string;
    packageId?: string | null;
    /** Can only be changed for managed tenants. **/
    paymentFrequency?: number; // tood
    /** Can only be changed for managed tenants. **/
    billingInfoValid?: boolean;
    /** Can only be changed for managed tenants. **/
    billingHandledExternally?: boolean;
    createdBy?: string;
    isSetup?: boolean;
    domainConfiguration?: FastCommentsAPITenantDomainConfig[];
    billingInfo?: FastCommentsAPITenantBillingInfo;
    enableProfanityFilter?: boolean;
    enableSpamFilter?: boolean;
    removeUnverifiedComments?: boolean;
    unverifiedCommentsTTLms?: number;
    commentsRequireApproval?: boolean;
    autoApproveCommentOnVerification?: boolean;
    sendProfaneToSpam?: boolean;
}
