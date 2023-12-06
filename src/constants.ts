export enum FastCommentsLocale {
    bg_bg = 'bg_bg',
    zh_cn = 'zh_cn',
    zh_tw = 'zh_tw',
    hr_hr = 'hr_hr',
    da_dk = 'da_dk',
    en_us = 'en_us',
    fr_fr = 'fr_fr',
    de_de = 'de_de',
    el_cy = 'el_cy',
    el_gr = 'el_gr',
    he = 'he',
    it_it = 'it_it',
    ja_jp = 'ja_jp',
    ko_kr = 'ko_kr',
    pl_pl = 'pl_pl',
    pt_br = 'pt_br',
    ru_ru = 'ru_ru',
    ru_ua = 'ru_ua',
    sr_ba = 'sr_ba',
    sr_latn_rs = 'sr_latn_rs',
    sl_sl = 'sl_sl',
    sr_me = 'sr_me',
    sr_rs = 'sr_rs',
    es_es = 'es_es',
    uk_ua = 'uk_ua',
    tr_tr = 'tr_tr'
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
    DirectMessage = 5,
    Mentioned = 7,
}

export enum NotificationObjectType {
    Comment = 0,
    Profile = 1
}

export enum VoteStyle {
    UpDown = 0, // default
    Heart = 1, // click heart to like
}
