"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesEnumModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../../common/auth/auth.module");
const auth_enum_controller_1 = require("../../common/auth/controllers/auth.enum.controller");
const message_enum_controller_1 = require("../../common/message/controllers/message.enum.controller");
let RoutesEnumModule = class RoutesEnumModule {
};
RoutesEnumModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_enum_controller_1.AuthEnumController, message_enum_controller_1.MessageEnumController],
        providers: [],
        exports: [],
        imports: [auth_module_1.AuthModule],
    })
], RoutesEnumModule);
exports.RoutesEnumModule = RoutesEnumModule;
//# sourceMappingURL=routes.enum.module.js.map