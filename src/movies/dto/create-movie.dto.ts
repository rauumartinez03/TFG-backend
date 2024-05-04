import { IsArray, IsDecimal, IsInt, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator";
import { Languages } from "../entities/movie.entity";

export class CreateMovieDto {
    
    @IsInt()
    @IsOptional()
    _id: Number;    
    
    @IsString()
    @MinLength(1)
    name: String;
    
    @IsInt()
    @Min(1900)
    @Max(2100)
    @IsOptional()
    date: Number;    
    
    @IsString()
    @IsOptional()
    tagline: String;    
    
    @IsString()
    @IsOptional()
    description: String;    
    
    @IsInt()
    @IsOptional()
    minute: Number;    
    
    @IsNumber()
    @IsOptional()
    rating: Number;    
    
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    studios: String[];    
    
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    genres: String[];    
    
    @IsOptional()
    languages: Languages | String;    
    
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    themes: String[];
    
    @IsArray()
    @IsString({each: true})
    @IsOptional()
    countries: String[];
}
