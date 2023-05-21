import { Type } from 'class-transformer';
import { IsNotEmpty, IsMongoId } from 'class-validator';

export class StockRequestDto {
    @IsNotEmpty()
    @IsMongoId()
    @Type(() => String)
    stock: string;
}