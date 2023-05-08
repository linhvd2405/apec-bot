import { IDatabaseCreateOptions, IDatabaseSoftDeleteOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseOptions } from 'src/common/database/interfaces/database.interface';
import { HelperStringService } from 'src/common/helper/services/helper.string.service';
import { SettingCreateDto } from 'src/common/setting/dtos/setting.create.dto';
import { SettingUpdateDto } from 'src/common/setting/dtos/setting.update.dto';
import { ISettingService } from 'src/common/setting/interfaces/setting.service.interface';
import { SettingRepository } from 'src/common/setting/repositories/setting.repository';
import { SettingDocument } from 'src/common/setting/schemas/setting.schema';
export declare class SettingService implements ISettingService {
    private readonly settingRepository;
    private readonly helperStringService;
    constructor(settingRepository: SettingRepository, helperStringService: HelperStringService);
    findAll(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<SettingDocument[]>;
    findOneById(_id: string, options?: IDatabaseFindOneOptions): Promise<SettingDocument>;
    findOneByName(name: string, options?: IDatabaseFindOneOptions): Promise<SettingDocument>;
    getTotal(find?: Record<string, any>, options?: IDatabaseOptions): Promise<number>;
    create({ name, description, value }: SettingCreateDto, options?: IDatabaseCreateOptions): Promise<SettingDocument>;
    updateOneById(_id: string, { description, value }: SettingUpdateDto, options?: IDatabaseOptions): Promise<SettingDocument>;
    deleteOne(find: Record<string, any>, options?: IDatabaseSoftDeleteOptions): Promise<SettingDocument>;
    convertValue(value: string): Promise<string | number | boolean>;
}
