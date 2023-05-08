"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApiKey = exports.ApiKey = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_api_key_guard_1 = require("../guards/api-key/auth.api-key.guard");
const response_decorator_1 = require("../../response/decorators/response.decorator");
require("dotenv/config");
const auth_status_code_constant_1 = require("../constants/auth.status-code.constant");
exports.ApiKey = (0, common_1.createParamDecorator)((data, ctx) => {
    const { apiKey } = ctx.switchToHttp().getRequest();
    return data ? apiKey[data] : apiKey;
});
function AuthApiKey() {
    const docs = [
        (0, swagger_1.ApiSecurity)('apiKey'),
        (0, swagger_1.ApiHeader)({
            name: 'x-timestamp',
            description: 'Timestamp header, in microseconds',
            required: true,
            schema: {
                example: 1662876305642,
                type: 'number',
            },
        }),
        (0, response_decorator_1.ResponseDocOneOf)(common_1.HttpStatus.UNAUTHORIZED, {
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_NEEDED_ERROR,
            messagePath: 'auth.apiKey.error.keyNeeded',
        }, {
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_PREFIX_INVALID_ERROR,
            messagePath: 'auth.apiKey.error.prefixInvalid',
        }, {
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_SCHEMA_INVALID_ERROR,
            messagePath: 'auth.apiKey.error.schemaInvalid',
        }, {
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_NOT_FOUND_ERROR,
            messagePath: 'auth.apiKey.error.notFound',
        }, {
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_INACTIVE_ERROR,
            messagePath: 'auth.apiKey.error.inactive',
        }, {
            statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_API_KEY_INVALID_ERROR,
            messagePath: 'auth.apiKey.error.invalid',
        }),
    ];
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_api_key_guard_1.ApiKeyGuard), ...docs);
}
exports.AuthApiKey = AuthApiKey;
//# sourceMappingURL=auth.api-key.decorator.js.map