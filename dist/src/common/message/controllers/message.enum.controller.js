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
exports.MessageEnumController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const message_language_serialization_1 = require("../serializations/message.language.serialization");
const message_enum_service_1 = require("../services/message.enum.service");
const response_decorator_1 = require("../../response/decorators/response.decorator");
let MessageEnumController = class MessageEnumController {
    constructor(messageEnumService) {
        this.messageEnumService = messageEnumService;
    }
    async languages() {
        const languages = await this.messageEnumService.getLanguages();
        return {
            languages,
        };
    }
};
__decorate([
    (0, response_decorator_1.Response)('message.languages', {
        classSerialization: message_language_serialization_1.MessageLanguageSerialization,
    }),
    (0, common_1.Get)('/languages'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageEnumController.prototype, "languages", null);
MessageEnumController = __decorate([
    (0, swagger_1.ApiTags)('enum.message'),
    (0, common_1.Controller)({
        version: common_1.VERSION_NEUTRAL,
        path: '/message',
    }),
    __metadata("design:paramtypes", [message_enum_service_1.MessageEnumService])
], MessageEnumController);
exports.MessageEnumController = MessageEnumController;
//# sourceMappingURL=message.enum.controller.js.map