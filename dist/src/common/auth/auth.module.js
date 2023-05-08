"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApiModule = exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_api_bulk_repository_1 = require("./repositories/auth.api.bulk.repository");
const auth_api_repository_1 = require("./repositories/auth.api.repository");
const database_constant_1 = require("../database/constants/database.constant");
const auth_api_key_strategy_1 = require("./guards/api-key/auth.api-key.strategy");
const auth_jwt_refresh_strategy_1 = require("./guards/jwt-refresh/auth.jwt-refresh.strategy");
const auth_jwt_strategy_1 = require("./guards/jwt/auth.jwt.strategy");
const auth_api_schema_1 = require("./schemas/auth.api.schema");
const auth_api_bulk_service_1 = require("./services/auth.api.bulk.service");
const auth_api_service_1 = require("./services/auth.api.service");
const auth_enum_service_1 = require("./services/auth.enum.service");
const auth_service_1 = require("./services/auth.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService, auth_enum_service_1.AuthEnumService, auth_jwt_strategy_1.JwtStrategy, auth_jwt_refresh_strategy_1.JwtRefreshStrategy],
        exports: [auth_service_1.AuthService, auth_enum_service_1.AuthEnumService],
        controllers: [],
        imports: [],
    })
], AuthModule);
exports.AuthModule = AuthModule;
let AuthApiModule = class AuthApiModule {
};
AuthApiModule = __decorate([
    (0, common_1.Module)({
        providers: [
            auth_api_service_1.AuthApiService,
            auth_api_bulk_service_1.AuthApiBulkService,
            auth_api_bulk_repository_1.AuthApiBulkRepository,
            auth_api_repository_1.AuthApiRepository,
            auth_api_key_strategy_1.ApiKeyStrategy,
        ],
        exports: [auth_api_service_1.AuthApiService, auth_api_bulk_service_1.AuthApiBulkService],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: auth_api_schema_1.AuthApiEntity.name,
                    schema: auth_api_schema_1.AuthApiSchema,
                    collection: auth_api_schema_1.AuthApiDatabaseName,
                },
            ], database_constant_1.DATABASE_CONNECTION_NAME),
        ],
    })
], AuthApiModule);
exports.AuthApiModule = AuthApiModule;
//# sourceMappingURL=auth.module.js.map