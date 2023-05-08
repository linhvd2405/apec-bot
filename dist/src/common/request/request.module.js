"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const request_status_code_constant_1 = require("./constants/request.status-code.constant");
const request_is_password_medium_validation_1 = require("./validations/request.is-password-medium.validation");
const request_is_password_strong_validation_1 = require("./validations/request.is-password-strong.validation");
const request_is_password_weak_validation_1 = require("./validations/request.is-password-weak.validation");
const request_is_start_with_validation_1 = require("./validations/request.is-start-with.validation");
const request_max_greater_than_equal_validation_1 = require("./validations/request.max-greater-than-equal.validation");
const request_max_greater_than_validation_1 = require("./validations/request.max-greater-than.validation");
const request_min_date_equal_validation_1 = require("./validations/request.min-date-equal.validation");
const request_min_greater_than_equal_validation_1 = require("./validations/request.min-greater-than-equal.validation");
const request_min_greater_than_validation_1 = require("./validations/request.min-greater-than.validation");
const request_only_digits_validation_1 = require("./validations/request.only-digits.validation");
const request_safe_string_validation_1 = require("./validations/request.safe-string.validation");
const request_skip_validation_1 = require("./validations/request.skip.validation");
const request_string_or_number_or_boolean_validation_1 = require("./validations/request.string-or-number-or-boolean.validation");
let RequestModule = class RequestModule {
};
RequestModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useFactory: () => new common_1.ValidationPipe({
                    transform: true,
                    skipNullProperties: false,
                    skipUndefinedProperties: false,
                    skipMissingProperties: false,
                    errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                    exceptionFactory: async (errors) => new common_1.UnprocessableEntityException({
                        statusCode: request_status_code_constant_1.ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_VALIDATION_ERROR,
                        message: 'http.clientError.unprocessableEntity',
                        errors,
                    }),
                }),
            },
            request_is_password_strong_validation_1.IsPasswordStrongConstraint,
            request_is_password_medium_validation_1.IsPasswordMediumConstraint,
            request_is_password_weak_validation_1.IsPasswordWeakConstraint,
            request_is_start_with_validation_1.IsStartWithConstraint,
            request_max_greater_than_equal_validation_1.MaxGreaterThanEqualConstraint,
            request_max_greater_than_validation_1.MaxGreaterThanConstraint,
            request_min_greater_than_equal_validation_1.MinGreaterThanEqualConstraint,
            request_min_greater_than_validation_1.MinGreaterThanConstraint,
            request_skip_validation_1.SkipConstraint,
            request_string_or_number_or_boolean_validation_1.StringOrNumberOrBooleanConstraint,
            request_safe_string_validation_1.SafeStringConstraint,
            request_only_digits_validation_1.IsOnlyDigitsConstraint,
            request_min_date_equal_validation_1.MinDateTodayEqualConstraint,
        ],
        imports: [],
    })
], RequestModule);
exports.RequestModule = RequestModule;
//# sourceMappingURL=request.module.js.map