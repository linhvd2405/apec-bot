import { IPaginationService } from 'src/common/pagination/interfaces/pagination.service.interface';
export declare class PaginationService implements IPaginationService {
    skip(page: number, perPage: number): Promise<number>;
    totalPage(totalData: number, limit: number): Promise<number>;
}
