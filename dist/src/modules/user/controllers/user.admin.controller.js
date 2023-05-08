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
exports.UserAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_enum_permission_constant_1 = require("../../../common/auth/constants/auth.enum.permission.constant");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const auth_service_1 = require("../../../common/auth/services/auth.service");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const file_decorator_1 = require("../../../common/file/decorators/file.decorator");
const file_extract_pipe_1 = require("../../../common/file/pipes/file.extract.pipe");
const file_required_pipe_1 = require("../../../common/file/pipes/file.required.pipe");
const file_size_pipe_1 = require("../../../common/file/pipes/file.size.pipe");
const file_type_pipe_1 = require("../../../common/file/pipes/file.type.pipe");
const file_validation_pipe_1 = require("../../../common/file/pipes/file.validation.pipe");
const pagination_service_1 = require("../../../common/pagination/services/pagination.service");
const request_decorator_1 = require("../../../common/request/decorators/request.decorator");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const role_status_code_constant_1 = require("../../role/constants/role.status-code.constant");
const role_service_1 = require("../../role/services/role.service");
const user_doc_constant_1 = require("../constants/user.doc.constant");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
const user_admin_decorator_1 = require("../decorators/user.admin.decorator");
const user_decorator_1 = require("../decorators/user.decorator");
const user_create_dto_1 = require("../dtos/user.create.dto");
const user_import_dto_1 = require("../dtos/user.import.dto");
const user_list_dto_1 = require("../dtos/user.list.dto");
const user_request_dto_1 = require("../dtos/user.request.dto");
const user_update_dto_1 = require("../dtos/user.update.dto");
const user_get_serialization_1 = require("../serializations/user.get.serialization");
const user_import_serialization_1 = require("../serializations/user.import.serialization");
const user_list_serialization_1 = require("../serializations/user.list.serialization");
const user_service_1 = require("../services/user.service");
let UserAdminController = class UserAdminController {
    constructor(authService, paginationService, userService, roleService) {
        this.authService = authService;
        this.paginationService = paginationService;
        this.userService = userService;
        this.roleService = roleService;
    }
    async list({ page, perPage, sort, search, availableSort, availableSearch, }) {
        const skip = await this.paginationService.skip(page, perPage);
        const find = {
            ...search,
        };
        const users = await this.userService.findAll(find, {
            limit: perPage,
            skip: skip,
            sort,
        });
        const totalData = await this.userService.getTotal(find);
        const totalPage = await this.paginationService.totalPage(totalData, perPage);
        return {
            totalData,
            totalPage,
            currentPage: page,
            perPage,
            availableSearch,
            availableSort,
            data: users,
        };
    }
    async get(user) {
        return user;
    }
    async create(body) {
        const checkExist = await this.userService.checkExist(body.email, body.mobileNumber);
        if (checkExist.email && checkExist.mobileNumber) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_EXISTS_ERROR,
                message: 'user.error.exist',
            });
        }
        else if (checkExist.email) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_EMAIL_EXIST_ERROR,
                message: 'user.error.emailExist',
            });
        }
        else if (checkExist.mobileNumber) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_MOBILE_NUMBER_EXIST_ERROR,
                message: 'user.error.mobileNumberExist',
            });
        }
        const role = await this.roleService.findOneById(body.role);
        if (!role) {
            throw new common_1.NotFoundException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_NOT_FOUND_ERROR,
                message: 'role.error.notFound',
            });
        }
        try {
            const password = await this.authService.createPassword(body.password);
            const create = await this.userService.create({
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                mobileNumber: body.mobileNumber,
                role: body.role,
                password: password.passwordHash,
                passwordExpired: password.passwordExpired,
                salt: password.salt,
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
    async delete(user) {
        try {
            await this.userService.deleteOneById(user._id);
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
    async update(user, body) {
        try {
            await this.userService.updateOneById(user._id, body);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return {
            _id: user._id,
        };
    }
    async inactive(user) {
        try {
            await this.userService.inactive(user._id);
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
    async active(user) {
        try {
            await this.userService.active(user._id);
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
    async import(file) {
        return { file };
    }
};
__decorate([
    (0, response_decorator_1.ResponsePaging)('user.list', {
        classSerialization: user_list_serialization_1.UserListSerialization,
    }),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_READ),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_list_dto_1.UserListDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "list", null);
__decorate([
    (0, response_decorator_1.Response)('user.get', {
        classSerialization: user_get_serialization_1.UserGetSerialization,
        doc: { params: user_doc_constant_1.UserDocParamsGet },
    }),
    (0, user_admin_decorator_1.UserGetGuard)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_READ),
    (0, common_1.Get)('get/:user'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "get", null);
__decorate([
    (0, response_decorator_1.Response)('user.create', {
        classSerialization: response_id_serialization_1.ResponseIdSerialization,
    }),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_CREATE),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_dto_1.UserCreateDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "create", null);
__decorate([
    (0, response_decorator_1.Response)('user.delete', { doc: { params: user_doc_constant_1.UserDocParamsGet } }),
    (0, user_admin_decorator_1.UserDeleteGuard)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_DELETE),
    (0, common_1.Delete)('/delete/:user'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "delete", null);
__decorate([
    (0, response_decorator_1.Response)('user.update', {
        classSerialization: response_id_serialization_1.ResponseIdSerialization,
        doc: { params: user_doc_constant_1.UserDocParamsGet },
    }),
    (0, user_admin_decorator_1.UserUpdateGuard)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_UPDATE),
    (0, common_1.Put)('/update/:user'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_update_dto_1.UserUpdateDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "update", null);
__decorate([
    (0, response_decorator_1.Response)('user.inactive', { doc: { params: user_doc_constant_1.UserDocParamsGet } }),
    (0, user_admin_decorator_1.UserUpdateInactiveGuard)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_UPDATE),
    (0, common_1.Patch)('/update/:user/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "inactive", null);
__decorate([
    (0, response_decorator_1.Response)('user.active', { doc: { params: user_doc_constant_1.UserDocParamsGet } }),
    (0, user_admin_decorator_1.UserUpdateActiveGuard)(),
    (0, request_decorator_1.RequestParamGuard)(user_request_dto_1.UserRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_UPDATE),
    (0, common_1.Patch)('/update/:user/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "active", null);
__decorate([
    (0, response_decorator_1.Response)('user.import', {
        classSerialization: user_import_serialization_1.UserImportSerialization,
        doc: { httpStatus: common_1.HttpStatus.CREATED },
    }),
    (0, file_decorator_1.UploadFileSingle)('file'),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_CREATE, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.USER_IMPORT),
    (0, common_1.Post)('/import'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.UploadedFile)(file_required_pipe_1.FileRequiredPipe, file_size_pipe_1.FileSizeExcelPipe, file_type_pipe_1.FileTypeExcelPipe, file_extract_pipe_1.FileExtractPipe, new file_validation_pipe_1.FileValidationPipe(user_import_dto_1.UserImportDto))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "import", null);
UserAdminController = __decorate([
    (0, swagger_1.ApiTags)('modules.admin.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        pagination_service_1.PaginationService,
        user_service_1.UserService,
        role_service_1.RoleService])
], UserAdminController);
exports.UserAdminController = UserAdminController;
//# sourceMappingURL=user.admin.controller.js.map