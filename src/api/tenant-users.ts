import {FastCommentsLocale} from "../constants";

export enum FastCommentsAPIUserDigestEmailFrequency {
    Disabled = -1,
    Daily = 0,
    Weekly = 1,
    Monthly = 2
}

export interface FastCommentsAPITenantUser {
    id: string;
    tenantId: string;
    username: string;
    /** A link to the commenter's blog, for example. **/
    websiteUrl?: string;
    email: string;
    signUpDate: number;
    createdFromUrlId: string;
    createdFromTenantId: string;
    verified: boolean;
    loginCount: number;
    optedInNotifications: boolean;
    optedInTenantNotifications: boolean;
    hideAccountCode: boolean;
    avatarSrc?: string;
    isHelpRequestAdmin: boolean;
    isAccountOwner: boolean;
    isAdminAdmin: boolean;
    isBillingAdmin: boolean;
    isAnalyticsAdmin: boolean;
    isCustomizationAdmin: boolean;
    isManageDataAdmin: boolean;
    isCommentModeratorAdmin: boolean;
    isAPIAdmin: boolean;
    moderatorIds: string[];
    locale: FastCommentsLocale;
    digestEmailFrequency: FastCommentsAPIUserDigestEmailFrequency;
    lastLoginDate: string;
    displayLabel?: string;
}

export type FastCommentsAPITenantUserCreate = FastCommentsAPITenantUser;

export interface FastCommentsAPITenantUserUpdate {
    username?: string;
    /** A link to the commenter's blog, for example. **/
    websiteUrl?: string;
    email?: string;
    signUpDate?: number;
    optedInNotifications?: boolean;
    optedInTenantNotifications?: boolean;
    hideAccountCode?: boolean;
    avatarSrc?: string;
    isHelpRequestAdmin?: boolean;
    isAccountOwner?: boolean;
    isAdminAdmin?: boolean;
    isBillingAdmin?: boolean;
    isAnalyticsAdmin?: boolean;
    isCustomizationAdmin?: boolean;
    isManageDataAdmin?: boolean;
    isCommentModeratorAdmin?: boolean;
    isAPIAdmin?: boolean;
    /** Not recommended to update yourself. **/
    moderatorIds?: string[];
    locale?: FastCommentsLocale;
    digestEmailFrequency?: FastCommentsAPIUserDigestEmailFrequency;
    displayLabel?: string;
}
