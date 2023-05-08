"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.User = void 0;
const common_1 = require("@nestjs/common");
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const { user } = ctx.switchToHttp().getRequest();
    return data ? user[data] : user;
});
exports.Token = (0, common_1.createParamDecorator)((data, ctx) => {
    const { headers } = ctx.switchToHttp().getRequest();
    const { authorization } = headers;
    return authorization ? authorization.split(' ')[1] : undefined;
});
//# sourceMappingURL=auth.decorator.js.map