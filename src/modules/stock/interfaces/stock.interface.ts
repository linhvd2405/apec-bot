
import { PermissionDocument } from 'src/modules/permission/schemas/permission.schema';
import { StockDocument } from 'src/modules/stock/schemas/stock.schema';

export interface IStockDocument extends Omit<StockDocument, 'permissions'> {
  permissions: PermissionDocument[];
}

export interface IStockUpdate  {
    status: number;
    stockCode: string;              
    nameCompany : string;            
    exchangeCode: string;           
    rating : string;                
    industry: string;               
    refPrice: number;               
    liquidity : string;             
    shortTrend: string;             
    targetPrice : number            
    cutlossPrice : number;          
    trandingDate:Date;              
    overview: string;               
    marketCapital: number;          
    outstandingShares: number;      
    sumVol10d: number;              
    eps: number;
    pe: number;
    de: number;
    roe: number;
    netRev: number[];                 
    netInc: number[];  
    debt : number[];
    loan : number[];               
    cfi : number[];               
    cfo : number[];               
    cff : number[];         
    stockCodes: { stockCode: string, rating: string }[];             
    adx: string;  
    rsi: string;        
    macd: string;        
    reportDate: string[];               
  }
  

  export interface IStockUpdateStatus {
    status : number;
  }



  