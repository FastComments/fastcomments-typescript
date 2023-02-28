export interface CommentHashTag {
    /** The hashtag id. **/
    id: string
    /** The final #hashtag tag text, including the # symbol. **/
    tag: string
    /** If the hashtag is associated with a custom URL, this will be defined. **/
    url?: string
    /** If we should retain the hashtag, even if it does not exist in the comment text, when the comment is updated. Useful for tagging comments without changing comment text. **/
    retain?: boolean
}
