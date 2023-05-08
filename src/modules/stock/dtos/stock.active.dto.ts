import { IsNotEmpty, IsBoolean } from 'class-validator';

export class StockActiveDto {
    @IsBoolean()
    @IsNotEmpty()
    readonly isActive: boolean;
}
