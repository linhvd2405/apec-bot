import { AuthApiService } from 'src/common/auth/services/auth.api.service';
import { AuthApiBulkService } from 'src/common/auth/services/auth.api.bulk.service';
export declare class AuthApiSeed {
    private readonly authApiService;
    private readonly authApiBulkService;
    constructor(authApiService: AuthApiService, authApiBulkService: AuthApiBulkService);
    insert(): Promise<void>;
    remove(): Promise<void>;
}
