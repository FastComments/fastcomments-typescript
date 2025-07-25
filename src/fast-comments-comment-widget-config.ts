import {FastCommentsWidgetComment} from "./fast-comments-comment";
import {VoteStyle} from "./constants";

/**
 * Badges are defined in the admin dashboard with images, text, and CSS. You can then pass their IDs here.
 */
export interface FastCommentsSSOBadgeConfig {
    /** Ensure the user has these badges displayed. Additive, unless override is set. **/
    badgeIds: string[];
    /** Force-override any badges the user has set to display. **/
    override?: boolean;
}

export interface FastCommentsSSOUserData {
    /** Required. 1k Characters Max. **/
    id: string;
    /** Required. 1k Characters Max. Note: Must be unique. **/
    email: string;
    /** Required. 1k Characters Max. Note: The username cannot be an email. Does not have to be unique. **/
    username: string;
    /** Optional. 3k Characters Max for URLs. Default is from gravatar based on email. Supports 64 encoded images, in which case the limit is 50k characters. **/
    avatar?: string;
    /** Optional. Default false. **/
    optedInNotifications?: boolean;
    /** Optional. 100 Characters Max. This label will be shown next to their name. Default is Administrator/Moderator when applicable. **/
    displayLabel?: string;
    /** Optional. 500 Characters Max. This will be shown instead of the username. **/
    displayName?: string;
    /** Optional. 2k Characters Max. The user's name will link to this. **/
    websiteUrl?: string;
    /** Optional. Up to 100 groups per user. A group id may not be longer than 50 characters. **/
    groupIds?: string[];
    /** Optional. Denotes the user as an administrator. **/
    isAdmin?: boolean;
    /** Optional. Denotes the user as a moderator. **/
    isModerator?: boolean;
    /** Optional, default true. Set to false to enable the "activity" tab in the user's profile. **/
    isProfileActivityPrivate?: boolean;
    /** Optional, specify the badges the user has. **/
    badgeConfig?: FastCommentsSSOBadgeConfig;
}

export interface FastCommentsSSO {
    /** The user's data (FastCommentsSSOUserData) represented as JSON, and then Base64'd. Leave empty for an unauthenticated user. */
    userDataJSONBase64?: string | null
    /** The HMAC-SHA256 hash of the userDataJSONBase64 field, using your secret key. Leave empty for an unauthenticated user. */
    verificationHash?: string | null
    /** The timestamp of when the verificationHash was created. */
    timestamp?: number

    /** For the below - define either the URL or Callback based parameters. **/

    /** The logout URL for the user. If you define the SSO configuration, but not this or logoutCallback, the logout button won't be shown. */
    logoutURL?: string
    /** The login URL for the user, which will show if they try to comment and they are not authenticated. */
    loginURL?: string

    /** The logout callback for the user. If you define the SSO configuration, but not this or logoutURL, the logout link won't be shown. */
    logoutCallback?: (instanceId: string) => void
    /** The login callback for the user. This will cause a button to show when they are unauthenticated. Upon clicking, this will be invoked. */
    loginCallback?: (instanceId: string) => void
}

export interface FastCommentsSSOSimple {
    /** This must be unique when paired with an email. */
    username?: string
    /** The user's email. We'll send welcome and verification emails to this address. **/
    email?: string
    /** @deprecated Use avatar instead. **/
    avatarSrc?: string
    /** The user's avatar. **/
    avatar?: string
    /** The user's website, blog, or personal account page. We'll link their username to this. **/
    websiteUrl?: string
    /** Optional, specify the badges the user has. **/
    badgeConfig?: FastCommentsSSOBadgeConfig;

    /** For the below - define either the URL or Callback based parameters. **/

    /** The logout URL for the user. If you define the SSO configuration, but not this or logoutCallback, the logout button won't be shown. */
    logoutURL?: string
    /** The login URL for the user, which will show if they try to comment and they are not authenticated. */
    loginURL?: string

    /** The logout callback for the user. If you define the SSO configuration, but not this or logoutURL, the logout link won't be shown. */
    logoutCallback?: (instanceId: string) => void
    /** The login callback for the user. This will cause a button to show when they are unauthenticated. Upon clicking, this will be invoked. */
    loginCallback?: (instanceId: string) => void
}

/**
 * A user which is logged in - can include anonymous users which have an anon session, and might not have a username.
 * This is NOT the object to pass for SSO. This is the object exposed by the comment widget that represents the current user.
 */
