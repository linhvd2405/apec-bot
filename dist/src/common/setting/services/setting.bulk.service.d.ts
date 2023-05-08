import { IDatabaseManyOptions } from 'src/common/database/interfaces/database.interface';
import { ISettingBulkService } from 'src/common/setting/interfaces/setting.bulk-service.interface';
import { SettingBulkRepository } from 'src/common/setting/repositories/setting.bulk.repository';
export declare class SettingBulkService implements ISettingBulkService {
    private readonly settingBulkRepository;
    constructor(settingBulkRepository: SettingBulkRepository);
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
}
