import { IErrorHttpFilterMetadata } from 'src/common/error/interfaces/error.interface';
import { ResponseDefaultSerialization } from 'src/common/response/serializations/response.default.serialization';
export declare class ResponsePagingMetadataSerialization {
    nextPage?: string;
    previousPage?: string;
    firstPage?: string;
    lastPage?: string;
}
declare const ResponsePagingSerialization_base: import("@nestjs/common").Type<Pick<ResponseDefaultSerialization<unknown>, "statusCode" | "message">>;
export declare class ResponsePagingSerialization<T = Record<string, any>> extends ResponsePagingSerialization_base {
    readonly totalData: number;
    totalPage?: number;
    currentPage?: number;
    perPage?: number;
    availableSearch?: string[];
    availableSort?: string[];
    readonly metadata?: IErrorHttpFilterMetadata & ResponsePagingMetadataSerialization;
    readonly data?: T[];
}
export {};
