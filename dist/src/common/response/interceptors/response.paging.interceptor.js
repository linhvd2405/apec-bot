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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsePagingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const message_service_1 = require("../../message/services/message.service");
const core_1 = require("@nestjs/core");
const class_transformer_1 = require("class-transformer");
const pagination_enum_constant_1 = require("../../pagination/constants/pagination.enum.constant");
const qs_1 = __importDefault(require("qs"));
const response_constant_1 = require("../constants/response.constant");
let ResponsePagingInterceptor = class ResponsePagingInterceptor {
    constructor(reflector, messageService) {
        this.reflector = reflector;
        this.messageService = messageService;
    }
    async intercept(context, next) {
        if (context.getType() === 'http') {
            return next.handle().pipe((0, operators_1.map)(async (responseData) => {
                const ctx = context.switchToHttp();
                const responseExpress = ctx.getResponse();
                const requestExpress = ctx.getRequest();
                let messagePath = this.reflector.get(response_constant_1.RESPONSE_MESSAGE_PATH_META_KEY, context.getHandler());
                const type = this.reflector.get(response_constant_1.RESPONSE_PAGING_TYPE_META_KEY, context.getHandler());
                const classSerialization = this.reflector.get(response_constant_1.RESPONSE_SERIALIZATION_META_KEY, context.getHandler());
                const classSerializationOptions = this.reflector.get(response_constant_1.RESPONSE_SERIALIZATION_OPTIONS_META_KEY, context.getHandler());
                const messageProperties = this.reflector.get(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, context.getHandler());
                const { customLang } = ctx.getRequest();
                const response = (await responseData);
                const { metadata, totalData, currentPage, perPage, data, availableSort, availableSearch, totalPage, } = response;
                let statusCode = responseExpress.statusCode;
                let properties = messageProperties;
                let serialization = data;
                if (classSerialization) {
                    serialization = (0, class_transformer_1.plainToInstance)(classSerialization, data, classSerializationOptions);
                }
                const __path = requestExpress.path;
                const __requestId = requestExpress.id;
                const __timestamp = requestExpress.timestamp;
                const __timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const __version = requestExpress.version;
                const __repoVersion = requestExpress.repoVersion;
                if (metadata) {
                    statusCode = metadata.statusCode || statusCode;
                    messagePath = metadata.message || messagePath;
                    properties = metadata.properties || properties;
                    delete metadata.statusCode;
                    delete metadata.message;
                    delete metadata.properties;
                }
                const path = requestExpress.path;
                const { query } = requestExpress;
                delete query.perPage;
                delete query.page;
                const queryString = qs_1.default.stringify(query, {
                    encode: false,
                });
                const addMetadata = {
                    nextPage: currentPage < totalPage
                        ? `${path}?perPage=${perPage}&page=${currentPage + 1}&${queryString}`
                        : undefined,
                    previousPage: currentPage > 1
                        ? `${path}?perPage=${perPage}&page=${currentPage - 1}&${queryString}`
                        : undefined,
                    firstPage: totalPage > 1
                        ? `${path}?perPage=${perPage}&page=${1}&${queryString}`
                        : undefined,
                    lastPage: totalPage > 1
                        ? `${path}?perPage=${perPage}&page=${totalPage}&${queryString}`
                        : undefined,
                };
                const resMetadata = {
                    languages: customLang,
                    timestamp: __timestamp,
                    timezone: __timezone,
                    requestId: __requestId,
                    path: __path,
                    version: __version,
                    repoVersion: __repoVersion,
                };
                const message = await this.messageService.get(messagePath, {
                    customLanguages: customLang,
                    properties,
                });
                const responseHttp = {
                    statusCode,
                    message,
                    totalData,
                    totalPage,
                    currentPage,
                    perPage,
                    availableSort,
                    availableSearch,
                    metadata: {
                        ...addMetadata,
                        ...resMetadata,
                        ...metadata,
                    },
                    data: serialization,
                };
                if (type === pagination_enum_constant_1.ENUM_PAGINATION_TYPE.SIMPLE ||
                    type === pagination_enum_constant_1.ENUM_PAGINATION_TYPE.MINI) {
                    delete responseHttp.totalPage;
                    delete responseHttp.currentPage;
                    delete responseHttp.perPage;
                }
                if (type === pagination_enum_constant_1.ENUM_PAGINATION_TYPE.MINI) {
                    delete responseHttp.availableSort;
                    delete responseHttp.availableSearch;
                }
                return responseHttp;
            }));
        }
        return next.handle();
    }
};
ResponsePagingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        message_service_1.MessageService])
], ResponsePagingInterceptor);
exports.ResponsePagingInterceptor = ResponsePagingInterceptor;
//# sourceMappingURL=response.paging.interceptor.js.map