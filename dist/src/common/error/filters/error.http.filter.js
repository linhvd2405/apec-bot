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
var ErrorHttpFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHttpFilter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const debugger_service_1 = require("../../debugger/services/debugger.service");
const error_enum_constant_1 = require("../constants/error.enum.constant");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const message_service_1 = require("../../message/services/message.service");
let ErrorHttpFilter = ErrorHttpFilter_1 = class ErrorHttpFilter {
    constructor(debuggerService, configService, messageService, httpAdapterHost, helperDateService) {
        this.debuggerService = debuggerService;
        this.configService = configService;
        this.messageService = messageService;
        this.httpAdapterHost = httpAdapterHost;
        this.helperDateService = helperDateService;
    }
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const customLang = ctx.getRequest().customLang ||
            this.configService.get('app.language').split(',');
        const __class = request.__class || ErrorHttpFilter_1.name;
        const __function = request.__function || this.catch.name;
        const __requestId = request.id;
        const __path = request.path;
        const __timestamp = request.timestamp || this.helperDateService.timestamp();
        const __timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const __version = request.version ||
            this.configService.get('app.versioning.version');
        const __repoVersion = request.repoVersion ||
            this.configService.get('app.repoVersion');
        if (exception instanceof common_1.HttpException) {
            const statusHttp = exception.getStatus();
            const responseExpress = ctx.getResponse();
            try {
                this.debuggerService.error(request && request.id ? request.id : ErrorHttpFilter_1.name, {
                    description: exception.message,
                    class: __class,
                    function: __function,
                    path: __path,
                }, exception);
            }
            catch (err) { }
            const response = exception.getResponse();
            if (!this.isErrorException(response)) {
                responseExpress.status(statusHttp).json(response);
                return;
            }
            const responseException = response;
            const { statusCode, message, error, errorType, data, properties, metadata, } = responseException;
            let { errors } = responseException;
            if (errors && errors.length > 0) {
                errors =
                    errorType === error_enum_constant_1.ERROR_TYPE.IMPORT
                        ? await this.messageService.getImportErrorsMessage(errors, customLang)
                        : await this.messageService.getRequestErrorsMessage(errors, customLang);
            }
            const mapMessage = await this.messageService.get(message, { customLanguages: customLang, properties });
            const resMetadata = {
                languages: customLang,
                timestamp: __timestamp,
                timezone: __timezone,
                requestId: __requestId,
                path: __path,
                version: __version,
                repoVersion: __repoVersion,
                ...metadata,
            };
            const resResponse = {
                statusCode: statusCode || statusHttp,
                message: mapMessage,
                error: error && Object.keys(error).length > 0
                    ? error
                    : exception.message,
                errors: errors,
                metadata: resMetadata,
                data,
            };
            responseExpress
                .setHeader('x-custom-lang', customLang)
                .setHeader('x-timestamp', __timestamp)
                .setHeader('x-timezone', __timezone)
                .setHeader('x-request-id', __requestId)
                .setHeader('x-version', __version)
                .setHeader('x-repo-version', __repoVersion)
                .status(statusHttp)
                .json(resResponse);
        }
        else {
            const { httpAdapter } = this.httpAdapterHost;
            const message = (await this.messageService.get('http.serverError.internalServerError'));
            const metadata = {
                languages: customLang,
                timestamp: __timestamp,
                timezone: __timezone,
                requestId: __requestId,
                path: __path,
                version: __version,
                repoVersion: __repoVersion,
            };
            const responseBody = {
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message,
                error: exception instanceof Error && 'message' in exception
                    ? exception.message
                    : undefined,
                metadata,
            };
            const responseExpress = ctx.getResponse();
            responseExpress
                .setHeader('x-custom-lang', customLang)
                .setHeader('x-timestamp', __timestamp)
                .setHeader('x-timezone', __timezone)
                .setHeader('x-request-id', __requestId)
                .setHeader('x-version', __version)
                .setHeader('x-repo-version', __repoVersion);
            try {
                this.debuggerService.error(ErrorHttpFilter_1.name, {
                    description: message,
                    class: ErrorHttpFilter_1.name,
                    function: 'catch',
                    path: __path,
                }, exception);
            }
            catch (err) { }
            httpAdapter.reply(responseExpress, responseBody, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return;
    }
    isErrorException(obj) {
        return 'statusCode' in obj && 'message' in obj;
    }
};
ErrorHttpFilter = ErrorHttpFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __param(0, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [debugger_service_1.DebuggerService,
        config_1.ConfigService,
        message_service_1.MessageService,
        core_1.HttpAdapterHost,
        helper_date_service_1.HelperDateService])
], ErrorHttpFilter);
exports.ErrorHttpFilter = ErrorHttpFilter;
//# sourceMappingURL=error.http.filter.js.map