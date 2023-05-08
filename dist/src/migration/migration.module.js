"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_command_1 = require("nestjs-command");
const auth_module_1 = require("../common/auth/auth.module");
const common_module_1 = require("../common/common.module");
const permission_module_1 = require("../modules/permission/permission.module");
const role_module_1 = require("../modules/role/role.module");
const user_module_1 = require("../modules/user/user.module");
const auth_api_seed_1 = require("./seeds/auth.api.seed");
const permission_seed_1 = require("./seeds/permission.seed");
const role_seed_1 = require("./seeds/role.seed");
const setting_seed_1 = require("./seeds/setting.seed");
const user_seed_1 = require("./seeds/user.seed");
let MigrationModule = class MigrationModule {
};
MigrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_module_1.CommonModule,
            nestjs_command_1.CommandModule,
            auth_module_1.AuthModule,
            auth_module_1.AuthApiModule,
            permission_module_1.PermissionModule,
            role_module_1.RoleModule,
            user_module_1.UserModule,
        ],
        providers: [auth_api_seed_1.AuthApiSeed, permission_seed_1.PermissionSeed, role_seed_1.RoleSeed, user_seed_1.UserSeed, setting_seed_1.SettingSeed],
        exports: [],
    })
], MigrationModule);
exports.MigrationModule = MigrationModule;
//# sourceMappingURL=migration.module.js.map