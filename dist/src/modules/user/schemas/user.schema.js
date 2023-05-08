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
exports.UserSchema = exports.UserDatabaseName = exports.UserEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const aws_s3_serialization_1 = require("../../../common/aws/serializations/aws.s3.serialization");
const role_schema_1 = require("../../role/schemas/role.schema");
let UserEntity = class UserEntity {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        lowercase: true,
        trim: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        lowercase: true,
        trim: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        unique: true,
        trim: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "mobileNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        unique: true,
        lowercase: true,
        trim: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: mongoose_2.Types.ObjectId,
        ref: role_schema_1.RoleEntity.name,
        index: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "passwordExpired", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: true,
        index: true,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        _id: false,
        type: {
            path: String,
            pathWithFilename: String,
            filename: String,
            completedUrl: String,
            baseUrl: String,
            mime: String,
        },
    }),
    __metadata("design:type", aws_s3_serialization_1.AwsS3Serialization)
], UserEntity.prototype, "photo", void 0);
UserEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], UserEntity);
exports.UserEntity = UserEntity;
exports.UserDatabaseName = 'users';
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserEntity);
exports.UserSchema.pre('save', function (next) {
    this.email = this.email.toLowerCase();
    this.firstName = this.firstName.toLowerCase();
    this.lastName = this.lastName.toLowerCase();
    next();
});
//# sourceMappingURL=user.schema.js.map