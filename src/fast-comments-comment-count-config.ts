export interface FastCommentsCommentCountConfig {
  /** Id that represents you as a customer. */
  tenantId: string
  /** Id that represents the page, if your comments aren't tied to the page url. Could be a URL or an ID (like an article id). */
  urlId?: string
  /** The region your account is in. If your account was created via fastcomments.com, you can leave this undefined. EU customers will want to set it to 'eu'. Does not apply to VanillaJS widget. */
  region?: 'eu';
  /** Only render the number, not any text. */
  numberOnly?: boolean
  /** Set the count as being live. Default is false. */
  isLive?: boolean
}
