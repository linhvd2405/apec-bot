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
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const logger_enum_constant_1 = require("../constants/logger.enum.constant");
const logger_repository_1 = require("../repositories/logger.repository");
let LoggerService = class LoggerService {
    constructor(loggerRepository) {
        this.loggerRepository = loggerRepository;
    }
    async info({ action, description, apiKey, user, method, requestId, role, params, bodies, path, statusCode, tags, }) {
        const create = {
            level: logger_enum_constant_1.ENUM_LOGGER_LEVEL.INFO,
            user: user ? new mongoose_1.Types.ObjectId(user) : undefined,
            apiKey: apiKey ? new mongoose_1.Types.ObjectId(apiKey) : undefined,
            anonymous: user ? false : true,
            action,
            description,
            method,
            requestId,
            role: role ? new mongoose_1.Types.ObjectId(role._id) : undefined,
            accessFor: role && role.accessFor ? role.accessFor : undefined,
            params,
            bodies,
            path,
            statusCode,
            tags,
        };
        return this.loggerRepository.create(create);
    }
    async debug({ action, description, apiKey, user, method, requestId, role, params, bodies, path, statusCode, tags, }) {
        const create = {
            level: logger_enum_constant_1.ENUM_LOGGER_LEVEL.DEBUG,
            user: user ? new mongoose_1.Types.ObjectId(user) : undefined,
            apiKey: apiKey ? new mongoose_1.Types.ObjectId(apiKey) : undefined,
            anonymous: user ? false : true,
            action,
            description,
            method,
            requestId,
            role: role ? new mongoose_1.Types.ObjectId(role._id) : undefined,
            accessFor: role && role.accessFor ? role.accessFor : undefined,
            params,
            bodies,
            path,
            statusCode,
            tags,
        };
        return this.loggerRepository.create(create);
    }
    async warning({ action, description, apiKey, user, method, requestId, role, params, bodies, path, statusCode, tags, }) {
        const create = {
            level: logger_enum_constant_1.ENUM_LOGGER_LEVEL.WARM,
            user: user ? new mongoose_1.Types.ObjectId(user) : undefined,
            apiKey: apiKey ? new mongoose_1.Types.ObjectId(apiKey) : undefined,
            anonymous: user ? false : true,
            action,
            description,
            method,
            requestId,
            role: role ? new mongoose_1.Types.ObjectId(role._id) : undefined,
            accessFor: role && role.accessFor ? role.accessFor : undefined,
            params,
            bodies,
            path,
            statusCode,
            tags,
        };
        return this.loggerRepository.create(create);
    }
    async fatal({ action, description, apiKey, user, method, requestId, role, params, bodies, path, statusCode, tags, }) {
        const create = {
            level: logger_enum_constant_1.ENUM_LOGGER_LEVEL.FATAL,
            user: user ? new mongoose_1.Types.ObjectId(user) : undefined,
            apiKey: apiKey ? new mongoose_1.Types.ObjectId(apiKey) : undefined,
            anonymous: user ? false : true,
            action,
            description,
            method,
            requestId,
            role: role ? new mongoose_1.Types.ObjectId(role._id) : undefined,
            accessFor: role && role.accessFor ? role.accessFor : undefined,
            params,
            bodies,
            path,
            statusCode,
            tags,
        };
        return this.loggerRepository.create(create);
    }
    async raw({ level, action, description, apiKey, user, method, requestId, role, params, bodies, path, statusCode, tags, }) {
        const create = {
            level,
            user: user ? new mongoose_1.Types.ObjectId(user) : undefined,
            apiKey: apiKey ? new mongoose_1.Types.ObjectId(apiKey) : undefined,
            anonymous: user ? false : true,
            action,
            description,
            method,
            requestId,
            role: role ? new mongoose_1.Types.ObjectId(role._id) : undefined,
            accessFor: role && role.accessFor ? role.accessFor : undefined,
            params,
            bodies,
            path,
            statusCode,
            tags,
        };
        return this.loggerRepository.create(create);
    }
};
LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_repository_1.LoggerRepository])
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map