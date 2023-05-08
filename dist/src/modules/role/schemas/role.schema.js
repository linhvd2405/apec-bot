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
exports.RoleSchema = exports.RoleDatabaseName = exports.RoleEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const auth_enum_constant_1 = require("../../../common/auth/constants/auth.enum.constant");
const permission_schema_1 = require("../../permission/schemas/permission.schema");
let RoleEntity = class RoleEntity {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        unique: true,
        lowercase: true,
        trim: true,
    }),
    __metadata("design:type", String)
], RoleEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Array,
        default: [],
        ref: permission_schema_1.PermissionEntity.name,
    }),
    __metadata("design:type", Array)
], RoleEntity.prototype, "permissions", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: true,
        index: true,
    }),
    __metadata("design:type", Boolean)
], RoleEntity.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR,
        index: true,
    }),
    __metadata("design:type", String)
], RoleEntity.prototype, "accessFor", void 0);
RoleEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], RoleEntity);
exports.RoleEntity = RoleEntity;
exports.RoleDatabaseName = 'roles';
exports.RoleSchema = mongoose_1.SchemaFactory.createForClass(RoleEntity);
exports.RoleSchema.pre('save', function (next) {
    this.name = this.name.toLowerCase();
    next();
});
//# sourceMappingURL=role.schema.js.map