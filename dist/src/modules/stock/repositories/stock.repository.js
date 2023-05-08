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
exports.StockRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const database_mongo_repository_abstract_1 = require("../../../common/database/abstracts/database.mongo-repository.abstract");
const database_decorator_1 = require("../../../common/database/decorators/database.decorator");
const stock_schema_1 = require("../schemas/stock.schema");
let StockRepository = class StockRepository extends database_mongo_repository_abstract_1.DatabaseMongoRepositoryAbstract {
    constructor(stockModel) {
        super(stockModel);
        this.stockModel = stockModel;
    }
};
StockRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseEntity)(stock_schema_1.StockEntity.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], StockRepository);
exports.StockRepository = StockRepository;
//# sourceMappingURL=stock.repository.js.map