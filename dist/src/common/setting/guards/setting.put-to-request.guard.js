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
exports.SettingPutToRequestByNameGuard = exports.SettingPutToRequestGuard = void 0;
const common_1 = require("@nestjs/common");
const setting_service_1 = require("../services/setting.service");
let SettingPutToRequestGuard = class SettingPutToRequestGuard {
    constructor(settingService) {
        this.settingService = settingService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { params } = request;
        const { setting } = params;
        const check = await this.settingService.findOneById(setting);
        request.__setting = check;
        return true;
    }
};
SettingPutToRequestGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], SettingPutToRequestGuard);
exports.SettingPutToRequestGuard = SettingPutToRequestGuard;
let SettingPutToRequestByNameGuard = class SettingPutToRequestByNameGuard {
    constructor(settingService) {
        this.settingService = settingService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { params } = request;
        const { settingName } = params;
        const check = await this.settingService.findOneByName(settingName);
        request.__setting = check;
        return true;
    }
};
SettingPutToRequestByNameGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], SettingPutToRequestByNameGuard);
exports.SettingPutToRequestByNameGuard = SettingPutToRequestByNameGuard;
//# sourceMappingURL=setting.put-to-request.guard.js.map