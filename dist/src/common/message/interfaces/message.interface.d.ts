export declare type IMessage = Record<string, string>;
export declare type IMessageOptionsProperties = Record<string, string | number>;
export interface IMessageOptions {
    readonly customLanguages?: string[];
    readonly properties?: IMessageOptionsProperties;
}
export declare type IMessageSetOptions = Omit<IMessageOptions, 'customLanguages'>;
