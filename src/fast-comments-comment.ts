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
    /** Sometimes added on the client. **/
    hidden?: boolean;
    /** Sometimes added on the client (for new live child comments) **/
    hiddenChildrenCount?: number;
    isBlocked?: boolean;
    isByAdmin?: boolean;
    isByModerator?: boolean;
    isDeleted?: boolean;
    isFlagged?: boolean;
    /** Sometimes added on the client (for comments pushed to the client live). **/
    isLive?: boolean;
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
