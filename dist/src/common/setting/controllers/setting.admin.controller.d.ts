import { IResponse } from 'src/common/response/interfaces/response.interface';
import { SettingUpdateDto } from 'src/common/setting/dtos/setting.update.dto';
import { SettingDocument } from 'src/common/setting/schemas/setting.schema';
import { SettingService } from 'src/common/setting/services/setting.service';
export declare class SettingAdminController {
    private readonly settingService;
    constructor(settingService: SettingService);
    update(setting: SettingDocument, body: SettingUpdateDto): Promise<IResponse>;
}
