
import { PermissionDocument } from 'src/modules/permission/schemas/permission.schema';
import { StockDocument } from 'src/modules/stock/schemas/stock.schema';
// import { StockCreateDto } from 'src/modules/stock/dtos/stock.create.dto';


export interface IStockDocument extends Omit<StockDocument, 'permissions'> {
  permissions: PermissionDocument[];
}

export interface IStockUpdate  {
    status: number;
    stockCode: string;              // mã cổ phiếu
    nameCompany : string;            // tên công ty của mã
    exchangeCode: string;           // sàn 
    rating : string;                // hạng của mã
    industry: string;               //ngành
    refPrice: number;               // giá tham chiếu
    liquidity : string;             // thanh khoản
    shortTrend: string;             // xu hướng ngắn hạn
    targetPrice : number            // giá mục tiêu
    cutlossPrice : number;          // giá cutloss
    trandingDate:Date;              // ngày khuyến nghị
    overview: string;               // tổng quan doanh nghiệp
    marketCapital: number;          // vốn hoá
    outstandingShares: number;      // slcp
    sumVol10d: number;              // tb klcp
    eps: number;
    pe: number;
    de: number;
    roe: number;
    netRev: number[];                 // doanh thu thuần
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
    reportDate: string[];               // thời gian của báo cáo doanh thu với lợi nhuận
  }
  

  



  