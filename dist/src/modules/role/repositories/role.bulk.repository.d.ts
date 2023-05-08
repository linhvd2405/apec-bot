import { Model } from 'mongoose';
import { DatabaseMongoBulkRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-bulk-repository.abstract';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk.repository.interface';
import { RoleDocument } from 'src/modules/role/schemas/role.schema';
export declare class RoleBulkRepository extends DatabaseMongoBulkRepositoryAbstract<RoleDocument> implements IDatabaseBulkRepositoryAbstract {
    private readonly roleModel;
    constructor(roleModel: Model<RoleDocument>);
}
