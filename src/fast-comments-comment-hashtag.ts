export interface CommentHashTag {
    /** The hashtag id. **/
    id: string
    /** The final #hashtag tag text, including the # symbol. **/
    tag: string
    /** If the hashtag is associated with a custom URL, this will be defined. **/
    url?: string
}
