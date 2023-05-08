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
exports.AuthApiService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const helper_string_service_1 = require("../../helper/services/helper.string.service");
const helper_hash_service_1 = require("../../helper/services/helper.hash.service");
const helper_encryption_service_1 = require("../../helper/services/helper.encryption.service");
const auth_api_repository_1 = require("../repositories/auth.api.repository");
let AuthApiService = class AuthApiService {
    constructor(authApiRepository, helperStringService, configService, helperHashService, helperEncryptionService) {
        this.authApiRepository = authApiRepository;
        this.helperStringService = helperStringService;
        this.configService = configService;
        this.helperHashService = helperHashService;
        this.helperEncryptionService = helperEncryptionService;
        this.env = this.configService.get('app.env');
    }
    async findAll(find, options) {
        return this.authApiRepository.findAll(find, {
            ...options,
            select: {
                name: 1,
                key: 1,
                isActive: 1,
                createdAt: 1,
            },
        });
    }
    async findOneById(_id, options) {
        return this.authApiRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.authApiRepository.findOne(find, options);
    }
    async findOneByKey(key, options) {
        return this.authApiRepository.findOne({ key }, options);
    }
    async getTotal(find, options) {
        return this.authApiRepository.getTotal(find, options);
    }
    async inactive(_id, options) {
        const update = {
            isActive: false,
        };
        return this.authApiRepository.updateOneById(_id, update, options);
    }
    async active(_id, options) {
        const update = {
            isActive: true,
        };
        return this.authApiRepository.updateOneById(_id, update, options);
    }
    async create({ name, description }, options) {
        const key = await this.createKey();
        const secret = await this.createSecret();
        const passphrase = await this.createPassphrase();
        const encryptionKey = await this.createEncryptionKey();
        const hash = await this.createHashApiKey(key, secret);
        const create = {
            name,
            description,
            key,
            hash,
            passphrase,
            encryptionKey,
            isActive: true,
        };
        const created = await this.authApiRepository.create(create, options);
        return {
            _id: created._id,
            secret,
            passphrase,
            encryptionKey,
        };
    }
    async createRaw({ name, description, key, secret, passphrase, encryptionKey, }, options) {
        const hash = await this.createHashApiKey(key, secret);
        const create = {
            name,
            description,
            key,
            hash,
            passphrase,
            encryptionKey,
            isActive: true,
        };
        const created = await this.authApiRepository.create(create, options);
        return {
            _id: created._id,
            secret,
            passphrase,
            encryptionKey,
        };
    }
    async updateOneById(_id, data, options) {
        return this.authApiRepository.updateOneById(_id, data, options);
    }
    async updateHashById(_id, options) {
        const authApi = await this.authApiRepository.findOneById(_id);
        const secret = await this.createSecret();
        const hash = await this.createHashApiKey(authApi.key, secret);
        const passphrase = await this.createPassphrase();
        const encryptionKey = await this.createEncryptionKey();
        const update = {
            hash,
            passphrase,
            encryptionKey,
        };
        await this.authApiRepository.updateOneById(_id, update, options);
        return {
            _id: authApi._id,
            secret,
            passphrase,
            encryptionKey,
        };
    }
    async deleteOneById(_id, options) {
        return this.authApiRepository.deleteOneById(_id, options);
    }
    async deleteOne(find, options) {
        return this.authApiRepository.deleteOne(find, options);
    }
    async createKey() {
        return this.helperStringService.random(25, {
            safe: false,
            upperCase: true,
            prefix: `${this.env}_`,
        });
    }
    async createEncryptionKey() {
        return this.helperStringService.random(15, {
            safe: false,
            upperCase: true,
            prefix: `${this.env}_`,
        });
    }
    async createSecret() {
        return this.helperStringService.random(35, {
            safe: false,
            upperCase: true,
        });
    }
    async createPassphrase() {
        return this.helperStringService.random(16, {
            safe: true,
        });
    }
    async createHashApiKey(key, secret) {
        return this.helperHashService.sha256(`${key}:${secret}`);
    }
    async validateHashApiKey(hashFromRequest, hash) {
        return this.helperHashService.sha256Compare(hashFromRequest, hash);
    }
    async decryptApiKey(encryptedApiKey, encryptionKey, passphrase) {
        const decrypted = this.helperEncryptionService.aes256Decrypt(encryptedApiKey, encryptionKey, passphrase);
        return decrypted;
    }
    async encryptApiKey(data, encryptionKey, passphrase) {
        return this.helperEncryptionService.aes256Encrypt(data, encryptionKey, passphrase);
    }
    async createBasicToken(clientId, clientSecret) {
        const token = `${clientId}:${clientSecret}`;
        return this.helperEncryptionService.base64Decrypt(token);
    }
    async validateBasicToken(clientBasicToken, ourBasicToken) {
        return this.helperEncryptionService.base64Compare(clientBasicToken, ourBasicToken);
    }
};
AuthApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_api_repository_1.AuthApiRepository,
        helper_string_service_1.HelperStringService,
        config_1.ConfigService,
        helper_hash_service_1.HelperHashService,
        helper_encryption_service_1.HelperEncryptionService])
], AuthApiService);
exports.AuthApiService = AuthApiService;
//# sourceMappingURL=auth.api.service.js.map