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
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const debugger_module_1 = require("./debugger/debugger.module");
const database_module_1 = require("./database/database.module");
const helper_module_1 = require("./helper/helper.module");
const error_module_1 = require("./error/error.module");
const response_module_1 = require("./response/response.module");
const request_module_1 = require("./request/request.module");
const middleware_module_1 = require("./middleware/middleware.module");
const auth_module_1 = require("./auth/auth.module");
const message_module_1 = require("./message/message.module");
const logger_module_1 = require("./logger/logger.module");
const pagination_module_1 = require("./pagination/pagination.module");
const setting_module_1 = require("./setting/setting.module");
const joi_1 = __importDefault(require("joi"));
const message_enum_constant_1 = require("./message/constants/message.enum.constant");
const configs_1 = __importDefault(require("../configs"));
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                load: configs_1.default,
                isGlobal: true,
                cache: true,
                envFilePath: ['.env'],
                expandVariables: true,
                validationSchema: joi_1.default.object({
                    APP_NAME: joi_1.default.string().required(),
                    APP_ENV: joi_1.default.string()
                        .valid('development', 'production')
                        .default('development')
                        .required(),
                    APP_LANGUAGE: joi_1.default.string()
                        .valid(...Object.values(message_enum_constant_1.ENUM_MESSAGE_LANGUAGE))
                        .default('en')
                        .required(),
                    HTTP_ENABLE: joi_1.default.boolean().default(true).required(),
                    HTTP_HOST: [
                        joi_1.default.string().ip({ version: 'ipv4' }).required(),
                        joi_1.default.valid('localhost').required(),
                    ],
                    HTTP_PORT: joi_1.default.number().default(3000).required(),
                    HTTP_VERSIONING_ENABLE: joi_1.default.boolean().default(true).required(),
                    HTTP_VERSION: joi_1.default.number().required(),
                    DEBUGGER_HTTP_WRITE_INTO_FILE: joi_1.default.boolean()
                        .default(false)
                        .required(),
                    DEBUGGER_HTTP_WRITE_INTO_CONSOLE: joi_1.default.boolean()
                        .default(false)
                        .required(),
                    DEBUGGER_SYSTEM_WRITE_INTO_FILE: joi_1.default.boolean()
                        .default(false)
                        .required(),
                    DEBUGGER_SYSTEM_WRITE_INTO_CONSOLE: joi_1.default.boolean()
                        .default(false)
                        .required(),
                    MIDDLEWARE_TIMESTAMP_TOLERANCE: joi_1.default.string()
                        .default('5m')
                        .required(),
                    MIDDLEWARE_TIMEOUT: joi_1.default.string().default('30s').required(),
                    DOC_NAME: joi_1.default.string().required(),
                    DOC_VERSION: joi_1.default.number().required(),
                    JOB_ENABLE: joi_1.default.boolean().default(false).required(),
                    DATABASE_HOST: joi_1.default.any()
                        .default('mongodb://localhost:27017')
                        .required(),
                    DATABASE_NAME: joi_1.default.any().default('ack').required(),
                    DATABASE_USER: joi_1.default.any().optional(),
                    DATABASE_PASSWORD: joi_1.default.any().optional(),
                    DATABASE_DEBUG: joi_1.default.boolean().default(false).required(),
                    DATABASE_OPTIONS: joi_1.default.any().optional(),
                    AUTH_JWT_SUBJECT: joi_1.default.string().required(),
                    AUTH_JWT_AUDIENCE: joi_1.default.string().required(),
                    AUTH_JWT_ISSUER: joi_1.default.string().required(),
                    AUTH_JWT_ACCESS_TOKEN_SECRET_KEY: joi_1.default.string()
                        .alphanum()
                        .min(5)
                        .max(50)
                        .required(),
                    AUTH_JWT_ACCESS_TOKEN_EXPIRED: joi_1.default.string()
                        .default('30m')
                        .required(),
                    AUTH_JWT_ACCESS_TOKEN_ENCRYPT_KEY: joi_1.default.string().required(),
                    AUTH_JWT_ACCESS_TOKEN_ENCRYPT_IV: joi_1.default.string()
                        .length(16)
                        .required(),
                    AUTH_JWT_REFRESH_TOKEN_SECRET_KEY: joi_1.default.string()
                        .alphanum()
                        .min(5)
                        .max(50)
                        .required(),
                    AUTH_JWT_REFRESH_TOKEN_EXPIRED: joi_1.default.string()
                        .default('7d')
                        .required(),
                    AUTH_JWT_REFRESH_TOKEN_REMEMBER_ME_EXPIRED: joi_1.default.string()
                        .default('30d')
                        .required(),
                    AUTH_JWT_REFRESH_TOKEN_NOT_BEFORE_EXPIRATION: joi_1.default.string().required(),
                    AUTH_JWT_REFRESH_TOKEN_ENCRYPT_KEY: joi_1.default.string().required(),
                    AUTH_JWT_REFRESH_TOKEN_ENCRYPT_IV: joi_1.default.string()
                        .length(16)
                        .required(),
                    AWS_CREDENTIAL_KEY: joi_1.default.string().optional(),
                    AWS_CREDENTIAL_SECRET: joi_1.default.string().optional(),
                    AWS_S3_REGION: joi_1.default.string().optional(),
                    AWS_S3_BUCKET: joi_1.default.string().optional(),
                }),
                validationOptions: {
                    allowUnknown: true,
                    abortEarly: true,
                },
            }),
            database_module_1.DatabaseModule,
            message_module_1.MessageModule,
            helper_module_1.HelperModule,
            pagination_module_1.PaginationModule,
            error_module_1.ErrorModule,
            logger_module_1.LoggerModule,
            debugger_module_1.DebuggerModule.register(),
            response_module_1.ResponseModule,
            request_module_1.RequestModule,
            middleware_module_1.MiddlewareModule,
            auth_module_1.AuthApiModule,
            auth_module_1.AuthModule,
            setting_module_1.SettingModule,
        ],
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map