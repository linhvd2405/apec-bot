"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPasswordExpiredDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_password_dto_1 = require("./user.password.dto");
class UserPasswordExpiredDto extends (0, swagger_1.PickType)(user_password_dto_1.UserPasswordDto, [
    'passwordExpired',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserPasswordExpiredDto = UserPasswordExpiredDto;
//# sourceMappingURL=user.password-expired.dto.js.map