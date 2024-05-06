import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CreateCrewDto } from './dto/create-crew.dto';
import { UpdateCrewDto } from './dto/update-crew.dto';

@Controller('crew')
export class CrewController {
  constructor(private readonly crewService: CrewService) {}

  @Post()
  create(@Body() createCrewDto: CreateCrewDto) {
    return this.crewService.create(createCrewDto);
  }

  @Get()
  findAll() {
    return this.crewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrewDto: UpdateCrewDto) {
    return this.crewService.update(+id, updateCrewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crewService.remove(+id);
  }
}
