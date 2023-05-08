"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const setting_create_dto_1 = require("./setting.create.dto");
class SettingUpdateDto extends (0, swagger_1.OmitType)(setting_create_dto_1.SettingCreateDto, [
    'name',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.SettingUpdateDto = SettingUpdateDto;
//# sourceMappingURL=setting.update.dto.js.map