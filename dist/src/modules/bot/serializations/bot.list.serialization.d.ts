import { Types } from 'mongoose';
import { BotGetSerialization } from './bot.get.serialization';
declare const BotListSerialization_base: import("@nestjs/common").Type<Omit<BotGetSerialization, "permissions">>;
export declare class BotListSerialization extends BotListSerialization_base {
    readonly permissions: Types.ObjectId;
}
export {};
