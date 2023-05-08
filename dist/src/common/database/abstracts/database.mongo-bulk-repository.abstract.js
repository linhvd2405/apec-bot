"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMongoBulkRepositoryAbstract = void 0;
const mongoose_1 = require("mongoose");
class DatabaseMongoBulkRepositoryAbstract {
    constructor(repository, populateOnFind) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }
    async createMany(data, options) {
        const create = this._repository.insertMany(data, {
            session: options ? options.session : undefined,
        });
        try {
            await create;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteManyById(_id, options) {
        const map = _id.map((val) => new mongoose_1.Types.ObjectId(val));
        const del = this._repository.deleteMany({
            _id: {
                $in: map,
            },
        });
        if (options && options.withDeleted) {
            del.where('deletedAt').exists(true);
        }
        else {
            del.where('deletedAt').exists(false);
        }
        if (options && options.session) {
            del.session(options.session);
        }
        if (options && options.populate) {
            del.populate(this._populateOnFind);
        }
        try {
            await del;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteMany(find, options) {
        const del = this._repository.deleteMany(find);
        if (options && options.withDeleted) {
            del.where('deletedAt').exists(true);
        }
        else {
            del.where('deletedAt').exists(false);
        }
        if (options && options.session) {
            del.session(options.session);
        }
        if (options && options.populate) {
            del.populate(this._populateOnFind);
        }
        try {
            await del;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async softDeleteManyById(_id, options) {
        const map = _id.map((val) => new mongoose_1.Types.ObjectId(val));
        const softDel = this._repository
            .updateMany({
            _id: {
                $in: map,
            },
        }, {
            $set: {
                deletedAt: new Date(),
            },
        })
            .where('deletedAt')
            .exists(false);
        if (options && options.session) {
            softDel.session(options.session);
        }
        if (options && options.populate) {
            softDel.populate(this._populateOnFind);
        }
        try {
            await softDel;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async softDeleteMany(find, options) {
        const softDel = this._repository
            .updateMany(find, {
            $set: {
                deletedAt: new Date(),
            },
        })
            .where('deletedAt')
            .exists(false);
        if (options && options.session) {
            softDel.session(options.session);
        }
        if (options && options.populate) {
            softDel.populate(this._populateOnFind);
        }
        try {
            await softDel;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async restore(_id, options) {
        const map = _id.map((val) => new mongoose_1.Types.ObjectId(val));
        const rest = this._repository
            .updateMany({
            _id: {
                $in: map,
            },
        }, {
            $set: {
                deletedAt: undefined,
            },
        })
            .where('deletedAt')
            .exists(true);
        if (options && options.session) {
            rest.session(options.session);
        }
        if (options && options.populate) {
            rest.populate(this._populateOnFind);
        }
        try {
            await rest;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async updateMany(find, data, options) {
        const update = this._repository.updateMany(find, {
            $set: data,
        });
        if (options && options.withDeleted) {
            update.where('deletedAt').exists(true);
        }
        else {
            update.where('deletedAt').exists(false);
        }
        if (options && options.session) {
            update.session(options.session);
        }
        if (options && options.populate) {
            update.populate(this._populateOnFind);
        }
        try {
            await update;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
}
exports.DatabaseMongoBulkRepositoryAbstract = DatabaseMongoBulkRepositoryAbstract;
//# sourceMappingURL=database.mongo-bulk-repository.abstract.js.map