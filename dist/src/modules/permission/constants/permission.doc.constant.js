"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionDocParamsGet = exports.PermissionDocQueryList = void 0;
const faker_1 = require("@faker-js/faker");
exports.PermissionDocQueryList = [
    {
        name: 'isActive',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: 'true,false',
        description: "boolean value with ',' delimiter",
    },
];
exports.PermissionDocParamsGet = [
    {
        name: 'permissions',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.database.mongodbObjectId(),
    },
];
//# sourceMappingURL=permission.doc.constant.js.map