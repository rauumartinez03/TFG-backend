import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { CreateActorsDto } from './dto/create-actors.dto';
import { UpdateActorsDto } from './dto/update-actors.dto';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Post()
  create(@Body() createActorDto: CreateActorsDto) {
    return this.actorsService.create(createActorDto);
  }

  @Get()
  findAll() {
    return this.actorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorsDto) {
    return this.actorsService.update(+id, updateActorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actorsService.remove(+id);
  }
}
