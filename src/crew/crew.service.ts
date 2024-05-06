import { Injectable } from '@nestjs/common';
import { CreateCrewDto } from './dto/create-crew.dto';
import { UpdateCrewDto } from './dto/update-crew.dto';

@Injectable()
export class CrewService {
  create(createCrewDto: CreateCrewDto) {
    return 'This action adds a new crew';
  }

  findAll() {
    return `This action returns all crew`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crew`;
  }

  update(id: number, updateCrewDto: UpdateCrewDto) {
    return `This action updates a #${id} crew`;
  }

  remove(id: number) {
    return `This action removes a #${id} crew`;
  }
}
