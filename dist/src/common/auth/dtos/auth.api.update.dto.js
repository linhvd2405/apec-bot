"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApiUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const auth_api_create_dto_1 = require("./auth.api.create.dto");
class AuthApiUpdateDto extends (0, swagger_1.PartialType)(auth_api_create_dto_1.AuthApiCreateDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.AuthApiUpdateDto = AuthApiUpdateDto;
//# sourceMappingURL=auth.api.update.dto.js.map