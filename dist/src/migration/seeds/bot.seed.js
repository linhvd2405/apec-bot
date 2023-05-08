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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotSeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const bot_service_1 = require("src/modules/bot/services/bot.service");
const bot_bulk_service_1 = require("src/modules/bot/services/bot.bulk.service");
const permission_service_1 = require("../../modules/permission/services/permission.service");
const auth_enum_permission_constant_1 = require("../../common/auth/constants/auth.enum.permission.constant");
const auth_enum_constant_1 = require("../../common/auth/constants/auth.enum.constant");
let BotSeed = class BotSeed {
    constructor(permissionService, botBulkService, botService) {
        this.permissionService = permissionService;
        this.botBulkService = botBulkService;
        this.botService = botService;
    }
    async insert() {
        const permissions = await this.permissionService.findAll({
            code: { $in: Object.values(auth_enum_permission_constant_1.ENUM_AUTH_PERMISSIONS) },
        });
        try {
            const permissionsMap = permissions.map((val) => val._id);
            await this.botService.createSuperAdmin();
            await this.botBulkService.createMany([
                {
                    name: 'Bot_recive',
                    permissions: permissionsMap,
                    accessFor: auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.BOT_RECIVE,
                },
                {
                    name: 'Bot_send',
                    permissions: [],
                    accessFor: auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.BOT_SEND,
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
            await this.botBulkService.deleteMany({});
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'insert:bot',
        describe: 'insert bots',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BotSeed.prototype, "insert", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'remove:bot',
        describe: 'remove bots',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BotSeed.prototype, "remove", null);
BotSeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [permission_service_1.PermissionService, typeof (_a = typeof bot_bulk_service_1.BotBulkService !== "undefined" && bot_bulk_service_1.BotBulkService) === "function" ? _a : Object, typeof (_b = typeof bot_service_1.BotService !== "undefined" && bot_service_1.BotService) === "function" ? _b : Object])
], BotSeed);
exports.BotSeed = BotSeed;
//# sourceMappingURL=bot.seed.js.map