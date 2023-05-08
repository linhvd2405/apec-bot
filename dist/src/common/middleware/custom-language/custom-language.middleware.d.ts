import { NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response, NextFunction } from 'express';
import { HelperArrayService } from 'src/common/helper/services/helper.array.service';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';
export declare class CustomLanguageMiddleware implements NestMiddleware {
    private readonly helperArrayService;
    private readonly configService;
    constructor(helperArrayService: HelperArrayService, configService: ConfigService);
    use(req: IRequestApp, res: Response, next: NextFunction): Promise<void>;
}
