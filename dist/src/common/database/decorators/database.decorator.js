"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseEntity = exports.DatabaseConnection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const database_constant_1 = require("../constants/database.constant");
function DatabaseConnection(connectionName) {
    return (0, mongoose_1.InjectConnection)(connectionName || database_constant_1.DATABASE_CONNECTION_NAME);
}
exports.DatabaseConnection = DatabaseConnection;
function DatabaseEntity(entity, connectionName) {
    return (0, mongoose_1.InjectModel)(entity, connectionName || database_constant_1.DATABASE_CONNECTION_NAME);
}
exports.DatabaseEntity = DatabaseEntity;
//# sourceMappingURL=database.decorator.js.map