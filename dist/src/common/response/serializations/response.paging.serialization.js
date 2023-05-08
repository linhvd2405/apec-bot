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
exports.ResponsePagingSerialization = exports.ResponsePagingMetadataSerialization = void 0;
const swagger_1 = require("@nestjs/swagger");
const response_default_serialization_1 = require("./response.default.serialization");
class ResponsePagingMetadataSerialization {
}
exports.ResponsePagingMetadataSerialization = ResponsePagingMetadataSerialization;
class ResponsePagingSerialization extends (0, swagger_1.PickType)(response_default_serialization_1.ResponseDefaultSerialization, [
    'statusCode',
    'message',
]) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'totalData',
        type: Number,
        nullable: false,
        description: 'return total data in database',
        example: 100,
    }),
    __metadata("design:type", Number)
], ResponsePagingSerialization.prototype, "totalData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'totalPage',
        type: Number,
        nullable: true,
        description: 'return total page, max 20',
        example: 20,
    }),
    __metadata("design:type", Number)
], ResponsePagingSerialization.prototype, "totalPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'currentPage',
        type: Number,
        nullable: true,
        description: 'return current page',
        example: 2,
    }),
    __metadata("design:type", Number)
], ResponsePagingSerialization.prototype, "currentPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'perPage',
        type: Number,
        nullable: true,
        description: 'return per page',
        example: 10,
    }),
    __metadata("design:type", Number)
], ResponsePagingSerialization.prototype, "perPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'availableSearch',
        type: 'array',
        nullable: false,
        description: 'Search will base on availableSearch with rule contains, and case insensitive',
    }),
    __metadata("design:type", Array)
], ResponsePagingSerialization.prototype, "availableSearch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'availableSort',
        type: 'array',
        nullable: false,
        description: 'Sort will base on availableSort',
    }),
    __metadata("design:type", Array)
], ResponsePagingSerialization.prototype, "availableSort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'metadata',
        nullable: true,
        description: 'Contain metadata about API',
        type: 'object',
        required: true,
        example: {
            languages: ['en'],
            timestamp: 1660190937231,
            timezone: 'Asia/Jakarta',
            requestId: '40c2f734-7247-472b-bc26-8eff6e669781',
            path: '/api/v1/test/hello',
            version: '1',
            repoVersion: '1.0.0',
            nextPage: `http://217.0.0.1/__path?perPage=10&page=3&search=abc`,
            previousPage: `http://217.0.0.1/__path?perPage=10&page=1&search=abc`,
            firstPage: `http://217.0.0.1/__path?perPage=10&page=1&search=abc`,
            lastPage: `http://217.0.0.1/__path?perPage=10&page=20&search=abc`,
        },
    }),
    __metadata("design:type", Object)
], ResponsePagingSerialization.prototype, "metadata", void 0);
exports.ResponsePagingSerialization = ResponsePagingSerialization;
//# sourceMappingURL=response.paging.serialization.js.map