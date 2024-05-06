import { IsArray, IsInt, IsString } from "class-validator";


export class CreateActorsDto {
    
    @IsInt()
    id!: Number;

    @IsArray()
    @IsString({each: true})
    actors!: [String]
}
