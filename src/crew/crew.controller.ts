import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CreateCrewDto } from './dto/create-crew.dto';
import { UpdateCrewMemberDto } from './dto/update-crew-member.dto';

@Controller('crew')
export class CrewController {
  constructor(private readonly crewService: CrewService) {}

  @Post()
  async create(@Body() createCrewDto: CreateCrewDto) {
    return await this.crewService.insertOne(createCrewDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.crewService.findOne(+id);
  }

  @Patch(':id')
  async addCrewMember(@Param('id') id: string, @Body() updateCrewMemberDto: UpdateCrewMemberDto) {
    return await this.crewService.addMember(+id, updateCrewMemberDto);
  }

  @Patch(':id')
  async deleteCrewMember(@Param('id') id: string, @Body() updateCrewMemberDto: UpdateCrewMemberDto) {
    return await this.crewService.deleteMember(+id, updateCrewMemberDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.crewService.remove(+id);
  }
}
