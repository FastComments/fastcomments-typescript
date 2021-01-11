export interface FastCommentsCommentCountConfig {
  /** Id that represents you as a customer. */
  tenantId: string
  /** Id that represents the page, if your comments aren't tied to the page url. Could be a URL or an ID (like an article id). */
  urlId?: string
  /** Only render the number, not any text. */
  numberOnly?: boolean
  /** Set the count as being live. Default is false. */
  isLive?: boolean
}
