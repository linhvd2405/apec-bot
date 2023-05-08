import { Model } from 'mongoose';
import { DatabaseMongoBulkRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-bulk-repository.abstract';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk.repository.interface';
import { UserDocument } from 'src/modules/user/schemas/user.schema';
export declare class UserBulkRepository extends DatabaseMongoBulkRepositoryAbstract<UserDocument> implements IDatabaseBulkRepositoryAbstract {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
}
