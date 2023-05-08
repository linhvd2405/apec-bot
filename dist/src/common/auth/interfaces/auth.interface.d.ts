import { Types } from 'mongoose';
export interface IAuthApiPayload {
    _id: string;
    key: string;
    name: string;
}
export interface IAuthApi {
    _id: Types.ObjectId;
    secret: string;
    passphrase: string;
    encryptionKey: string;
}
export interface IAuthApiRequestHashedData {
    key: string;
    timestamp: number;
    hash: string;
}
export interface IAuthPassword {
    salt: string;
    passwordHash: string;
    passwordExpired: Date;
}
export interface IAuthPayloadOptions {
    loginDate: Date;
}
export interface IAuthPermission {
    code: string;
    name: string;
    description?: string;
    isActive?: boolean;
}
export interface IAuthRefreshTokenOptions {
    notBeforeExpirationTime?: number | string;
    rememberMe?: boolean;
}
