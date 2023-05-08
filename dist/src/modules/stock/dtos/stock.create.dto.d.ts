export declare class StockCreateDto {
    readonly status: number;
    readonly stockCode: string;
    readonly nameCompany: string;
    readonly exchangeCode: string;
    readonly rating: string;
    readonly industry: string;
    readonly refPrice: number;
    readonly liquidity: string;
    readonly shortTrend: string;
    readonly targetPrice: number;
    readonly cutlossPrice: number;
    readonly trandingDate: Date;
    readonly overview: string;
    readonly marketCapital: number;
    readonly sumVol10d: number;
    readonly outstandingShares: number;
    readonly eps: number;
    readonly pe: number;
    readonly de: number;
    readonly roe: number;
    readonly netRev: number[];
    readonly netInc: number[];
    readonly debt: number[];
    readonly loan: number[];
    readonly cfo: number[];
    readonly cfi: number[];
    readonly cff: number[];
    readonly reportDate: string[];
    readonly stockCodes: {
        stockCode: string;
        rating: string;
    }[];
    readonly adx: string;
    readonly rsi: string;
    readonly macd: string;
}
