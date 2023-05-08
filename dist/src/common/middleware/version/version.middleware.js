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
exports.VersionMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let VersionMiddleware = class VersionMiddleware {
    constructor(configService) {
        this.configService = configService;
    }
    async use(req, res, next) {
        const globalPrefix = this.configService.get('app.globalPrefix');
        const versioning = this.configService.get('app.versioning.enable');
        const versioningPrefix = this.configService.get('app.versioning.prefix');
        const versionConfig = this.configService.get('app.versioning.version');
        const repoVersionConfig = this.configService.get('app.repoVersion');
        const originalUrl = req.originalUrl;
        let version = versionConfig;
        if (versioning &&
            originalUrl.startsWith(`${globalPrefix}/${versioningPrefix}`)) {
            const url = originalUrl.split('/');
            version = url[2].replace(versioningPrefix, '');
        }
        req.version = version;
        req.headers['x-version'] = version;
        req.repoVersion = repoVersionConfig;
        req.headers['x-repo-version'] = repoVersionConfig;
        next();
    }
};
VersionMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], VersionMiddleware);
exports.VersionMiddleware = VersionMiddleware;
//# sourceMappingURL=version.middleware.js.map