"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsStartWith = exports.IsStartWithConstraint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
let IsStartWithConstraint = class IsStartWithConstraint {
    validate(value, args) {
        const [prefix] = args.constraints;
        return value
            ? prefix.every((prf) => value.startsWith(prf))
            : false;
    }
};
IsStartWithConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)()
], IsStartWithConstraint);
exports.IsStartWithConstraint = IsStartWithConstraint;
function IsStartWith(prefix, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsStartWith',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [prefix],
            validator: IsStartWithConstraint,
        });
    };
}
exports.IsStartWith = IsStartWith;
//# sourceMappingURL=request.is-start-with.validation.js.map