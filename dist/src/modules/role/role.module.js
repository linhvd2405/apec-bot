"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../common/database/constants/database.constant");
const role_bulk_repository_1 = require("./repositories/role.bulk.repository");
const role_repository_1 = require("./repositories/role.repository");
const role_schema_1 = require("./schemas/role.schema");
const role_bulk_service_1 = require("./services/role.bulk.service");
const role_service_1 = require("./services/role.service");
let RoleModule = class RoleModule {
};
RoleModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            role_service_1.RoleService,
            role_bulk_service_1.RoleBulkService,
            role_repository_1.RoleRepository,
            role_bulk_repository_1.RoleBulkRepository,
        ],
        exports: [role_service_1.RoleService, role_bulk_service_1.RoleBulkService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: role_schema_1.RoleEntity.name,
                    schema: role_schema_1.RoleSchema,
                    collection: role_schema_1.RoleDatabaseName,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], RoleModule);
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map