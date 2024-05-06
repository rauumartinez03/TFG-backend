import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class UpdateCrewMemberDto {
    
    @IsString()
    @IsNotEmpty()
    role: String 

    @IsString()
    @IsNotEmpty()
    name: String
} 
