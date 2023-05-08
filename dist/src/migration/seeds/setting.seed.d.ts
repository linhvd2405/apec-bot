import { SettingService } from 'src/common/setting/services/setting.service';
import { SettingBulkService } from 'src/common/setting/services/setting.bulk.service';
export declare class SettingSeed {
    private readonly settingService;
    private readonly settingBulkService;
    constructor(settingService: SettingService, settingBulkService: SettingBulkService);
    insert(): Promise<void>;
    remove(): Promise<void>;
}
