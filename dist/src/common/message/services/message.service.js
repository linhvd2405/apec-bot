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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_i18n_1 = require("nestjs-i18n");
let MessageService = class MessageService {
    constructor(i18n, configService) {
        this.i18n = i18n;
        this.configService = configService;
        this.defaultLanguage = this.configService.get('app.language');
    }
    setMessage(lang, key, options) {
        return this.i18n.translate(key, {
            lang: lang || this.defaultLanguage,
            args: options && options.properties ? options.properties : undefined,
        });
    }
    async getRequestErrorsMessage(requestErrors, customLanguages) {
        const messages = [];
        for (const transfomer of requestErrors) {
            let children = transfomer.children;
            let constraints = Object.keys(transfomer.constraints || []);
            const errors = [];
            let property = transfomer.property;
            let propertyValue = transfomer.value;
            if (children.length > 0) {
                while (children.length > 0) {
                    for (const child of children) {
                        property = `${property}.${child.property}`;
                        if (child.children && child.children.length > 0) {
                            children = child.children;
                            break;
                        }
                        else if (child.constraints) {
                            constraints = Object.keys(child.constraints);
                            children = [];
                            propertyValue = child.value;
                            break;
                        }
                    }
                }
            }
            for (const constraint of constraints) {
                const message = await this.get(`request.${constraint}`, {
                    customLanguages,
                    properties: {
                        property,
                        value: propertyValue,
                    },
                });
                errors.push({
                    property,
                    message,
                });
            }
            messages.push(errors);
        }
        return messages.flat(1);
    }
    async getImportErrorsMessage(errors, customLanguages) {
        const newErrors = [];
        for (const error of errors) {
            newErrors.push({
                row: error.row,
                file: error.file,
                errors: await this.getRequestErrorsMessage(error.errors, customLanguages),
            });
        }
        return newErrors;
    }
    async get(key, options) {
        const properties = options && options.properties ? options.properties : undefined;
        const customLanguages = options &&
            options.customLanguages &&
            options.customLanguages.length > 0
            ? options.customLanguages
            : [this.defaultLanguage];
        const messages = {};
        for (const customLanguage of customLanguages) {
            messages[customLanguage] = await this.setMessage(customLanguage, key, {
                properties,
            });
        }
        if (customLanguages.length <= 1) {
            return messages[customLanguages[0]];
        }
        return messages;
    }
};
MessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nService,
        config_1.ConfigService])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map