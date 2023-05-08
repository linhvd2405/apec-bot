import { IDatabaseCreateManyOptions, IDatabaseManyOptions } from 'src/common/database/interfaces/database.interface';
import { BotCreateDto } from 'src/modules/bot/dtos/bot.create.dto';
export interface IBotBulkService {
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
    createMany(data: BotCreateDto[], options?: IDatabaseCreateManyOptions): Promise<boolean>;
}
