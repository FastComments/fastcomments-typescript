export interface FastCommentsAPITenantDailyUsage {
    yearNumber: number;
    monthNumber: number;
    dayNumber: number;
    commentFetchCount?: number;
    commentCreateCount?: number;
    conversationCreateCount?: number;
    voteCount?: number;
    accountCreatedCount?: number;
    userMentionSearch?: number;
    hashTagSearch?: number;
    gifSearchTrending?: number;
    gifSearch?: number;
    apiCreditsUsed?: number;
    createdAt: string;
    billed: boolean;
    /** Ignored for billing. **/
    ignored: boolean;
}
