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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_enum_permission_constant_1 = require("../../../common/auth/constants/auth.enum.permission.constant");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const pagination_service_1 = require("../../../common/pagination/services/pagination.service");
const request_decorator_1 = require("../../../common/request/decorators/request.decorator");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const permission_status_code_constant_1 = require("../../permission/constants/permission.status-code.constant");
const permission_service_1 = require("../../permission/services/permission.service");
const bot_doc_constant_1 = require("../constants/bot.doc.constant");
const bot_status_code_constant_1 = require("../constants/bot.status-code.constant");
const bot_admin_decorator_1 = require("../decorators/bot.admin.decorator");
const bot_decorator_1 = require("../decorators/bot.decorator");
const bot_create_dto_1 = require("../dtos/bot.create.dto");
const bot_list_dto_1 = require("../dtos/bot.list.dto");
const bot_request_dto_1 = require("../dtos/bot.request.dto");
const bot_update_dto_1 = require("../dtos/bot.update.dto");
const bot_get_serialization_1 = require("../serializations/bot.get.serialization");
const bot_list_serialization_1 = require("../serializations/bot.list.serialization");
const bot_service_1 = require("../services/bot.service");
let BotAdminController = class BotAdminController {
    constructor(paginationService, botService, permissionService) {
        this.paginationService = paginationService;
        this.botService = botService;
        this.permissionService = permissionService;
    }
    async list({ page, perPage, sort, search, availableSort, availableSearch, }) {
        const skip = await this.paginationService.skip(page, perPage);
        const find = {
            ...search,
        };
        const bots = await this.botService.findAll(find, {
            skip: skip,
            limit: perPage,
            sort,
        });
        const totalData = await this.botService.getTotal({});
        const totalPage = await this.paginationService.totalPage(totalData, perPage);
        return {
            totalData,
            totalPage,
            currentPage: page,
            perPage,
            availableSearch,
            availableSort,
            data: bots,
        };
    }
    async get(bot) {
        return bot;
    }
    async create({ name, permissions, accessFor }) {
        const exist = await this.botService.exists(name);
        if (exist) {
            throw new common_1.BadRequestException({
                statusCode: bot_status_code_constant_1.ENUM_BOT_STATUS_CODE_ERROR.BOT_EXIST_ERROR,
                message: 'bot.error.exist',
            });
        }
        for (const permission of permissions) {
            const checkPermission = await this.permissionService.findOneById(permission);
            if (!checkPermission) {
                throw new common_1.NotFoundException({
                    statusCode: permission_status_code_constant_1.ENUM_PERMISSION_STATUS_CODE_ERROR.PERMISSION_NOT_FOUND_ERROR,
                    message: 'permission.error.notFound',
                });
            }
        }
        try {
            const create = await this.botService.create({
                name,
                permissions,
                accessFor,
            });
            return {
                _id: create._id,
            };
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
    }
    async update(bot, { name, permissions, accessFor }) {
        const check = await this.botService.exists(name, bot._id);
        if (check) {
            throw new common_1.BadRequestException({
                statusCode: bot_status_code_constant_1.ENUM_BOT_STATUS_CODE_ERROR.BOT_EXIST_ERROR,
                message: 'bot.error.exist',
            });
        }
        for (const permission of permissions) {
            const checkPermission = await this.permissionService.findOneById(permission);
            if (!checkPermission) {
                throw new common_1.NotFoundException({
                    statusCode: permission_status_code_constant_1.ENUM_PERMISSION_STATUS_CODE_ERROR.PERMISSION_NOT_FOUND_ERROR,
                    message: 'permission.error.notFound',
                });
            }
        }
        try {
            await this.botService.update(bot._id, {
                name,
                permissions,
                accessFor,
            });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return {
            _id: bot._id,
        };
    }
    async delete(bot) {
        try {
            await this.botService.deleteOneById(bot._id);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return;
    }
    async inactive(bot) {
        try {
            await this.botService.inactive(bot._id);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return;
    }
    async active(bot) {
        try {
            await this.botService.active(bot._id);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return;
    }
};
__decorate([
    (0, response_decorator_1.ResponsePaging)('bot.list', {
        classSerialization: bot_list_serialization_1.BotListSerialization,
    }),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_READ),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bot_list_dto_1.BotListDto]),
    __metadata("design:returntype", Promise)
], BotAdminController.prototype, "list", null);
__decorate([
    (0, response_decorator_1.Response)('bot.get', {
        classSerialization: bot_get_serialization_1.BotGetSerialization,
        doc: { params: bot_doc_constant_1.BotDocParamsGet },
    }),
    (0, bot_admin_decorator_1.BotGetGuard)(),
    (0, request_decorator_1.RequestParamGuard)(bot_request_dto_1.BotRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_READ),
    (0, common_1.Get)('get/:bot'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, bot_decorator_1.GetBot)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BotAdminController.prototype, "get", null);
__decorate([
    (0, response_decorator_1.Response)('bot.create', {
        classSerialization: response_id_serialization_1.ResponseIdSerialization,
        doc: {
            httpStatus: common_1.HttpStatus.CREATED,
        },
    }),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_CREATE),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bot_create_dto_1.BotCreateDto]),
    __metadata("design:returntype", Promise)
], BotAdminController.prototype, "create", null);
__decorate([
    (0, response_decorator_1.Response)('bot.update', {
        classSerialization: response_id_serialization_1.ResponseIdSerialization,
        doc: { params: bot_doc_constant_1.BotDocParamsGet },
    }),
    (0, bot_admin_decorator_1.BotUpdateGuard)(),
    (0, request_decorator_1.RequestParamGuard)(bot_request_dto_1.BotRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_UPDATE),
    (0, common_1.Put)('/update/:bot'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, bot_decorator_1.GetBot)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, bot_update_dto_1.BotUpdateDto]),
    __metadata("design:returntype", Promise)
], BotAdminController.prototype, "update", null);
__decorate([
    (0, response_decorator_1.Response)('bot.delete', { doc: { params: bot_doc_constant_1.BotDocParamsGet } }),
    (0, bot_admin_decorator_1.BotDeleteGuard)(),
    (0, request_decorator_1.RequestParamGuard)(bot_request_dto_1.BotRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_DELETE),
    (0, common_1.Delete)('/delete/:bot'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, bot_decorator_1.GetBot)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BotAdminController.prototype, "delete", null);
__decorate([
    (0, response_decorator_1.Response)('bot.inactive', { doc: { params: bot_doc_constant_1.BotDocParamsGet } }),
    (0, bot_admin_decorator_1.BotUpdateInactiveGuard)(),
    (0, request_decorator_1.RequestParamGuard)(bot_request_dto_1.BotRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_UPDATE),
    (0, common_1.Patch)('/update/:bot/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, bot_decorator_1.GetBot)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BotAdminController.prototype, "inactive", null);
__decorate([
    (0, response_decorator_1.Response)('bot.active', { doc: { params: bot_doc_constant_1.BotDocParamsGet } }),
    (0, bot_admin_decorator_1.BotUpdateActiveGuard)(),
    (0, request_decorator_1.RequestParamGuard)(bot_request_dto_1.BotRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.BOT_UPDATE),
    (0, common_1.Patch)('/update/:bot/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, bot_decorator_1.GetBot)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BotAdminController.prototype, "active", null);
BotAdminController = __decorate([
    (0, swagger_1.ApiTags)('modules.admin.bot'),
    (0, common_1.Controller)({
        version: '1',
        path: '/bot',
    }),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        bot_service_1.BotService,
        permission_service_1.PermissionService])
], BotAdminController);
exports.BotAdminController = BotAdminController;
//# sourceMappingURL=bot.admin.controller.js.map