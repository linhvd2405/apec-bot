"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../common/database/constants/database.constant");
const permission_bulk_repository_1 = require("./repositories/permission.bulk.repository");
const permission_repository_1 = require("./repositories/permission.repository");
const permission_schema_1 = require("./schemas/permission.schema");
const permission_bulk_service_1 = require("./services/permission.bulk.service");
const permission_service_1 = require("./services/permission.service");
let PermissionModule = class PermissionModule {
};
PermissionModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            permission_service_1.PermissionService,
            permission_bulk_service_1.PermissionBulkService,
            permission_repository_1.PermissionRepository,
            permission_bulk_repository_1.PermissionBulkRepository,
        ],
        exports: [permission_service_1.PermissionService, permission_bulk_service_1.PermissionBulkService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: permission_schema_1.PermissionEntity.name,
                    schema: permission_schema_1.PermissionSchema,
                    collection: permission_schema_1.PermissionDatabaseName,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], PermissionModule);
exports.PermissionModule = PermissionModule;
//# sourceMappingURL=permission.module.js.map