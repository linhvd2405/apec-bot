/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Types } from 'mongoose';
import { ENUM_AUTH_ACCESS_FOR } from 'src/common/auth/constants/auth.enum.constant';
export declare class LoggerEntity {
    level: string;
    action: string;
    method: string;
    requestId?: string;
    user?: Types.ObjectId;
    role?: Types.ObjectId;
    apiKey?: Types.ObjectId;
    anonymous: boolean;
    accessFor?: ENUM_AUTH_ACCESS_FOR;
    description: string;
    params?: Record<string, any>;
    bodies?: Record<string, any>;
    statusCode?: number;
    path?: string;
    tags: string[];
}
export declare const LoggerDatabaseName = "loggers";
export declare const LoggerSchema: import("mongoose").Schema<LoggerEntity, import("mongoose").Model<LoggerEntity, any, any, any, any>, {}, {}, {}, {}, "type", LoggerEntity>;
export declare type LoggerDocument = LoggerEntity & Document;
