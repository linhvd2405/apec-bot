import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';




export class StockGetSerialization {
    @ApiProperty({
        description: 'Id that representative with your target data',
        example: faker.database.mongodbObjectId(),
        required: true,
    })
    @Type(() => String)
    readonly _id: string;

    @ApiProperty({
        description: 'Active flag of stock',
        example: true,
        required: true,
    })
    readonly isActive: boolean;


    @ApiProperty({
        required: true,
    })
    readonly status: number;

    @ApiProperty({
        description: 'Alias code of stock',
        required: true,
    })
    readonly stockCode: string;

    @ApiProperty({
        required : true,
      })
    readonly nameCompany: string;

    @ApiProperty({
        required : true,
      })
    readonly exchangeCode: string;

    @ApiProperty({
        required : true,
      })
    readonly rating: string;

    @ApiProperty({
        required : true,
      })
      readonly industry: string;

    @ApiProperty({
        required : true,
    })
    readonly refPrice: number;

    @ApiProperty({
        required : true,
      })
    readonly liquidity: string;

    @ApiProperty({
        required : true,
      })
    readonly shortTrend: string;

    @ApiProperty({
        required : true,
    })
    readonly targetPrice: number;

    @ApiProperty({
        required : true,
    })
    readonly cutlossPrice: number;

    @ApiProperty({
        required : true,
    })
    readonly trandingDate: Date;

    @ApiProperty({
        required : true,
    })
    readonly overview: string;

    @ApiProperty({
        required : true,
    })
    readonly marketCapital: number;

    @ApiProperty({
        required : true,
    })
    readonly sumVol10d: number;

    @ApiProperty({
        required : true,
    })
    readonly outstandingShares: number;

    @ApiProperty({
        required : true,
    })
    readonly eps: number;

    @ApiProperty({
        required : true,
    })
    readonly pe: number;

    @ApiProperty({
        required : true,
    })
    readonly de: number;

    @ApiProperty({
        required : true,
    })
    readonly roe: number;

    @ApiProperty({
        required : true,
        
    })
   readonly netInc : number[];

  @ApiProperty({ 
    required : true,
   })
  readonly netRev : number[];

  @ApiProperty({ 
    required : true,
   })
  readonly debt : number[];

  @ApiProperty({ 
    required : true,
   })
  readonly loan : number[];

  @ApiProperty({ 
    required : true,
   })
  readonly cfi : number[];

  @ApiProperty({ 
    required : true,
   })
  readonly cfo : number[];

  @ApiProperty({ 
    required : true,
   })
  readonly cff : number[];

  @ApiProperty({ 
    required : true,
   })
  readonly reportDate : string[];

    @ApiProperty({
        required : true,
    })
    readonly adx: string;

    @ApiProperty({
        required : true,
    })
    readonly rsi: string;

    @ApiProperty({
        required : true,
    })
    readonly macd: string;

    @ApiProperty({
        description: 'List of stock codes with rating',
        example: [{ stockCode: 'Ht1', rating: '12/36' }, { stockCode: 'GOOG', rating: '23/76' }],
        required: true,
      })
      readonly stockCodes: { stockCode: string; rating: string }[];


    @ApiProperty({
        description: 'Date created at',
        example: faker.date.recent(),
        required: true,
    })
    readonly createdAt: Date;

    @Exclude()
    readonly updatedAt: Date;
}
