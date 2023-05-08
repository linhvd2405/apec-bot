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
exports.BotSchema = exports.BotDatabaseName = exports.BotEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const auth_enum_constant_1 = require("../../../common/auth/constants/auth.enum.constant");
const permission_schema_1 = require("../../permission/schemas/permission.schema");
let BotEntity = class BotEntity {
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
], BotEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Array,
        default: [],
        ref: permission_schema_1.PermissionEntity.name,
    }),
    __metadata("design:type", Array)
], BotEntity.prototype, "permissions", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: true,
        index: true,
    }),
    __metadata("design:type", Boolean)
], BotEntity.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR,
        index: true,
    }),
    __metadata("design:type", String)
], BotEntity.prototype, "accessFor", void 0);
BotEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], BotEntity);
exports.BotEntity = BotEntity;
exports.BotDatabaseName = 'bots';
exports.BotSchema = mongoose_1.SchemaFactory.createForClass(BotEntity);
exports.BotSchema.pre('save', function (next) {
    this.name = this.name.toLowerCase();
    next();
});
//# sourceMappingURL=bot.schema.js.map