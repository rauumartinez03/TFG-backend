import { Injectable } from '@nestjs/common';
import { CreateReleasesDto } from './dto/create-releases.dto';
import { UpdateReleasesDto } from './dto/update-releases.dto';

@Injectable()
export class ReleasesService {
  create(createReleasesDto: CreateReleasesDto) {
    return 'This action adds a new release';
  }

  findAll() {
    return `This action returns all releases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} release`;
  }

  update(id: number, updateReleasesDto: UpdateReleasesDto) {
    return `This action updates a #${id} release`;
  }

  remove(id: number) {
    return `This action removes a #${id} release`;
  }
}
