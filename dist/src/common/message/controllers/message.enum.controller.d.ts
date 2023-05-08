import { MessageEnumService } from 'src/common/message/services/message.enum.service';
import { IResponse } from 'src/common/response/interfaces/response.interface';
export declare class MessageEnumController {
    private readonly messageEnumService;
    constructor(messageEnumService: MessageEnumService);
    languages(): Promise<IResponse>;
}
