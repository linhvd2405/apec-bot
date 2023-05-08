import { BotService } from 'src/modules/bot/services/bot.service';
import { BotBulkService } from 'src/modules/bot/services/bot.bulk.service';
import { PermissionService } from 'src/modules/permission/services/permission.service';
export declare class BotSeed {
    private readonly permissionService;
    private readonly botBulkService;
    private readonly botService;
    constructor(permissionService: PermissionService, botBulkService: BotBulkService, botService: BotService);
    insert(): Promise<void>;
    remove(): Promise<void>;
}
