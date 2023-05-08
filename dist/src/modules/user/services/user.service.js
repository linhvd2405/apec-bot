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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const config_1 = require("@nestjs/config");
const helper_string_service_1 = require("../../../common/helper/services/helper.string.service");
const class_transformer_1 = require("class-transformer");
const user_repository_1 = require("../repositories/user.repository");
const user_payload_serialization_1 = require("../serializations/user.payload.serialization");
let UserService = class UserService {
    constructor(userRepository, helperStringService, configService) {
        this.userRepository = userRepository;
        this.helperStringService = helperStringService;
        this.configService = configService;
        this.uploadPath = this.configService.get('user.uploadPath');
    }
    async findAll(find, options) {
        return this.userRepository.findAll(find, options);
    }
    async findOneById(_id, options) {
        return this.userRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.userRepository.findOne(find, options);
    }
    async getTotal(find, options) {
        return this.userRepository.getTotal(find, options);
    }
    async create({ firstName, lastName, password, passwordExpired, salt, email, mobileNumber, role, }, options) {
        const user = {
            firstName,
            email,
            mobileNumber,
            password,
            role: new mongoose_1.Types.ObjectId(role),
            isActive: true,
            lastName,
            salt,
            passwordExpired,
        };
        return this.userRepository.create(user, options);
    }
    async deleteOneById(_id, options) {
        return this.userRepository.deleteOneById(_id, options);
    }
    async deleteOne(find, options) {
        return this.userRepository.deleteOne(find, options);
    }
    async updateOneById(_id, data, options) {
        return this.userRepository.updateOneById(_id, data, options);
    }
    async checkExist(email, mobileNumber, options) {
        const existEmail = await this.userRepository.exists({
            email: {
                $regex: new RegExp(email),
                $options: 'i',
            },
        }, options);
        const existMobileNumber = await this.userRepository.exists({
            mobileNumber,
        }, options);
        return {
            email: existEmail,
            mobileNumber: existMobileNumber,
        };
    }
    async updatePhoto(_id, aws, options) {
        const update = {
            photo: aws,
        };
        return this.userRepository.updateOneById(_id, { photo: update }, options);
    }
    async createRandomFilename() {
        const filename = this.helperStringService.random(20);
        return {
            path: this.uploadPath,
            filename: filename,
        };
    }
    async updatePassword(_id, { salt, passwordHash, passwordExpired }, options) {
        const update = {
            password: passwordHash,
            passwordExpired: passwordExpired,
            salt: salt,
        };
        return this.userRepository.updateOneById(_id, update, options);
    }
    async updatePasswordExpired(_id, passwordExpired, options) {
        const update = {
            passwordExpired: passwordExpired,
        };
        return this.userRepository.updateOneById(_id, update, options);
    }
    async inactive(_id, options) {
        const update = {
            isActive: false,
        };
        return this.userRepository.updateOneById(_id, update, options);
    }
    async active(_id, options) {
        const update = {
            isActive: true,
        };
        return this.userRepository.updateOneById(_id, update, options);
    }
    async payloadSerialization(data) {
        return (0, class_transformer_1.plainToInstance)(user_payload_serialization_1.UserPayloadSerialization, data);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        helper_string_service_1.HelperStringService,
        config_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map