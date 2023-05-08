"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationFilterString = exports.PaginationFilterDate = exports.PaginationFilterId = exports.PaginationFilterEnum = exports.PaginationFilterBoolean = exports.PaginationAvailableSort = exports.PaginationSort = exports.PaginationPerPage = exports.PaginationPage = exports.PaginationAvailableSearch = exports.PaginationSearch = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const pagination_constant_1 = require("../constants/pagination.constant");
const pagination_enum_constant_1 = require("../constants/pagination.enum.constant");
const request_add_date_pipe_1 = require("../../request/pipes/request.add-date.pipe");
const request_min_greater_than_validation_1 = require("../../request/validations/request.min-greater-than.validation");
const request_skip_validation_1 = require("../../request/validations/request.skip.validation");
function PaginationSearch(availableSearch) {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)(), (0, class_validator_1.ValidateIf)((e) => e.search !== ''), (0, class_transformer_1.Transform)(({ value }) => value
        ? {
            $or: availableSearch.map((val) => ({
                [val]: {
                    $regex: new RegExp(value),
                    $options: 'i',
                },
            })),
        }
        : undefined));
}
exports.PaginationSearch = PaginationSearch;
function PaginationAvailableSearch(availableSearch) {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_transformer_1.Transform)(() => availableSearch));
}
exports.PaginationAvailableSearch = PaginationAvailableSearch;
function PaginationPage(page = pagination_constant_1.PAGINATION_PAGE) {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_transformer_1.Type)(() => Number), (0, class_transformer_1.Transform)(({ value }) => !value
        ? page
        : value > pagination_constant_1.PAGINATION_MAX_PAGE
            ? pagination_constant_1.PAGINATION_MAX_PAGE
            : value));
}
exports.PaginationPage = PaginationPage;
function PaginationPerPage(perPage = pagination_constant_1.PAGINATION_PER_PAGE) {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_transformer_1.Type)(() => Number), (0, class_transformer_1.Transform)(({ value }) => !value
        ? perPage
        : value > pagination_constant_1.PAGINATION_MAX_PER_PAGE
            ? pagination_constant_1.PAGINATION_MAX_PER_PAGE
            : value));
}
exports.PaginationPerPage = PaginationPerPage;
function PaginationSort(sort = pagination_constant_1.PAGINATION_SORT, availableSort = pagination_constant_1.PAGINATION_AVAILABLE_SORT) {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_transformer_1.Transform)(({ value, obj }) => {
        const bSort = pagination_constant_1.PAGINATION_SORT.split('@')[0];
        const rSort = value || sort;
        const rAvailableSort = obj._availableSort || availableSort;
        const field = rSort.split('@')[0];
        const type = rSort.split('@')[1];
        const convertField = rAvailableSort.includes(field)
            ? field
            : bSort;
        const convertType = type === 'desc'
            ? pagination_enum_constant_1.ENUM_PAGINATION_AVAILABLE_SORT_TYPE.DESC
            : pagination_enum_constant_1.ENUM_PAGINATION_AVAILABLE_SORT_TYPE.ASC;
        return { [convertField]: convertType };
    }));
}
exports.PaginationSort = PaginationSort;
function PaginationAvailableSort(availableSort = pagination_constant_1.PAGINATION_AVAILABLE_SORT) {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_transformer_1.Transform)(({ value }) => (!value ? availableSort : value)));
}
exports.PaginationAvailableSort = PaginationAvailableSort;
function PaginationFilterBoolean(defaultValue) {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_validator_1.IsBoolean)({ each: true }), (0, class_transformer_1.Transform)(({ value }) => value
        ? value
            .split(',')
            .map((val) => (val === 'true' ? true : false))
        : defaultValue));
}
exports.PaginationFilterBoolean = PaginationFilterBoolean;
function PaginationFilterEnum(defaultValue, defaultEnum) {
    const cEnum = defaultEnum;
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_validator_1.IsEnum)(cEnum, { each: true }), (0, class_transformer_1.Transform)(({ value }) => value
        ? value.split(',').map((val) => defaultEnum[val])
        : defaultValue));
}
exports.PaginationFilterEnum = PaginationFilterEnum;
function PaginationFilterId(field, options) {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_validator_1.IsMongoId)(), options && options.required ? (0, class_validator_1.IsNotEmpty)() : (0, request_skip_validation_1.Skip)(), options && options.required
        ? (0, request_skip_validation_1.Skip)()
        : (0, class_validator_1.ValidateIf)((e) => e[field] !== '' && e[field]));
}
exports.PaginationFilterId = PaginationFilterId;
function PaginationFilterDate(field, options) {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_validator_1.IsDate)(), (0, class_transformer_1.Type)(() => Date), options && options.required ? (0, class_validator_1.IsNotEmpty)() : (0, class_validator_1.IsOptional)(), options && options.required
        ? (0, request_skip_validation_1.Skip)()
        : options.asEndDate
            ? (0, class_validator_1.ValidateIf)((e) => e[field] !== '' &&
                e[options.asEndDate.moreThanField] !== '' &&
                e[field] &&
                e[options.asEndDate.moreThanField])
            : (0, class_validator_1.ValidateIf)((e) => e[field] !== '' && e[field]), options && options.asEndDate
        ? (0, request_min_greater_than_validation_1.MinGreaterThan)(options.asEndDate.moreThanField)
        : (0, request_skip_validation_1.Skip)(), options && options.asEndDate ? (0, common_1.UsePipes)((0, request_add_date_pipe_1.RequestAddDatePipe)(1)) : (0, request_skip_validation_1.Skip)());
}
exports.PaginationFilterDate = PaginationFilterDate;
function PaginationFilterString(field, options) {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Expose)(), (0, class_validator_1.IsString)(), options && options.lowercase
        ? (0, class_transformer_1.Transform)(({ value }) => value
            ? value.split(',').map((val) => val.toLowerCase())
            : undefined)
        : (0, request_skip_validation_1.Skip)(), options && options.required ? (0, class_validator_1.IsNotEmpty)() : (0, class_validator_1.IsOptional)(), options && options.required
        ? (0, request_skip_validation_1.Skip)()
        : (0, class_validator_1.ValidateIf)((e) => e[field] !== '' && e[field]));
}
exports.PaginationFilterString = PaginationFilterString;
//# sourceMappingURL=pagination.decorator.js.map