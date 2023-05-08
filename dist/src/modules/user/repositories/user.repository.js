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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const database_mongo_repository_abstract_1 = require("../../../common/database/abstracts/database.mongo-repository.abstract");
const database_decorator_1 = require("../../../common/database/decorators/database.decorator");
const permission_schema_1 = require("../../permission/schemas/permission.schema");
const role_schema_1 = require("../../role/schemas/role.schema");
const user_schema_1 = require("../schemas/user.schema");
let UserRepository = class UserRepository extends database_mongo_repository_abstract_1.DatabaseMongoRepositoryAbstract {
    constructor(userModel) {
        super(userModel, {
            path: 'role',
            model: role_schema_1.RoleEntity.name,
            populate: {
                path: 'permissions',
                model: permission_schema_1.PermissionEntity.name,
            },
        });
        this.userModel = userModel;
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseEntity)(user_schema_1.UserEntity.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map