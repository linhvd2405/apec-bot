import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { SettingListDto } from 'src/common/setting/dtos/setting.list.dto';
import { SettingDocument } from 'src/common/setting/schemas/setting.schema';
import { SettingService } from 'src/common/setting/services/setting.service';
export declare class SettingController {
    private readonly settingService;
    private readonly paginationService;
    constructor(settingService: SettingService, paginationService: PaginationService);
    list({ page, perPage, sort, search, availableSort, availableSearch, }: SettingListDto): Promise<IResponsePaging>;
    get(setting: SettingDocument): Promise<IResponse>;
    getByName(setting: SettingDocument): Promise<IResponse>;
}
