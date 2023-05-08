"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareModule = void 0;
const common_1 = require("@nestjs/common");
const cors_middleware_1 = require("./cors/cors.middleware");
const body_parser_middleware_1 = require("./body-parser/body-parser.middleware");
const http_debugger_middleware_1 = require("./http-debugger/http-debugger.middleware");
const helmet_middleware_1 = require("./helmet/helmet.middleware");
const rate_limit_middleware_1 = require("./rate-limit/rate-limit.middleware");
const user_agent_middleware_1 = require("./user-agent/user-agent.middleware");
const maintenance_middleware_1 = require("./maintenance/maintenance.middleware");
const request_id_middleware_1 = require("./request-id/request-id.middleware");
const response_time_middleware_1 = require("./response-time/response-time.middleware");
const custom_language_middleware_1 = require("./custom-language/custom-language.middleware");
const version_middleware_1 = require("./version/version.middleware");
let MiddlewareModule = class MiddlewareModule {
    configure(consumer) {
        consumer
            .apply(request_id_middleware_1.RequestIdMiddleware, body_parser_middleware_1.JsonBodyParserMiddleware, body_parser_middleware_1.TextBodyParserMiddleware, body_parser_middleware_1.RawBodyParserMiddleware, body_parser_middleware_1.UrlencodedBodyParserMiddleware, cors_middleware_1.CorsMiddleware, http_debugger_middleware_1.HttpDebuggerResponseMiddleware, http_debugger_middleware_1.HttpDebuggerMiddleware, http_debugger_middleware_1.HttpDebuggerWriteIntoConsoleMiddleware, http_debugger_middleware_1.HttpDebuggerWriteIntoFileMiddleware, helmet_middleware_1.HelmetMiddleware, rate_limit_middleware_1.RateLimitMiddleware, user_agent_middleware_1.UserAgentMiddleware, custom_language_middleware_1.CustomLanguageMiddleware, response_time_middleware_1.ResponseTimeMiddleware, version_middleware_1.VersionMiddleware)
            .forRoutes('*')
            .apply(maintenance_middleware_1.MaintenanceMiddleware)
            .exclude({
            path: 'api/v:version*/user/login',
            method: common_1.RequestMethod.POST,
        }, {
            path: 'api/user/login',
            method: common_1.RequestMethod.POST,
        }, {
            path: 'api/v:version*/user/refresh',
            method: common_1.RequestMethod.POST,
        }, {
            path: 'api/user/refresh',
            method: common_1.RequestMethod.POST,
        }, {
            path: 'api/v:version*/admin/setting/(.*)',
            method: common_1.RequestMethod.ALL,
        }, {
            path: 'api/admin/setting/(.*)',
            method: common_1.RequestMethod.ALL,
        }, {
            path: 'api/v:version*/setting/(.*)',
            method: common_1.RequestMethod.ALL,
        }, {
            path: 'api/setting/(.*)',
            method: common_1.RequestMethod.ALL,
        })
            .forRoutes('*');
    }
};
MiddlewareModule = __decorate([
    (0, common_1.Module)({})
], MiddlewareModule);
exports.MiddlewareModule = MiddlewareModule;
//# sourceMappingURL=middleware.module.js.map