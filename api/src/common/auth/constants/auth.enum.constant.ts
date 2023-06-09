export enum ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN {
    SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum ENUM_AUTH_ACCESS_FOR_DEFAULT {
    USER = 'USER',
    ADMIN = 'ADMIN',
    BOT_RECIVE = 'BOT_RECIVE',
    BOT_SEND = 'BOT_SEND'
}


export const ENUM_AUTH_ACCESS_FOR = {
    ...ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN,
    ...ENUM_AUTH_ACCESS_FOR_DEFAULT,
};

export type ENUM_AUTH_ACCESS_FOR =
    | ENUM_AUTH_ACCESS_FOR_SUPER_ADMIN
    | ENUM_AUTH_ACCESS_FOR_DEFAULT;

export enum ENUM_AUTH_DESCRPITION_DEFAULT{
    READ = 'READ',
    WRITE = 'WRITE',
    RECIVE = 'RECIVE',
    SEND = 'SEND'
}

export const ENUM_AUTH_DESCRPITION = {
    ...ENUM_AUTH_DESCRPITION_DEFAULT
}

export type ENUM_AUTH_DESCRPITION =
    | ENUM_AUTH_DESCRPITION_DEFAULT
