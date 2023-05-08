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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCustomHeadersInterceptor = void 0;
const common_1 = require("@nestjs/common");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
let ResponseCustomHeadersInterceptor = class ResponseCustomHeadersInterceptor {
    constructor(helperDateService) {
        this.helperDateService = helperDateService;
    }
    async intercept(context, next) {
        if (context.getType() === 'http') {
            const ctx = context.switchToHttp();
            const responseExpress = ctx.getResponse();
            const request = ctx.getRequest();
            responseExpress.setHeader('x-custom-lang', request.customLang);
            responseExpress.setHeader('x-timestamp', request.timestamp || this.helperDateService.timestamp());
            responseExpress.setHeader('x-timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
            responseExpress.setHeader('x-request-id', request.id);
            responseExpress.setHeader('x-version', request.version);
            responseExpress.setHeader('x-repo-version', request.repoVersion);
            return next.handle();
        }
        return next.handle();
    }
};
ResponseCustomHeadersInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_date_service_1.HelperDateService])
], ResponseCustomHeadersInterceptor);
exports.ResponseCustomHeadersInterceptor = ResponseCustomHeadersInterceptor;
//# sourceMappingURL=response.custom-headers.interceptor.js.map