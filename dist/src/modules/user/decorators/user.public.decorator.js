"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileGuard = void 0;
const common_1 = require("@nestjs/common");
const user_payload_put_to_request_guard_1 = require("../guards/payload/user.payload.put-to-request.guard");
const user_not_found_guard_1 = require("../guards/user.not-found.guard");
function UserProfileGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(user_payload_put_to_request_guard_1.UserPayloadPutToRequestGuard, user_not_found_guard_1.UserNotFoundGuard));
}
exports.UserProfileGuard = UserProfileGuard;
//# sourceMappingURL=user.public.decorator.js.map