"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../database/constants/database.constant");
const setting_bulk_repository_1 = require("./repositories/setting.bulk.repository");
const setting_repository_1 = require("./repositories/setting.repository");
const setting_schema_1 = require("./schemas/setting.schema");
const setting_bulk_service_1 = require("./services/setting.bulk.service");
const setting_service_1 = require("./services/setting.service");
let SettingModule = class SettingModule {
};
SettingModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: setting_schema_1.SettingEntity.name,
                    schema: setting_schema_1.SettingSchema,
                    collection: setting_schema_1.SettingDatabaseName,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
        exports: [setting_service_1.SettingService, setting_bulk_service_1.SettingBulkService],
        providers: [
            setting_service_1.SettingService,
            setting_bulk_service_1.SettingBulkService,
            setting_repository_1.SettingRepository,
            setting_bulk_repository_1.SettingBulkRepository,
        ],
        controllers: [],
    })
], SettingModule);
exports.SettingModule = SettingModule;
//# sourceMappingURL=setting.module.js.map