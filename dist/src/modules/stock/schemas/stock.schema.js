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
exports.StockSchema = exports.StockDatabaseName = exports.StockEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let StockEntity = class StockEntity {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "stockCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "nameCompany", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "exchangeCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "rating", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "industry", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "refPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "liquidity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "shortTrend", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "targetPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "cutlossPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Date)
], StockEntity.prototype, "trandingDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "overview", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "marketCapital", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "sumVol10d", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "outstandingShares", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "eps", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "pe", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "de", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], StockEntity.prototype, "roe", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockEntity.prototype, "netRev", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockEntity.prototype, "netInc", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockEntity.prototype, "debt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockEntity.prototype, "loan", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockEntity.prototype, "cfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockEntity.prototype, "cfi", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockEntity.prototype, "cff", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Array)
], StockEntity.prototype, "reportDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ stockCode: String, rating: String }]
    }),
    __metadata("design:type", Array)
], StockEntity.prototype, "stockCodes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "adx", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "rsi", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], StockEntity.prototype, "macd", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: true,
    }),
    __metadata("design:type", Boolean)
], StockEntity.prototype, "isActive", void 0);
StockEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], StockEntity);
exports.StockEntity = StockEntity;
exports.StockDatabaseName = 'stocks';
exports.StockSchema = mongoose_1.SchemaFactory.createForClass(StockEntity);
exports.StockSchema.pre('save', function (next) {
    next();
});
//# sourceMappingURL=stock.schema.js.map