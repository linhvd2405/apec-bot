"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingBulkRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const database_mongo_bulk_repository_abstract_1 = require("../../database/abstracts/database.mongo-bulk-repository.abstract");
const database_decorator_1 = require("../../database/decorators/database.decorator");
const setting_schema_1 = require("../schemas/setting.schema");
let SettingBulkRepository = class SettingBulkRepository extends database_mongo_bulk_repository_abstract_1.DatabaseMongoBulkRepositoryAbstract {
    constructor(settingModel) {
        super(settingModel);
        this.settingModel = settingModel;
    }
};
SettingBulkRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseEntity)(setting_schema_1.SettingEntity.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SettingBulkRepository);
exports.SettingBulkRepository = SettingBulkRepository;
//# sourceMappingURL=setting.bulk.repository.js.map