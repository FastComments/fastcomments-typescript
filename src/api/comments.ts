import {CommentHashTag} from "../fast-comments-comment-hashtag";
import {CommentUserMention} from "../fast-comments-comment-mention";

export interface FastCommentsAPIComment {
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
    /** The number of times the comment was flagged. */
    flagCount?: number;
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

/** All parameters that can be specified during creation, or update. **/
export interface FastCommentsAPICommentCreateOrUpdate {
    approved: boolean;
    avatarSrc?: string;
    comment: string;
    /** Only during update. **/
    commentHTML?: string;
    commenterEmail?: string;
    commenterLink?: string;
    commenterName: string;
    date: number;
    /** The "display label" for the comment - for example "Admin", "Moderator", or something like "VIP User". **/
    displayLabel?: string;
    domain?: string|null;
    /** The number of times the comment was flagged. **/
    flagCount?: number;
    isPinned?: boolean;
    isSpam?: boolean;
    locale: 'de_de' | 'en_us' | 'es_es' | 'fr_fr' | 'it_it' | 'ja_jp' | 'ko_kr' | 'pl_pl' | 'pt_br' | 'ru_ru' | 'tr_tr' | 'zh_cn' | 'zh_tw';
    meta?: Record<string, string | number | boolean>;
    moderationGroupIds?: string[]|null;
    notificationSentForParent?: boolean;
    notificationSentForParentTenant?: boolean;
    pageTitle?: string;
    parentId: string|null;
    reviewed: boolean;
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
