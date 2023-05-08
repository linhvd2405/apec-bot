import { IMessageEnumService } from 'src/common/message/interfaces/message.enum-service.interface';
export declare class MessageEnumService implements IMessageEnumService {
    getLanguages(): Promise<string[]>;
}
