import { faker } from '@faker-js/faker';

export const StockDocParamsGet = [
    {
        name: 'stock',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker.database.mongodbObjectId(),
    },
];
