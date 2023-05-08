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
exports.UserPayloadSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const auth_enum_constant_1 = require("../../../common/auth/constants/auth.enum.constant");
const auth_enum_permission_constant_1 = require("../../../common/auth/constants/auth.enum.permission.constant");
const aws_s3_serialization_1 = require("../../../common/aws/serializations/aws.s3.serialization");
const user_get_serialization_1 = require("./user.get.serialization");
class UserPayloadSerialization extends (0, swagger_1.OmitType)(user_get_serialization_1.UserGetSerialization, [
    'photo',
    'role',
    'isActive',
    'passwordExpired',
]) {
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", aws_s3_serialization_1.AwsS3Serialization)
], UserPayloadSerialization.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            name: faker_1.faker.name.jobTitle(),
            permissions: Object.values(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS),
            accessFor: auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.ADMIN,
        },
        type: 'object',
    }),
    (0, class_transformer_1.Transform)(({ value }) => ({
        name: value.name,
        permissions: value.permissions.map((val) => val.code),
        accessFor: value.accessFor,
    })),
    __metadata("design:type", Object)
], UserPayloadSerialization.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Boolean)
], UserPayloadSerialization.prototype, "isActive", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], UserPayloadSerialization.prototype, "passwordExpired", void 0);
exports.UserPayloadSerialization = UserPayloadSerialization;
//# sourceMappingURL=user.payload.serialization.js.map