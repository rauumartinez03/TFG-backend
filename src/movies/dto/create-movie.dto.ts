import { IsArray, IsInt, IsOptional, IsString, MinLength, Validate, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Languages } from "../models/movie.model";


@ValidatorConstraint({name: "Languages-or-string", async: false})
export class IsLanguagesOrString implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return typeof value === "string" || typeof value === "object";
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return '($value) must be Languages or string';
    }
}

@ValidatorConstraint({name: "Number-or-String", async: false})
export class IsNumberOrString implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return typeof value === "string" || typeof value === "number";
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return '($value) must be number or string';
    }
}

export class CreateMovieDto {
    
    @IsInt()
    _id!: Number;    
    
    @IsString()
    @MinLength(1)
    name!: String;
    
    @Validate(IsNumberOrString)
    @IsOptional()
    date?: Number | '';    
    
    @IsString()
    @IsOptional()
    tagline?: String;    
    
    @IsString()
    @IsOptional()
    description?: String;    
    
    @Validate(IsNumberOrString)
    @IsOptional()
    minute?: Number | '';    
    
    @Validate(IsNumberOrString)
    @IsOptional()
    rating?: Number | '';    
    
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    studios?: [String];    
    
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    genres?: [String];    
    

    @Validate(IsLanguagesOrString)
    @IsOptional()
    languages?: Languages | String;    
    
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    themes?: [String];
    
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    countries?: [String];
}

