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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_enum_permission_constant_1 = require("../../auth/constants/auth.enum.permission.constant");
const auth_api_key_decorator_1 = require("../../auth/decorators/auth.api-key.decorator");
const auth_jwt_decorator_1 = require("../../auth/decorators/auth.jwt.decorator");
const error_status_code_constant_1 = require("../../error/constants/error.status-code.constant");
const request_decorator_1 = require("../../request/decorators/request.decorator");
const response_decorator_1 = require("../../response/decorators/response.decorator");
const response_id_serialization_1 = require("../../response/serializations/response.id.serialization");
const setting_doc_constant_1 = require("../constants/setting.doc.constant");
const setting_admin_decorator_1 = require("../decorators/setting.admin.decorator");
const setting_decorator_1 = require("../decorators/setting.decorator");
const setting_request_dto_1 = require("../dtos/setting.request.dto");
const setting_update_dto_1 = require("../dtos/setting.update.dto");
const setting_service_1 = require("../services/setting.service");
let SettingAdminController = class SettingAdminController {
    constructor(settingService) {
        this.settingService = settingService;
    }
    async update(setting, body) {
        try {
            await this.settingService.updateOneById(setting._id, body);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return {
            _id: setting._id,
        };
    }
};
__decorate([
    (0, response_decorator_1.Response)('setting.update', {
        classSerialization: response_id_serialization_1.ResponseIdSerialization,
        doc: {
            params: setting_doc_constant_1.SettingDocParamsGet,
        },
    }),
    (0, setting_admin_decorator_1.SettingUpdateGuard)(),
    (0, request_decorator_1.RequestParamGuard)(setting_request_dto_1.SettingRequestDto),
    (0, auth_jwt_decorator_1.AuthAdminJwtGuard)(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.SETTING_READ, auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS.SETTING_UPDATE),
    (0, auth_api_key_decorator_1.AuthApiKey)(),
    (0, request_decorator_1.RequestValidateUserAgent)(),
    (0, request_decorator_1.RequestValidateTimestamp)(),
    (0, common_1.Put)('/update/:setting'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, setting_decorator_1.GetSetting)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, setting_update_dto_1.SettingUpdateDto]),
    __metadata("design:returntype", Promise)
], SettingAdminController.prototype, "update", null);
SettingAdminController = __decorate([
    (0, swagger_1.ApiTags)('admin.setting'),
    (0, common_1.Controller)({
        version: '1',
        path: '/setting',
    }),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], SettingAdminController);
exports.SettingAdminController = SettingAdminController;
//# sourceMappingURL=setting.admin.controller.js.map