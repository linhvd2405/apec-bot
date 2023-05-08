"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApiListSerialization = void 0;
const swagger_1 = require("@nestjs/swagger");
const auth_api_get_serialization_1 = require("./auth.api.get.serialization");
class AuthApiListSerialization extends (0, swagger_1.PickType)(auth_api_get_serialization_1.AuthApiGetSerialization, ['_id', 'name', 'key', 'isActive', 'createdAt']) {
}
exports.AuthApiListSerialization = AuthApiListSerialization;
//# sourceMappingURL=auth.api.list.serialization.js.map