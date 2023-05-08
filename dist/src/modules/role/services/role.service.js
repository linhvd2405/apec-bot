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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const auth_enum_constant_1 = require("../../../common/auth/constants/auth.enum.constant");
const role_repository_1 = require("../repositories/role.repository");
let RoleService = class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async findAll(find, options) {
        return this.roleRepository.findAll(find, options);
    }
    async findOneById(_id, options) {
        return this.roleRepository.findOneById(_id, options);
    }
    async findOne(find, options) {
        return this.roleRepository.findOne(find, options);
    }
    async getTotal(find, options) {
        return this.roleRepository.getTotal(find, options);
    }
    async exists(name, options) {
        return this.roleRepository.exists({
            name: {
                $regex: new RegExp(name),
                $options: 'i',
            },
        }, options);
    }
    async create({ name, permissions, accessFor }, options) {
        const create = {
            name: name,
            permissions: permissions.map((val) => new mongoose_1.Types.ObjectId(val)),
            isActive: true,
            accessFor,
        };
        return this.roleRepository.create(create, options);
    }
    async createSuperAdmin(options) {
        const create = {
            name: 'superadmin',
            permissions: [],
            isActive: true,
            accessFor: auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR.SUPER_ADMIN,
        };
        return this.roleRepository.create(create, options);
    }
    async update(_id, { name, permissions, accessFor }, options) {
        const update = {
            name,
            accessFor,
            permissions: permissions.map((val) => new mongoose_1.Types.ObjectId(val)),
        };
        return this.roleRepository.updateOneById(_id, update, options);
    }
    async inactive(_id, options) {
        const update = {
            isActive: false,
        };
        return this.roleRepository.updateOneById(_id, update, options);
    }
    async active(_id, options) {
        const update = {
            isActive: true,
        };
        return this.roleRepository.updateOneById(_id, update, options);
    }
    async deleteOneById(_id, options) {
        return this.roleRepository.deleteOneById(_id, options);
    }
    async deleteOne(find, options) {
        return this.roleRepository.deleteOne(find, options);
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_repository_1.RoleRepository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map