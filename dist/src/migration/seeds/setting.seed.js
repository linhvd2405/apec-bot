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
exports.SettingSeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const setting_service_1 = require("../../common/setting/services/setting.service");
const setting_bulk_service_1 = require("../../common/setting/services/setting.bulk.service");
let SettingSeed = class SettingSeed {
    constructor(settingService, settingBulkService) {
        this.settingService = settingService;
        this.settingBulkService = settingBulkService;
    }
    async insert() {
        try {
            await this.settingService.create({
                name: 'maintenance',
                description: 'Maintenance Mode',
                value: 'false',
            });
            await this.settingService.create({
                name: 'limitMaxPartNumber',
                description: 'Max Part Number Aws Chunk File',
                value: 10000,
            });
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
    async remove() {
        try {
            await this.settingBulkService.deleteMany({});
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'insert:setting',
        describe: 'insert settings',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingSeed.prototype, "insert", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'remove:setting',
        describe: 'remove settings',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingSeed.prototype, "remove", null);
SettingSeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [setting_service_1.SettingService,
        setting_bulk_service_1.SettingBulkService])
], SettingSeed);
exports.SettingSeed = SettingSeed;
//# sourceMappingURL=setting.seed.js.map