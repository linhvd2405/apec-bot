"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthEnumService = void 0;
const common_1 = require("@nestjs/common");
const auth_enum_constant_1 = require("../constants/auth.enum.constant");
let AuthEnumService = class AuthEnumService {
    async getAccessFor() {
        return Object.values(auth_enum_constant_1.ENUM_AUTH_ACCESS_FOR);
    }
};
AuthEnumService = __decorate([
    (0, common_1.Injectable)()
], AuthEnumService);
exports.AuthEnumService = AuthEnumService;
//# sourceMappingURL=auth.enum.service.js.map