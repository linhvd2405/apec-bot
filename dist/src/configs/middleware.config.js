"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const ms_1 = __importDefault(require("ms"));
const request_enum_constant_1 = require("../common/request/constants/request.enum.constant");
exports.default = (0, config_1.registerAs)('middleware', () => ({
    cors: {
        allowMethod: [
            request_enum_constant_1.ENUM_REQUEST_METHOD.GET,
            request_enum_constant_1.ENUM_REQUEST_METHOD.DELETE,
            request_enum_constant_1.ENUM_REQUEST_METHOD.PUT,
            request_enum_constant_1.ENUM_REQUEST_METHOD.PATCH,
            request_enum_constant_1.ENUM_REQUEST_METHOD.POST,
        ],
        allowOrigin: '*',
        allowHeader: [
            'Accept',
            'Accept-Language',
            'Content-Language',
            'Content-Type',
            'Origin',
            'Authorization',
            'Access-Control-Request-Method',
            'Access-Control-Request-Headers',
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Methods',
            'Access-Control-Allow-Credentials',
            'Access-Control-Expose-Headers',
            'Access-Control-Max-Age',
            'Referer',
            'Host',
            'X-Requested-With',
            'x-custom-lang',
            'x-timestamp',
            'x-api-key',
            'x-timezone',
            'x-request-id',
            'x-version',
            'x-repo-version',
            'X-Response-Time',
            'user-agent',
        ],
    },
    rateLimit: {
        resetTime: (0, ms_1.default)(500),
        maxRequestPerId: 1,
    },
    timestamp: {
        toleranceTimeInMs: process.env.MIDDLEWARE_TIMESTAMP_TOLERANCE
            ? (0, ms_1.default)(process.env.MIDDLEWARE_TIMESTAMP_TOLERANCE)
            : (0, ms_1.default)('5m'),
    },
    cache: {
        ttl: (0, ms_1.default)('30s'),
        max: 100,
    },
    timeout: {
        in: process.env.MIDDLEWARE_TIMEOUT
            ? (0, ms_1.default)(process.env.MIDDLEWARE_TIMEOUT)
            : (0, ms_1.default)('30s'),
    },
    userAgent: {
        os: [
            'Mobile',
            'Mac OS',
            'Windows',
            'UNIX',
            'Linux',
            'iOS',
            'Android',
        ],
        browser: [
            'IE',
            'Safari',
            'Edge',
            'Opera',
            'Chrome',
            'Firefox',
            'Samsung Browser',
            'UCBrowser',
        ],
    },
}));
//# sourceMappingURL=middleware.config.js.map