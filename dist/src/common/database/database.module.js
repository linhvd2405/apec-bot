"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = exports.DatabaseOptionsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("./constants/database.constant");
const database_options_service_1 = require("./services/database.options.service");
let DatabaseOptionsModule = class DatabaseOptionsModule {
};
DatabaseOptionsModule = __decorate([
    (0, common_1.Module)({
        providers: [database_options_service_1.DatabaseOptionsService],
        exports: [database_options_service_1.DatabaseOptionsService],
        imports: [],
    })
], DatabaseOptionsModule);
exports.DatabaseOptionsModule = DatabaseOptionsModule;
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [],
        exports: [],
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                connectionName: database_constant_1.DATABASE_CONNECTION_NAME,
                inject: [database_options_service_1.DatabaseOptionsService],
                imports: [DatabaseOptionsModule],
                useFactory: (databaseOptionsService) => databaseOptionsService.createMongooseOptions(),
            })
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map