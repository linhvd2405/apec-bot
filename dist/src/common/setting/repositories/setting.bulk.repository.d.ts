import { Model } from 'mongoose';
import { DatabaseMongoBulkRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-bulk-repository.abstract';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk.repository.interface';
import { SettingDocument } from 'src/common/setting/schemas/setting.schema';
export declare class SettingBulkRepository extends DatabaseMongoBulkRepositoryAbstract<SettingDocument> implements IDatabaseBulkRepositoryAbstract {
    private readonly settingModel;
    constructor(settingModel: Model<SettingDocument>);
}
