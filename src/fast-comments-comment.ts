import {FastCommentsBadge} from "./fast-comments-badge";

/**
 * The structure used to represent comments in the comment widgets.
 * Note that this is slightly different than the API (some fields missing, some added dynamically).
 */
export interface FastCommentsWidgetComment {
    _id: string;
    anonUserId?: string;
    approved?: boolean; // this is only false upon submission, normally it is undefined
    avatarSrc?: string;
    badges?: FastCommentsBadge[];
    /** Added on the client. **/
    children?: FastCommentsWidgetComment[];
    commentHTML: string;
    commenterLink?: string;
    commenterName?: string;
    date: string;
    displayLabel?: string;
    hasImages?: boolean;
    isBlocked?: boolean;
    isByAdmin?: boolean;
    isByModerator?: boolean;
    isDeleted?: boolean;
    isFlagged?: boolean;
    isPinned?: boolean;
    isSpam?: boolean;
    isVotedDown?: boolean;
    isVotedUp?: boolean;
    myVoteId?: string;
    /** Added on the client. **/
    nestedChildrenCount?: number;
    parentId?: string | null;
    userId?: string;
    verified: boolean;
    votes?: number;
    votesDown?: number;
    votesUp?: number;
}
