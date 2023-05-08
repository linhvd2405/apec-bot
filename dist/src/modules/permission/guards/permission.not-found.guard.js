"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionNotFoundGuard = void 0;
const common_1 = require("@nestjs/common");
const permission_status_code_constant_1 = require("../constants/permission.status-code.constant");
let PermissionNotFoundGuard = class PermissionNotFoundGuard {
    async canActivate(context) {
        const { __permission } = context.switchToHttp().getRequest();
        if (!__permission) {
            throw new common_1.NotFoundException({
                statusCode: permission_status_code_constant_1.ENUM_PERMISSION_STATUS_CODE_ERROR.PERMISSION_NOT_FOUND_ERROR,
                message: 'permission.error.notFound',
            });
        }
        return true;
    }
};
PermissionNotFoundGuard = __decorate([
    (0, common_1.Injectable)()
], PermissionNotFoundGuard);
exports.PermissionNotFoundGuard = PermissionNotFoundGuard;
//# sourceMappingURL=permission.not-found.guard.js.map