/// <reference types="multer" />
import { ClassConstructor } from 'class-transformer';
export declare type IFile = Express.Multer.File;
export declare type IFileExtract<T = Record<string, any>> = IFile & {
    extract: Record<string, any>[];
    dto?: T[];
};
export interface IFileOptions {
    classDto: ClassConstructor<any>;
}
