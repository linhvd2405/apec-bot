"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const ms_1 = __importDefault(require("ms"));
exports.default = (0, config_1.registerAs)('auth', () => ({
    jwt: {
        accessToken: {
            secretKey: process.env.AUTH_JWT_ACCESS_TOKEN_SECRET_KEY || '123456',
            expirationTime: process.env.AUTH_JWT_ACCESS_TOKEN_EXPIRED
                ? (0, ms_1.default)(process.env.AUTH_JWT_ACCESS_TOKEN_EXPIRED)
                : (0, ms_1.default)('30m'),
            notBeforeExpirationTime: (0, ms_1.default)(0),
            encryptKey: process.env.AUTH_JWT_ACCESS_TOKEN_ENCRYPT_KEY,
            encryptIv: process.env.AUTH_JWT_ACCESS_TOKEN_ENCRYPT_IV,
        },
        refreshToken: {
            secretKey: process.env.AUTH_JWT_REFRESH_TOKEN_SECRET_KEY ||
                '123456000',
            expirationTime: process.env.AUTH_JWT_REFRESH_TOKEN_EXPIRED
                ? (0, ms_1.default)(process.env.AUTH_JWT_REFRESH_TOKEN_EXPIRED)
                : (0, ms_1.default)('7d'),
            expirationTimeRememberMe: process.env
                .AUTH_JWT_REFRESH_TOKEN_REMEMBER_ME_EXPIRED
                ? (0, ms_1.default)(process.env.AUTH_JWT_REFRESH_TOKEN_REMEMBER_ME_EXPIRED)
                : (0, ms_1.default)('30d'),
            notBeforeExpirationTime: process.env
                .AUTH_JWT_REFRESH_TOKEN_NOT_BEFORE_EXPIRATION
                ? (0, ms_1.default)(process.env
                    .AUTH_JWT_REFRESH_TOKEN_NOT_BEFORE_EXPIRATION)
                : (0, ms_1.default)('30m'),
            encryptKey: process.env.AUTH_JWT_REFRESH_TOKEN_ENCRYPT_KEY,
            encryptIv: process.env.AUTH_JWT_REFRESH_TOKEN_ENCRYPT_IV,
        },
        subject: process.env.AUTH_JWT_SUBJECT || 'ackDevelopment',
        audience: process.env.AUTH_JWT_AUDIENCE || 'https://example.com',
        issuer: process.env.AUTH_JWT_ISSUER || 'ack',
        prefixAuthorization: 'Bearer',
    },
    password: {
        saltLength: 8,
        expiredInMs: (0, ms_1.default)('182d'),
    },
}));
//# sourceMappingURL=auth.config.js.map