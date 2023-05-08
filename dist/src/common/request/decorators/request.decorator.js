"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHeaderDoc = exports.RequestParamGuard = exports.RequestCustomLang = exports.RequestTimestamp = exports.RequestId = exports.RequestValidateTimestamp = exports.RequestValidateUserAgent = exports.RequestUserAgent = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_constant_1 = require("../../../app/constants/app.constant");
const request_constant_1 = require("../constants/request.constant");
const request_param_guard_1 = require("../guards/request.param.guard");
require("dotenv/config");
const request_timestamp_interceptor_1 = require("../interceptors/request.timestamp.interceptor");
const request_user_agent_interceptor_1 = require("../interceptors/request.user-agent.interceptor");
const response_decorator_1 = require("../../response/decorators/response.decorator");
const request_status_code_constant_1 = require("../constants/request.status-code.constant");
const moment_1 = __importDefault(require("moment"));
exports.RequestUserAgent = (0, common_1.createParamDecorator)((data, ctx) => {
    const { userAgent } = ctx.switchToHttp().getRequest();
    return userAgent;
});
function RequestValidateUserAgent() {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(request_user_agent_interceptor_1.RequestUserAgentInterceptor));
}
exports.RequestValidateUserAgent = RequestValidateUserAgent;
function RequestValidateTimestamp() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiHeader)({
        name: 'x-timestamp',
        description: 'Timestamp header, in microseconds',
        required: true,
        schema: {
            example: (0, moment_1.default)(new Date()).valueOf(),
            type: 'number',
        },
    }), (0, common_1.UseInterceptors)(request_timestamp_interceptor_1.RequestTimestampInterceptor));
}
exports.RequestValidateTimestamp = RequestValidateTimestamp;
exports.RequestId = (0, common_1.createParamDecorator)((data, ctx) => {
    const { id } = ctx.switchToHttp().getRequest();
    return id;
});
exports.RequestTimestamp = (0, common_1.createParamDecorator)((data, ctx) => {
    const { timestamp } = ctx.switchToHttp().getRequest();
    return timestamp;
});
exports.RequestCustomLang = (0, common_1.createParamDecorator)((data, ctx) => {
    const { customLang } = ctx.switchToHttp().getRequest();
    return customLang;
});
function RequestParamGuard(...classValidation) {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(request_param_guard_1.RequestParamRawGuard), (0, common_1.SetMetadata)(request_constant_1.REQUEST_PARAM_CLASS_DTOS_META_KEY, classValidation));
}
exports.RequestParamGuard = RequestParamGuard;
function RequestHeaderDoc() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiHeader)({
        name: 'x-custom-lang',
        description: 'Custom language header',
        required: false,
        schema: {
            default: app_constant_1.AppLanguage,
            example: app_constant_1.AppLanguage,
            type: 'string',
        },
    }), (0, swagger_1.ApiHeader)({
        name: 'user-agent',
        description: 'User agent header',
        required: true,
        schema: {
            example: 'Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion',
            type: 'string',
        },
    }), (0, response_decorator_1.ResponseDocOneOf)(common_1.HttpStatus.FORBIDDEN, {
        statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_INVALID_ERROR,
        messagePath: 'request.error.userAgentInvalid',
    }, {
        statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_BROWSER_INVALID_ERROR,
        messagePath: 'request.error.userAgentBrowserInvalid',
    }, {
        statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_OS_INVALID_ERROR,
        messagePath: 'request.error.userAgentOsInvalid',
    }, {
        statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_TIMESTAMP_INVALID_ERROR,
        messagePath: 'request.error.timestampInvalid',
    }));
}
exports.RequestHeaderDoc = RequestHeaderDoc;
//# sourceMappingURL=request.decorator.js.map