"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    host: process.env.DATABASE_HOST || 'mongodb://localhost:27017',
    name: process.env.DATABASE_NAME || 'ack',
    user: process.env.DATABASE_USER || null,
    password: process.env.DATABASE_PASSWORD || null,
    debug: process.env.DATABASE_DEBUG === 'true' || false,
    options: process.env.DATABASE_OPTIONS,
}));
//# sourceMappingURL=database.config.js.map