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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_headerapikey_1 = __importDefault(require("passport-headerapikey"));
const auth_status_code_constant_1 = require("../../constants/auth.status-code.constant");
const auth_api_service_1 = require("../../services/auth.api.service");
let ApiKeyStrategy = class ApiKeyStrategy extends (0, passport_1.PassportStrategy)(passport_headerapikey_1.default, 'api-key') {
    constructor(authApiService) {
        super({ header: 'X-API-KEY', prefix: '' }, true, async (apiKey, verified, req) => this.validate(apiKey, verified, req));
        this.authApiService = authApiService;
    }
    async validate(apiKey, verified, req) {
        const xApiKey = apiKey.split(':');
        const key = xApiKey[0];
        const encrypted = xApiKey[1];
        const authApi = await this.authApiService.findOneByKey(key);
        if (!authApi) {
            verified(null, null, `${auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_NOT_FOUND_ERROR}`);
        }
        else if (!authApi.isActive) {
            verified(null, null, `${auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_INACTIVE_ERROR}`);
        }
        else {
            const decrypted = await this.authApiService.decryptApiKey(encrypted, authApi.encryptionKey, authApi.passphrase);
            const hasKey = 'key' in decrypted &&
                'timestamp' in decrypted &&
                'hash' in decrypted;
            if (!hasKey) {
                verified(null, null, `${auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_SCHEMA_INVALID_ERROR}`);
            }
            else if (key !== decrypted.key) {
                verified(null, null, `${auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_INVALID_ERROR}`);
            }
            else {
                const validateApiKey = await this.authApiService.validateHashApiKey(decrypted.hash, authApi.hash);
                if (!validateApiKey) {
                    verified(null, null, `${auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_INVALID_ERROR}`);
                }
                else {
                    req.apiKey = {
                        _id: authApi._id,
                        key: authApi.key,
                        name: authApi.name,
                    };
                    verified(null, authApi);
                }
            }
        }
    }
};
ApiKeyStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_api_service_1.AuthApiService])
], ApiKeyStrategy);
exports.ApiKeyStrategy = ApiKeyStrategy;
//# sourceMappingURL=auth.api-key.strategy.js.map