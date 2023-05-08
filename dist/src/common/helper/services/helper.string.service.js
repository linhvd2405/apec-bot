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
exports.HelperStringService = void 0;
const common_1 = require("@nestjs/common");
const faker_1 = require("@faker-js/faker");
const helper_date_service_1 = require("./helper.date.service");
let HelperStringService = class HelperStringService {
    constructor(helperDateService) {
        this.helperDateService = helperDateService;
    }
    checkEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
    randomReference(length, prefix) {
        const timestamp = `${this.helperDateService.timestamp()}`;
        const randomString = this.random(length, {
            safe: true,
            upperCase: true,
        });
        return prefix
            ? `${prefix}-${timestamp}${randomString}`
            : `${timestamp}${randomString}`;
    }
    random(length, options) {
        const rString = options && options.safe
            ? faker_1.faker.internet.password(length, true, /[A-Z]/, options && options.prefix ? options.prefix : undefined)
            : faker_1.faker.internet.password(length, false, /\w/, options && options.prefix ? options.prefix : undefined);
        return options && options.upperCase ? rString.toUpperCase() : rString;
    }
    censor(value) {
        const length = value.length;
        if (length === 1) {
            return value;
        }
        const end = length > 4 ? length - 4 : 1;
        const censorString = '*'.repeat(end > 10 ? 10 : end);
        const visibleString = value.substring(end, length);
        return `${censorString}${visibleString}`;
    }
    checkStringOrNumber(text) {
        const regex = new RegExp(/^[\w.-]+$/);
        return regex.test(text);
    }
    convertStringToNumberOrBooleanIfPossible(text) {
        let convertValue = text;
        const regexNumber = /^-?\d+$/;
        if (text === 'true' || text === 'false') {
            convertValue = text === 'true';
        }
        else if (regexNumber.test(text)) {
            convertValue = Number(text);
        }
        return convertValue;
    }
    checkPasswordWeak(password, length) {
        const regex = new RegExp(`^(?=.*?[A-Z])(?=.*?[a-z]).{${length || 8},}$`);
        return regex.test(password);
    }
    checkPasswordMedium(password, length) {
        const regex = new RegExp(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{${length || 8},}$`);
        return regex.test(password);
    }
    checkPasswordStrong(password, length) {
        const regex = new RegExp(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{${length || 8},}$`);
        return regex.test(password);
    }
    checkSafeString(text) {
        const regex = new RegExp('^[A-Za-z0-9_-]+$');
        return regex.test(text);
    }
};
HelperStringService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [helper_date_service_1.HelperDateService])
], HelperStringService);
exports.HelperStringService = HelperStringService;
//# sourceMappingURL=helper.string.service.js.map