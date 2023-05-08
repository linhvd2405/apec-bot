"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const ms_1 = __importDefault(require("ms"));
exports.default = (0, config_1.registerAs)('debugger', () => ({
    http: {
        writeIntoFile: process.env.DEBUGGER_HTTP_WRITE_INTO_FILE === 'true' || false,
        writeIntoConsole: process.env.DEBUGGER_HTTP_WRITE_INTO_CONSOLE === 'true' ||
            false,
        maxFiles: 5,
        maxSize: '2M',
    },
    system: {
        writeIntoFile: process.env.DEBUGGER_SYSTEM_WRITE_INTO_FILE === 'true' || false,
        writeIntoConsole: process.env.DEBUGGER_SYSTEM_WRITE_INTO_CONSOLE === 'true' ||
            false,
        maxFiles: (0, ms_1.default)('7d'),
        maxSize: '2m',
    },
}));
//# sourceMappingURL=debugger.config.js.map