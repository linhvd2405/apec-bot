import { IDatabaseCreateManyOptions, IDatabaseManyOptions } from 'src/common/database/interfaces/database.interface';
import { BotCreateDto } from 'src/modules/bot/dtos/bot.create.dto';
import { IBotBulkService } from 'src/modules/bot/interfaces/bot.bulk-service.interface';
import { BotBulkRepository } from 'src/modules/bot/repositories/bot.bulk.repository';
export declare class BotBulkService implements IBotBulkService {
    private readonly botBulkRepository;
    constructor(botBulkRepository: BotBulkRepository);
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
    createMany(data: BotCreateDto[], options?: IDatabaseCreateManyOptions): Promise<boolean>;
}
