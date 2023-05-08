declare const JwtGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtGuard extends JwtGuard_base {
    handleRequest<TUser = any>(err: Record<string, any>, user: TUser, info: any): TUser;
}
export {};
