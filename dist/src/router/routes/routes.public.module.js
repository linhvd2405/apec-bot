"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesPublicModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../../common/auth/auth.module");
const permission_module_1 = require("../../modules/permission/permission.module");
const role_module_1 = require("../../modules/role/role.module");
const user_public_controller_1 = require("../../modules/user/controllers/user.public.controller");
const user_module_1 = require("../../modules/user/user.module");
let RoutesPublicModule = class RoutesPublicModule {
};
RoutesPublicModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_public_controller_1.UserPublicController],
        providers: [],
        exports: [],
        imports: [user_module_1.UserModule, auth_module_1.AuthModule, role_module_1.RoleModule, permission_module_1.PermissionModule],
    })
], RoutesPublicModule);
exports.RoutesPublicModule = RoutesPublicModule;
//# sourceMappingURL=routes.public.module.js.map