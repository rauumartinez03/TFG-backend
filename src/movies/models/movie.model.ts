import { prop } from '@typegoose/typegoose';

export class Languages{
    @prop()
    'Primary language': String;

    @prop({type: () => [String]})
    'Spoken languages': [String];
}

export class Movie {

    @prop({required: true})
    _id!: Number;
    
    @prop({required: true})
    name!: String;

    @prop()
    date?: Number | ''

    @prop()
    tagline?: String;

    @prop()
    description?: String;

    @prop()
    minute?: Number | '';

    @prop()
    rating?: Number | '';

    @prop({type: () => [String]})
    studios?: [String];

    @prop({type: () => [String]})
    genres?: [String];

    @prop()
    languages?: Languages | String;

    @prop({type: () => [String]})
    themes?: [String];

    @prop({type: () => [String]})
    countries?: [String];
}


/* EXAMPLE FOR TESTING
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
