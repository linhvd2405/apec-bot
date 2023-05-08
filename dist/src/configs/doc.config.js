"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('doc', () => ({
    name: process.env.DOC_NAME || 'APIs Specification',
    description: 'Section for describe whole APIs',
    version: process.env.DOC_VERSION
        ? process.env.DOC_VERSION.endsWith('.0')
            ? process.env.DOC_VERSION
            : `${process.env.DOC_VERSION}.0`
        : '1.0',
    prefix: '/docs',
}));
//# sourceMappingURL=doc.config.js.map