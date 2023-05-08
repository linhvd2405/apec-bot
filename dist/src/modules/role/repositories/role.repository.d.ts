import { Model } from 'mongoose';
import { DatabaseMongoRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-repository.abstract';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { RoleDocument } from 'src/modules/role/schemas/role.schema';
export declare class RoleRepository extends DatabaseMongoRepositoryAbstract<RoleDocument> implements IDatabaseRepositoryAbstract<RoleDocument> {
    private readonly roleModel;
    constructor(roleModel: Model<RoleDocument>);
}
