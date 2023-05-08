import { Model, PopulateOptions } from 'mongoose';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk.repository.interface';
import { IDatabaseCreateManyOptions, IDatabaseManyOptions, IDatabaseSoftDeleteManyOptions, IDatabaseRestoreManyOptions } from 'src/common/database/interfaces/database.interface';
export declare abstract class DatabaseMongoBulkRepositoryAbstract<T> implements IDatabaseBulkRepositoryAbstract {
    protected _repository: Model<T>;
    protected _populateOnFind?: PopulateOptions | PopulateOptions[];
    constructor(repository: Model<T>, populateOnFind?: PopulateOptions | PopulateOptions[]);
    createMany<N>(data: N[], options?: IDatabaseCreateManyOptions): Promise<boolean>;
    deleteManyById(_id: string[], options?: IDatabaseManyOptions): Promise<boolean>;
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
    softDeleteManyById(_id: string[], options?: IDatabaseSoftDeleteManyOptions): Promise<boolean>;
    softDeleteMany(find: Record<string, any>, options?: IDatabaseSoftDeleteManyOptions): Promise<boolean>;
    restore(_id: string[], options?: IDatabaseRestoreManyOptions): Promise<boolean>;
    updateMany<N>(find: Record<string, any>, data: N, options?: IDatabaseManyOptions): Promise<boolean>;
}
