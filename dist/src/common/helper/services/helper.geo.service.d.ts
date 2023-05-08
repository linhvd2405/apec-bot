import { IHelperGeoService } from 'src/common/helper/interfaces/helper.geo-service.interface';
import { IHelperGeoCurrent, IHelperGeoRules } from 'src/common/helper/interfaces/helper.interface';
export declare class HelperGeoService implements IHelperGeoService {
    inRadius(geoRule: IHelperGeoRules, geoCurrent: IHelperGeoCurrent): boolean;
}
