export enum FastCommentsLocale {
    zh_cn = 'zh_cn',
    zh_tw = 'zh_tw',
    en_us = 'en_us',
    fr_fr = 'fr_fr',
    de_de = 'de_de',
    it_it = 'it_it',
    ja_jp = 'ja_jp',
    pl_pl = 'pl_pl',
    pt_br = 'pt_br',
    ru_ru = 'ru_ru',
    es_es = 'es_es',
    tr_tr = 'tr_tr',
}

export enum FastCommentsSiteType {
    Unknown = 0,
    WordPress = 1
}

export enum NotificationType {
    RepliedToMe = 0,
    RepliedTransientChild = 1,
    VotedMyComment = 2,
    SubscriptionReplyRoot = 3,
    CommentedOnProfile = 4,
    DirectMessage = 5
}

export enum NotificationObjectType {
    Comment = 0,
    Profile = 1
}