export interface FastCommentsLoggedInUser {
    id: string
    /** Since 2021 this is almost always true, since even for anon sessions we can edit our own comments via sessionId. **/
    authorized: boolean
    avatarSrc?: string
    displayLabel?: string
    email?: string | null
    /** Means they've blocked one or more users. **/
    hasBlockedUsers: boolean
    /** If the user is not fully logged in. **/
    isAnonSession?: boolean
    sessionId?: string
    username?: string
    websiteUrl?: string
}

export interface OnOpenProfileRequest {
    userId: string,
    currentUser?: FastCommentsLoggedInUser,
    comment?: FastCommentsWidgetComment
}

export interface FastCommentsPageReactConfig {
    /** A short id that represents the reaction (unique to your account, so you can use something like "happy"). **/
    id: string
    /** Image source path. Must be absolute **/
    src: string
    /** Optional selected image source path. Must be absolute. **/
    selectedSrc?: string
}

export interface FastCommentsPageReactsConfig {
    reacts: FastCommentsPageReactConfig[]
    showUsers?: boolean
}

export interface FastCommentsCommentWidgetConfig {
    /** Id that represents you as a customer. */
    tenantId: string
    /** Id that represents the page, if you don't want to tie comments to the page url. Could be a URL or an ID (like an article id). */
    urlId?: string
    /** URL that represents the page, if you don't want to tie to the page url in the browser. Must always be a URL. */
    url?: string
    /** The region your account is in. If your account was created via fastcomments.com, you can leave this undefined. EU customers will want to set it to 'eu'. Does not apply to VanillaJS widget. */
    region?: 'eu';
    /** A path to the default avatar image, shown when the user has no avatar. When undefined, it defaults to "https://fastcomments.com/images/unknown-person.png". */
    defaultAvatarSrc?: string
    /** Whether the comment widget is on a page or element with a dark background. If undefined the widget will try to determine the background color itself. */
    hasDarkBackground?: boolean
    /** List of moderation group ids that the resulting comments will be associated with. */
    moderationGroupIds?: string[]
    /** The page we should render first when rendering the comments. Defaults to 0. -1 means to render all (up to 2k) comments. */
    startingPage?: number
    /** Title of the page that the widget is on. */
    pageTitle?: string
    /** String used to compose the comment count. Use [count] to interpolate value. Default is "[count] comments on this page." (Customizable via the UI.) */
    commentCountFormat?: string
    /** The original referrer (you can't customize this via the embed code). */
    originalReferrer?: string
    /** Don't show avatars. (Customizable via the UI.) */
    hideAvatars?: boolean
    /** Disable commenting for this page, but still show the comments. */
    readonly?: boolean
    /** Only disable adding new root comments. Votes and threaded replies still allowed. */
    noNewRootComments?: boolean
    /** Place the page-level comment reply at the bottom of the comment list. (Customizable via the UI.) */
    inputAfterComments?: boolean
    /** Maximum character length for a comment. Default is 2k characters. */
    maxCommentCharacterLength?: number
    /** Don't use relative dates like "11 minutes ago". (Customizable via the UI.) */
    absoluteDates?: boolean
    /** Show both relative and absolute dates "11 minutes ago (5/18/2021)". (Customizable via the UI.) */
    absoluteAndRelativeDates?: boolean
    /** A way to use custom CSS. Note that it's more efficient to define the custom CSS via the Widget Customization UI as it removes a network round trip, and does minification. */
    customCSS?: string
    /** @Deprecated Text like "Show [count] comments". When defined we won't show the comment list. Instead show a link with the given text, which shows the comments upon clicking. (Customizable via the UI.) Retained for backwards compatibility - we suggest you use useShowCommentsToggle with custom translations, instead.*/
    hideCommentsUnderCountTextFormat?: string
    /** Enables a "Show Comments" toggle button. Customize via translations.HIDE_COMMENTS_BUTTON_TEXT and translations.SHOW_COMMENTS_BUTTON_TEXT. */
    useShowCommentsToggle?: boolean
    /** Header HTML. (Customizable via the UI.) */
    headerHTML?: boolean
    /** console.log time to create HTML for rendering. */
    debugRenderTime?: boolean
    /** Disables inserting default style tag into DOM. (Customizable via the UI.) */
    noStyles?: boolean
    /** Disables email requirement. (Customizable via the UI.) */
    allowAnon?: boolean
    /** Disables email/username requirement for votes. (Customizable via the UI.) */
    allowAnonVotes?: boolean
    /** Disables blocking. (Customizable via the UI.) */
    disableBlocking?: boolean
    /** Disables email inputs. (Customizable via the UI.) */
    disableEmailInputs?: boolean
    /** Disables the "Unverified Comment" label. (Customizable via the UI.) */
    disableUnverifiedLabel?: boolean
    /** Disables support for @mentions. */
    disableMentions?: boolean
    /** The default value of the username field. (Customizable via the UI.) */
    defaultUsername?: string
    /** Disables adding images. (Customizable via the UI.) */
    noImageUploads?: boolean
    /** Disables the WYSIWYG toolbar. (Customizable via the UI.) */
    disableToolbar?: boolean
    /** Locale to render the widget for. */
    locale?: ('hr_hr' | 'de_de' | 'en_us' | 'es_es' | 'fr_fr' | 'he' | 'it_it' | 'ja_jp' | 'ko_kr' | 'pl_pl' | 'pt_br' | 'ru_ru' | 'tr_tr' | 'zh_cn' | 'zh_tw') | string
    /** Whether the comment count should include all comments instead of just the top-level ones */
    countAll?: boolean
    /** Whether to show comments right away, without having to click "show N comments". */
    showLiveRightAway?: boolean
    /** Whether to collect a link from the user when commenting (like their blog URL). */
    enableCommenterLinks?: boolean
    /** Whether to track and show comment viewed counts on each comment. */
    enableViewCounts?: boolean
    /** The default sort direction. 'MR'|null = Most Relevant, 'NF' = Newest First, 'OF' = Oldest First */
    defaultSortDirection?: null | 'MR' | 'NF' | 'OF'
    /** Change the comment input field to be a single line input instead of a textarea. */
    useSingleLineCommentInput?: boolean
    /** Puts pagination before the list of comments. The default is after. */
    paginationBeforeComments?: boolean
    /** Puts the date inline with the thumbs up/down toolbar. Requires custom styling to use, please reach out to support. */
    showDateInline?: boolean
    /** SSO Configuration. For an unauthenticated user, do not define userDataJSONBase64 and verificationHash. See <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso" target="_blank">the documentation</a>. */
    sso?: FastCommentsSSO
    /** Simple SSO Configuration, less secure than "sso". See <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#option-two---simple-sso" target="_blank">the documentation</a>. */
    simpleSSO?: FastCommentsSSOSimple,
    /** Invoked when library initializes (nothing shown yet). **/
    onInit?: () => void,
    /** Invoked when user authentication changes state. relatedData could be a user object on success events or the related data on failure, like the comment that was attempted to be submitted. **/
    onAuthenticationChange?: (event: 'user-set' | 'session-id-set' | 'authentication-failed' | 'logout', relatedData: object) => void,
    /** Invoked when library renders content. Happens on any state change. **/
    onRender?: () => void,
    /** Invoked when library renders comments. **/
    onCommentsRendered?: (comment: FastCommentsWidgetComment[]) => void,
    /** Invoked when the comment count changes. **/
    commentCountUpdated?: (newCount: number) => void,
    /** Invoked when replying is successful. **/
    onReplySuccess?: (comment: FastCommentsWidgetComment) => void,
    /** Invoked when voting is successful. **/
    onVoteSuccess?: (comment: FastCommentsWidgetComment, voteId: string, direction: 'up' | 'down' | 'deleted', status: 'success' | 'pending-verification') => void,
    /** Invoked when clicking an image inside a comment. **/
    onImageClicked?: (imageSrc: string) => void,
    /** Invoked when trying to open a user's profile, like when clicking an avatar. Return true to prevent loading spinner. **/
    onOpenProfile?: (context: OnOpenProfileRequest) => boolean,
    /** Invoked when a user blocks or unblocks another user. userId is the user doing the blocking, and comment is the comment that was blocked/unblocked. To get the blocked user id, look at the comment. **/
    onUserBlocked?: (userId: string, comment: FastCommentsWidgetComment, isBlocked: boolean) => void,
    /** Invoked when a user flags or un-flags a comment. userId is the user doing the flagging, and comment is the comment that was flagged/un-flagged. **/
    onCommentFlagged?: (userId: string, comment: FastCommentsWidgetComment, isFlagged: boolean) => void,
    /** Invoked when a user edits a comment. userId is the user doing the editing, and comment is the comment that was edited. **/
    onCommentEdited?: (userId: string, comment: FastCommentsWidgetComment) => void,
    /** Invoked when a user deletes a comment. userId is the user doing the deleting, and comment is the comment that was deleted. **/
    onCommentDeleted?: (userId: string, comment: FastCommentsWidgetComment) => void,
    /** Invoked when a user submits a comment. You must invoke the passed continue or cancel callbacks. Supports async behavior. **/
    onCommentSubmitStart?: (comment: FastCommentsWidgetComment, continueSubmitFn: () => void, cancelFn: (message?: string) => void) => void,
    /** The rating used for the gif picker. Also configurable via the widget customization UI. **/
    gifRating?: 'g' | 'pg' | 'pg-13' | 'r',
    /** Disable the image redirect that occurs when clicking an image inside a comment. **/
    disableImageRedirect?: boolean,
    /** Add new comments to the bottom of the widget, rather than the top. **/
    newCommentsToBottom?: boolean,
    /** By default collapse all replies. **/
    collapseReplies?: boolean,
    /** The maximum depth of comment threads (replies to replies). Zero disables replies to comments. **/
    maxReplyDepth?: number,
    /** A list of group ids to use for @mentions autocomplete. Useful when you want to prevent tagging users when they do not have intersecting groups. **/
    mentionGroupIds?: string[],
    /** Disables live commenting. **/
    disableLiveCommenting?: boolean,
    /** Disables the success message after commenting. **/
    disableSuccessMessage?: boolean,
    /** Disables the notification bell. **/
    disableNotificationBell?: boolean,
    /** Disables opening profiles when you click the user's avatar. **/
    disableProfiles?: boolean,
    /** Disables voting and removes all vote counts. **/
    disableVoting?: boolean,
    inlineReactImages?: string[],
    /** Legacy flag for switching to a WYSIWYG editor. **/
    experimentalWYSIWYG?: boolean,
    /** Switches to a WYSIWYG editor. **/
    enableWYSIWYG?: boolean,
    /** Shows a resize handle in the bottom right. **/
    enableResizeHandle?: boolean,
    /** Clicking reply to a comment will re-use the root reply field. **/
    useSingleReplyField?: boolean
    /** Enable infinite scrolling. For this to work, you have to have custom styles for the comment area (.comments css selector) to enable the scroll bars! **/
    enableInfiniteScrolling?: boolean
    /** For user activity feeds ONLY. Set tenantId to 'all' and ssoTenantId to your tenant id. **/
    userId?: string
    /** For user activity feeds ONLY. **/
    ssoTenantId?: string
    /** Jump/scroll to a given comment by id. **/
    jumpToId?: string
    /** Custom API host. You probably want to use "region" instead. **/
    apiHost?: string
    /** Custom WS host. You probably want to use "region" instead. **/
    wsHost?: string
    /** Whether to use polling instead of WebSockets. Generally not recommended. The system will already use polling on reconnect to recover missed messages. **/
    usePolling?: boolean
    /** Custom translations. It's recommended you use the widget customization UI instead. If you really want to use this, probably check with support first. **/
    translations?: Record<string, string>
    /** The product being used. You probably don't want to manually define this. **/
    productId?: number
    /** Meta data to tie to the comment. **/
    commentMeta?: {
        wpPostId?: string
        wpUserId?: string
        [key: string]: string | number | null | undefined;
    }
    /** Configuration for emoticons that show above the widget. **/
    pageReactConfig?: FastCommentsPageReactsConfig
    /** How to style voting. Ideally you should customize this via the widget customization UI instead to enable server-side validations. **/
    voteStyle?: VoteStyle
    /** Internal instance id. This is set by the library. You can read it, but you shouldn't set it. **/
    readonly instanceId?: string
    /** Load comments filtered by a given hashtag. **/
    jumpToHashTag?: string
    /** You can specify a list of extensions to load by id, or specify a path to load a custom extension script. **/
    extensions?: {id: string, path?: string}[]
    /** Tell the library to not fetch the widget config from the server. **/
    noCustomConfig?: boolean
    /** Show list of users that voted on a comment when hovering over the vote button. Must be enabled in the dashboard so the server will pass the values (so who voted is not exposed by default). **/
    enableVoteList?: boolean
    /** Whether to wrap the widget in a container with a background/border/shadow, rather than the default transparent background. Will get set to true by default based on the derived background of the widget, unless explicitly set to false. **/
    wrap?: boolean
    /** Enables a search box to search for comments on the current page. **/
    enableSearch?: boolean
    /** Ignore the comment menu when determining the widget height. By default, we will increase the widget height (the iframe height) when the menu opens if needed. **/
    ignoreCommentMenuHeight?: boolean
    /** Shows the user's current badges next to their username. **/
    showBadgesInTopBar?: boolean
}
