"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app/app.module");
const config_1 = require("@nestjs/config");
const class_validator_1 = require("class-validator");
const database_options_service_1 = require("./common/database/services/database.options.service");
const swagger_1 = __importDefault(require("./swagger"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const databaseOptionsService = app.get(database_options_service_1.DatabaseOptionsService);
    const databaseUri = databaseOptionsService.createMongooseOptions().uri;
    const env = configService.get('app.env');
    const host = configService.get('app.http.host');
    const port = configService.get('app.http.port');
    const globalPrefix = configService.get('app.globalPrefix');
    const versioning = configService.get('app.versioning.enable');
    const versioningPrefix = configService.get('app.versioning.prefix');
    const version = configService.get('app.versioning.version');
    const logger = new common_1.Logger();
    process.env.NODE_ENV = env;
    app.setGlobalPrefix(globalPrefix);
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    if (versioning) {
        app.enableVersioning({
            type: common_1.VersioningType.URI,
            defaultVersion: version,
            prefix: versioningPrefix,
        });
    }
    await (0, swagger_1.default)(app);
    await app.listen(port, host);
    logger.log(`==========================================================`);
    logger.log(`Environment Variable`, 'NestApplication');
    logger.log(JSON.parse(JSON.stringify(process.env)), 'NestApplication');
    logger.log(`==========================================================`);
    logger.log(`Http Server running on ${await app.getUrl()}`, 'NestApplication');
    logger.log(`Database uri ${databaseUri}`, 'NestApplication');
    logger.log(`==========================================================`);
}
bootstrap();
//# sourceMappingURL=main.js.map