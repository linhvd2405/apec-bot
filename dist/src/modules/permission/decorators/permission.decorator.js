"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPermission = void 0;
const common_1 = require("@nestjs/common");
exports.GetPermission = (0, common_1.createParamDecorator)((data, ctx) => {
    const { __permission } = ctx.switchToHttp().getRequest();
    return __permission;
});
//# sourceMappingURL=permission.decorator.js.map