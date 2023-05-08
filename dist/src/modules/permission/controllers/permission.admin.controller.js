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
exports.PermissionAdminController = void 0;
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
const permission_doc_constant_1 = require("../constants/permission.doc.constant");
const permission_admin_decorator_1 = require("../decorators/permission.admin.decorator");
const permission_decorator_1 = require("../decorators/permission.decorator");
const permission_list_dto_1 = require("../dtos/permission.list.dto");
const permission_update_dto_1 = require("../dtos/permission.update.dto");
const permissions_request_dto_1 = require("../dtos/permissions.request.dto");
const permission_get_serialization_1 = require("../serializations/permission.get.serialization");
const permission_list_serialization_1 = require("../serializations/permission.list.serialization");
const permission_service_1 = require("../services/permission.service");
let PermissionAdminController = class PermissionAdminController {
    constructor(paginationService, permissionService) {
        this.paginationService = paginationService;
        this.permissionService = permissionService;
    }
    async list({ page, perPage, sort, search, availableSort, availableSearch, isActive, }) {
        const skip = await this.paginationService.skip(page, perPage);
        const find = {
            isActive: {
                $in: isActive,
            },
            ...search,
        };
        const permissions = await this.permissionService.findAll(find, {
            skip: skip,
            limit: perPage,
            sort,
        });
        const totalData = await this.permissionService.getTotal(find);
        const totalPage = await this.paginationService.totalPage(totalData, perPage);
        return {
            totalData,
            totalPage,
            currentPage: page,
            perPage,
            availableSearch,
            availableSort,
            data: permissions,
        };
    }
    async get(permission) {
        return permission;
    }
    async update(permission, body) {
        try {
            await this.permissionService.update(permission._id, body);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return {
            _id: permission._id,
        };
    }
    async inactive(permission) {
        try {
            await this.permissionService.inactive(permission._id);
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
    async active(permission) {
        try {
            await this.permissionService.active(permission._id);
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
    (0, response_decorator_1.ResponsePaging)('permission.list', {
        classSerialization: permission_list_serialization_1.PermissionListSerialization,
        doc: {
            queries: permission_doc_constant_1.PermissionDocQueryList,
        },
    }),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.PERMISSION_READ),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permission_list_dto_1.PermissionListDto]),
    __metadata("design:returntype", Promise)
], PermissionAdminController.prototype, "list", null);
__decorate([
    (0, response_decorator_1.Response)('permission.get', {
        classSerialization: permission_get_serialization_1.PermissionGetSerialization,
        doc: {
            params: permission_doc_constant_1.PermissionDocParamsGet,
        },
    }),
    (0, permission_admin_decorator_1.PermissionGetGuard)(),
    (0, request_decorator_1.RequestParamGuard)(permissions_request_dto_1.PermissionRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.PERMISSION_READ),
    (0, common_1.Get)('/get/:permission'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, permission_decorator_1.GetPermission)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PermissionAdminController.prototype, "get", null);
__decorate([
    (0, response_decorator_1.Response)('permission.update', {
        classSerialization: response_id_serialization_1.ResponseIdSerialization,
        doc: {
            params: permission_doc_constant_1.PermissionDocParamsGet,
        },
    }),
    (0, permission_admin_decorator_1.PermissionUpdateGuard)(),
    (0, request_decorator_1.RequestParamGuard)(permissions_request_dto_1.PermissionRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.PERMISSION_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.PERMISSION_UPDATE),
    (0, common_1.Put)('/update/:permission'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, permission_decorator_1.GetPermission)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, permission_update_dto_1.PermissionUpdateDto]),
    __metadata("design:returntype", Promise)
], PermissionAdminController.prototype, "update", null);
__decorate([
    (0, response_decorator_1.Response)('permission.inactive', {
        doc: {
            params: permission_doc_constant_1.PermissionDocParamsGet,
        },
    }),
    (0, permission_admin_decorator_1.PermissionUpdateInactiveGuard)(),
    (0, request_decorator_1.RequestParamGuard)(permissions_request_dto_1.PermissionRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.PERMISSION_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.PERMISSION_UPDATE),
    (0, common_1.Patch)('/update/:permission/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, permission_decorator_1.GetPermission)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PermissionAdminController.prototype, "inactive", null);
__decorate([
    (0, response_decorator_1.Response)('permission.active', {
        doc: {
            params: permission_doc_constant_1.PermissionDocParamsGet,
        },
    }),
    (0, permission_admin_decorator_1.PermissionUpdateActiveGuard)(),
    (0, request_decorator_1.RequestParamGuard)(permissions_request_dto_1.PermissionRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.PERMISSION_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.PERMISSION_UPDATE),
    (0, common_1.Patch)('/update/:permission/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, permission_decorator_1.GetPermission)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PermissionAdminController.prototype, "active", null);
PermissionAdminController = __decorate([
    (0, swagger_1.ApiTags)('modules.admin.permission'),
    (0, common_1.Controller)({
        version: '1',
        path: '/permission',
    }),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        permission_service_1.PermissionService])
], PermissionAdminController);
exports.PermissionAdminController = PermissionAdminController;
//# sourceMappingURL=permission.admin.controller.js.map