export declare class AuthApiCreateDto {
    name: string;
    description?: string;
}
declare const AuthApiCreateRawDto_base: import("@nestjs/common").Type<Partial<AuthApiCreateDto>>;
export declare class AuthApiCreateRawDto extends AuthApiCreateRawDto_base {
    key: string;
    secret: string;
    passphrase: string;
    encryptionKey: string;
}
export {};
