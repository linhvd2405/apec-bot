import { IDatabaseManyOptions } from 'src/common/database/interfaces/database.interface';
import { IUserBulkService } from 'src/modules/user/interfaces/user.bulk-service.interface';
import { UserBulkRepository } from 'src/modules/user/repositories/user.bulk.repository';
export declare class UserBulkService implements IUserBulkService {
    private readonly userBulkRepository;
    constructor(userBulkRepository: UserBulkRepository);
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
}
