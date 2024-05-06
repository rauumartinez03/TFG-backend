import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { CreateActorsDto } from './dto/create-actors.dto';
import { UpdateActorsDto } from './dto/update-actors.dto';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Post()
  async create(@Body() createActorsDto: CreateActorsDto) {
    return await this.actorsService.insertOne(createActorsDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.actorsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateActorsDto: UpdateActorsDto) {
    return await this.actorsService.update(+id, updateActorsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.actorsService.remove(+id);
  }
}
