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
exports.AuthEnumController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_access_for_serialization_1 = require("../serializations/auth.access-for.serialization");
const auth_enum_service_1 = require("../services/auth.enum.service");
const response_decorator_1 = require("../../response/decorators/response.decorator");
let AuthEnumController = class AuthEnumController {
    constructor(authEnumService) {
        this.authEnumService = authEnumService;
    }
    async accessFor() {
        const accessFor = await this.authEnumService.getAccessFor();
        return {
            accessFor,
        };
    }
};
__decorate([
    (0, response_decorator_1.Response)('auth.enum.accessFor', {
        classSerialization: auth_access_for_serialization_1.AuthAccessForSerialization,
    }),
    (0, common_1.Get)('/access-for'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthEnumController.prototype, "accessFor", null);
AuthEnumController = __decorate([
    (0, swagger_1.ApiTags)('enum.auth'),
    (0, common_1.Controller)({
        version: '1',
        path: '/auth',
    }),
    __metadata("design:paramtypes", [auth_enum_service_1.AuthEnumService])
], AuthEnumController);
exports.AuthEnumController = AuthEnumController;
//# sourceMappingURL=auth.enum.controller.js.map