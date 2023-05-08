/// <reference types="node" />
import { IHelperFileService } from 'src/common/helper/interfaces/helper.file-service.interface';
import { IHelperFileExcelRows } from 'src/common/helper/interfaces/helper.interface';
export declare class HelperFileService implements IHelperFileService {
    writeExcel(rows: IHelperFileExcelRows[], options?: Record<string, any>): Buffer;
    readExcel(file: Buffer): IHelperFileExcelRows[];
    convertToBytes(megabytes: string): number;
}
