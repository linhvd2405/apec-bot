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
exports.PermissionSchema = exports.PermissionDatabaseName = exports.PermissionEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let PermissionEntity = class PermissionEntity {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        index: true,
        uppercase: true,
        unique: true,
        trim: true,
    }),
    __metadata("design:type", String)
], PermissionEntity.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        lowercase: true,
        index: true,
    }),
    __metadata("design:type", String)
], PermissionEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], PermissionEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: true,
        index: true,
    }),
    __metadata("design:type", Boolean)
], PermissionEntity.prototype, "isActive", void 0);
PermissionEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], PermissionEntity);
exports.PermissionEntity = PermissionEntity;
exports.PermissionDatabaseName = 'permissions';
exports.PermissionSchema = mongoose_1.SchemaFactory.createForClass(PermissionEntity);
exports.PermissionSchema.pre('save', function (next) {
    this.code = this.code.toUpperCase();
    this.name = this.name.toLowerCase();
    next();
});
//# sourceMappingURL=permission.schema.js.map