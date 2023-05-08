"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const permission_create_dto_1 = require("./permission.create.dto");
class PermissionUpdateDto extends (0, swagger_1.PickType)(permission_create_dto_1.PermissionCreateDto, [
    'name',
    'description',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.PermissionUpdateDto = PermissionUpdateDto;
//# sourceMappingURL=permission.update.dto.js.map