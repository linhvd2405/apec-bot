"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAgentMiddleware = void 0;
const common_1 = require("@nestjs/common");
const request_status_code_constant_1 = require("../../request/constants/request.status-code.constant");
const ua_parser_js_1 = __importDefault(require("ua-parser-js"));
let UserAgentMiddleware = class UserAgentMiddleware {
    use(req, res, next) {
        const userAgent = req.headers['user-agent'];
        if (!userAgent) {
            throw new common_1.ForbiddenException({
                statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_USER_AGENT_INVALID_ERROR,
                message: 'middleware.error.userAgentInvalid',
            });
        }
        req.userAgent = (0, ua_parser_js_1.default)(userAgent);
        next();
    }
};
UserAgentMiddleware = __decorate([
    (0, common_1.Injectable)()
], UserAgentMiddleware);
exports.UserAgentMiddleware = UserAgentMiddleware;
//# sourceMappingURL=user-agent.middleware.js.map