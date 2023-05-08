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
exports.BotListDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const pagination_decorator_1 = require("../../../common/pagination/decorators/pagination.decorator");
const bot_list_constant_1 = require("../constants/bot.list.constant");
class BotListDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { search: { required: true, type: () => Object }, page: { required: true, type: () => Number }, perPage: { required: true, type: () => Number }, sort: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, pagination_decorator_1.PaginationSearch)(bot_list_constant_1.BOT_DEFAULT_AVAILABLE_SEARCH),
    __metadata("design:type", Object)
], BotListDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, pagination_decorator_1.PaginationAvailableSearch)(bot_list_constant_1.BOT_DEFAULT_AVAILABLE_SEARCH),
    __metadata("design:type", Array)
], BotListDto.prototype, "availableSearch", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationPage)(bot_list_constant_1.BOT_DEFAULT_PAGE),
    __metadata("design:type", Number)
], BotListDto.prototype, "page", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationPerPage)(bot_list_constant_1.BOT_DEFAULT_PER_PAGE),
    __metadata("design:type", Number)
], BotListDto.prototype, "perPage", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationSort)(bot_list_constant_1.BOT_DEFAULT_SORT, bot_list_constant_1.BOT_DEFAULT_AVAILABLE_SORT),
    __metadata("design:type", Object)
], BotListDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, pagination_decorator_1.PaginationAvailableSort)(bot_list_constant_1.BOT_DEFAULT_AVAILABLE_SORT),
    __metadata("design:type", Array)
], BotListDto.prototype, "availableSort", void 0);
exports.BotListDto = BotListDto;
//# sourceMappingURL=bot.list.dto.js.map