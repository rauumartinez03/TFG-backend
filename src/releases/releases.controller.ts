import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReleasesService } from './releases.service';
import { CreateReleasesDto } from './dto/create-releases.dto';
import { UpdateReleasesDto } from './dto/update-releases.dto';

@Controller('releases')
export class ReleasesController {
  constructor(private readonly releasesService: ReleasesService) {}

  @Post()
  create(@Body() createReleasesDto: CreateReleasesDto) {
    return this.releasesService.create(createReleasesDto);
  }

  @Get()
  findAll() {
    return this.releasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.releasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReleasesDto: UpdateReleasesDto) {
    return this.releasesService.update(+id, updateReleasesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.releasesService.remove(+id);
  }
}
