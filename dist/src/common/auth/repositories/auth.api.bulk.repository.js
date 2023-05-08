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
exports.AuthApiBulkRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const auth_api_schema_1 = require("../schemas/auth.api.schema");
const database_mongo_bulk_repository_abstract_1 = require("../../database/abstracts/database.mongo-bulk-repository.abstract");
const database_decorator_1 = require("../../database/decorators/database.decorator");
let AuthApiBulkRepository = class AuthApiBulkRepository extends database_mongo_bulk_repository_abstract_1.DatabaseMongoBulkRepositoryAbstract {
    constructor(authApiModel) {
        super(authApiModel);
        this.authApiModel = authApiModel;
    }
};
AuthApiBulkRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseEntity)(auth_api_schema_1.AuthApiEntity.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AuthApiBulkRepository);
exports.AuthApiBulkRepository = AuthApiBulkRepository;
//# sourceMappingURL=auth.api.bulk.repository.js.map