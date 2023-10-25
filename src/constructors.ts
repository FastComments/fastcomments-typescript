import {
    FastCommentsCommentWidgetConfig,
    FastCommentsLoggedInUser,
    OnOpenProfileRequest
} from "./fast-comments-comment-widget-config";

export interface FastCommentsWidgetEmbed {
    id: string
    destroy: () => void
    update: (newConfig: FastCommentsCommentWidgetConfig) => FastCommentsUIReturnType
    updateUser: (newUser: FastCommentsLoggedInUser) => void
    postMessage: (message: string) => void
    openProfile: (request: OnOpenProfileRequest) => void
}

export type FastCommentsUIReturnType = FastCommentsWidgetEmbed | undefined; // can return undefined on failure
export type FastCommentsUI = (element: HTMLElement, config: FastCommentsCommentWidgetConfig) => FastCommentsUIReturnType;

export interface Window {
    FastCommentsUI: FastCommentsUI
}
