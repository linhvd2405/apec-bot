"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateActiveGuard = exports.UserUpdateInactiveGuard = exports.UserUpdateGuard = exports.UserDeleteGuard = exports.UserGetGuard = void 0;
const common_1 = require("@nestjs/common");
const user_constant_1 = require("../constants/user.constant");
const user_active_guard_1 = require("../guards/user.active.guard");
const user_not_found_guard_1 = require("../guards/user.not-found.guard");
const user_put_to_request_guard_1 = require("../guards/user.put-to-request.guard");
function UserGetGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard));
}
exports.UserGetGuard = UserGetGuard;
function UserDeleteGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard));
}
exports.UserDeleteGuard = UserDeleteGuard;
function UserUpdateGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard));
}
exports.UserUpdateGuard = UserUpdateGuard;
function UserUpdateInactiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard, user_active_guard_1.UserActiveGuard), (0, common_1.SetMetadata)(user_constant_1.USER_ACTIVE_META_KEY, [true]));
}
exports.UserUpdateInactiveGuard = UserUpdateInactiveGuard;
function UserUpdateActiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_put_to_request_guard_1.UserPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard, user_active_guard_1.UserActiveGuard), (0, common_1.SetMetadata)(user_constant_1.USER_ACTIVE_META_KEY, [false]));
}
exports.UserUpdateActiveGuard = UserUpdateActiveGuard;
//# sourceMappingURL=user.admin.decorator.js.map