"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRefreshJwtGuard = exports.AuthAdminJwtGuard = exports.AuthPublicJwtGuard = exports.AuthJwtGuard = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_constant_1 = require("../constants/auth.constant");
const auth_enum_constant_1 = require("../constants/auth.enum.constant");
const auth_status_code_constant_1 = require("../constants/auth.status-code.constant");
const auth_jwt_refresh_guard_1 = require("../guards/jwt-refresh/auth.jwt-refresh.guard");
const auth_jwt_guard_1 = require("../guards/jwt/auth.jwt.guard");
const auth_payload_access_for_guard_1 = require("../guards/payload/auth.payload.access-for.guard");
const auth_payload_permission_guard_1 = require("../guards/payload/auth.payload.permission.guard");
const response_decorator_1 = require("../../response/decorators/response.decorator");
function AuthJwtGuard(...permissions) {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)('accessToken'), (0, response_decorator_1.ResponseDoc)({
        httpStatus: common_1.HttpStatus.UNAUTHORIZED,
        messagePath: 'http.clientError.unauthorized',
        statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_JWT_ACCESS_TOKEN_ERROR,
    }), (0, response_decorator_1.ResponseDocOneOf)(common_1.HttpStatus.FORBIDDEN, {
        statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_PERMISSION_INVALID_ERROR,
        messagePath: 'auth.error.permissionForbidden',
    }, {
        statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_ACCESS_FOR_INVALID_ERROR,
        messagePath: 'auth.error.accessForForbidden',
    }), (0, common_1.UseGuards)(auth_jwt_guard_1.JwtGuard, auth_payload_permission_guard_1.AuthPayloadPermissionGuard), (0, common_1.SetMetadata)(auth_constant_1.AUTH_PERMISSION_META_KEY, permissions));
}
exports.AuthJwtGuard = AuthJwtGuard;
function AuthPublicJwtGuard(...permissions) {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)('accessToken'), (0, response_decorator_1.ResponseDoc)({
        httpStatus: common_1.HttpStatus.UNAUTHORIZED,
        messagePath: 'http.clientError.unauthorized',
        statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_JWT_ACCESS_TOKEN_ERROR,
    }), (0, response_decorator_1.ResponseDocOneOf)(common_1.HttpStatus.FORBIDDEN, {
        statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_PERMISSION_INVALID_ERROR,
        messagePath: 'auth.error.permissionForbidden',
    }, {
        statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_ACCESS_FOR_INVALID_ERROR,
        messagePath: 'auth.error.accessForForbidden',
    }), (0, common_1.UseGuards)(auth_jwt_guard_1.JwtGuard, auth_payload_access_for_guard_1.AuthPayloadAccessForGuard, auth_payload_permission_guard_1.AuthPayloadPermissionGuard), (0, common_1.SetMetadata)(auth_constant_1.AUTH_PERMISSION_META_KEY, permissions), (0, common_1.SetMetadata)(auth_constant_1.AUTH_ACCESS_FOR_META_KEY, [auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.USER]));
}
exports.AuthPublicJwtGuard = AuthPublicJwtGuard;
function AuthAdminJwtGuard(...permissions) {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)('accessToken'), (0, response_decorator_1.ResponseDoc)({
        httpStatus: common_1.HttpStatus.UNAUTHORIZED,
        messagePath: 'http.clientError.unauthorized',
        statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_JWT_ACCESS_TOKEN_ERROR,
    }), (0, response_decorator_1.ResponseDocOneOf)(common_1.HttpStatus.FORBIDDEN, {
        statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_PERMISSION_INVALID_ERROR,
        messagePath: 'auth.error.permissionForbidden',
    }, {
        statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_ACCESS_FOR_INVALID_ERROR,
        messagePath: 'auth.error.accessForForbidden',
    }), (0, common_1.UseGuards)(auth_jwt_guard_1.JwtGuard, auth_payload_access_for_guard_1.AuthPayloadAccessForGuard, auth_payload_permission_guard_1.AuthPayloadPermissionGuard), (0, common_1.SetMetadata)(auth_constant_1.AUTH_PERMISSION_META_KEY, permissions), (0, common_1.SetMetadata)(auth_constant_1.AUTH_ACCESS_FOR_META_KEY, [
        auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.SUPER_ADMIN,
        auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.ADMIN,
    ]));
}
exports.AuthAdminJwtGuard = AuthAdminJwtGuard;
function AuthRefreshJwtGuard() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)('refreshToken'), (0, response_decorator_1.ResponseDoc)({
        httpStatus: common_1.HttpStatus.UNAUTHORIZED,
        messagePath: 'http.clientError.unauthorized',
        statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_JWT_REFRESH_TOKEN_ERROR,
    }), (0, common_1.UseGuards)(auth_jwt_refresh_guard_1.JwtRefreshGuard));
}
exports.AuthRefreshJwtGuard = AuthRefreshJwtGuard;
//# sourceMappingURL=auth.jwt.decorator.js.map