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
exports.BotCreateDto = void 0;
const openapi = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const auth_enum_constant_1 = require("../../../common/auth/constants/auth.enum.constant");
class BotCreateDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 3, maxLength: 30 }, permissions: { required: true, type: () => [String] }, accessFor: { required: true, enum: require("../../../common/auth/constants/auth.enum.constant").ENUM_AUTH_ACCESS_FOR_DEFAULT } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Alias name of bot',
        example: faker_1.faker.name.jobTitle(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], BotCreateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of permission',
        example: [
            faker_1.faker.database.mongodbObjectId(),
            faker_1.faker.database.mongodbObjectId(),
        ],
        required: true,
    }),
    (0, class_validator_1.IsMongoId)({ each: true }),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], BotCreateDto.prototype, "permissions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Representative for bot',
        example: 'Bot_read',
        required: true,
    }),
    (0, class_validator_1.IsEnum)(auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR_DEFAULT),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BotCreateDto.prototype, "accessFor", void 0);
exports.BotCreateDto = BotCreateDto;
//# sourceMappingURL=bot.create.dto.js.map