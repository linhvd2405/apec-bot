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
exports.PermissionGetSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class PermissionGetSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id that representative with your target data',
        example: faker_1.faker.database.mongodbObjectId(),
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], PermissionGetSerialization.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active flag of permission',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], PermissionGetSerialization.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Alias name of permission',
        example: faker_1.faker.name.jobDescriptor(),
        required: true,
    }),
    __metadata("design:type", String)
], PermissionGetSerialization.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique code of permission',
        example: faker_1.faker.random.alpha(5),
        required: true,
    }),
    __metadata("design:type", String)
], PermissionGetSerialization.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of permission',
        example: 'blabla description',
        required: true,
    }),
    __metadata("design:type", String)
], PermissionGetSerialization.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
    }),
    __metadata("design:type", Date)
], PermissionGetSerialization.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], PermissionGetSerialization.prototype, "updatedAt", void 0);
exports.PermissionGetSerialization = PermissionGetSerialization;
//# sourceMappingURL=permission.get.serialization.js.map