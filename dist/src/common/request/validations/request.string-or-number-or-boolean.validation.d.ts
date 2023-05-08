import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { HelperStringService } from 'src/common/helper/services/helper.string.service';
export declare class StringOrNumberOrBooleanConstraint implements ValidatorConstraintInterface {
    protected readonly helperStringService: HelperStringService;
    constructor(helperStringService: HelperStringService);
    validate(value: string): boolean;
}
export declare function StringOrNumberOrBoolean(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => any;
