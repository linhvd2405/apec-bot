"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../common/database/constants/database.constant");
const bot_bulk_repository_1 = require("./repositories/bot.bulk.repository");
const bot_repository_1 = require("./repositories/bot.repository");
const bot_schema_1 = require("./schemas/bot.schema");
const bot_bulk_service_1 = require("./services/bot.bulk.service");
const bot_service_1 = require("./services/bot.service");
let BotModule = class BotModule {
};
BotModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            bot_service_1.BotService,
            bot_bulk_service_1.BotBulkService,
            bot_repository_1.BotRepository,
            bot_bulk_repository_1.BotBulkRepository,
        ],
        exports: [bot_service_1.BotService, bot_bulk_service_1.BotBulkService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: bot_schema_1.BotEntity.name,
                    schema: bot_schema_1.BotSchema,
                    collection: bot_schema_1.BotDatabaseName,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], BotModule);
exports.BotModule = BotModule;
//# sourceMappingURL=bot.module.js.map