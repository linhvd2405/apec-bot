import { ClientSession } from 'mongoose';
import { IPaginationOptions } from 'src/common/pagination/interfaces/pagination.interface';
export interface IDatabaseFindOneOptions extends Pick<IPaginationOptions, 'sort'> {
    select?: Record<string, number> | Record<string, string>;
    populate?: boolean;
    session?: ClientSession;
    withDeleted?: boolean;
}
export declare type IDatabaseOptions = Pick<IDatabaseFindOneOptions, 'session' | 'withDeleted' | 'populate'>;
export declare type IDatabaseAggregateOptions = Omit<IDatabaseOptions, 'populate'>;
export interface IDatabaseFindAllAggregateOptions extends IPaginationOptions, IDatabaseAggregateOptions {
}
export interface IDatabaseGetTotalAggregateOptions extends IDatabaseOptions {
    field?: Record<string, string> | string;
    sumField?: string;
}
export interface IDatabaseFindAllOptions extends IPaginationOptions, Omit<IDatabaseFindOneOptions, 'sort'> {
}
export interface IDatabaseCreateOptions extends Omit<IDatabaseOptions, 'withDeleted' | 'populate'> {
    _id?: string;
}
export interface IDatabaseExistOptions extends IDatabaseOptions {
    excludeId?: string;
}
export declare type IDatabaseSoftDeleteOptions = Pick<IDatabaseFindOneOptions, 'session' | 'populate'>;
export declare type IDatabaseRestoreOptions = IDatabaseSoftDeleteOptions;
export declare type IDatabaseManyOptions = IDatabaseOptions;
export declare type IDatabaseCreateManyOptions = Pick<IDatabaseFindOneOptions, 'session'>;
export declare type IDatabaseSoftDeleteManyOptions = Pick<IDatabaseFindOneOptions, 'session' | 'populate'>;
export declare type IDatabaseRestoreManyOptions = Pick<IDatabaseFindOneOptions, 'session' | 'populate'>;
