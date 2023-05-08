"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RouterModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const routes_admin_module_1 = require("./routes/routes.admin.module");
const routes_callback_module_1 = require("./routes/routes.callback.module");
const routes_enum_module_1 = require("./routes/routes.enum.module");
const routes_module_1 = require("./routes/routes.module");
const routes_public_module_1 = require("./routes/routes.public.module");
const routes_test_module_1 = require("./routes/routes.test.module");
let RouterModule = RouterModule_1 = class RouterModule {
    static register() {
        if (process.env.HTTP_ENABLE === 'true') {
            return {
                module: RouterModule_1,
                controllers: [],
                providers: [],
                exports: [],
                imports: [
                    routes_module_1.RoutesModule,
                    routes_test_module_1.RoutesTestModule,
                    routes_enum_module_1.RoutesEnumModule,
                    routes_public_module_1.RoutesPublicModule,
                    routes_admin_module_1.RoutesAdminModule,
                    routes_callback_module_1.RoutesCallbackModule,
                    core_1.RouterModule.register([
                        {
                            path: '/',
                            module: routes_module_1.RoutesModule,
                        },
                        {
                            path: '/test',
                            module: routes_test_module_1.RoutesTestModule,
                        },
                        {
                            path: '/enum',
                            module: routes_enum_module_1.RoutesEnumModule,
                        },
                        {
                            path: '/public',
                            module: routes_public_module_1.RoutesPublicModule,
                        },
                        {
                            path: '/admin',
                            module: routes_admin_module_1.RoutesAdminModule,
                        },
                        {
                            path: '/callback',
                            module: routes_callback_module_1.RoutesCallbackModule,
                        },
                    ]),
                ],
            };
        }
        return {
            module: RouterModule_1,
            providers: [],
            exports: [],
            controllers: [],
            imports: [],
        };
    }
};
RouterModule = RouterModule_1 = __decorate([
    (0, common_1.Module)({})
], RouterModule);
exports.RouterModule = RouterModule;
//# sourceMappingURL=router.module.js.map