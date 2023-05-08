"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInfoSerialization = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_payload_serialization_1 = require("../../../modules/user/serializations/user.payload.serialization");
class AuthInfoSerialization extends (0, swagger_1.PartialType)(user_payload_serialization_1.UserPayloadSerialization) {
}
exports.AuthInfoSerialization = AuthInfoSerialization;
//# sourceMappingURL=auth.info.serialization.js.map