"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocParamsGet = void 0;
const faker_1 = require("@faker-js/faker");
exports.UserDocParamsGet = [
    {
        name: 'user',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.database.mongodbObjectId(),
    },
];
//# sourceMappingURL=user.doc.constant.js.map