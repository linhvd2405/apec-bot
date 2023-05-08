"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const helper_encryption_service_1 = require("../../helper/services/helper.encryption.service");
const helper_hash_service_1 = require("../../helper/services/helper.hash.service");
let AuthService = class AuthService {
    constructor(helperHashService, helperDateService, helperEncryptionService, configService) {
        this.helperHashService = helperHashService;
        this.helperDateService = helperDateService;
        this.helperEncryptionService = helperEncryptionService;
        this.configService = configService;
        this.accessTokenSecretToken = this.configService.get('auth.jwt.accessToken.secretKey');
        this.accessTokenExpirationTime = this.configService.get('auth.jwt.accessToken.expirationTime');
        this.accessTokenNotBeforeExpirationTime =
            this.configService.get('auth.jwt.accessToken.notBeforeExpirationTime');
        this.accessTokenEncryptKey = this.configService.get('auth.jwt.accessToken.encryptKey');
        this.accessTokenEncryptIv = this.configService.get('auth.jwt.accessToken.encryptIv');
        this.refreshTokenSecretToken = this.configService.get('auth.jwt.refreshToken.secretKey');
        this.refreshTokenExpirationTime = this.configService.get('auth.jwt.refreshToken.expirationTime');
        this.refreshTokenExpirationTimeRememberMe =
            this.configService.get('auth.jwt.refreshToken.expirationTimeRememberMe');
        this.refreshTokenNotBeforeExpirationTime =
            this.configService.get('auth.jwt.refreshToken.notBeforeExpirationTime');
        this.refreshTokenEncryptKey = this.configService.get('auth.jwt.refreshToken.encryptKey');
        this.refreshTokenEncryptIv = this.configService.get('auth.jwt.refreshToken.encryptIv');
        this.prefixAuthorization = this.configService.get('auth.jwt.prefixAuthorization');
        this.subject = this.configService.get('auth.jwt.subject');
        this.audience = this.configService.get('auth.jwt.audience');
        this.issuer = this.configService.get('auth.jwt.issuer');
    }
    async encryptAccessToken(payload) {
        return this.configService.get('app.env') === 'production'
            ? this.helperEncryptionService.aes256Encrypt(payload, this.accessTokenEncryptKey, this.accessTokenEncryptIv)
            : payload;
    }
    async decryptAccessToken({ data, }) {
        return this.helperEncryptionService.aes256Decrypt(data, this.accessTokenEncryptKey, this.accessTokenEncryptIv);
    }
    async createAccessToken(payloadHashed) {
        return this.helperEncryptionService.jwtEncrypt({ data: payloadHashed }, {
            secretKey: this.accessTokenSecretToken,
            expiredIn: this.accessTokenExpirationTime,
            notBefore: this.accessTokenNotBeforeExpirationTime,
            audience: this.audience,
            issuer: this.issuer,
            subject: this.subject,
        });
    }
    async validateAccessToken(token) {
        return this.helperEncryptionService.jwtVerify(token, {
            secretKey: this.accessTokenSecretToken,
            audience: this.audience,
            issuer: this.issuer,
            subject: this.subject,
        });
    }
    async payloadAccessToken(token) {
        return this.helperEncryptionService.jwtDecrypt(token);
    }
    async encryptRefreshToken(payload) {
        return this.configService.get('app.env') === 'production'
            ? this.helperEncryptionService.aes256Encrypt(payload, this.refreshTokenEncryptKey, this.refreshTokenEncryptIv)
            : payload;
    }
    async decryptRefreshToken({ data, }) {
        return this.helperEncryptionService.aes256Decrypt(data, this.refreshTokenEncryptKey, this.refreshTokenEncryptIv);
    }
    async createRefreshToken(payloadHashed, options) {
        return this.helperEncryptionService.jwtEncrypt({ data: payloadHashed }, {
            secretKey: this.refreshTokenSecretToken,
            expiredIn: options && options.rememberMe
                ? this.refreshTokenExpirationTimeRememberMe
                : this.refreshTokenExpirationTime,
            notBefore: options && options.notBeforeExpirationTime
                ? options.notBeforeExpirationTime
                : this.refreshTokenNotBeforeExpirationTime,
            audience: this.audience,
            issuer: this.issuer,
            subject: this.subject,
        });
    }
    async validateRefreshToken(token) {
        return this.helperEncryptionService.jwtVerify(token, {
            secretKey: this.refreshTokenSecretToken,
            audience: this.audience,
            issuer: this.issuer,
            subject: this.subject,
        });
    }
    async payloadRefreshToken(token) {
        return this.helperEncryptionService.jwtDecrypt(token);
    }
    async validateUser(passwordString, passwordHash) {
        return this.helperHashService.bcryptCompare(passwordString, passwordHash);
    }
    async createPayloadAccessToken(data, rememberMe, options) {
        return {
            ...data,
            rememberMe,
            loginDate: options && options.loginDate
                ? options.loginDate
                : this.helperDateService.create(),
        };
    }
    async createPayloadRefreshToken(_id, rememberMe, options) {
        return {
            _id,
            rememberMe,
            loginDate: options && options.loginDate ? options.loginDate : undefined,
        };
    }
    async createPassword(password) {
        const saltLength = this.configService.get('auth.password.saltLength');
        const salt = this.helperHashService.randomSalt(saltLength);
        const passwordExpiredInMs = this.configService.get('auth.password.expiredInMs');
        const passwordExpired = this.helperDateService.forwardInMilliseconds(passwordExpiredInMs);
        const passwordHash = this.helperHashService.bcrypt(password, salt);
        return {
            passwordHash,
            passwordExpired,
            salt,
        };
    }
    async checkPasswordExpired(passwordExpired) {
        const today = this.helperDateService.create();
        const passwordExpiredConvert = this.helperDateService.create({
            date: passwordExpired,
        });
        if (today > passwordExpiredConvert) {
            return true;
        }
        return false;
    }
    async getTokenType() {
        return this.prefixAuthorization;
    }
    async getAccessTokenExpirationTime() {
        return this.accessTokenExpirationTime;
    }
    async getRefreshTokenExpirationTime(rememberMe) {
        return rememberMe
            ? this.refreshTokenExpirationTime
            : this.refreshTokenExpirationTimeRememberMe;
    }
    async getIssuer() {
        return this.issuer;
    }
    async getAudience() {
        return this.audience;
    }
    async getSubject() {
        return this.subject;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_hash_service_1.HelperHashService,
        helper_date_service_1.HelperDateService,
        helper_encryption_service_1.HelperEncryptionService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map