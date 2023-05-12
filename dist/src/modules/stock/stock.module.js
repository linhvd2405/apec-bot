"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../common/database/constants/database.constant");
const stock_repository_1 = require("./repositories/stock.repository");
const stock_schema_1 = require("./schemas/stock.schema");
const stock_service_1 = require("./services/stock.service");
const stock_bulk_service_1 = require("./services/stock.bulk.service");
const stock_bulk_repository_1 = require("./repositories/stock.bulk.repository");
const screenshot_worker_service_1 = require("../workers/screenshot-worker.service");
let StockModule = class StockModule {
};
StockModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            stock_service_1.StockService,
            stock_repository_1.StockRepository,
            stock_bulk_service_1.StockBulkService,
            stock_bulk_repository_1.StockBulkRepository,
            screenshot_worker_service_1.ScreenshotWorkerService,
        ],
        exports: [
            stock_service_1.StockService,
            stock_bulk_service_1.StockBulkService,
            screenshot_worker_service_1.ScreenshotWorkerService,
        ],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: stock_schema_1.StockEntity.name,
                    schema: stock_schema_1.StockSchema,
                    collection: stock_schema_1.StockDatabaseName,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], StockModule);
exports.StockModule = StockModule;
//# sourceMappingURL=stock.module.js.map