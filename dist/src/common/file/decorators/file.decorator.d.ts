import { IFileOptions } from 'src/common/file/interfaces/file.interface';
export declare function UploadFileSingle(field: string, options?: IFileOptions): any;
export declare function UploadFileMultiple(field: string, options?: IFileOptions): any;
export declare function FileCustomMaxFile(customMaxFiles: number): any;
export declare function FileCustomSize(customSize: string): any;
export declare const FilePartNumber: (...dataOrPipes: (string | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
