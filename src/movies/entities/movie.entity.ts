import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Languages extends Document{
    'Primary language': String;
    'Spoken languages': String[];
}

@Schema()
export class Movie extends Document {
    
    name: String;
    date: Number | ''
    tagline: String;
    description: String;
    minute: Number | '';
    rating: Number | '';
    studios: [String];
    genres: [String];
    languages: Languages | String;
    themes: [String];
    countries: [String];
}

export const MovieSchema = SchemaFactory.createForClass(Movie)

/*
{
  "_id": 1000003,
  "name": "Everything Everywhere All at Once",
  "date": 2022,
  "tagline": "The universe is so much bigger than you realize.",
  "description": "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
  "minute": 140,
  "rating": 4.32,
  "studios": [
    "IAC Films",
    "TPC",
    "Ley Line Entertainment",
    "A24",
    "AGBO",
    "Year of the Rat"
  ],
  "genres": [ "Adventure", "Science Fiction", "Action" ],
  "languages": {
    "Primary language": "English",
    "Spoken languages": [ "Cantonese", "Chinese", "English" ]
  },
  "themes": [
    "Action-packed space and alien sagas",
    "Intense combat and martial arts",
    "Funny jokes and crude humor",
    "Tragic sadness and captivating beauty",
    "Quirky and endearing relationships",
    "Relationship comedy",
    "Epic heroes"
  ],
  "countries": [ "USA" ]
}
*/
