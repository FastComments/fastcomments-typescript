export interface FastCommentsAPISSOUser {
    id: string;
    username: string;
    websiteUrl?: string;
    email: string;
    signUpDate: number;
    createdFromUrlId: string;
    loginCount: number;
    avatarSrc: string;
    optedInNotifications: boolean;
    displayLabel: string;
    displayName: string;
    isAccountOwner?: string;
    isAdminAdmin?: string;
    isCommentModeratorAdmin?: string;
    groupIds?: string[];
}

export interface FastCommentsAPISSOUserCreateOrUpdate {
    id: string;
    username: string;
    websiteUrl?: string;
    email: string;
    signUpDate: number;
    createdFromUrlId: string;
    avatarSrc: string;
    optedInNotifications: boolean;
    displayLabel: string;
    displayName: string;
    isAccountOwner?: string;
    isAdminAdmin?: string;
    isCommentModeratorAdmin?: string;
    groupIds?: string[];
}
