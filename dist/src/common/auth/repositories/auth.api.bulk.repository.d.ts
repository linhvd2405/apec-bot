import { Model } from 'mongoose';
import { AuthApiDocument } from 'src/common/auth/schemas/auth.api.schema';
import { DatabaseMongoBulkRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-bulk-repository.abstract';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk.repository.interface';
export declare class AuthApiBulkRepository extends DatabaseMongoBulkRepositoryAbstract<AuthApiDocument> implements IDatabaseBulkRepositoryAbstract {
    private readonly authApiModel;
    constructor(authApiModel: Model<AuthApiDocument>);
}
