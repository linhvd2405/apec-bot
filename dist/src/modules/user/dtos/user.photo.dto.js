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
exports.UserPhotoDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const aws_s3_serialization_1 = require("../../../common/aws/serializations/aws.s3.serialization");
class UserPhotoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { photo: { required: true, type: () => require("../../../common/aws/serializations/aws.s3.serialization").AwsS3Serialization } };
    }
}
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => aws_s3_serialization_1.AwsS3Serialization),
    __metadata("design:type", aws_s3_serialization_1.AwsS3Serialization)
], UserPhotoDto.prototype, "photo", void 0);
exports.UserPhotoDto = UserPhotoDto;
//# sourceMappingURL=user.photo.dto.js.map