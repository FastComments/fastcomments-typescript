import { FastCommentsCommentWidgetConfig } from './fast-comments-comment-widget-config'

export interface FastCommentsImageChatWidgetConfig extends FastCommentsCommentWidgetConfig {
    /** The percentage of the image that the chat squares will take up. **/
    chatSquarePercentage?: number;
}
