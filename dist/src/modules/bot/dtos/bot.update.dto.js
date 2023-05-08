"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
const bot_create_dto_1 = require("./bot.create.dto");
const swagger_1 = require("@nestjs/swagger");
class BotUpdateDto extends (0, swagger_1.PartialType)(bot_create_dto_1.BotCreateDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.BotUpdateDto = BotUpdateDto;
//# sourceMappingURL=bot.update.dto.js.map