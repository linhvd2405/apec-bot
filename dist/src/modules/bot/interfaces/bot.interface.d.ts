import { Types } from 'mongoose';
import { ENUM_AUTH_ACCESS_FOR } from 'src/common/auth/constants/auth.enum.constant';
import { PermissionDocument } from 'src/modules/permission/schemas/permission.schema';
import { BotDocument } from 'src/modules/bot/schemas/bot.schema';
export interface IBotDocument extends Omit<BotDocument, 'permissions'> {
    permissions: PermissionDocument[];
}
export interface IBotUpdate {
    name: string;
    accessFor: ENUM_AUTH_ACCESS_FOR;
    permissions: Types.ObjectId[];
}
