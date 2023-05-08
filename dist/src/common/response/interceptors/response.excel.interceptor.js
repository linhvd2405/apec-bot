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
exports.ResponseExcelInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const helper_file_service_1 = require("../../helper/services/helper.file.service");
const class_transformer_1 = require("class-transformer");
const core_1 = require("@nestjs/core");
const response_constant_1 = require("../constants/response.constant");
let ResponseExcelInterceptor = class ResponseExcelInterceptor {
    constructor(reflector, helperFileService) {
        this.reflector = reflector;
        this.helperFileService = helperFileService;
    }
    async intercept(context, next) {
        if (context.getType() === 'http') {
            return next.handle().pipe((0, operators_1.map)(async (responseData) => {
                const ctx = context.switchToHttp();
                const responseExpress = ctx.getResponse();
                const classSerialization = this.reflector.get(response_constant_1.RESPONSE_SERIALIZATION_META_KEY, context.getHandler());
                const classSerializationOptions = this.reflector.get(response_constant_1.RESPONSE_SERIALIZATION_OPTIONS_META_KEY, context.getHandler());
                const response = (await responseData);
                let serialization = response;
                if (classSerialization) {
                    serialization = (0, class_transformer_1.plainToInstance)(classSerialization, response, classSerializationOptions);
                }
                const excel = this.helperFileService.writeExcel(serialization);
                responseExpress.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                responseExpress.setHeader('Content-Disposition', 'attachment; filename=' + 'export.xlsx');
                responseExpress.setHeader('Content-Length', excel.length);
                return responseExpress.send(excel);
            }));
        }
        return next.handle();
    }
};
ResponseExcelInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        helper_file_service_1.HelperFileService])
], ResponseExcelInterceptor);
exports.ResponseExcelInterceptor = ResponseExcelInterceptor;
//# sourceMappingURL=response.excel.interceptor.js.map