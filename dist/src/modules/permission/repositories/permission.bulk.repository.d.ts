import { Model } from 'mongoose';
import { DatabaseMongoBulkRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-bulk-repository.abstract';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk.repository.interface';
import { PermissionDocument } from 'src/modules/permission/schemas/permission.schema';
export declare class PermissionBulkRepository extends DatabaseMongoBulkRepositoryAbstract<PermissionDocument> implements IDatabaseBulkRepositoryAbstract {
    private readonly permissionModel;
    constructor(permissionModel: Model<PermissionDocument>);
}
