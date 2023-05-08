"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DebuggerModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebuggerModule = exports.DebuggerOptionsModule = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const debugger_options_service_1 = require("./services/debugger.options.service");
const debugger_service_1 = require("./services/debugger.service");
let DebuggerOptionsModule = class DebuggerOptionsModule {
};
DebuggerOptionsModule = __decorate([
    (0, common_1.Module)({
        providers: [debugger_options_service_1.DebuggerOptionService],
        exports: [debugger_options_service_1.DebuggerOptionService],
        imports: [],
    })
], DebuggerOptionsModule);
exports.DebuggerOptionsModule = DebuggerOptionsModule;
let DebuggerModule = DebuggerModule_1 = class DebuggerModule {
    static register() {
        if (process.env.DEBUGGER_SYSTEM_WRITE_INTO_CONSOLE === 'true' ||
            process.env.DEBUGGER_SYSTEM_WRITE_INTO_FILE === 'true') {
            return {
                module: DebuggerModule_1,
                controllers: [],
                providers: [debugger_service_1.DebuggerService],
                exports: [debugger_service_1.DebuggerService],
                imports: [
                    nest_winston_1.WinstonModule.forRootAsync({
                        inject: [debugger_options_service_1.DebuggerOptionService],
                        imports: [DebuggerOptionsModule],
                        useFactory: (debuggerOptionsService) => debuggerOptionsService.createLogger(),
                    }),
                ],
            };
        }
        return {
            module: DebuggerModule_1,
            providers: [],
            exports: [],
            controllers: [],
            imports: [],
        };
    }
};
DebuggerModule = DebuggerModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], DebuggerModule);
exports.DebuggerModule = DebuggerModule;
//# sourceMappingURL=debugger.module.js.map