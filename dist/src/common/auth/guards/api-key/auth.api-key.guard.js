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
exports.ApiKeyGuard = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const helper_number_service_1 = require("../../../helper/services/helper.number.service");
let ApiKeyGuard = class ApiKeyGuard extends (0, passport_1.AuthGuard)('api-key') {
    constructor(helperNumberService) {
        super();
        this.helperNumberService = helperNumberService;
    }
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        return user;
    }
};
ApiKeyGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_number_service_1.HelperNumberService])
], ApiKeyGuard);
exports.ApiKeyGuard = ApiKeyGuard;
//# sourceMappingURL=auth.api-key.guard.js.map