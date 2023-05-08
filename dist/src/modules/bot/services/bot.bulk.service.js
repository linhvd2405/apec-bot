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
exports.BotBulkService = void 0;
const common_1 = require("@nestjs/common");
const bot_bulk_repository_1 = require("../repositories/bot.bulk.repository");
let BotBulkService = class BotBulkService {
    constructor(botBulkRepository) {
        this.botBulkRepository = botBulkRepository;
    }
    async deleteMany(find, options) {
        return this.botBulkRepository.deleteMany(find, options);
    }
    async createMany(data, options) {
        return this.botBulkRepository.createMany(data, options);
    }
};
BotBulkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bot_bulk_repository_1.BotBulkRepository])
], BotBulkService);
exports.BotBulkService = BotBulkService;
//# sourceMappingURL=bot.bulk.service.js.map