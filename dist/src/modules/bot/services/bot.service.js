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
exports.BotService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const auth_enum_constant_1 = require("../../../common/auth/constants/auth.enum.constant");
const bot_repository_1 = require("../repositories/bot.repository");
let BotService = class BotService {
    constructor(botRepository) {
        this.botRepository = botRepository;
    }
    async findAll(find, options) {
        return this.botRepository.findAll(find, options);
    }
    async findOneById(_id, options) {
        return this.botRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.botRepository.findOne(find, options);
    }
    async getTotal(find, options) {
        return this.botRepository.getTotal(find, options);
    }
    async exists(name, options) {
        return this.botRepository.exists({
            name: {
                $regex: new RegExp(name),
                $options: 'i',
            },
        }, options);
    }
    async create({ name, permissions, accessFor }, options) {
        const create = {
            name: name,
            permissions: permissions.map((val) => new mongoose_1.Types.ObjectId(val)),
            isActive: true,
            accessFor,
        };
        return this.botRepository.create(create, options);
    }
    async createSuperAdmin(options) {
        const create = {
            name: 'Bot_read',
            permissions: [],
            isActive: true,
            accessFor: auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.BOT_RECIVE,
        };
        return this.botRepository.create(create, options);
    }
    async update(_id, { name, permissions, accessFor }, options) {
        const update = {
            name,
            accessFor,
            permissions: permissions.map((val) => new mongoose_1.Types.ObjectId(val)),
        };
        return this.botRepository.updateOneById(_id, update, options);
    }
    async inactive(_id, options) {
        const update = {
            isActive: false,
        };
        return this.botRepository.updateOneById(_id, update, options);
    }
    async active(_id, options) {
        const update = {
            isActive: true,
        };
        return this.botRepository.updateOneById(_id, update, options);
    }
    async deleteOneById(_id, options) {
        return this.botRepository.deleteOneById(_id, options);
    }
    async deleteOne(find, options) {
        return this.botRepository.deleteOne(find, options);
    }
};
BotService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bot_repository_1.BotRepository])
], BotService);
exports.BotService = BotService;
//# sourceMappingURL=bot.service.js.map