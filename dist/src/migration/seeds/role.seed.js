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
exports.RoleSeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const role_service_1 = require("../../modules/role/services/role.service");
const role_bulk_service_1 = require("../../modules/role/services/role.bulk.service");
const permission_service_1 = require("../../modules/permission/services/permission.service");
const auth_enum_permission_constant_1 = require("../../common/auth/constants/auth.enum.permission.constant");
const auth_enum_constant_1 = require("../../common/auth/constants/auth.enum.constant");
let RoleSeed = class RoleSeed {
    constructor(permissionService, roleBulkService, roleService) {
        this.permissionService = permissionService;
        this.roleBulkService = roleBulkService;
        this.roleService = roleService;
    }
    async insert() {
        const permissions = await this.permissionService.findAll({
            code: { $in: Object.values(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS) },
        });
        try {
            const permissionsMap = permissions.map((val) => val._id);
            await this.roleService.createSuperAdmin();
            await this.roleBulkService.createMany([
                {
                    name: 'admin',
                    permissions: permissionsMap,
                    accessFor: auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.ADMIN,
                },
                {
                    name: 'user',
                    permissions: [],
                    accessFor: auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.USER,
                },
            ]);
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
    async remove() {
        try {
            await this.roleBulkService.deleteMany({});
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'insert:role',
        describe: 'insert roles',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleSeed.prototype, "insert", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'remove:role',
        describe: 'remove roles',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleSeed.prototype, "remove", null);
RoleSeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [permission_service_1.PermissionService,
        role_bulk_service_1.RoleBulkService,
        role_service_1.RoleService])
], RoleSeed);
exports.RoleSeed = RoleSeed;
//# sourceMappingURL=role.seed.js.map