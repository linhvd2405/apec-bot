"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const bytes_1 = __importDefault(require("bytes"));
exports.default = (0, config_1.registerAs)('request', () => ({
    json: {
        maxFileSize: (0, bytes_1.default)('100kb'),
    },
    raw: {
        maxFileSize: (0, bytes_1.default)('5mb'),
    },
    text: {
        maxFileSize: (0, bytes_1.default)('100kb'),
    },
    urlencoded: {
        maxFileSize: (0, bytes_1.default)('100kb'),
    },
}));
//# sourceMappingURL=request.config.js.map