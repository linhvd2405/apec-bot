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
exports.SettingService = void 0;
const common_1 = require("@nestjs/common");
const helper_string_service_1 = require("../../helper/services/helper.string.service");
const setting_repository_1 = require("../repositories/setting.repository");
let SettingService = class SettingService {
    constructor(settingRepository, helperStringService) {
        this.settingRepository = settingRepository;
        this.helperStringService = helperStringService;
    }
    async findAll(find, options) {
        return this.settingRepository.findAll(find, options);
    }
    async findOneById(_id, options) {
        return this.settingRepository.findOneById(_id, options);
    }
    async findOneByName(name, options) {
        return this.settingRepository.findOne({ name }, options);
    }
    async getTotal(find, options) {
        return this.settingRepository.getTotal(find, options);
    }
    async create({ name, description, value }, options) {
        let convertValue = value;
        if (typeof value === 'string') {
            convertValue = await this.convertValue(value);
        }
        const create = {
            name,
            description,
            value: convertValue,
        };
        return this.settingRepository.create(create, options);
    }
    async updateOneById(_id, { description, value }, options) {
        let convertValue = value;
        if (typeof value === 'string') {
            convertValue = await this.convertValue(value);
        }
        const update = {
            description,
            value: convertValue,
        };
        return this.settingRepository.updateOneById(_id, update, options);
    }
    async deleteOne(find, options) {
        return this.settingRepository.deleteOne(find, options);
    }
    async convertValue(value) {
        return this.helperStringService.convertStringToNumberOrBooleanIfPossible(value);
    }
};
SettingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [setting_repository_1.SettingRepository,
        helper_string_service_1.HelperStringService])
], SettingService);
exports.SettingService = SettingService;
//# sourceMappingURL=setting.service.js.map