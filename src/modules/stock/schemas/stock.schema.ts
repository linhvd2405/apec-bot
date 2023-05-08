import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class StockEntity {


  @Prop({ 
    required: true,
  })
  status: number;

  @Prop({ 
    required: true,
  })
  stockCode: string;

  @Prop({ 
    required: true,
  })
  nameCompany: string;

  @Prop({ 
    required: true,
  })
  exchangeCode: string;

  @Prop({ 
    required: true,
  })
  rating: string;

  @Prop({ 
    required: true, 
  })
  industry: string;

  @Prop({ 
    required: true,
  })
  refPrice: number;

  @Prop({ 
    required: true,
    // index: true,
  })
  liquidity: string;

  @Prop({ 
    required: true, 
  })
  shortTrend: string;

  @Prop({ 
    required: true,
  })
  targetPrice: number;

  @Prop({ 
    required: true,
  })
  cutlossPrice: number;

  @Prop({
    required: true, 
  })
  trandingDate: Date;

  @Prop({ 
    required: true, 
  })
  overview: string;

  @Prop({ 
    required: true, 
  })
  marketCapital: number;

  @Prop({ 
    required: true, 
  })
  sumVol10d: number;

  @Prop({ 
    required: true, 
  })
  outstandingShares: number;

  @Prop({ 
    required: true, 
  })
  eps: number;

  @Prop({ 
    required: true, 
  })
  pe: number;

  @Prop({ 
    required: true, 
  })
  de: number;

  @Prop({ 
    required: true, 
  })
  roe: number;

  @Prop({ 
    required: true, 
  })
  netRev : number[]; 

  @Prop({ 
    required: true, 
  })
  netInc : number[]; 

  @Prop({ 
    required: true, 
  })
  debt : number[];

  @Prop({ 
    required: true, 
  })
  loan : number[];

  @Prop({ 
    required: true, 
  })
  cfo : number[];

  @Prop({ 
    required: true, 
  })
  cfi : number[];

  @Prop({ 
    required: true, 
  })
  cff : number[];
  
  @Prop({ 
    required: true, 
  })
  reportDate : string[];

  @Prop({
  type: [{ stockCode: String, rating: String }] 
  })
  stockCodes: { stockCode: string , rating: string }[];

  @Prop({ 
    required: true, 
  })
  adx: string;

  @Prop({ 
    required: true, 
  })
  rsi: string;

  @Prop({ 
    required: true, 
  })
  macd: string;

  @Prop({
    required: true,
    default: true,
  })
  isActive: boolean;
}
export const StockDatabaseName = 'stocks';

export type StockDocument = StockEntity & Document;
export const StockSchema = SchemaFactory.createForClass(StockEntity);

StockSchema.pre<StockDocument>('save', function (next) {

  next();
});