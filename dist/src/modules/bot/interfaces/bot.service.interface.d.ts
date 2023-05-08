import { IDatabaseCreateOptions, IDatabaseSoftDeleteOptions, IDatabaseExistOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseOptions } from 'src/common/database/interfaces/database.interface';
import { BotCreateDto } from 'src/modules/bot/dtos/bot.create.dto';
import { BotUpdateDto } from 'src/modules/bot/dtos/bot.update.dto';
import { BotDocument } from 'src/modules/bot/schemas/bot.schema';
export interface IBotService {
    findAll<T>(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<T[]>;
    findOneById<T>(_id: string, options?: IDatabaseFindOneOptions): Promise<T>;
    findOne<T>(find: Record<string, any>, options?: IDatabaseFindOneOptions): Promise<T>;
    getTotal(find?: Record<string, any>, options?: IDatabaseOptions): Promise<number>;
    exists(name: string, options?: IDatabaseExistOptions): Promise<boolean>;
    create(data: BotCreateDto, options?: IDatabaseCreateOptions): Promise<BotDocument>;
    createSuperAdmin(options?: IDatabaseOptions): Promise<BotDocument>;
    update(_id: string, data: BotUpdateDto, options?: IDatabaseOptions): Promise<BotDocument>;
    inactive(_id: string, options?: IDatabaseOptions): Promise<BotDocument>;
    active(_id: string, options?: IDatabaseOptions): Promise<BotDocument>;
    deleteOneById(_id: string, options?: IDatabaseSoftDeleteOptions): Promise<BotDocument>;
    deleteOne(find: Record<string, any>, options?: IDatabaseSoftDeleteOptions): Promise<BotDocument>;
}
