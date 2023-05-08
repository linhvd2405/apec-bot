"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePartNumber = exports.FileCustomSize = exports.FileCustomMaxFile = exports.UploadFileMultiple = exports.UploadFileSingle = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const file_constant_1 = require("../constants/file.constant");
const file_multiple_dto_1 = require("../dtos/file.multiple.dto");
const file_single_dto_1 = require("../dtos/file.single.dto");
const file_custom_max_files_interceptor_1 = require("../interceptors/file.custom-max-files.interceptor");
const file_custom_size_interceptor_1 = require("../interceptors/file.custom-size.interceptor");
function UploadFileSingle(field, options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)(field)), (0, swagger_1.ApiBody)({
        description: 'Single file',
        type: options && options.classDto ? options.classDto : file_single_dto_1.FileSingleDto,
    }), (0, swagger_1.ApiConsumes)('multipart/form-data'));
}
exports.UploadFileSingle = UploadFileSingle;
function UploadFileMultiple(field, options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)(field)), (0, swagger_1.ApiBody)({
        description: 'Multiple file',
        type: options && options.classDto
            ? options.classDto
            : file_multiple_dto_1.FileMultipleDto,
    }), (0, swagger_1.ApiConsumes)('multipart/form-data'));
}
exports.UploadFileMultiple = UploadFileMultiple;
function FileCustomMaxFile(customMaxFiles) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(file_custom_max_files_interceptor_1.FileCustomMaxFilesInterceptor), (0, common_1.SetMetadata)(file_constant_1.FILE_CUSTOM_MAX_FILES_META_KEY, customMaxFiles));
}
exports.FileCustomMaxFile = FileCustomMaxFile;
function FileCustomSize(customSize) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(file_custom_size_interceptor_1.FileCustomSizeInterceptor), (0, common_1.SetMetadata)(file_constant_1.FILE_CUSTOM_SIZE_META_KEY, customSize));
}
exports.FileCustomSize = FileCustomSize;
exports.FilePartNumber = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['x-part-number']
        ? parseInt(request.headers['x-part-number'])
        : 0;
});
//# sourceMappingURL=file.decorator.js.map