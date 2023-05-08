"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingListSerialization = void 0;
const swagger_1 = require("@nestjs/swagger");
const setting_get_serialization_1 = require("./setting.get.serialization");
class SettingListSerialization extends (0, swagger_1.PartialType)(setting_get_serialization_1.SettingGetSerialization) {
}
exports.SettingListSerialization = SettingListSerialization;
//# sourceMappingURL=setting.list.serialization.js.map