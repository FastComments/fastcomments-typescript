import {Comment} from "./fast-comments-comment";

export interface FastCommentsSSO {
  /** The user's data represented as JSON, and then Base64'd. Leave empty for an unauthenticated user. */
  userDataJSONBase64: string
  /** The HMAC-SHA256 hash of the userDataJSONBase64 field, using your secret key. Leave empty for an unauthenticated user. */
  verificationHash: string
  /** The timestamp of when the verificationHash was created. */
  timestamp: number
  /** The logout URL for the user. If you define the SSO configuration, but not this, the logout link won't be shown. */
  logoutURL?: string
  /** The login URL for the user, which will show if they try to comment and they are not authenticated. */
  loginURL?: string
}

export interface FastCommentsSSOSimple {
  /** This must be unique when paired with an email. */
  username: string
  /** The user's email. We'll send welcome and verification emails to this address. **/
  email?: string
  /** The user's avatar. **/
  avatarSrc?: string
  /** The user's website, blog, or personal account page. We'll link their username to this. **/
  websiteUrl?: string
}

export interface FastCommentsCommentWidgetConfig {
  /** Id that represents you as a customer. */
  tenantId: string
  /** Id that represents the page, if you don't want to tie comments to the page url. Could be a URL or an ID (like an article id). */
  urlId?: string
  /** URL that represents the page, if you don't want to tie to the page url in the browser. Must always be a URL. */
  url?: string
  /** A path to the default avatar image, shown when the user has no avatar. When undefined, it defaults to "https://fastcomments.com/images/unknown-person.png". */
  defaultAvatarSrc?: string
  /** Whether or not the comment widget is on a page or element with a dark background. If undefined the widget will try to determine the background color itself. */
  hasDarkBackground?: boolean
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
  /** Place the page-level comment reply at the bottom of the comment list. (Customizable via the UI.) */
  inputAfterComments?: boolean
  /** Maximum character length for a comment. Default is 2k characters. */
  maxCommentCharacterLength?: number
  /** Don't use relative dates like "11 minutes ago". (Customizable via the UI.) */
  absoluteDates?: boolean
  /** Show both relative and absolute dates "11 minutes ago (5/18/2021)". (Customizable via the UI.) */
  absoluteAndRelativeDates?: boolean
  /** Text like "Show [count] comments". When defined we won't show the comment list. Instead show a link with the given text, which shows the comments upon clicking. (Customizable via the UI.) */
  hideCommentsUnderCountTextFormat?: string
  /** Header HTML. (Customizable via the UI.) */
  headerHTML?: boolean
  /** console.log time to create HTML for rendering. */
  debugRenderTime?: boolean
  /** Disables inserting default style tag into DOM. (Customizable via the UI.) */
  noStyles?: boolean
  /** Disables email requirement. (Customizable via the UI.) */
  allowAnon?: boolean
  /** Disables adding images. (Customizable via the UI.) */
  noImageUploads?: boolean
  /** locale, valid values are 'en_us', 'es_es', 'fr_fr', 'pl_pl', 'de_de', 'it_it', 'ru_ru' */
  locale?: string
  /** Whether or not the comment count should include all comments instead of just the top-level ones */
  countAll?: boolean
  /** Whether or not to show comments right away, without having to click "show N comments". */
  showLiveRightAway?: boolean
  /** SSO Configuration. For an unauthenticated user, do not define userDataJSONBase64 and verificationHash. See <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso" target="_blank">the documentation</a>. */
  sso?: FastCommentsSSO
  /** Simple SSO Configuration, less secure than "sso". See <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#option-two---simple-sso" target="_blank">the documentation</a>. */
  simpleSSO?: FastCommentsSSOSimple,
  /** Invoked when library initializes (nothing shown yet). **/
  onInit?: () => void,
  /** Invoked when library renders content. Happens on any state change. **/
  onRender?: () => void,
  /** Invoked when replying is successful. **/
  onReplySuccess?: (comment: Comment) => void,
  /** Invoked when voting is successful. **/
  onVoteSuccess?: (comment: Comment, voteId: string, direction: 'up'|'down'|'deleted', status: 'success'|'pending-verification') => void,
  /** Invoked when clicking an image inside a comment. **/
  onImageClicked?: (imageSrc: string) => void,
  /** Disable the image redirect that occurs when clicking an image inside a comment. **/
  disableImageRedirect?: boolean
}
