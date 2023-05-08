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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../../../common/auth/decorators/auth.decorator");
const auth_jwt_decorator_1 = require("../../../common/auth/decorators/auth.jwt.decorator");
const auth_service_1 = require("../../../common/auth/services/auth.service");
const aws_s3_service_1 = require("../../../common/aws/services/aws.s3.service");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const file_decorator_1 = require("../../../common/file/decorators/file.decorator");
const file_required_pipe_1 = require("../../../common/file/pipes/file.required.pipe");
const file_size_pipe_1 = require("../../../common/file/pipes/file.size.pipe");
const file_type_pipe_1 = require("../../../common/file/pipes/file.type.pipe");
const logger_enum_constant_1 = require("../../../common/logger/constants/logger.enum.constant");
const logger_decorator_1 = require("../../../common/logger/decorators/logger.decorator");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const role_status_code_constant_1 = require("../../role/constants/role.status-code.constant");
const user_status_code_constant_1 = require("../constants/user.status-code.constant");
const user_decorator_1 = require("../decorators/user.decorator");
const user_public_decorator_1 = require("../decorators/user.public.decorator");
const user_change_password_dto_1 = require("../dtos/user.change-password.dto");
const user_login_dto_1 = require("../dtos/user.login.dto");
const user_login_serialization_1 = require("../serializations/user.login.serialization");
const user_profile_serialization_1 = require("../serializations/user.profile.serialization");
const user_service_1 = require("../services/user.service");
let UserController = class UserController {
    constructor(authService, userService, awsService) {
        this.authService = authService;
        this.userService = userService;
        this.awsService = awsService;
    }
    async profile(user) {
        return user;
    }
    async upload(user, file) {
        const filename = file.originalname;
        const content = file.buffer;
        const mime = filename
            .substring(filename.lastIndexOf('.') + 1, filename.length)
            .toUpperCase();
        const path = await this.userService.createRandomFilename();
        try {
            const aws = await this.awsService.putItemInBucket(`${path.filename}.${mime}`, content, {
                path: `${path.path}/${user._id}`,
            });
            await this.userService.updatePhoto(user._id, aws);
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
    async changePassword(body, _id) {
        const user = await this.userService.findOneById(_id);
        if (!user) {
            throw new common_1.NotFoundException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }
        const matchPassword = await this.authService.validateUser(body.oldPassword, user.password);
        if (!matchPassword) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_PASSWORD_NOT_MATCH_ERROR,
                message: 'user.error.passwordNotMatch',
            });
        }
        const newMatchPassword = await this.authService.validateUser(body.newPassword, user.password);
        if (newMatchPassword) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_PASSWORD_NEW_MUST_DIFFERENCE_ERROR,
                message: 'user.error.newPasswordMustDifference',
            });
        }
        try {
            const password = await this.authService.createPassword(body.newPassword);
            await this.userService.updatePassword(user._id, password);
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
    async login(body) {
        const user = await this.userService.findOne({
            email: body.email,
        }, {
            populate: true,
        });
        if (!user) {
            throw new common_1.NotFoundException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }
        const validate = await this.authService.validateUser(body.password, user.password);
        if (!validate) {
            throw new common_1.BadRequestException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_PASSWORD_NOT_MATCH_ERROR,
                message: 'user.error.passwordNotMatch',
            });
        }
        else if (!user.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_IS_INACTIVE_ERROR,
                message: 'user.error.inactive',
            });
        }
        else if (!user.role.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_IS_INACTIVE_ERROR,
                message: 'role.error.inactive',
            });
        }
        const payload = await this.userService.payloadSerialization(user);
        const tokenType = await this.authService.getTokenType();
        const expiresIn = await this.authService.getAccessTokenExpirationTime();
        const rememberMe = body.rememberMe ? true : false;
        const payloadAccessToken = await this.authService.createPayloadAccessToken(payload, rememberMe);
        const payloadRefreshToken = await this.authService.createPayloadRefreshToken(payload._id, rememberMe, {
            loginDate: payloadAccessToken.loginDate,
        });
        const payloadHashedAccessToken = await this.authService.encryptAccessToken(payloadAccessToken);
        const payloadHashedRefreshToken = await this.authService.encryptAccessToken(payloadRefreshToken);
        const accessToken = await this.authService.createAccessToken(payloadHashedAccessToken);
        const refreshToken = await this.authService.createRefreshToken(payloadHashedRefreshToken, { rememberMe });
        const checkPasswordExpired = await this.authService.checkPasswordExpired(user.passwordExpired);
        if (checkPasswordExpired) {
            return {
                metadata: {
                    statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_PASSWORD_EXPIRED_ERROR,
                    message: 'user.error.passwordExpired',
                },
                tokenType,
                expiresIn,
                accessToken,
                refreshToken,
            };
        }
        return {
            metadata: {
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_SUCCESS.USER_LOGIN_SUCCESS,
            },
            tokenType,
            expiresIn,
            accessToken,
            refreshToken,
        };
    }
    async refresh({ _id, rememberMe, loginDate }, refreshToken) {
        const user = await this.userService.findOneById(_id, {
            populate: true,
        });
        if (!user) {
            throw new common_1.NotFoundException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_NOT_FOUND_ERROR,
                message: 'user.error.notFound',
            });
        }
        else if (!user.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_IS_INACTIVE_ERROR,
                message: 'user.error.inactive',
            });
        }
        else if (!user.role.isActive) {
            throw new common_1.ForbiddenException({
                statusCode: role_status_code_constant_1.ENUM_ROLE_STATUS_CODE_ERROR.ROLE_IS_INACTIVE_ERROR,
                message: 'role.error.inactive',
            });
        }
        const checkPasswordExpired = await this.authService.checkPasswordExpired(user.passwordExpired);
        if (checkPasswordExpired) {
            throw new common_1.ForbiddenException({
                statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_ERROR.USER_PASSWORD_EXPIRED_ERROR,
                message: 'user.error.passwordExpired',
            });
        }
        const payload = await this.userService.payloadSerialization(user);
        const tokenType = await this.authService.getTokenType();
        const expiresIn = await this.authService.getAccessTokenExpirationTime();
        const payloadAccessToken = await this.authService.createPayloadAccessToken(payload, rememberMe, {
            loginDate,
        });
        const payloadHashedAccessToken = await this.authService.encryptAccessToken(payloadAccessToken);
        const accessToken = await this.authService.createAccessToken(payloadHashedAccessToken);
        return {
            tokenType,
            expiresIn,
            accessToken,
            refreshToken,
        };
    }
};
__decorate([
    (0, response_decorator_1.Response)('user.profile', {
        classSerialization: user_profile_serialization_1.UserProfileSerialization,
    }),
    (0, common_1.Get)('/profile'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "profile", null);
__decorate([
    (0, response_decorator_1.Response)('user.upload', { excludeRequestBodyJson: true }),
    (0, user_public_decorator_1.UserProfileGuard)(),
    (0, auth_jwt_decorator_1.AuthJwtGuard)(),
    (0, file_decorator_1.UploadFileSingle)('file'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/profile/upload'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, user_decorator_1.GetUser)()),
    __param(1, (0, common_1.UploadedFile)(file_required_pipe_1.FileRequiredPipe, file_size_pipe_1.FileSizeImagePipe, file_type_pipe_1.FileTypeImagePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "upload", null);
__decorate([
    (0, response_decorator_1.Response)('user.changePassword'),
    (0, auth_jwt_decorator_1.AuthJwtGuard)(),
    (0, common_1.Patch)('/change-password'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, auth_decorator_1.User)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_change_password_dto_1.UserChangePasswordDto, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, response_decorator_1.Response)('user.login', {
        classSerialization: user_login_serialization_1.UserLoginSerialization,
        doc: { statusCode: user_status_code_constant_1.ENUM_USER_STATUS_CODE_SUCCESS.USER_LOGIN_SUCCESS },
    }),
    (0, logger_decorator_1.Logger)(logger_enum_constant_1.ENUM_LOGGER_ACTION.LOGIN, { tags: ['login', 'withEmail'] }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/login'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, response_decorator_1.Response)('user.refresh', { classSerialization: user_login_serialization_1.UserLoginSerialization }),
    (0, auth_jwt_decorator_1.AuthRefreshJwtGuard)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('/refresh'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, auth_decorator_1.User)()),
    __param(1, (0, auth_decorator_1.Token)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "refresh", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('modules.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/user',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService,
        aws_s3_service_1.AwsS3Service])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map