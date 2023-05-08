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
exports.UserPublicController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_api_key_decorator_1 = require("../../../common/auth/decorators/auth.api-key.decorator");
const auth_service_1 = require("../../../common/auth/services/auth.service");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const request_decorator_1 = require("../../../common/request/decorators/request.decorator");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const role_status_code_constant_1 = require("../../role/constants/role.status-code.constant");
const role_service_1 = require("../../role/services/role.service");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
const user_sign_up_dto_1 = require("../dtos/user.sign-up.dto");
const user_service_1 = require("../services/user.service");
let UserPublicController = class UserPublicController {
    constructor(userService, authService, roleService) {
        this.userService = userService;
        this.authService = authService;
        this.roleService = roleService;
    }
    async signUp({ email, mobileNumber, ...body }) {
        const role = await this.roleService.findOne({
            name: 'user',
        });
        if (!role) {
            throw new common_1.NotFoundException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_NOT_FOUND_ERROR,
                message: 'role.error.notFound',
            });
        }
        const checkExist = await this.userService.checkExist(email, mobileNumber);
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
        try {
            const password = await this.authService.createPassword(body.password);
            await this.userService.create({
                firstName: body.firstName,
                lastName: body.lastName,
                email,
                mobileNumber,
                role: role._id,
                password: password.passwordHash,
                passwordExpired: password.passwordExpired,
                salt: password.salt,
            });
            return;
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
    }
};
__decorate([
    (0, response_decorator_1.Response)('auth.signUp', { doc: { httpStatus: common_1.HttpStatus.CREATED } }),
    (0, auth_api_key_decorator_1.AuthApiKey)(),
    (0, request_decorator_1.RequestValidateUserAgent)(),
    (0, request_decorator_1.RequestValidateTimestamp)(),
    (0, common_1.Post)('/sign-up'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_sign_up_dto_1.UserSignUpDto]),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "signUp", null);
UserPublicController = __decorate([
    (0, swagger_1.ApiTags)('modules.public.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService,
        role_service_1.RoleService])
], UserPublicController);
exports.UserPublicController = UserPublicController;
//# sourceMappingURL=user.public.controller.js.map