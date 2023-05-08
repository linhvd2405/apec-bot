import { IPaginationSort } from 'src/common/pagination/interfaces/pagination.interface';
export declare abstract class PaginationListAbstract {
    abstract search?: Record<string, any>;
    abstract availableSearch?: string[];
    abstract page?: number;
    abstract perPage: number;
    abstract sort?: IPaginationSort;
    abstract availableSort?: string[];
}
export declare abstract class PaginationSimpleListAbstract {
    abstract search?: string;
    abstract page?: number;
    abstract perPage: number;
}
export declare abstract class PaginationMiniListAbstract {
    abstract perPage: number;
}
