import { Injectable } from '@nestjs/common';
import { CreateActorsDto } from './dto/create-actors.dto';
import { UpdateActorsDto } from './dto/update-actors.dto';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { Actors } from './models/actors.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ActorsService {

  constructor(
    @InjectModel(Actors) private readonly actorsModel: ReturnModelType<typeof Actors>
  ){}

  async insertOne(createActorsDto: CreateActorsDto) {
    const createdActors = new this.actorsModel(createActorsDto);
    return await createdActors.save();
  }

  async findOne(id: number) {
    return await this.actorsModel.findOne({id}).exec();
  }

  async update(id: number, updateActorsDto: UpdateActorsDto) {
    return await this.actorsModel.findOneAndUpdate({id}, updateActorsDto).exec();
  }

  async remove(id: number) {
    return await this.actorsModel.findOneAndDelete({id}).exec();
  }
}
