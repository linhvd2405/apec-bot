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
exports.LoggerSchema = exports.LoggerDatabaseName = exports.LoggerEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const auth_enum_constant_1 = require("../../auth/constants/auth.enum.constant");
const auth_api_schema_1 = require("../../auth/schemas/auth.api.schema");
const logger_enum_constant_1 = require("../constants/logger.enum.constant");
const request_enum_constant_1 = require("../../request/constants/request.enum.constant");
let LoggerEntity = class LoggerEntity {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: logger_enum_constant_1.ENUM_LOGGER_LEVEL,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "level", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: logger_enum_constant_1.ENUM_LOGGER_ACTION,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "action", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: request_enum_constant_1.ENUM_REQUEST_METHOD,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "requestId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], LoggerEntity.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], LoggerEntity.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        ref: auth_api_schema_1.AuthApiEntity.name,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], LoggerEntity.prototype, "apiKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: true,
    }),
    __metadata("design:type", Boolean)
], LoggerEntity.prototype, "anonymous", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        enum: auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "accessFor", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Object,
    }),
    __metadata("design:type", Object)
], LoggerEntity.prototype, "params", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: Object,
    }),
    __metadata("design:type", Object)
], LoggerEntity.prototype, "bodies", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", Number)
], LoggerEntity.prototype, "statusCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", String)
], LoggerEntity.prototype, "path", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        default: [],
    }),
    __metadata("design:type", Array)
], LoggerEntity.prototype, "tags", void 0);
LoggerEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], LoggerEntity);
exports.LoggerEntity = LoggerEntity;
exports.LoggerDatabaseName = 'loggers';
exports.LoggerSchema = mongoose_1.SchemaFactory.createForClass(LoggerEntity);
//# sourceMappingURL=logger.schema.js.map