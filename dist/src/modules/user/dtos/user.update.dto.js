"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_create_dto_1 = require("./user.create.dto");
class UserUpdateDto extends (0, swagger_1.PickType)(user_create_dto_1.UserCreateDto, [
    'firstName',
    'lastName',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserUpdateDto = UserUpdateDto;
//# sourceMappingURL=user.update.dto.js.map