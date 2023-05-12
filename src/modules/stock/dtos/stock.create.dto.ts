import {IsString, IsNotEmpty, IsNumber,IsArray,ArrayNotEmpty,IsOptional} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import { Type } from 'class-transformer';


export class StockCreateDto {


    @ApiProperty({
      required : true,
    })

    @IsNumber()
    @Type(() => Number)
    readonly status: number;

    @ApiProperty({
      required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly stockCode: string;

    @ApiProperty({
      required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly nameCompany: string;

    @ApiProperty({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly exchangeCode: string;

    @ApiProperty({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly rating : string;
    
    @ApiProperty({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
      readonly industry: string;

    @ApiProperty({
        required : true,
    })
    @IsNumber()
    @IsNotEmpty()
      readonly refPrice: number;

    @ApiProperty({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly liquidity : string;

    @ApiProperty({
          required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly shortTrend  : string;

    @ApiProperty({
      required : true,
    })
    @IsNumber()
    @IsNotEmpty()
    readonly targetPrice : number;

    @ApiProperty({
      required : true,
    })
    @IsNumber()
    @IsNotEmpty()
    readonly cutlossPrice  : number;

    @ApiProperty({
        required : true,
    })
    @IsNotEmpty()
      readonly trandingDate: Date;

    @ApiProperty({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
      readonly overview: string;

    @ApiProperty({
        required : true,
    })
    @IsNumber()
    @IsNotEmpty()
      readonly marketCapital: number;
      
      @ApiProperty({
        required : true,
    })
    @IsNumber()
    @IsNotEmpty()
      readonly sumVol10d: number;

      @ApiProperty({
        required : true,
    })
    @IsNumber()
    @IsNotEmpty()
      readonly outstandingShares: number;

      @ApiProperty({
        required : true,
    })
    @IsNumber()
    @IsNotEmpty()
      readonly eps: number;

      @ApiProperty({
        required : true,
    })
    @IsNumber()
    @IsNotEmpty()
      readonly pe: number;

      @ApiProperty({
        required : true,
    })
    @IsNumber()
    @IsNotEmpty()
      readonly de: number;

      @ApiProperty({
        required : true,
    })
    @IsNumber()
    @IsNotEmpty()
      readonly roe: number;

      @ApiProperty({
        required: true,
      })
      @IsArray()
      @ArrayNotEmpty()
      @Type(() => Number)
      readonly netRev: number[];
    
      @ApiProperty({
        required: true,
      })
      @IsArray()
      @ArrayNotEmpty()
      @Type(() => Number)
      readonly netInc: number[];

      @ApiProperty({
        required: true,
      })
      @IsArray()
      @ArrayNotEmpty()
      @Type(() => Number)
      readonly debt: number[];

      @ApiProperty({
        required: true,
      })
      @IsArray()
      @ArrayNotEmpty()
      @Type(() => Number)
      readonly loan: number[];

      @ApiProperty({
        required: true,
      })
      @IsArray()
      @ArrayNotEmpty()
      @Type(() => Number)
      readonly cfo: number[];

      @ApiProperty({
        required: true,
      })
      @IsArray()
      @ArrayNotEmpty()
      @Type(() => Number)
      readonly cfi: number[];

      @ApiProperty({
        required: true,
      })
      @IsArray()
      @ArrayNotEmpty()
      @Type(() => Number)
      readonly cff: number[];
    
      @ApiProperty({
        required: true,
      })
      @ArrayNotEmpty()
      @IsArray()
      @IsNotEmpty()
      readonly reportDate: string[];

      @ApiProperty({
        required: true,
      })
      @IsArray()
      @ArrayNotEmpty()
      @Type(() => Object)
      readonly stockCodes: { stockCode: string, rating: string }[];
      
      @ApiProperty({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
      readonly adx : string;

      @ApiProperty({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
      readonly rsi : string;

      @ApiProperty({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
      readonly macd : string;


  }
  