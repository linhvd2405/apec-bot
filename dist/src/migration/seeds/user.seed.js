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
exports.UserSeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../common/auth/services/auth.service");
const user_service_1 = require("../../modules/user/services/user.service");
const user_bulk_service_1 = require("../../modules/user/services/user.bulk.service");
const role_service_1 = require("../../modules/role/services/role.service");
let UserSeed = class UserSeed {
    constructor(authService, userService, userBulkService, roleService) {
        this.authService = authService;
        this.userService = userService;
        this.userBulkService = userBulkService;
        this.roleService = roleService;
    }
    async insert() {
        const superadminRole = await this.roleService.findOne({
            name: 'superadmin',
        });
        const adminRole = await this.roleService.findOne({
            name: 'admin',
        });
        const userRole = await this.roleService.findOne({
            name: 'user',
        });
        try {
            const password = await this.authService.createPassword('aaAA@@123444');
            await this.userService.create({
                firstName: 'superadmin',
                lastName: 'test',
                email: 'superadmin@mail.com',
                password: password.passwordHash,
                passwordExpired: password.passwordExpired,
                mobileNumber: '08111111222',
                role: superadminRole._id,
                salt: password.salt,
            });
            await this.userService.create({
                firstName: 'admin',
                lastName: 'test',
                email: 'admin@mail.com',
                password: password.passwordHash,
                passwordExpired: password.passwordExpired,
                mobileNumber: '08111111111',
                role: adminRole._id,
                salt: password.salt,
            });
            await this.userService.create({
                firstName: 'user',
                lastName: 'test',
                email: 'user@mail.com',
                password: password.passwordHash,
                passwordExpired: password.passwordExpired,
                mobileNumber: '08111111333',
                role: userRole._id,
                salt: password.salt,
            });
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
    async remove() {
        try {
            await this.userBulkService.deleteMany({});
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'insert:user',
        describe: 'insert users',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserSeed.prototype, "insert", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'remove:user',
        describe: 'remove users',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserSeed.prototype, "remove", null);
UserSeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService,
        user_bulk_service_1.UserBulkService,
        role_service_1.RoleService])
], UserSeed);
exports.UserSeed = UserSeed;
//# sourceMappingURL=user.seed.js.map