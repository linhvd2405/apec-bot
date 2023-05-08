import { ApiHideProperty } from '@nestjs/swagger';
import { PaginationListAbstract } from 'src/common/pagination/abstracts/pagination.abstract';
import {
    PaginationAvailableSearch,
    PaginationAvailableSort,
    PaginationPage,
    PaginationPerPage,
    PaginationSearch,
    PaginationSort,
} from 'src/common/pagination/decorators/pagination.decorator';
import { IPaginationSort } from 'src/common/pagination/interfaces/pagination.interface';
import {
    STOCK_DEFAULT_AVAILABLE_SEARCH,
    STOCK_DEFAULT_AVAILABLE_SORT,
    STOCK_DEFAULT_PAGE,
    STOCK_DEFAULT_PER_PAGE,
    STOCK_DEFAULT_SORT,
} from 'src/modules/stock/constants/stock.list.constant';

export class StockListDto implements PaginationListAbstract {
    @PaginationSearch(STOCK_DEFAULT_AVAILABLE_SEARCH)
    readonly search: Record<string, any>;

    @ApiHideProperty()
    @PaginationAvailableSearch(STOCK_DEFAULT_AVAILABLE_SEARCH)
    readonly availableSearch: string[];

    @PaginationPage(STOCK_DEFAULT_PAGE)
    readonly page: number;

    @PaginationPerPage(STOCK_DEFAULT_PER_PAGE)
    readonly perPage: number;

    @PaginationSort(STOCK_DEFAULT_SORT, STOCK_DEFAULT_AVAILABLE_SORT)
    readonly sort: IPaginationSort;

    @ApiHideProperty()
    @PaginationAvailableSort(STOCK_DEFAULT_AVAILABLE_SORT)
    readonly availableSort: string[];
}
