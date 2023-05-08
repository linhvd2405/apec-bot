"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBot = void 0;
const common_1 = require("@nestjs/common");
exports.GetBot = (0, common_1.createParamDecorator)((data, ctx) => {
    const { __bot } = ctx.switchToHttp().getRequest();
    return __bot;
});
//# sourceMappingURL=bot.decorator.js.map