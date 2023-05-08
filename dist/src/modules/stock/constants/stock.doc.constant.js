"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockDocParamsGet = void 0;
const faker_1 = require("@faker-js/faker");
exports.StockDocParamsGet = [
    {
        name: 'stock',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker_1.faker.database.mongodbObjectId(),
    },
];
//# sourceMappingURL=stock.doc.constant.js.map