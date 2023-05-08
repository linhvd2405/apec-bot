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
exports.SettingListDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const pagination_decorator_1 = require("../../pagination/decorators/pagination.decorator");
const setting_list_constant_1 = require("../constants/setting.list.constant");
class SettingListDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { search: { required: true, type: () => Object }, page: { required: true, type: () => Number }, perPage: { required: true, type: () => Number }, sort: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, pagination_decorator_1.PaginationSearch)(setting_list_constant_1.SETTING_DEFAULT_AVAILABLE_SEARCH),
    __metadata("design:type", Object)
], SettingListDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, pagination_decorator_1.PaginationAvailableSearch)(setting_list_constant_1.SETTING_DEFAULT_AVAILABLE_SEARCH),
    __metadata("design:type", Array)
], SettingListDto.prototype, "availableSearch", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationPage)(setting_list_constant_1.SETTING_DEFAULT_PAGE),
    __metadata("design:type", Number)
], SettingListDto.prototype, "page", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationPerPage)(setting_list_constant_1.SETTING_DEFAULT_PER_PAGE),
    __metadata("design:type", Number)
], SettingListDto.prototype, "perPage", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationSort)(setting_list_constant_1.SETTING_DEFAULT_SORT, setting_list_constant_1.SETTING_DEFAULT_AVAILABLE_SORT),
    __metadata("design:type", Object)
], SettingListDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, pagination_decorator_1.PaginationAvailableSort)(setting_list_constant_1.SETTING_DEFAULT_AVAILABLE_SORT),
    __metadata("design:type", Array)
], SettingListDto.prototype, "availableSort", void 0);
exports.SettingListDto = SettingListDto;
//# sourceMappingURL=setting.list.dto.js.map