import { Model } from 'mongoose';
import { DatabaseMongoRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-repository.abstract';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { UserDocument } from 'src/modules/user/schemas/user.schema';
export declare class UserRepository extends DatabaseMongoRepositoryAbstract<UserDocument> implements IDatabaseRepositoryAbstract<UserDocument> {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
}
