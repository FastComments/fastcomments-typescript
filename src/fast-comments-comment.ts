export interface Comment {
    aiDeterminedSpam?: false;
    approved: boolean;
    avatarSrc?: string;
    comment: string;
    commentHTML: string;
    commenterEmail?: string;
    commenterLink?: string;
    commenterName: string;
    date: number;
    /** The "display label" for the comment - for example "Admin", "Moderator", or something like "VIP User". **/
    displayLabel?: string;
    domain?: string|null;
    hashTags?: CommentHashTag[];
    hasImages?: boolean;
    hasLinks?: boolean;
    id: string;
    isByAdmin?: boolean;
    isByModerator?: boolean;
    isPinned?: boolean;
    isSpam?: boolean;
    locale: 'de_de' | 'en_us' | 'es_es' | 'fr_fr' | 'it_it' | 'ja_jp' | 'ko_kr' | 'pl_pl' | 'pt_br' | 'ru_ru' | 'tr_tr' | 'zh_cn' | 'zh_tw';
    mentions?: CommentUserMention[];
    meta?: Record<string, string | number | boolean>;
    moderationGroupIds?: string[]|null;
    notificationSentForParent?: boolean;
    notificationSentForParentTenant?: boolean;
    pageTitle?: string;
    parentId: string|null;
    reviewed: boolean;
    tenantId: string;
    userId?: string;
    url: string;
    urlId: string;
    urlIdRaw: string;
    verified: boolean;
    votesUp?: number;
    votesDown?: number;
    /** The karma of the comment. = votesUp - votesDown **/
    votes?: number;
}

export interface CommentUserMention {
    /** The user id. For SSO users, this will have your tenant id prefixed. **/
    id: string
    /** The final @mention tag text, including the @ symbol. **/
    tag: string
    /** The original @mention tag text, including the @ symbol. **/
    rawTag: string
    /** What type of user was tagged. user = FastComments.com account. sso = SSOUser. **/
    type: 'user'|'sso'
    /** If the user opts out of notifications, this will still be set to true. **/
    sent: boolean
}

interface CommentHashTag {
    /** The hashtag id. **/
    id: string
    /** The final #hashtag tag text, including the # symbol. **/
    tag: string
    /** If the hashtag is associated with a custom URL, this will be defined. **/
    url?: string
}
