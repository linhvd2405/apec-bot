"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../database/constants/database.constant");
const logger_repository_1 = require("./repositories/logger.repository");
const logger_schema_1 = require("./schemas/logger.schema");
const logger_service_1 = require("./services/logger.service");
let LoggerModule = class LoggerModule {
};
LoggerModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [logger_service_1.LoggerService, logger_repository_1.LoggerRepository],
        exports: [logger_service_1.LoggerService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: logger_schema_1.LoggerEntity.name,
                    schema: logger_schema_1.LoggerSchema,
                    collection: logger_schema_1.LoggerDatabaseName,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], LoggerModule);
exports.LoggerModule = LoggerModule;
//# sourceMappingURL=logger.module.js.map