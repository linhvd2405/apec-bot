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
exports.PermissionSeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const permission_bulk_service_1 = require("../../modules/permission/services/permission.bulk.service");
const auth_enum_permission_constant_1 = require("../../common/auth/constants/auth.enum.permission.constant");
let PermissionSeed = class PermissionSeed {
    constructor(permissionBulkService) {
        this.permissionBulkService = permissionBulkService;
    }
    async insert() {
        try {
            const permissions = Object.keys(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS).map((val) => ({
                code: val,
                name: val.replace('_', ' '),
                description: `${val.replace('_', ' ')} description`,
            }));
            await this.permissionBulkService.createMany(permissions);
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
    async remove() {
        try {
            await this.permissionBulkService.deleteMany({});
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'insert:permission',
        describe: 'insert permissions',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PermissionSeed.prototype, "insert", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'remove:permission',
        describe: 'remove permissions',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PermissionSeed.prototype, "remove", null);
PermissionSeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [permission_bulk_service_1.PermissionBulkService])
], PermissionSeed);
exports.PermissionSeed = PermissionSeed;
//# sourceMappingURL=permission.seed.js.map