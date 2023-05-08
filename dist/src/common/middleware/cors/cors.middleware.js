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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorsMiddleware = void 0;
const common_1 = require("@nestjs/common");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("@nestjs/config");
let CorsMiddleware = class CorsMiddleware {
    constructor(configService) {
        this.configService = configService;
    }
    use(req, res, next) {
        const env = this.configService.get('app.env');
        const allowOrigin = env === 'production'
            ? this.configService.get('middleware.cors.allowOrigin')
            : '*';
        const allowMethod = this.configService.get('middleware.cors.allowMethod');
        const allowHeader = this.configService.get('middleware.cors.allowHeader');
        const corsOptions = {
            origin: allowOrigin,
            methods: allowMethod,
            allowedHeaders: allowHeader,
            preflightContinue: false,
            credentials: true,
            optionsSuccessStatus: common_1.HttpStatus.NO_CONTENT,
        };
        (0, cors_1.default)(corsOptions)(req, res, next);
    }
};
CorsMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CorsMiddleware);
exports.CorsMiddleware = CorsMiddleware;
//# sourceMappingURL=cors.middleware.js.map