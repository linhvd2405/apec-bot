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
exports.BotUsedGuard = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const bot_status_code_constant_1 = require("../constants/bot.status-code.constant");
const user_service_1 = require("../../user/services/user.service");
let BotUsedGuard = class BotUsedGuard {
    constructor(userService) {
        this.userService = userService;
    }
    async canActivate(context) {
        const { __bot } = context.switchToHttp().getRequest();
        const check = await this.userService.findOne({
            bot: new mongoose_1.Types.ObjectId(__bot._id),
        });
        if (check) {
            throw new common_1.BadRequestException({
                statusCode: bot_status_code_constant_1.ENUM_BOT_STATUS_CODE_ERROR.BOT_USED_ERROR,
                message: 'bot.error.used',
            });
        }
        return true;
    }
};
BotUsedGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], BotUsedGuard);
exports.BotUsedGuard = BotUsedGuard;
//# sourceMappingURL=bot.used.guard.js.map