import { Model } from 'mongoose';
import { DatabaseMongoRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-repository.abstract';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { SettingDocument } from 'src/common/setting/schemas/setting.schema';
export declare class SettingRepository extends DatabaseMongoRepositoryAbstract<SettingDocument> implements IDatabaseRepositoryAbstract<SettingDocument> {
    private readonly settingModel;
    constructor(settingModel: Model<SettingDocument>);
}
