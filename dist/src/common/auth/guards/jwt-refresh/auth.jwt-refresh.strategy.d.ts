import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { HelperEncryptionService } from 'src/common/helper/services/helper.encryption.service';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private readonly configService;
    private readonly helperEncryptionService;
    constructor(configService: ConfigService, helperEncryptionService: HelperEncryptionService);
    validate({ data, }: Record<string, any>): Promise<Record<string, any>>;
}
export {};
