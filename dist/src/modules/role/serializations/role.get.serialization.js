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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGetSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const auth_enum_constant_1 = require("../../../common/auth/constants/auth.enum.constant");
class RoleGetSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id that representative with your target data',
        example: faker_1.faker.database.mongodbObjectId(),
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], RoleGetSerialization.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active flag of role',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], RoleGetSerialization.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Alias name of role',
        example: faker_1.faker.name.jobTitle(),
        required: true,
    }),
    __metadata("design:type", String)
], RoleGetSerialization.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Representative for role',
        example: 'ADMIN',
        required: true,
    }),
    __metadata("design:type", String)
], RoleGetSerialization.prototype, "accessFor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of permission',
        example: [
            {
                _id: faker_1.faker.database.mongodbObjectId(),
                code: faker_1.faker.random.alpha(5),
                name: faker_1.faker.name.jobDescriptor(),
                isActive: true,
            },
        ],
        required: true,
    }),
    (0, class_transformer_1.Transform)(({ obj }) => obj.permissions.map((val) => ({
        _id: `${val._id}`,
        code: val.code,
        name: val.name,
        isActive: val.isActive,
    }))),
    __metadata("design:type", Array)
], RoleGetSerialization.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
    }),
    __metadata("design:type", Date)
], RoleGetSerialization.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], RoleGetSerialization.prototype, "updatedAt", void 0);
exports.RoleGetSerialization = RoleGetSerialization;
//# sourceMappingURL=role.get.serialization.js.map