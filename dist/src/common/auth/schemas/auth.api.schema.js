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
exports.AuthApiSchema = exports.AuthApiDatabaseName = exports.AuthApiEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let AuthApiEntity = class AuthApiEntity {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
    }),
    __metadata("design:type", String)
], AuthApiEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", String)
], AuthApiEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
        unique: true,
        index: true,
    }),
    __metadata("design:type", String)
], AuthApiEntity.prototype, "key", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], AuthApiEntity.prototype, "hash", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
        index: true,
    }),
    __metadata("design:type", String)
], AuthApiEntity.prototype, "encryptionKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
        minLength: 16,
        maxLength: 16,
    }),
    __metadata("design:type", String)
], AuthApiEntity.prototype, "passphrase", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
    }),
    __metadata("design:type", Boolean)
], AuthApiEntity.prototype, "isActive", void 0);
AuthApiEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], AuthApiEntity);
exports.AuthApiEntity = AuthApiEntity;
exports.AuthApiDatabaseName = 'authapis';
exports.AuthApiSchema = mongoose_1.SchemaFactory.createForClass(AuthApiEntity);
exports.AuthApiSchema.pre('save', function (next) {
    this.name = this.name.toLowerCase();
    next();
});
//# sourceMappingURL=auth.api.schema.js.map