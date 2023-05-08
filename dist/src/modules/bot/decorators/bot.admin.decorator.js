"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotUpdateInactiveGuard = exports.BotUpdateActiveGuard = exports.BotDeleteGuard = exports.BotUpdateGuard = exports.BotGetGuard = void 0;
const common_1 = require("@nestjs/common");
const bot_constant_1 = require("../constants/bot.constant");
const bot_active_guard_1 = require("../guards/bot.active.guard");
const bot_not_found_guard_1 = require("../guards/bot.not-found.guard");
const bot_put_to_request_guard_1 = require("../guards/bot.put-to-request.guard");
const bot_used_guard_1 = require("../guards/bot.used.guard");
function BotGetGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(bot_put_to_request_guard_1.BotPutToRequestGuard, bot_not_found_guard_1.BotNotFoundGuard));
}
exports.BotGetGuard = BotGetGuard;
function BotUpdateGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(bot_put_to_request_guard_1.BotPutToRequestGuard, bot_not_found_guard_1.BotNotFoundGuard, bot_active_guard_1.BotActiveGuard, bot_used_guard_1.BotUsedGuard), (0, common_1.SetMetadata)(bot_constant_1.BOT_ACTIVE_META_KEY, [true]));
}
exports.BotUpdateGuard = BotUpdateGuard;
function BotDeleteGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(bot_put_to_request_guard_1.BotPutToRequestGuard, bot_not_found_guard_1.BotNotFoundGuard, bot_active_guard_1.BotActiveGuard, bot_used_guard_1.BotUsedGuard), (0, common_1.SetMetadata)(bot_constant_1.BOT_ACTIVE_META_KEY, [true]));
}
exports.BotDeleteGuard = BotDeleteGuard;
function BotUpdateActiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(bot_put_to_request_guard_1.BotPutToRequestGuard, bot_not_found_guard_1.BotNotFoundGuard, bot_active_guard_1.BotActiveGuard), (0, common_1.SetMetadata)(bot_constant_1.BOT_ACTIVE_META_KEY, [false]));
}
exports.BotUpdateActiveGuard = BotUpdateActiveGuard;
function BotUpdateInactiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(bot_put_to_request_guard_1.BotPutToRequestGuard, bot_not_found_guard_1.BotNotFoundGuard, bot_active_guard_1.BotActiveGuard), (0, common_1.SetMetadata)(bot_constant_1.BOT_ACTIVE_META_KEY, [true]));
}
exports.BotUpdateInactiveGuard = BotUpdateInactiveGuard;
//# sourceMappingURL=bot.admin.decorator.js.map