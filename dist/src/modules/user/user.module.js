"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../../common/database/constants/database.constant");
const user_bulk_repository_1 = require("./repositories/user.bulk.repository");
const user_repository_1 = require("./repositories/user.repository");
const user_schema_1 = require("./schemas/user.schema");
const user_bulk_service_1 = require("./services/user.bulk.service");
const user_service_1 = require("./services/user.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: user_schema_1.UserEntity.name,
                    schema: user_schema_1.UserSchema,
                    collection: user_schema_1.UserDatabaseName,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
        exports: [user_service_1.UserService, user_bulk_service_1.UserBulkService],
        providers: [
            user_service_1.UserService,
            user_bulk_service_1.UserBulkService,
            user_repository_1.UserRepository,
            user_bulk_repository_1.UserBulkRepository,
        ],
        controllers: [],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map