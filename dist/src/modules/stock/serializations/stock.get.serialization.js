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
exports.StockGetSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class StockGetSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id that representative with your target data',
        example: faker_1.faker.database.mongodbObjectId(),
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active flag of stock',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], StockGetSerialization.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Alias code of stock',
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "stockCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "nameCompany", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "exchangeCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "industry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "refPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "liquidity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "shortTrend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "targetPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "cutlossPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Date)
], StockGetSerialization.prototype, "trandingDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "overview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "marketCapital", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "sumVol10d", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "outstandingShares", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "eps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "pe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "de", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockGetSerialization.prototype, "roe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockGetSerialization.prototype, "netInc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockGetSerialization.prototype, "netRev", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockGetSerialization.prototype, "debt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockGetSerialization.prototype, "loan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockGetSerialization.prototype, "cfi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockGetSerialization.prototype, "cfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockGetSerialization.prototype, "cff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockGetSerialization.prototype, "reportDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "adx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "rsi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], StockGetSerialization.prototype, "macd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of stock codes with rating',
        example: [{ stockCode: 'Ht1', rating: '12/36' }, { stockCode: 'GOOG', rating: '23/76' }],
        required: true,
    }),
    __metadata("design:type", Array)
], StockGetSerialization.prototype, "stockCodes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
    }),
    __metadata("design:type", Date)
], StockGetSerialization.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], StockGetSerialization.prototype, "updatedAt", void 0);
exports.StockGetSerialization = StockGetSerialization;
//# sourceMappingURL=stock.get.serialization.js.map