"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRole = void 0;
const common_1 = require("@nestjs/common");
exports.GetRole = (0, common_1.createParamDecorator)((data, ctx) => {
    const { __role } = ctx.switchToHttp().getRequest();
    return __role;
});
//# sourceMappingURL=role.decorator.js.map