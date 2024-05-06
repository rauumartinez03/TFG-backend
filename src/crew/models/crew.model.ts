import { Severity, modelOptions, prop } from "@typegoose/typegoose";

class Role{
    @prop()
    role!: String

    @prop({type: () => [String]})
    names!: [String]
}

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Crew {
    @prop({required: true, unique: true})
    id!: Number

    @prop({type: () => [Role]})
    crew!: [Role]
}
