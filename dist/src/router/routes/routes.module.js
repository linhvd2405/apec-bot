"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const auth_module_1 = require("../../common/auth/auth.module");
const auth_controller_1 = require("../../common/auth/controllers/auth.controller");
const aws_module_1 = require("../../common/aws/aws.module");
const setting_controller_1 = require("../../common/setting/controllers/setting.controller");
const health_controller_1 = require("../../health/controllers/health.controller");
const health_module_1 = require("../../health/health.module");
const permission_module_1 = require("../../modules/permission/permission.module");
const role_module_1 = require("../../modules/role/role.module");
const user_controller_1 = require("../../modules/user/controllers/user.controller");
const user_module_1 = require("../../modules/user/user.module");
let RoutesModule = class RoutesModule {
};
RoutesModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            setting_controller_1.SettingController,
            user_controller_1.UserController,
            health_controller_1.HealthController,
            auth_controller_1.AuthController,
        ],
        providers: [],
        exports: [],
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            aws_module_1.AwsModule,
            permission_module_1.PermissionModule,
            role_module_1.RoleModule,
            health_module_1.HealthModule,
            terminus_1.TerminusModule,
            axios_1.HttpModule,
        ],
    })
], RoutesModule);
exports.RoutesModule = RoutesModule;
//# sourceMappingURL=routes.module.js.map