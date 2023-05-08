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
exports.SettingController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_service_1 = require("../../pagination/services/pagination.service");
const request_decorator_1 = require("../../request/decorators/request.decorator");
const response_decorator_1 = require("../../response/decorators/response.decorator");
const setting_doc_constant_1 = require("../constants/setting.doc.constant");
const setting_list_constant_1 = require("../constants/setting.list.constant");
const setting_decorator_1 = require("../decorators/setting.decorator");
const setting_public_decorator_1 = require("../decorators/setting.public.decorator");
const setting_list_dto_1 = require("../dtos/setting.list.dto");
const setting_request_dto_1 = require("../dtos/setting.request.dto");
const setting_get_serialization_1 = require("../serializations/setting.get.serialization");
const setting_list_serialization_1 = require("../serializations/setting.list.serialization");
const setting_service_1 = require("../services/setting.service");
let SettingController = class SettingController {
    constructor(settingService, paginationService) {
        this.settingService = settingService;
        this.paginationService = paginationService;
    }
    async list({ page, perPage, sort, search, availableSort, availableSearch, }) {
        const skip = await this.paginationService.skip(page, perPage);
        const find = {
            ...search,
        };
        const settings = await this.settingService.findAll(find, {
            limit: perPage,
            skip: skip,
            sort,
        });
        const totalData = await this.settingService.getTotal(find);
        const totalPage = await this.paginationService.totalPage(totalData, perPage);
        return {
            totalData,
            totalPage,
            currentPage: page,
            perPage,
            availableSearch,
            availableSort,
            data: settings,
        };
    }
    async get(setting) {
        return setting;
    }
    async getByName(setting) {
        return setting;
    }
};
__decorate([
    (0, response_decorator_1.ResponsePaging)('setting.list', {
        classSerialization: setting_list_serialization_1.SettingListSerialization,
        doc: {
            availableSearch: setting_list_constant_1.SETTING_DEFAULT_AVAILABLE_SEARCH,
            availableSort: setting_list_constant_1.SETTING_DEFAULT_AVAILABLE_SORT,
        },
    }),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [setting_list_dto_1.SettingListDto]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "list", null);
__decorate([
    (0, response_decorator_1.Response)('setting.get', {
        classSerialization: setting_get_serialization_1.SettingGetSerialization,
        doc: {
            params: setting_doc_constant_1.SettingDocParamsGet,
        },
    }),
    (0, setting_public_decorator_1.SettingGetGuard)(),
    (0, request_decorator_1.RequestParamGuard)(setting_request_dto_1.SettingRequestDto),
    (0, common_1.Get)('get/:setting'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, setting_decorator_1.GetSetting)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "get", null);
__decorate([
    (0, response_decorator_1.Response)('setting.getByName', {
        classSerialization: setting_get_serialization_1.SettingGetSerialization,
        doc: {
            params: setting_doc_constant_1.SettingDocParamsGetByName,
        },
    }),
    (0, setting_public_decorator_1.SettingGetByNameGuard)(),
    (0, common_1.Get)('get/name/:settingName'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, setting_decorator_1.GetSetting)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "getByName", null);
SettingController = __decorate([
    (0, swagger_1.ApiTags)('setting'),
    (0, common_1.Controller)({
        version: '1',
        path: '/setting',
    }),
    __metadata("design:paramtypes", [setting_service_1.SettingService,
        pagination_service_1.PaginationService])
], SettingController);
exports.SettingController = SettingController;
//# sourceMappingURL=setting.controller.js.map