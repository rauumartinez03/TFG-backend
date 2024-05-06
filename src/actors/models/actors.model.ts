import { prop } from "@typegoose/typegoose";

export class Actors {

    @prop({required: true, unique: true})
    id!: Number

    @prop({type: () => [String]})
    actors!: [String]
}
