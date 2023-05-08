"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseTimeout = exports.ResponsePaging = exports.ResponseExcel = exports.ResponsePagingType = exports.Response = exports.ResponseDocAllOf = exports.ResponseDocAnyOf = exports.ResponseDocOneOf = exports.ResponseDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const error_status_code_constant_1 = require("../../error/constants/error.status-code.constant");
const file_enum_constant_1 = require("../../file/constants/file.enum.constant");
const request_decorator_1 = require("../../request/decorators/request.decorator");
const response_constant_1 = require("../constants/response.constant");
const response_default_interceptor_1 = require("../interceptors/response.default.interceptor");
const response_excel_interceptor_1 = require("../interceptors/response.excel.interceptor");
const response_paging_interceptor_1 = require("../interceptors/response.paging.interceptor");
const response_default_serialization_1 = require("../serializations/response.default.serialization");
const response_paging_serialization_1 = require("../serializations/response.paging.serialization");
function ResponseDoc(document) {
    const docs = [];
    const schema = {
        allOf: [{ $ref: (0, swagger_1.getSchemaPath)((response_default_serialization_1.ResponseDefaultSerialization)) }],
        properties: {
            message: {
                example: document.messagePath,
            },
            statusCode: {
                type: 'number',
                example: document.statusCode || common_1.HttpStatus.OK,
            },
        },
    };
    if (document.serialization) {
        docs.push((0, swagger_1.ApiExtraModels)(document.serialization));
        schema.properties = {
            ...schema.properties,
            data: {
                $ref: (0, swagger_1.getSchemaPath)(document.serialization),
            },
        };
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)((response_default_serialization_1.ResponseDefaultSerialization)), (0, swagger_1.ApiResponse)({
        status: document.httpStatus,
        schema,
    }), ...docs);
}
exports.ResponseDoc = ResponseDoc;
function ResponseDocOneOf(httpStatus, ...documents) {
    const docs = [];
    const oneOf = [];
    for (const doc of documents) {
        const oneOfSchema = {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)((response_default_serialization_1.ResponseDefaultSerialization)) }],
            properties: {
                message: {
                    example: doc.messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: doc.statusCode || common_1.HttpStatus.OK,
                },
            },
        };
        if (doc.serialization) {
            docs.push((0, swagger_1.ApiExtraModels)(doc.serialization));
            oneOfSchema.properties = {
                ...oneOfSchema.properties,
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(doc.serialization),
                },
            };
        }
        oneOf.push(oneOfSchema);
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)((response_default_serialization_1.ResponseDefaultSerialization)), (0, swagger_1.ApiResponse)({
        status: httpStatus,
        schema: {
            oneOf,
        },
    }), ...docs);
}
exports.ResponseDocOneOf = ResponseDocOneOf;
function ResponseDocAnyOf(httpStatus, ...documents) {
    const docs = [];
    const anyOf = [];
    for (const doc of documents) {
        const anyOfSchema = {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)((response_default_serialization_1.ResponseDefaultSerialization)) }],
            properties: {
                message: {
                    example: doc.messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: doc.statusCode || common_1.HttpStatus.OK,
                },
            },
        };
        if (doc.serialization) {
            docs.push((0, swagger_1.ApiExtraModels)(doc.serialization));
            anyOfSchema.properties = {
                ...anyOfSchema.properties,
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(doc.serialization),
                },
            };
        }
        anyOf.push(anyOfSchema);
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)((response_default_serialization_1.ResponseDefaultSerialization)), (0, swagger_1.ApiResponse)({
        status: httpStatus,
        schema: {
            anyOf,
        },
    }), ...docs);
}
exports.ResponseDocAnyOf = ResponseDocAnyOf;
function ResponseDocAllOf(httpStatus, ...documents) {
    const docs = [];
    const allOf = [];
    for (const doc of documents) {
        const allOfSchema = {
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)((response_default_serialization_1.ResponseDefaultSerialization)) }],
            properties: {
                message: {
                    example: doc.messagePath,
                },
                statusCode: {
                    type: 'number',
                    example: doc.statusCode || common_1.HttpStatus.OK,
                },
            },
        };
        if (doc.serialization) {
            docs.push((0, swagger_1.ApiExtraModels)(doc.serialization));
            allOfSchema.properties = {
                ...allOfSchema.properties,
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(doc.serialization),
                },
            };
        }
        allOf.push(allOfSchema);
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)((response_default_serialization_1.ResponseDefaultSerialization)), (0, swagger_1.ApiResponse)({
        status: httpStatus,
        schema: {
            allOf,
        },
    }), ...docs);
}
exports.ResponseDocAllOf = ResponseDocAllOf;
function Response(messagePath, options) {
    const docs = [];
    const docOptions = options && options.doc ? options.doc : {};
    const schema = {
        allOf: [{ $ref: (0, swagger_1.getSchemaPath)((response_default_serialization_1.ResponseDefaultSerialization)) }],
        properties: {
            message: {
                example: messagePath,
            },
        },
    };
    if (options && options.classSerialization) {
        docs.push((0, swagger_1.ApiExtraModels)(options.classSerialization));
        schema.properties = {
            ...schema.properties,
            data: {
                $ref: (0, swagger_1.getSchemaPath)(options.classSerialization),
            },
        };
    }
    if (!options || !options.excludeRequestBodyJson) {
        docs.push((0, swagger_1.ApiConsumes)('application/json'));
    }
    if (docOptions.statusCode) {
        schema.properties = {
            ...schema.properties,
            statusCode: {
                type: 'number',
                example: docOptions.statusCode
                    ? docOptions.statusCode
                    : common_1.HttpStatus.OK,
            },
        };
    }
    if (docOptions.responses) {
        docs.push(...docOptions.responses.map((response) => ResponseDoc(response)));
    }
    if (docOptions.params) {
        docs.push(...docOptions.params.map((param) => (0, swagger_1.ApiParam)(param)));
    }
    if (docOptions.queries) {
        docs.push(...docOptions.queries.map((query) => (0, swagger_1.ApiQuery)(query)));
    }
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((response_default_interceptor_1.ResponseDefaultInterceptor)), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PATH_META_KEY, messagePath), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_SERIALIZATION_META_KEY, options ? options.classSerialization : undefined), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, options ? options.messageProperties : undefined), (0, swagger_1.ApiProduces)('application/json'), (0, request_decorator_1.RequestHeaderDoc)(), ResponseDoc({
        httpStatus: common_1.HttpStatus.SERVICE_UNAVAILABLE,
        messagePath: 'http.serverError.serviceUnavailable',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_SERVICE_UNAVAILABLE,
    }), ResponseDoc({
        httpStatus: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        messagePath: 'http.serverError.internalServerError',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
    }), ResponseDoc({
        httpStatus: common_1.HttpStatus.REQUEST_TIMEOUT,
        messagePath: 'http.serverError.requestTimeout',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_REQUEST_TIMEOUT,
    }), (0, swagger_1.ApiResponse)({
        status: docOptions.httpStatus || common_1.HttpStatus.OK,
        schema,
    }), ...docs);
}
exports.Response = Response;
function ResponsePagingType(type) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(response_constant_1.RESPONSE_PAGING_TYPE_META_KEY, type));
}
exports.ResponsePagingType = ResponsePagingType;
function ResponseExcel(options) {
    const docs = [];
    const docOptions = options && options.doc ? options.doc : {};
    if (!options || !options.excludeRequestBodyJson) {
        docs.push((0, swagger_1.ApiConsumes)('application/json'));
    }
    if (docOptions.responses) {
        docs.push(...docOptions.responses.map((response) => ResponseDoc(response)));
    }
    if (docOptions.params) {
        docs.push(...docOptions.params.map((param) => (0, swagger_1.ApiParam)(param)));
    }
    if (docOptions.queries) {
        docs.push(...docOptions.queries.map((query) => (0, swagger_1.ApiQuery)(query)));
    }
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(response_excel_interceptor_1.ResponseExcelInterceptor), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_SERIALIZATION_META_KEY, options ? options.classSerialization : undefined), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, options ? options.messageProperties : undefined), (0, request_decorator_1.RequestHeaderDoc)(), ResponseDoc({
        httpStatus: common_1.HttpStatus.SERVICE_UNAVAILABLE,
        messagePath: 'http.serverError.serviceUnavailable',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_SERVICE_UNAVAILABLE,
    }), ResponseDoc({
        httpStatus: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        messagePath: 'http.serverError.internalServerError',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
    }), ResponseDoc({
        httpStatus: common_1.HttpStatus.REQUEST_TIMEOUT,
        messagePath: 'http.serverError.requestTimeout',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_REQUEST_TIMEOUT,
    }), (0, swagger_1.ApiOkResponse)(), (0, swagger_1.ApiProduces)(file_enum_constant_1.ENUM_FILE_EXCEL_MIME.XLSX), ...docs);
}
exports.ResponseExcel = ResponseExcel;
function ResponsePaging(messagePath, options) {
    const docs = [];
    const docOptions = options && options.doc
        ? options.doc
        : {};
    const schema = {
        allOf: [{ $ref: (0, swagger_1.getSchemaPath)((response_paging_serialization_1.ResponsePagingSerialization)) }],
        properties: {
            message: {
                example: messagePath,
            },
        },
    };
    if (options && options.classSerialization) {
        docs.push((0, swagger_1.ApiExtraModels)(options.classSerialization));
        schema.allOf.push({
            properties: {
                data: {
                    type: 'array',
                    items: {
                        $ref: (0, swagger_1.getSchemaPath)(options.classSerialization),
                    },
                },
            },
        });
    }
    if (docOptions.statusCode) {
        schema.properties = {
            ...schema.properties,
            statusCode: {
                type: 'number',
                example: docOptions.statusCode
                    ? docOptions.statusCode
                    : common_1.HttpStatus.OK,
            },
        };
    }
    if (docOptions.availableSearch) {
        schema.properties = {
            ...schema.properties,
            availableSearch: {
                example: docOptions.availableSearch,
            },
        };
    }
    if (docOptions.availableSort) {
        schema.properties = {
            ...schema.properties,
            availableSort: {
                example: docOptions.availableSort,
            },
        };
    }
    if (docOptions.responses) {
        docs.push(...docOptions.responses.map((response) => ResponseDoc(response)));
    }
    if (docOptions.params) {
        docs.push(...docOptions.params.map((param) => (0, swagger_1.ApiParam)(param)));
    }
    if (docOptions.queries) {
        docs.push(...docOptions.queries.map((query) => (0, swagger_1.ApiQuery)(query)));
    }
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((response_paging_interceptor_1.ResponsePagingInterceptor)), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PATH_META_KEY, messagePath), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_SERIALIZATION_META_KEY, options ? options.classSerialization : undefined), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_MESSAGE_PROPERTIES_META_KEY, options ? options.messageProperties : undefined), (0, swagger_1.ApiProduces)('application/json'), (0, swagger_1.ApiConsumes)('application/json'), (0, request_decorator_1.RequestHeaderDoc)(), ResponseDoc({
        httpStatus: common_1.HttpStatus.SERVICE_UNAVAILABLE,
        messagePath: 'http.serverError.serviceUnavailable',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_SERVICE_UNAVAILABLE,
    }), ResponseDoc({
        httpStatus: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        messagePath: 'http.serverError.internalServerError',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
    }), ResponseDoc({
        httpStatus: common_1.HttpStatus.REQUEST_TIMEOUT,
        messagePath: 'http.serverError.requestTimeout',
        statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_REQUEST_TIMEOUT,
    }), (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        allowEmptyValue: true,
        type: 'string',
        description: 'Search will base on availableSearch with rule contains, and case insensitive',
    }), (0, swagger_1.ApiQuery)({
        name: 'perPage',
        required: true,
        allowEmptyValue: false,
        example: 20,
        type: 'number',
        description: 'Data per page',
    }), (0, swagger_1.ApiQuery)({
        name: 'page',
        required: true,
        allowEmptyValue: false,
        example: 1,
        type: 'number',
        description: 'page number',
    }), (0, swagger_1.ApiQuery)({
        name: 'sort',
        required: true,
        allowEmptyValue: false,
        example: 'createdAt@desc',
        type: 'string',
        description: 'Sort base on availableSort, type is `asc` and `desc`',
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        schema,
    }), ...docs);
}
exports.ResponsePaging = ResponsePaging;
function ResponseTimeout(seconds) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(response_constant_1.RESPONSE_CUSTOM_TIMEOUT_META_KEY, true), (0, common_1.SetMetadata)(response_constant_1.RESPONSE_CUSTOM_TIMEOUT_VALUE_META_KEY, seconds));
}
exports.ResponseTimeout = ResponseTimeout;
//# sourceMappingURL=response.decorator.js.map