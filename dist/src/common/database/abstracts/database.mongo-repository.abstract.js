"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMongoRepositoryAbstract = void 0;
const mongoose_1 = require("mongoose");
class DatabaseMongoRepositoryAbstract {
    constructor(repository, populateOnFind) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }
    async findAll(find, options) {
        const findAll = this._repository.find(find);
        if (options && options.withDeleted) {
            findAll.where('deletedAt').exists(true);
        }
        else {
            findAll.where('deletedAt').exists(false);
        }
        if (options && options.select) {
            findAll.select(options.select);
        }
        if (options &&
            options.limit !== undefined &&
            options.skip !== undefined) {
            findAll.limit(options.limit).skip(options.skip);
        }
        if (options && options.sort) {
            findAll.sort(options.sort);
        }
        if (options && options.populate) {
            findAll.populate(this._populateOnFind);
        }
        if (options && options.session) {
            findAll.session(options.session);
        }
        return findAll.lean();
    }
    async findAllAggregate(pipeline, options) {
        if (options && options.withDeleted) {
            pipeline.push({
                $match: {
                    deletedAt: { $exists: true },
                },
            });
        }
        else {
            pipeline.push({
                $match: {
                    deletedAt: { $exists: false },
                },
            });
        }
        if (options &&
            options.limit !== undefined &&
            options.skip !== undefined) {
            pipeline.push({
                $skip: options.skip,
            });
            pipeline.push({
                $limit: options.limit,
            });
        }
        if (options && options.sort) {
            pipeline.push({
                $sort: options.sort,
            });
        }
        const aggregate = this._repository.aggregate(pipeline);
        if (options && options.session) {
            aggregate.session(options.session);
        }
        return aggregate;
    }
    async findOne(find, options) {
        const findOne = this._repository.findOne(find);
        if (options && options.withDeleted) {
            findOne.where('deletedAt').exists(true);
        }
        else {
            findOne.where('deletedAt').exists(false);
        }
        if (options && options.select) {
            findOne.select(options.select);
        }
        if (options && options.populate) {
            findOne.populate(this._populateOnFind);
        }
        if (options && options.session) {
            findOne.session(options.session);
        }
        if (options && options.sort) {
            findOne.sort(options.sort);
        }
        return findOne.lean();
    }
    async findOneById(_id, options) {
        const findOne = this._repository.findById(_id);
        if (options && options.withDeleted) {
            findOne.where('deletedAt').exists(true);
        }
        else {
            findOne.where('deletedAt').exists(false);
        }
        if (options && options.select) {
            findOne.select(options.select);
        }
        if (options && options.populate) {
            findOne.populate(this._populateOnFind);
        }
        if (options && options.session) {
            findOne.session(options.session);
        }
        if (options && options.sort) {
            findOne.sort(options.sort);
        }
        return findOne.lean();
    }
    async findOneAggregate(pipeline, options) {
        if (options && options.withDeleted) {
            pipeline.push({
                $match: {
                    deletedAt: { $exists: true },
                },
            });
        }
        else {
            pipeline.push({
                $match: {
                    deletedAt: { $exists: false },
                },
            });
        }
        pipeline.push({
            $limit: 1,
        });
        const aggregate = this._repository.aggregate(pipeline);
        if (options && options.session) {
            aggregate.session(options.session);
        }
        const findOne = await aggregate;
        return findOne && findOne.length > 0 ? findOne[0] : undefined;
    }
    async getTotal(find, options) {
        const count = this._repository.countDocuments(find);
        if (options && options.withDeleted) {
            count.where('deletedAt').exists(true);
        }
        else {
            count.where('deletedAt').exists(false);
        }
        if (options && options.session) {
            count.session(options.session);
        }
        if (options && options.populate) {
            count.populate(this._populateOnFind);
        }
        return count;
    }
    async getTotalAggregate(pipeline, options) {
        if (options && options.withDeleted) {
            pipeline.push({
                $match: {
                    deletedAt: { $exists: true },
                },
            });
        }
        else {
            pipeline.push({
                $match: {
                    deletedAt: { $exists: false },
                },
            });
        }
        pipeline.push({
            $group: {
                _id: options && options.field ? options.field : null,
                count: {
                    $sum: options && options.sumField ? options.sumField : 1,
                },
            },
        });
        const aggregate = this._repository.aggregate(pipeline);
        if (options && options.session) {
            aggregate.session(options.session);
        }
        const count = await aggregate;
        return count && count.length > 0 ? count[0].count : 0;
    }
    async exists(find, options) {
        const exist = this._repository.exists({
            ...find,
            _id: {
                $nin: options && options.excludeId
                    ? options.excludeId
                    : undefined,
            },
        });
        if (options && options.withDeleted) {
            exist.where('deletedAt').exists(true);
        }
        else {
            exist.where('deletedAt').exists(false);
        }
        if (options && options.session) {
            exist.session(options.session);
        }
        if (options && options.populate) {
            exist.populate(this._populateOnFind);
        }
        const result = await exist;
        return result ? true : false;
    }
    async aggregate(pipeline, options) {
        if (options && options.withDeleted) {
            pipeline.push({
                $match: {
                    deletedAt: { $exists: true },
                },
            });
        }
        else {
            pipeline.push({
                $match: {
                    deletedAt: { $exists: false },
                },
            });
        }
        const aggregate = this._repository.aggregate(pipeline);
        if (options && options.session) {
            aggregate.session(options.session);
        }
        return aggregate;
    }
    async create(data, options) {
        const dataCreate = data;
        if (options && options._id) {
            dataCreate._id = new mongoose_1.Types.ObjectId(options._id);
        }
        const create = await this._repository.create([dataCreate], {
            session: options ? options.session : undefined,
        });
        return create[0];
    }
    async updateOneById(_id, data, options) {
        const update = this._repository.findByIdAndUpdate(_id, {
            $set: data,
        }, { new: true });
        if (options && options.withDeleted) {
            update.where('deletedAt').exists(true);
        }
        else {
            update.where('deletedAt').exists(false);
        }
        if (options && options.populate) {
            update.populate(this._populateOnFind);
        }
        if (options && options.session) {
            update.session(options.session);
        }
        return update;
    }
    async updateOne(find, data, options) {
        const update = this._repository.findOneAndUpdate(find, {
            $set: data,
        }, { new: true });
        if (options && options.withDeleted) {
            update.where('deletedAt').exists(true);
        }
        else {
            update.where('deletedAt').exists(false);
        }
        if (options && options.populate) {
            update.populate(this._populateOnFind);
        }
        if (options && options.session) {
            update.session(options.session);
        }
        return update;
    }
    async deleteOne(find, options) {
        const del = this._repository.findOneAndDelete(find, { new: true });
        if (options && options.withDeleted) {
            del.where('deletedAt').exists(true);
        }
        else {
            del.where('deletedAt').exists(false);
        }
        if (options && options.populate) {
            del.populate(this._populateOnFind);
        }
        if (options && options.session) {
            del.session(options.session);
        }
        return del;
    }
    async deleteOneById(_id, options) {
        const del = this._repository.findByIdAndDelete(_id, { new: true });
        if (options && options.withDeleted) {
            del.where('deletedAt').exists(true);
        }
        else {
            del.where('deletedAt').exists(false);
        }
        if (options && options.populate) {
            del.populate(this._populateOnFind);
        }
        if (options && options.session) {
            del.session(options.session);
        }
        return del;
    }
    async softDeleteOneById(_id, options) {
        const del = this._repository
            .findByIdAndUpdate(_id, {
            $set: { deletedAt: new Date() },
        }, { new: true })
            .where('deletedAt')
            .exists(false);
        if (options && options.populate) {
            del.populate(this._populateOnFind);
        }
        if (options && options.session) {
            del.session(options.session);
        }
        return del;
    }
    async softDeleteOne(find, options) {
        const del = this._repository
            .findOneAndUpdate(find, {
            $set: { deletedAt: new Date() },
        }, { new: true })
            .where('deletedAt')
            .exists(false);
        if (options && options.populate) {
            del.populate(this._populateOnFind);
        }
        if (options && options.session) {
            del.session(options.session);
        }
        return del;
    }
    async restore(_id, options) {
        const rest = this._repository
            .findByIdAndUpdate(_id, {
            $set: { deletedAt: undefined },
        }, { new: true })
            .where('deletedAt')
            .exists(true);
        if (options && options.populate) {
            rest.populate(this._populateOnFind);
        }
        if (options && options.session) {
            rest.session(options.session);
        }
        return rest;
    }
}
exports.DatabaseMongoRepositoryAbstract = DatabaseMongoRepositoryAbstract;
//# sourceMappingURL=database.mongo-repository.abstract.js.map