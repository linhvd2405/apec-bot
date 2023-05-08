"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStock = void 0;
const common_1 = require("@nestjs/common");
exports.GetStock = (0, common_1.createParamDecorator)((data, ctx) => {
    const { __stock } = ctx.switchToHttp().getRequest();
    return __stock;
});
//# sourceMappingURL=stock.decorator.js.map