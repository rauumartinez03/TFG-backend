import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Languages extends Document{
    'Primary language': String;
    'Spoken languages': String[];
}

@Schema()
export class Movie extends Document {
    
    @Prop({required: true})
    name: String;
    
    @Prop({default: ''})
    date: Number;
    
    @Prop({default: ''})
    tagline: String;
    
    @Prop({default: ''})
    description: String;
    
    @Prop({default: ''})
    minute: Number;
    
    @Prop({default: ''})
    rating: Number;
    
    @Prop({default: ['']})
    studios: String[];
    
    @Prop({default: ['']})
    genres: String[];
    
    @Prop({type: Languages, default: ''})
    languages: Languages | String;
    
    @Prop({default: ['']})
    themes: String[];
    
    @Prop({default: ['']})
    countries: String[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie)
