import { IMessage } from 'src/common/message/interfaces/message.interface';
export declare class ResponseDefaultSerialization<T = Record<string, any>> {
    statusCode: number;
    message: string | IMessage;
    metadata?: Record<string, any>;
    data?: T;
}
