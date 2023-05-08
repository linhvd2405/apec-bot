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
exports.CustomLanguageMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const helper_array_service_1 = require("../../helper/services/helper.array.service");
const message_enum_constant_1 = require("../../message/constants/message.enum.constant");
let CustomLanguageMiddleware = class CustomLanguageMiddleware {
    constructor(helperArrayService, configService) {
        this.helperArrayService = helperArrayService;
        this.configService = configService;
    }
    async use(req, res, next) {
        let language = this.configService.get('app.language');
        let customLang = [language];
        const reqLanguages = req.headers['x-custom-lang'];
        const enumLanguage = Object.values(message_enum_constant_1.ENUM_MESSAGE_LANGUAGE);
        if (reqLanguages) {
            const splitLanguage = reqLanguages
                .split(',')
                .map((val) => val.toLowerCase());
            const uniqueLanguage = this.helperArrayService.unique(splitLanguage);
            const languages = uniqueLanguage.filter((val) => this.helperArrayService.includes(enumLanguage, val));
            if (languages.length > 0) {
                language = languages.join(',');
                customLang = languages;
            }
        }
        req.headers['x-custom-lang'] = language;
        req.customLang = customLang;
        next();
    }
};
CustomLanguageMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_array_service_1.HelperArrayService,
        config_1.ConfigService])
], CustomLanguageMiddleware);
exports.CustomLanguageMiddleware = CustomLanguageMiddleware;
//# sourceMappingURL=custom-language.middleware.js.map