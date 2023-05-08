import { Model } from 'mongoose';
import { DatabaseMongoRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-repository.abstract';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { PermissionDocument } from 'src/modules/permission/schemas/permission.schema';
export declare class PermissionRepository extends DatabaseMongoRepositoryAbstract<PermissionDocument> implements IDatabaseRepositoryAbstract<PermissionDocument> {
    private readonly permissionModel;
    constructor(permissionModel: Model<PermissionDocument>);
}
