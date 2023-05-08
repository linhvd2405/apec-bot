import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { HelperStringService } from 'src/common/helper/services/helper.string.service';
export declare class IsPasswordStrongConstraint implements ValidatorConstraintInterface {
    protected readonly helperStringService: HelperStringService;
    constructor(helperStringService: HelperStringService);
    validate(value: string, args: ValidationArguments): boolean;
}
export declare function IsPasswordStrong(minLength?: number, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => any;