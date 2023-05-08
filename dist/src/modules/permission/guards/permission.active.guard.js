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
exports.PermissionActiveGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const permission_constant_1 = require("../constants/permission.constant");
const permission_status_code_constant_1 = require("../constants/permission.status-code.constant");
let PermissionActiveGuard = class PermissionActiveGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const required = this.reflector.getAllAndOverride(permission_constant_1.PERMISSION_ACTIVE_META_KEY, [context.getHandler(), context.getClass()]);
        if (!required) {
            return true;
        }
        const { __permission } = context.switchToHttp().getRequest();
        if (!required.includes(__permission.isActive)) {
            throw new common_1.BadRequestException({
                statusCode: permission_status_code_constant_1.ENUM_PERMISSION_STATUS_CODE_ERROR.PERMISSION_ACTIVE_ERROR,
                message: 'permission.error.active',
            });
        }
        return true;
    }
};
PermissionActiveGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], PermissionActiveGuard);
exports.PermissionActiveGuard = PermissionActiveGuard;
//# sourceMappingURL=permission.active.guard.js.map