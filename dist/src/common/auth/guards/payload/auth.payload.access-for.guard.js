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
exports.AuthPayloadAccessForGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_constant_1 = require("../../constants/auth.constant");
const auth_status_code_constant_1 = require("../../constants/auth.status-code.constant");
const helper_array_service_1 = require("../../../helper/services/helper.array.service");
let AuthPayloadAccessForGuard = class AuthPayloadAccessForGuard {
    constructor(reflector, helperArrayService) {
        this.reflector = reflector;
        this.helperArrayService = helperArrayService;
    }
    async canActivate(context) {
        const requiredFor = this.reflector.getAllAndOverride(auth_constant_1.AUTH_ACCESS_FOR_META_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredFor) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        const { role } = user;
        const hasFor = this.helperArrayService.includes(requiredFor, role.accessFor);
        if (!hasFor) {
            throw new common_1.ForbiddenException({
                statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_ACCESS_FOR_INVALID_ERROR,
                message: 'auth.error.accessForForbidden',
            });
        }
        return hasFor;
    }
};
AuthPayloadAccessForGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        helper_array_service_1.HelperArrayService])
], AuthPayloadAccessForGuard);
exports.AuthPayloadAccessForGuard = AuthPayloadAccessForGuard;
//# sourceMappingURL=auth.payload.access-for.guard.js.map