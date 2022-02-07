export interface FastCommentsAPIModerator {
    name: string;
    email: string;
    tenantId: string;
    userId?: string|null;
    acceptedInvite?: boolean;
    markReviewedCount?: number;
    deletedCount?: number;
    markedSpamCount?: number;
    approvedCount?: number;
    editedCount?: number;
    bannedCount?: number;
    createdAt: string;
}

export interface FastCommentsAPIModeratorCreateOrUpdate {
    name: string;
    email: string;
    tenantId: string;
    userId?: string|null;
    acceptedInvite?: boolean;
}
