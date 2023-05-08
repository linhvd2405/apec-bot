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
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const permission_repository_1 = require("../repositories/permission.repository");
let PermissionService = class PermissionService {
    constructor(permissionRepository) {
        this.permissionRepository = permissionRepository;
    }
    async findAll(find, options) {
        return this.permissionRepository.findAll(find, options);
    }
    async findOneById(_id, options) {
        return this.permissionRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.permissionRepository.findOne(find, options);
    }
    async getTotal(find, options) {
        return this.permissionRepository.getTotal(find, options);
    }
    async deleteOne(find, options) {
        return this.permissionRepository.deleteOne(find, options);
    }
    async create(data, options) {
        const create = {
            ...data,
            isActive: true,
        };
        return this.permissionRepository.create(create, options);
    }
    async update(_id, data, options) {
        return this.permissionRepository.updateOneById(_id, data, options);
    }
    async inactive(_id, options) {
        const update = {
            isActive: false,
        };
        return this.permissionRepository.updateOneById(_id, update, options);
    }
    async active(_id, options) {
        const update = {
            isActive: true,
        };
        return this.permissionRepository.updateOneById(_id, update, options);
    }
};
PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [permission_repository_1.PermissionRepository])
], PermissionService);
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map