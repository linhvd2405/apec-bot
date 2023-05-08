"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionListSerialization = void 0;
const swagger_1 = require("@nestjs/swagger");
const permission_get_serialization_1 = require("./permission.get.serialization");
class PermissionListSerialization extends (0, swagger_1.PartialType)(permission_get_serialization_1.PermissionGetSerialization) {
}
exports.PermissionListSerialization = PermissionListSerialization;
//# sourceMappingURL=permission.list.serialization.js.map