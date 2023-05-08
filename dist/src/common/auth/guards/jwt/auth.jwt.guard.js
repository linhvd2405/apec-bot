"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_status_code_constant_1 = require("../../constants/auth.status-code.constant");
let JwtGuard = class JwtGuard extends (0, passport_1.AuthGuard)('jwt') {
    handleRequest(err, user, info) {
        if (err || !user) {
            throw new common_1.UnauthorizedException({
                statusCode: auth_status_code_constant_1.ENUM_AUTH_STATUS_CODE_ERROR.AUTH_JWT_ACCESS_TOKEN_ERROR,
                message: 'http.clientError.unauthorized',
                error: err ? err.message : info.message,
            });
        }
        return user;
    }
};
JwtGuard = __decorate([
    (0, common_1.Injectable)()
], JwtGuard);
exports.JwtGuard = JwtGuard;
//# sourceMappingURL=auth.jwt.guard.js.map