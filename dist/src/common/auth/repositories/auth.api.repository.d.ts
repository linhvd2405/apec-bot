import { Model } from 'mongoose';
import { AuthApiDocument } from 'src/common/auth/schemas/auth.api.schema';
import { DatabaseMongoRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-repository.abstract';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
export declare class AuthApiRepository extends DatabaseMongoRepositoryAbstract<AuthApiDocument> implements IDatabaseRepositoryAbstract<AuthApiDocument> {
    private readonly authApiModel;
    constructor(authApiModel: Model<AuthApiDocument>);
}
