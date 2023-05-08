import { ConfigService } from '@nestjs/config';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { HelperService } from 'src/common/helper/services/helper.service';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { IResult } from 'ua-parser-js';
export declare class AppController {
    private readonly configService;
    private readonly helperDateService;
    private readonly helperService;
    constructor(configService: ConfigService, helperDateService: HelperDateService, helperService: HelperService);
    hello(userAgent: IResult): Promise<IResponse>;
    helloTimeout(): Promise<IResponse>;
}
