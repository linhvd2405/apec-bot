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
exports.AuthPayloadPermissionGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_constant_1 = require("../../constants/auth.constant");
const auth_enum_constant_1 = require("../../constants/auth.enum.constant");
const auth_status_code_constant_1 = require("../../constants/auth.status-code.constant");
let AuthPayloadPermissionGuard = class AuthPayloadPermissionGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const requiredPermission = this.reflector.getAllAndOverride(auth_constant_1.AUTH_PERMISSION_META_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredPermission) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        const { role } = user;
        if (role.accessFor === auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.SUPER_ADMIN) {
            return true;
        }
        const permissions = role.permissions;
        const hasPermission = requiredPermission.every((permission) => permissions.includes(permission));
        if (!hasPermission) {
            throw new common_1.ForbiddenException({
                statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_PERMISSION_INVALID_ERROR,
                message: 'auth.error.permissionForbidden',
            });
        }
        return hasPermission;
    }
};
AuthPayloadPermissionGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], AuthPayloadPermissionGuard);
exports.AuthPayloadPermissionGuard = AuthPayloadPermissionGuard;
//# sourceMappingURL=auth.payload.permission.guard.js.map