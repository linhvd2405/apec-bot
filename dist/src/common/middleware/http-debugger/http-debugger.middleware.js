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
exports.HttpDebuggerResponseMiddleware = exports.HttpDebuggerWriteIntoConsoleMiddleware = exports.HttpDebuggerWriteIntoFileMiddleware = exports.HttpDebuggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const morgan_1 = __importDefault(require("morgan"));
const rotating_file_stream_1 = require("rotating-file-stream");
const config_1 = require("@nestjs/config");
const helper_date_service_1 = require("../../helper/services/helper.date.service");
const http_debugger_constant_1 = require("./constants/http-debugger.constant");
let HttpDebuggerMiddleware = class HttpDebuggerMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.writeIntoFile = this.configService.get('debugger.http.writeIntoFile');
        this.writeIntoConsole = this.configService.get('debugger.http.writeIntoConsole');
    }
    customToken() {
        morgan_1.default.token('req-params', (req) => JSON.stringify(req.params));
        morgan_1.default.token('req-body', (req) => JSON.stringify(req.body));
        morgan_1.default.token('res-body', (req, res) => res.body);
        morgan_1.default.token('req-headers', (req) => JSON.stringify(req.headers));
    }
    async use(req, res, next) {
        if (this.writeIntoConsole || this.writeIntoFile) {
            this.customToken();
        }
        next();
    }
};
HttpDebuggerMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], HttpDebuggerMiddleware);
exports.HttpDebuggerMiddleware = HttpDebuggerMiddleware;
let HttpDebuggerWriteIntoFileMiddleware = class HttpDebuggerWriteIntoFileMiddleware {
    constructor(configService, helperDateService) {
        this.configService = configService;
        this.helperDateService = helperDateService;
        this.writeIntoFile = this.configService.get('debugger.http.writeIntoFile');
        this.maxSize = this.configService.get('debugger.http.maxSize');
        this.maxFiles = this.configService.get('debugger.http.maxFiles');
    }
    async httpLogger() {
        const date = this.helperDateService.format(this.helperDateService.create());
        const HttpDebuggerOptions = {
            stream: (0, rotating_file_stream_1.createStream)(`${date}.log`, {
                path: `./logs/${http_debugger_constant_1.DEBUGGER_HTTP_NAME}/`,
                maxSize: this.maxSize,
                maxFiles: this.maxFiles,
                compress: true,
                interval: '1d',
            }),
        };
        return {
            debuggerHttpFormat: http_debugger_constant_1.DEBUGGER_HTTP_FORMAT,
            HttpDebuggerOptions,
        };
    }
    async use(req, res, next) {
        if (this.writeIntoFile) {
            const config = await this.httpLogger();
            (0, morgan_1.default)(config.debuggerHttpFormat, config.HttpDebuggerOptions)(req, res, next);
        }
        else {
            next();
        }
    }
};
HttpDebuggerWriteIntoFileMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        helper_date_service_1.HelperDateService])
], HttpDebuggerWriteIntoFileMiddleware);
exports.HttpDebuggerWriteIntoFileMiddleware = HttpDebuggerWriteIntoFileMiddleware;
let HttpDebuggerWriteIntoConsoleMiddleware = class HttpDebuggerWriteIntoConsoleMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.writeIntoConsole = this.configService.get('debugger.http.writeIntoConsole');
    }
    async httpLogger() {
        return {
            debuggerHttpFormat: http_debugger_constant_1.DEBUGGER_HTTP_FORMAT,
        };
    }
    async use(req, res, next) {
        if (this.writeIntoConsole) {
            const config = await this.httpLogger();
            (0, morgan_1.default)(config.debuggerHttpFormat)(req, res, next);
        }
        else {
            next();
        }
    }
};
HttpDebuggerWriteIntoConsoleMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], HttpDebuggerWriteIntoConsoleMiddleware);
exports.HttpDebuggerWriteIntoConsoleMiddleware = HttpDebuggerWriteIntoConsoleMiddleware;
let HttpDebuggerResponseMiddleware = class HttpDebuggerResponseMiddleware {
    constructor(configService) {
        this.configService = configService;
        this.writeIntoConsole = this.configService.get('debugger.http.writeIntoConsole');
        this.writeIntoFile = this.configService.get('debugger.http.writeIntoFile');
    }
    use(req, res, next) {
        if (this.writeIntoConsole || this.writeIntoFile) {
            const send = res.send;
            const resOld = res;
            resOld.send = (body) => {
                resOld.body = body;
                resOld.send = send;
                resOld.send(body);
                res = resOld;
            };
        }
        next();
    }
};
HttpDebuggerResponseMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], HttpDebuggerResponseMiddleware);
exports.HttpDebuggerResponseMiddleware = HttpDebuggerResponseMiddleware;
//# sourceMappingURL=http-debugger.middleware.js.map