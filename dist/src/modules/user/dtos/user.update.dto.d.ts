import { UserCreateDto } from './user.create.dto';
declare const UserUpdateDto_base: import("@nestjs/common").Type<Pick<UserCreateDto, "firstName" | "lastName">>;
export declare class UserUpdateDto extends UserUpdateDto_base {
}
export {};
