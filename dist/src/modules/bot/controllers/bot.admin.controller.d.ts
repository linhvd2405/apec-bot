import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { PermissionService } from 'src/modules/permission/services/permission.service';
import { BotCreateDto } from 'src/modules/bot/dtos/bot.create.dto';
import { BotListDto } from 'src/modules/bot/dtos/bot.list.dto';
import { BotUpdateDto } from 'src/modules/bot/dtos/bot.update.dto';
import { IBotDocument } from 'src/modules/bot/interfaces/bot.interface';
import { BotDocument } from 'src/modules/bot/schemas/bot.schema';
import { BotService } from 'src/modules/bot/services/bot.service';
export declare class BotAdminController {
    private readonly paginationService;
    private readonly botService;
    private readonly permissionService;
    constructor(paginationService: PaginationService, botService: BotService, permissionService: PermissionService);
    list({ page, perPage, sort, search, availableSort, availableSearch, }: BotListDto): Promise<IResponsePaging>;
    get(bot: IBotDocument): Promise<IResponse>;
    create({ name, permissions, accessFor }: BotCreateDto): Promise<IResponse>;
    update(bot: BotDocument, { name, permissions, accessFor }: BotUpdateDto): Promise<IResponse>;
    delete(bot: IBotDocument): Promise<void>;
    inactive(bot: IBotDocument): Promise<void>;
    active(bot: IBotDocument): Promise<void>;
}
