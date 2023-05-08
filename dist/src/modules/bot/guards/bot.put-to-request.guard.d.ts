import { CanActivate, ExecutionContext } from '@nestjs/common';
import { BotService } from 'src/modules/bot/services/bot.service';
export declare class BotPutToRequestGuard implements CanActivate {
    private readonly botService;
    constructor(botService: BotService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
