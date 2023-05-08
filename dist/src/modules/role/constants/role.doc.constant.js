"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleDocParamsGet = void 0;
const faker_1 = require("@faker-js/faker");
exports.RoleDocParamsGet = [
    {
        name: 'role',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.database.mongodbObjectId(),
    },
];
//# sourceMappingURL=role.doc.constant.js.map