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
exports.PermissionListDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const pagination_decorator_1 = require("../../../common/pagination/decorators/pagination.decorator");
const permission_list_constant_1 = require("../constants/permission.list.constant");
class PermissionListDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { search: { required: true, type: () => Object }, page: { required: true, type: () => Number }, perPage: { required: true, type: () => Number }, sort: { required: true, type: () => Object }, isActive: { required: true, type: () => [Boolean] } };
    }
}
__decorate([
    (0, pagination_decorator_1.PaginationSearch)(permission_list_constant_1.PERMISSION_DEFAULT_AVAILABLE_SEARCH),
    __metadata("design:type", Object)
], PermissionListDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, pagination_decorator_1.PaginationAvailableSearch)(permission_list_constant_1.PERMISSION_DEFAULT_AVAILABLE_SEARCH),
    __metadata("design:type", Array)
], PermissionListDto.prototype, "availableSearch", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationPage)(permission_list_constant_1.PERMISSION_DEFAULT_PAGE),
    __metadata("design:type", Number)
], PermissionListDto.prototype, "page", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationPerPage)(permission_list_constant_1.PERMISSION_DEFAULT_PER_PAGE),
    __metadata("design:type", Number)
], PermissionListDto.prototype, "perPage", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationSort)(permission_list_constant_1.PERMISSION_DEFAULT_SORT, permission_list_constant_1.PERMISSION_DEFAULT_AVAILABLE_SORT),
    __metadata("design:type", Object)
], PermissionListDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, pagination_decorator_1.PaginationAvailableSort)(permission_list_constant_1.PERMISSION_DEFAULT_AVAILABLE_SORT),
    __metadata("design:type", Array)
], PermissionListDto.prototype, "availableSort", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationFilterBoolean)(permission_list_constant_1.PERMISSION_DEFAULT_ACTIVE),
    __metadata("design:type", Array)
], PermissionListDto.prototype, "isActive", void 0);
exports.PermissionListDto = PermissionListDto;
//# sourceMappingURL=permission.list.dto.js.map