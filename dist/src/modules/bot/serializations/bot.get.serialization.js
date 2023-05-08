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
exports.BotGetSerialization = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const auth_enum_constant_1 = require("../../../common/auth/constants/auth.enum.constant");
class BotGetSerialization {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id that representative with your target data',
        example: faker_1.faker.database.mongodbObjectId(),
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], BotGetSerialization.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active flag of bot',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], BotGetSerialization.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Alias name of bot',
        example: faker_1.faker.name.jobTitle(),
        required: true,
    }),
    __metadata("design:type", String)
], BotGetSerialization.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Representative for bot',
        example: 'Bot_read',
        required: true,
    }),
    __metadata("design:type", String)
], BotGetSerialization.prototype, "accessFor", void 0);
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
], BotGetSerialization.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date created at',
        example: faker_1.faker.date.recent(),
        required: true,
    }),
    __metadata("design:type", Date)
], BotGetSerialization.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], BotGetSerialization.prototype, "updatedAt", void 0);
exports.BotGetSerialization = BotGetSerialization;
//# sourceMappingURL=bot.get.serialization.js.map