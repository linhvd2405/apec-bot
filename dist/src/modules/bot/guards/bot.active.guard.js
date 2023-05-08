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
exports.BotActiveGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const bot_constant_1 = require("../constants/bot.constant");
const bot_status_code_constant_1 = require("../constants/bot.status-code.constant");
let BotActiveGuard = class BotActiveGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const required = this.reflector.getAllAndOverride(bot_constant_1.BOT_ACTIVE_META_KEY, [context.getHandler(), context.getClass()]);
        if (!required) {
            return true;
        }
        const { __bot } = context.switchToHttp().getRequest();
        if (!required.includes(__bot.isActive)) {
            throw new common_1.BadRequestException({
                statusCode: bot_status_code_constant_1.ENUM_BOT_STATUS_CODE_ERROR.BOT_ACTIVE_ERROR,
                message: 'bot.error.active',
            });
        }
        return true;
    }
};
BotActiveGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], BotActiveGuard);
exports.BotActiveGuard = BotActiveGuard;
//# sourceMappingURL=bot.active.guard.js.map