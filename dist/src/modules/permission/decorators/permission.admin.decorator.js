"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionUpdateInactiveGuard = exports.PermissionUpdateActiveGuard = exports.PermissionUpdateGuard = exports.PermissionGetGuard = void 0;
const common_1 = require("@nestjs/common");
const permission_constant_1 = require("../constants/permission.constant");
const permission_active_guard_1 = require("../guards/permission.active.guard");
const permission_not_found_guard_1 = require("../guards/permission.not-found.guard");
const permission_put_to_request_guard_1 = require("../guards/permission.put-to-request.guard");
function PermissionGetGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(permission_put_to_request_guard_1.PermissionPutToRequestGuard, permission_not_found_guard_1.PermissionNotFoundGuard));
}
exports.PermissionGetGuard = PermissionGetGuard;
function PermissionUpdateGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(permission_put_to_request_guard_1.PermissionPutToRequestGuard, permission_not_found_guard_1.PermissionNotFoundGuard, permission_active_guard_1.PermissionActiveGuard), (0, common_1.SetMetadata)(permission_constant_1.PERMISSION_ACTIVE_META_KEY, [true]));
}
exports.PermissionUpdateGuard = PermissionUpdateGuard;
function PermissionUpdateActiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(permission_put_to_request_guard_1.PermissionPutToRequestGuard, permission_not_found_guard_1.PermissionNotFoundGuard, permission_active_guard_1.PermissionActiveGuard), (0, common_1.SetMetadata)(permission_constant_1.PERMISSION_ACTIVE_META_KEY, [false]));
}
exports.PermissionUpdateActiveGuard = PermissionUpdateActiveGuard;
function PermissionUpdateInactiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(permission_put_to_request_guard_1.PermissionPutToRequestGuard, permission_not_found_guard_1.PermissionNotFoundGuard, permission_active_guard_1.PermissionActiveGuard), (0, common_1.SetMetadata)(permission_constant_1.PERMISSION_ACTIVE_META_KEY, [true]));
}
exports.PermissionUpdateInactiveGuard = PermissionUpdateInactiveGuard;
//# sourceMappingURL=permission.admin.decorator.js.map