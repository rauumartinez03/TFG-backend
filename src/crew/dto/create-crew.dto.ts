import { Type } from "class-transformer";
import { IsArray, IsInt, IsNotEmpty, IsString, ValidateNested } from "class-validator";

class Role {

    @IsString()
    @IsNotEmpty()
    role: String 

    @IsArray()
    @IsString({each: true})
    names!: [String]
}

export class CreateCrewDto {
    
    @IsInt()
    id!: Number;

    @IsArray()
    @ValidateNested()
    @Type(() => Role)
    crew!: [Role]


}
