"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const ms_1 = __importDefault(require("ms"));
exports.default = (0, config_1.registerAs)('helper', () => ({
    salt: {
        length: 8,
    },
    jwt: {
        secretKey: '123456aA@',
        expirationTime: (0, ms_1.default)('1h'),
        notBeforeExpirationTime: (0, ms_1.default)(0),
    },
}));
//# sourceMappingURL=helper.config.js.map