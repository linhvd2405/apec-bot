"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateInactiveGuard = exports.RoleUpdateActiveGuard = exports.RoleDeleteGuard = exports.RoleUpdateGuard = exports.RoleGetGuard = void 0;
const common_1 = require("@nestjs/common");
const role_constant_1 = require("../constants/role.constant");
const role_active_guard_1 = require("../guards/role.active.guard");
const role_not_found_guard_1 = require("../guards/role.not-found.guard");
const role_put_to_request_guard_1 = require("../guards/role.put-to-request.guard");
const role_used_guard_1 = require("../guards/role.used.guard");
function RoleGetGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(role_put_to_request_guard_1.RolePutToRequestGuard, role_not_found_guard_1.RoleNotFoundGuard));
}
exports.RoleGetGuard = RoleGetGuard;
function RoleUpdateGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(role_put_to_request_guard_1.RolePutToRequestGuard, role_not_found_guard_1.RoleNotFoundGuard, role_active_guard_1.RoleActiveGuard, role_used_guard_1.RoleUsedGuard), (0, common_1.SetMetadata)(role_constant_1.ROLE_ACTIVE_META_KEY, [true]));
}
exports.RoleUpdateGuard = RoleUpdateGuard;
function RoleDeleteGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(role_put_to_request_guard_1.RolePutToRequestGuard, role_not_found_guard_1.RoleNotFoundGuard, role_active_guard_1.RoleActiveGuard, role_used_guard_1.RoleUsedGuard), (0, common_1.SetMetadata)(role_constant_1.ROLE_ACTIVE_META_KEY, [true]));
}
exports.RoleDeleteGuard = RoleDeleteGuard;
function RoleUpdateActiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(role_put_to_request_guard_1.RolePutToRequestGuard, role_not_found_guard_1.RoleNotFoundGuard, role_active_guard_1.RoleActiveGuard), (0, common_1.SetMetadata)(role_constant_1.ROLE_ACTIVE_META_KEY, [false]));
}
exports.RoleUpdateActiveGuard = RoleUpdateActiveGuard;
function RoleUpdateInactiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(role_put_to_request_guard_1.RolePutToRequestGuard, role_not_found_guard_1.RoleNotFoundGuard, role_active_guard_1.RoleActiveGuard), (0, common_1.SetMetadata)(role_constant_1.ROLE_ACTIVE_META_KEY, [true]));
}
exports.RoleUpdateInactiveGuard = RoleUpdateInactiveGuard;
//# sourceMappingURL=role.admin.decorator.js.map