"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingGetByNameGuard = exports.SettingGetGuard = void 0;
const common_1 = require("@nestjs/common");
const setting_not_found_guard_1 = require("../guards/setting.not-found.guard");
const setting_put_to_request_guard_1 = require("../guards/setting.put-to-request.guard");
function SettingGetGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(setting_put_to_request_guard_1.SettingPutToRequestGuard, setting_not_found_guard_1.SettingNotFoundGuard));
}
exports.SettingGetGuard = SettingGetGuard;
function SettingGetByNameGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(setting_put_to_request_guard_1.SettingPutToRequestByNameGuard, setting_not_found_guard_1.SettingNotFoundGuard));
}
exports.SettingGetByNameGuard = SettingGetByNameGuard;
//# sourceMappingURL=setting.public.decorator.js.map