export interface CommentUserMention {
    /** The user id. For SSO users, this will have your tenant id prefixed. **/
    id: string
    /** The original @mention tag text, including the @ symbol. **/
    rawTag: string
    /** If the user opts out of notifications, this will still be set to true. **/
    sent: boolean
    /** The final @mention tag text, including the @ symbol. **/
    tag: string
    /** What type of user was tagged. user = FastComments.com account. sso = SSOUser. **/
    type: 'user'|'sso'
}
