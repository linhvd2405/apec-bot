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
import { Document } from 'mongoose';
export declare class StockEntity {
    status: number;
    stockCode: string;
    nameCompany: string;
    exchangeCode: string;
    rating: string;
    industry: string;
    refPrice: number;
    liquidity: string;
    shortTrend: string;
    targetPrice: number;
    cutlossPrice: number;
    trandingDate: Date;
    overview: string;
    marketCapital: number;
    sumVol10d: number;
    outstandingShares: number;
    eps: number;
    pe: number;
    de: number;
    roe: number;
    netRev: number[];
    netInc: number[];
    debt: number[];
    loan: number[];
    cfo: number[];
    cfi: number[];
    cff: number[];
    reportDate: string[];
    stockCodes: {
        stockCode: string;
        rating: string;
    }[];
    adx: string;
    rsi: string;
    macd: string;
    isActive: boolean;
}
export declare const StockDatabaseName = "stocks";
export declare type StockDocument = StockEntity & Document;
export declare const StockSchema: import("mongoose").Schema<StockEntity, import("mongoose").Model<StockEntity, any, any, any, any>, {}, {}, {}, {}, "type", StockEntity>;
