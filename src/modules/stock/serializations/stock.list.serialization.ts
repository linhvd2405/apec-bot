import { PartialType } from '@nestjs/swagger';
import { StockGetSerialization } from './stock.get.serialization';

export class StockListSerialization extends PartialType(
    StockGetSerialization
) {}
