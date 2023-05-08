import { PaginationListAbstract } from 'src/common/pagination/abstracts/pagination.abstract';
import { IPaginationSort } from 'src/common/pagination/interfaces/pagination.interface';
export declare class StockListDto implements PaginationListAbstract {
    readonly search: Record<string, any>;
    readonly availableSearch: string[];
    readonly page: number;
    readonly perPage: number;
    readonly sort: IPaginationSort;
    readonly availableSort: string[];
}
