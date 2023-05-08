import Strategy from 'passport-headerapikey';
import { AuthApiDocument } from 'src/common/auth/schemas/auth.api.schema';
import { AuthApiService } from 'src/common/auth/services/auth.api.service';
declare const ApiKeyStrategy_base: new (...args: any[]) => Strategy;
export declare class ApiKeyStrategy extends ApiKeyStrategy_base {
    private readonly authApiService;
    constructor(authApiService: AuthApiService);
    validate(apiKey: string, verified: (error: Error, user?: AuthApiDocument, info?: string | number) => Promise<void>, req: any): Promise<void>;
}
export {};
