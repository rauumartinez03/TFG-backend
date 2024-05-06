import { Injectable } from '@nestjs/common';
import { CreateActorsDto } from './dto/create-actors.dto';
import { UpdateActorsDto } from './dto/update-actors.dto';

@Injectable()
export class ActorsService {
  create(createActorsDto: CreateActorsDto) {
    return 'This action adds a new actor';
  }

  findAll() {
    return `This action returns all actors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actor`;
  }

  update(id: number, updateActorsDto: UpdateActorsDto) {
    return `This action updates a #${id} actor`;
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
  }
}
