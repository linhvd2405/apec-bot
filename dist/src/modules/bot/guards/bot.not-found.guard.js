"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotNotFoundGuard = void 0;
const common_1 = require("@nestjs/common");
const bot_status_code_constant_1 = require("../constants/bot.status-code.constant");
let BotNotFoundGuard = class BotNotFoundGuard {
    async canActivate(context) {
        const { __bot } = context.switchToHttp().getRequest();
        if (!__bot) {
            throw new common_1.NotFoundException({
                statusCode: bot_status_code_constant_1.ENUM_BOT_STATUS_CODE_ERROR.BOT_NOT_FOUND_ERROR,
                message: 'bot.error.notFound',
            });
        }
        return true;
    }
};
BotNotFoundGuard = __decorate([
    (0, common_1.Injectable)()
], BotNotFoundGuard);
exports.BotNotFoundGuard = BotNotFoundGuard;
//# sourceMappingURL=bot.not-found.guard.js.map