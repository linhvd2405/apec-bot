import { ConfigService } from '@nestjs/config';
import { ValidationError } from 'class-validator';
import { I18nService } from 'nestjs-i18n';
import { IErrors, IErrorsImport, IValidationErrorImport } from 'src/common/error/interfaces/error.interface';
import { IMessage, IMessageOptions, IMessageSetOptions } from 'src/common/message/interfaces/message.interface';
import { IMessageService } from 'src/common/message/interfaces/message.service.interface';
export declare class MessageService implements IMessageService {
    private readonly i18n;
    private readonly configService;
    private readonly defaultLanguage;
    constructor(i18n: I18nService, configService: ConfigService);
    setMessage(lang: string, key: string, options?: IMessageSetOptions): any;
    getRequestErrorsMessage(requestErrors: ValidationError[], customLanguages?: string[]): Promise<IErrors[]>;
    getImportErrorsMessage(errors: IValidationErrorImport[], customLanguages?: string[]): Promise<IErrorsImport[]>;
    get(key: string, options?: IMessageOptions): Promise<string | IMessage>;
}
