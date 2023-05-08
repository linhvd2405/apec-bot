import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { HelperArrayService } from 'src/common/helper/services/helper.array.service';
export declare class AuthPayloadAccessForGuard implements CanActivate {
    private reflector;
    private readonly helperArrayService;
    constructor(reflector: Reflector, helperArrayService: HelperArrayService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
