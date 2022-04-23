export interface FastCommentsAPISSOUser {
    id: string;
    username: string;
    email?: string;
    signUpDate: number;
    websiteUrl?: string;
    createdFromUrlId?: string;
    loginCount?: number;
    avatarSrc?: string;
    optedInNotifications?: boolean;
    displayLabel?: string;
    displayName?: string;
    isAccountOwner?: string;
    isAdminAdmin?: string;
    isCommentModeratorAdmin?: string;
    groupIds?: string[];
    /** Don't let other users see this user's activity, including comments, on their profile. Default is true to provide secure profiles by default. **/
    isProfileActivityPrivate?: boolean;
}

export interface FastCommentsAPISSOUserCreateOrUpdate {
    id: string;
    username: string;
    websiteUrl?: string;
    email?: string;
    signUpDate: number;
    createdFromUrlId?: string;
    avatarSrc?: string;
    optedInNotifications?: boolean;
    displayLabel?: string;
    displayName?: string;
    isAccountOwner?: string;
    isAdminAdmin?: string;
    isCommentModeratorAdmin?: string;
    groupIds?: string[];
    /** Don't let other users see this user's activity, including comments, on their profile. Default is true to provide secure profiles by default. **/
    isProfileActivityPrivate?: boolean;
}
