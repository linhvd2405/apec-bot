import { IDatabaseManyOptions } from 'src/common/database/interfaces/database.interface';
import { IAuthApiBulkService } from 'src/common/auth/interfaces/auth.api.bulk-service.interface';
import { AuthApiBulkRepository } from 'src/common/auth/repositories/auth.api.bulk.repository';
export declare class AuthApiBulkService implements IAuthApiBulkService {
    private readonly authApiBulkRepository;
    constructor(authApiBulkRepository: AuthApiBulkRepository);
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
}
