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
exports.AuthApiSeed = void 0;
const nestjs_command_1 = require("nestjs-command");
const common_1 = require("@nestjs/common");
const auth_api_service_1 = require("../../common/auth/services/auth.api.service");
const auth_api_bulk_service_1 = require("../../common/auth/services/auth.api.bulk.service");
let AuthApiSeed = class AuthApiSeed {
    constructor(authApiService, authApiBulkService) {
        this.authApiService = authApiService;
        this.authApiBulkService = authApiBulkService;
    }
    async insert() {
        try {
            await this.authApiService.createRaw({
                name: 'Auth Api Key Migration',
                description: 'From migration',
                key: 'qwertyuiop12345zxcvbnmkjh',
                secret: '5124512412412asdasdasdasdasdASDASDASD',
                passphrase: 'cuwakimacojulawu',
                encryptionKey: 'opbUwdiS1FBsrDUoPgZdx',
            });
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
    async remove() {
        try {
            await this.authApiBulkService.deleteMany({});
        }
        catch (err) {
            throw new Error(err.message);
        }
        return;
    }
};
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'insert:authapis',
        describe: 'insert authapiss',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthApiSeed.prototype, "insert", null);
__decorate([
    (0, nestjs_command_1.Command)({
        command: 'remove:authapis',
        describe: 'remove authapis',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthApiSeed.prototype, "remove", null);
AuthApiSeed = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_api_service_1.AuthApiService,
        auth_api_bulk_service_1.AuthApiBulkService])
], AuthApiSeed);
exports.AuthApiSeed = AuthApiSeed;
//# sourceMappingURL=auth.api.seed.js.map