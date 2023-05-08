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
exports.HelperDateService = void 0;
const common_1 = require("@nestjs/common");
const moment_1 = __importDefault(require("moment"));
const helper_enum_constant_1 = require("../constants/helper.enum.constant");
let HelperDateService = class HelperDateService {
    calculateAge(dateOfBirth) {
        return (0, moment_1.default)().diff(dateOfBirth, 'years');
    }
    diff(dateOne, dateTwo, options) {
        const mDateOne = (0, moment_1.default)(dateOne);
        const mDateTwo = (0, moment_1.default)(dateTwo);
        const diff = moment_1.default.duration(mDateTwo.diff(mDateOne));
        if (options && options.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.MILIS) {
            return diff.asMilliseconds();
        }
        else if (options &&
            options.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.SECONDS) {
            return diff.asSeconds();
        }
        else if (options && options.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.HOURS) {
            return diff.asHours();
        }
        else if (options &&
            options.format === helper_enum_constant_1.ENUM_HELPER_DATE_DIFF.MINUTES) {
            return diff.asMinutes();
        }
        else {
            return diff.asDays();
        }
    }
    check(date) {
        return (0, moment_1.default)(date, true).isValid();
    }
    checkTimestamp(timestamp) {
        return (0, moment_1.default)(timestamp, true).isValid();
    }
    create(options) {
        return (0, moment_1.default)(options && options.date ? options.date : undefined).toDate();
    }
    timestamp(options) {
        return (0, moment_1.default)(options && options.date ? options.date : undefined).valueOf();
    }
    format(date, options) {
        return (0, moment_1.default)(date).format(options && options.format
            ? options.format
            : helper_enum_constant_1.ENUM_HELPER_DATE_FORMAT.DATE);
    }
    forwardInMilliseconds(milliseconds, options) {
        return (0, moment_1.default)(options && options.fromDate ? options.fromDate : undefined)
            .add(milliseconds, 'ms')
            .toDate();
    }
    backwardInMilliseconds(milliseconds, options) {
        return (0, moment_1.default)(options && options.fromDate ? options.fromDate : undefined)
            .subtract(milliseconds, 'ms')
            .toDate();
    }
    forwardInSeconds(seconds, options) {
        return (0, moment_1.default)(options && options.fromDate ? options.fromDate : undefined)
            .add(seconds, 's')
            .toDate();
    }
    backwardInSeconds(seconds, options) {
        return (0, moment_1.default)(options && options.fromDate ? options.fromDate : undefined)
            .subtract(seconds, 's')
            .toDate();
    }
    forwardInMinutes(minutes, options) {
        return (0, moment_1.default)(options && options.fromDate ? options.fromDate : undefined)
            .add(minutes, 'm')
            .toDate();
    }
    backwardInMinutes(minutes, options) {
        return (0, moment_1.default)(options && options.fromDate ? options.fromDate : undefined)
            .subtract(minutes, 'm')
            .toDate();
    }
    forwardInDays(days, options) {
        return (0, moment_1.default)(options && options.fromDate ? options.fromDate : undefined)
            .add(days, 'd')
            .toDate();
    }
    backwardInDays(days, options) {
        return (0, moment_1.default)(options && options.fromDate ? options.fromDate : undefined)
            .subtract(days, 'd')
            .toDate();
    }
    forwardInMonths(months, options) {
        return (0, moment_1.default)(options && options.fromDate ? options.fromDate : undefined)
            .add(months, 'M')
            .toDate();
    }
    backwardInMonths(months, options) {
        return (0, moment_1.default)(options && options.fromDate ? options.fromDate : undefined)
            .subtract(months, 'M')
            .toDate();
    }
    endOfMonth(month, options) {
        const year = options && options.year ? options.year : (0, moment_1.default)().year();
        return (0, moment_1.default)()
            .year(year)
            .month(month - 1)
            .endOf('month')
            .toDate();
    }
    startOfMonth(month, options) {
        const year = options && options.year ? options.year : (0, moment_1.default)().year();
        return (0, moment_1.default)()
            .year(year)
            .month(month - 1)
            .startOf('month')
            .toDate();
    }
    endOfYear(year) {
        return (0, moment_1.default)().year(year).endOf('year').toDate();
    }
    startOfYear(year) {
        return (0, moment_1.default)().year(year).startOf('year').toDate();
    }
    endOfDay(date) {
        return (0, moment_1.default)(date).endOf('day').toDate();
    }
    startOfDay(date) {
        return (0, moment_1.default)(date).startOf('day').toDate();
    }
};
HelperDateService = __decorate([
    (0, common_1.Injectable)()
], HelperDateService);
exports.HelperDateService = HelperDateService;
//# sourceMappingURL=helper.date.service.js.map