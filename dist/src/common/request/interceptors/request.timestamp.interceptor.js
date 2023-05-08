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
exports.RequestTimestampInterceptor = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const helper_number_service_1 = require("../../helper/services/helper.number.service");
const request_status_code_constant_1 = require("../constants/request.status-code.constant");
let RequestTimestampInterceptor = class RequestTimestampInterceptor {
    constructor(configService, helperDateService, helperNumberService) {
        this.configService = configService;
        this.helperDateService = helperDateService;
        this.helperNumberService = helperNumberService;
    }
    async intercept(context, next) {
        if (context.getType() === 'http') {
            const request = context.switchToHttp().getRequest();
            const { headers } = request;
            const requestTimestamp = headers['x-timestamp'];
            if (!requestTimestamp) {
                throw new common_1.ForbiddenException({
                    statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_TIMESTAMP_INVALID_ERROR,
                    message: 'auth.apiKey.error.timestampInvalid',
                });
            }
            const timestamp = this.helperNumberService.create(requestTimestamp);
            const checkTimestamp = this.helperDateService.checkTimestamp(timestamp);
            if (!timestamp || !checkTimestamp) {
                throw new common_1.ForbiddenException({
                    statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_TIMESTAMP_INVALID_ERROR,
                    message: 'middleware.error.timestampInvalid',
                });
            }
            const timestampDate = this.helperDateService.create({
                date: timestamp,
            });
            const toleranceTimeInMs = this.configService.get('middleware.timestamp.toleranceTimeInMs');
            const toleranceMin = this.helperDateService.backwardInMilliseconds(toleranceTimeInMs);
            const toleranceMax = this.helperDateService.forwardInMilliseconds(toleranceTimeInMs);
            if (timestampDate < toleranceMin || timestampDate > toleranceMax) {
                throw new common_1.ForbiddenException({
                    statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_TIMESTAMP_INVALID_ERROR,
                    message: 'middleware.error.timestampInvalid',
                });
            }
        }
        return next.handle();
    }
};
RequestTimestampInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        helper_date_service_1.HelperDateService,
        helper_number_service_1.HelperNumberService])
], RequestTimestampInterceptor);
exports.RequestTimestampInterceptor = RequestTimestampInterceptor;
//# sourceMappingURL=request.timestamp.interceptor.js.map