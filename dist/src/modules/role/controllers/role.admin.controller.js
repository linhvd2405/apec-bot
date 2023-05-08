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
exports.RoleAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const pagination_service_1 = require("../../../common/pagination/services/pagination.service");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const permission_status_code_constant_1 = require("../../permission/constants/permission.status-code.constant");
const permission_service_1 = require("../../permission/services/permission.service");
const role_doc_constant_1 = require("../constants/role.doc.constant");
const role_status_code_constant_1 = require("../constants/role.status-code.constant");
const role_decorator_1 = require("../decorators/role.decorator");
const role_create_dto_1 = require("../dtos/role.create.dto");
const role_list_dto_1 = require("../dtos/role.list.dto");
const role_update_dto_1 = require("../dtos/role.update.dto");
const role_get_serialization_1 = require("../serializations/role.get.serialization");
const role_list_serialization_1 = require("../serializations/role.list.serialization");
const role_service_1 = require("../services/role.service");
let RoleAdminController = class RoleAdminController {
    constructor(paginationService, roleService, permissionService) {
        this.paginationService = paginationService;
        this.roleService = roleService;
        this.permissionService = permissionService;
    }
    async list({ page, perPage, sort, search, availableSort, availableSearch, }) {
        const skip = await this.paginationService.skip(page, perPage);
        const find = {
            ...search,
        };
        const roles = await this.roleService.findAll(find, {
            skip: skip,
            limit: perPage,
            sort,
        });
        const totalData = await this.roleService.getTotal({});
        const totalPage = await this.paginationService.totalPage(totalData, perPage);
        return {
            totalData,
            totalPage,
            currentPage: page,
            perPage,
            availableSearch,
            availableSort,
            data: roles,
        };
    }
    async get(role) {
        return role;
    }
    async create({ name, permissions, accessFor }) {
        const exist = await this.roleService.exists(name);
        if (exist) {
            throw new common_1.BadRequestException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_EXIST_ERROR,
                message: 'role.error.exist',
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
            const create = await this.roleService.create({
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
    async update(role, { name, permissions, accessFor }) {
        const check = await this.roleService.exists(name, role._id);
        if (check) {
            throw new common_1.BadRequestException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_EXIST_ERROR,
                message: 'role.error.exist',
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
            await this.roleService.update(role._id, {
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
            _id: role._id,
        };
    }
    async delete(role) {
        try {
            await this.roleService.deleteOneById(role._id);
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
    async inactive(role) {
        try {
            await this.roleService.inactive(role._id);
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
    async active(role) {
        try {
            await this.roleService.active(role._id);
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
    (0, response_decorator_1.ResponsePaging)('role.list', {
        classSerialization: role_list_serialization_1.RoleListSerialization,
    }),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_list_dto_1.RoleListDto]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "list", null);
__decorate([
    (0, response_decorator_1.Response)('role.get', {
        classSerialization: role_get_serialization_1.RoleGetSerialization,
        doc: { params: role_doc_constant_1.RoleDocParamsGet },
    }),
    (0, common_1.Get)('get/:role'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, role_decorator_1.GetRole)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "get", null);
__decorate([
    (0, response_decorator_1.Response)('role.create', {
        classSerialization: response_id_serialization_1.ResponseIdSerialization,
        doc: {
            httpStatus: common_1.HttpStatus.CREATED,
        },
    }),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_create_dto_1.RoleCreateDto]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "create", null);
__decorate([
    (0, response_decorator_1.Response)('role.update', {
        classSerialization: response_id_serialization_1.ResponseIdSerialization,
        doc: { params: role_doc_constant_1.RoleDocParamsGet },
    }),
    (0, common_1.Put)('/update/:role'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, role_decorator_1.GetRole)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, role_update_dto_1.RoleUpdateDto]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "update", null);
__decorate([
    (0, response_decorator_1.Response)('role.delete', { doc: { params: role_doc_constant_1.RoleDocParamsGet } }),
    (0, common_1.Delete)('/delete/:role'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, role_decorator_1.GetRole)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "delete", null);
__decorate([
    (0, response_decorator_1.Response)('role.inactive', { doc: { params: role_doc_constant_1.RoleDocParamsGet } }),
    (0, common_1.Patch)('/update/:role/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, role_decorator_1.GetRole)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "inactive", null);
__decorate([
    (0, response_decorator_1.Response)('role.active', { doc: { params: role_doc_constant_1.RoleDocParamsGet } }),
    (0, common_1.Patch)('/update/:role/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, role_decorator_1.GetRole)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleAdminController.prototype, "active", null);
RoleAdminController = __decorate([
    (0, swagger_1.ApiTags)('modules.admin.role'),
    (0, common_1.Controller)({
        version: '1',
        path: '/role',
    }),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        role_service_1.RoleService,
        permission_service_1.PermissionService])
], RoleAdminController);
exports.RoleAdminController = RoleAdminController;
//# sourceMappingURL=role.admin.controller.js.map