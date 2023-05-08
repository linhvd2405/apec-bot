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
var AppController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const app_hello_serialization_1 = require("../serializations/app.hello.serialization");
const error_decorator_1 = require("../../common/error/decorators/error.decorator");
const helper_date_service_1 = require("../../common/helper/services/helper.date.service");
const helper_service_1 = require("../../common/helper/services/helper.service");
const logger_enum_constant_1 = require("../../common/logger/constants/logger.enum.constant");
const logger_decorator_1 = require("../../common/logger/decorators/logger.decorator");
const request_decorator_1 = require("../../common/request/decorators/request.decorator");
const response_decorator_1 = require("../../common/response/decorators/response.decorator");
let AppController = AppController_1 = class AppController {
    constructor(configService, helperDateService, helperService) {
        this.configService = configService;
        this.helperDateService = helperDateService;
        this.helperService = helperService;
    }
    async hello(userAgent) {
        const serviceName = this.configService.get('app.name');
        const newDate = this.helperDateService.create();
        return {
            metadata: {
                properties: {
                    serviceName,
                },
            },
            userAgent,
            date: newDate,
            format: this.helperDateService.format(newDate),
            timestamp: this.helperDateService.timestamp({
                date: newDate,
            }),
        };
    }
    async helloTimeout() {
        const serviceName = this.configService.get('app.name');
        await this.helperService.delay(60000);
        return {
            metadata: {
                properties: {
                    serviceName,
                },
            },
        };
    }
};
__decorate([
    (0, response_decorator_1.Response)('app.hello', { classSerialization: app_hello_serialization_1.AppHelloSerialization }),
    (0, logger_decorator_1.Logger)(logger_enum_constant_1.ENUM_LOGGER_ACTION.TEST, { tags: ['test'] }),
    (0, common_1.Get)('/hello'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, request_decorator_1.RequestUserAgent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "hello", null);
__decorate([
    (0, response_decorator_1.Response)('app.helloTimeout'),
    (0, response_decorator_1.ResponseTimeout)('10s'),
    (0, error_decorator_1.ErrorMeta)(AppController_1.name, 'helloTimeoutCustom'),
    (0, common_1.Get)('/hello/timeout'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "helloTimeout", null);
AppController = AppController_1 = __decorate([
    (0, swagger_1.ApiTags)('hello'),
    (0, common_1.Controller)({
        version: common_1.VERSION_NEUTRAL,
        path: '/',
    }),
    __metadata("design:paramtypes", [config_1.ConfigService,
        helper_date_service_1.HelperDateService,
        helper_service_1.HelperService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map