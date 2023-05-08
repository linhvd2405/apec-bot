"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotDocParamsGet = void 0;
const faker_1 = require("@faker-js/faker");
exports.BotDocParamsGet = [
    {
        name: 'bot',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.database.mongodbObjectId(),
    },
];
//# sourceMappingURL=bot.doc.constant.js.map