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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleBulkService = void 0;
const common_1 = require("@nestjs/common");
const role_bulk_repository_1 = require("../repositories/role.bulk.repository");
let RoleBulkService = class RoleBulkService {
    constructor(roleBulkRepository) {
        this.roleBulkRepository = roleBulkRepository;
    }
    async deleteMany(find, options) {
        return this.roleBulkRepository.deleteMany(find, options);
    }
    async createMany(data, options) {
        return this.roleBulkRepository.createMany(data, options);
    }
};
RoleBulkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_bulk_repository_1.RoleBulkRepository])
], RoleBulkService);
exports.RoleBulkService = RoleBulkService;
//# sourceMappingURL=role.bulk.service.js.map