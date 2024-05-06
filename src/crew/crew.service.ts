import { Injectable } from '@nestjs/common';
import { CreateCrewDto } from './dto/create-crew.dto';
import { UpdateCrewMemberDto } from './dto/update-crew-member.dto';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { Crew } from './models/crew.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class CrewService {

  constructor(
    @InjectModel(Crew) private readonly crewModel: ReturnModelType<typeof Crew>
  ){}

  async insertOne(createCrewDto: CreateCrewDto) {
    const createdActors = new this.crewModel(createCrewDto);
    return await createdActors.save();
  }

  async findOne(id: number) {
    return await this.crewModel.findOne({id}).exec();
  }

  async addMember(id: number, updateCrewMemberDto: UpdateCrewMemberDto) {
  //TODO: HANDLE ROLE NO EXISTE

    return await this.crewModel.findOneAndUpdate({id}, {$push: {"crew.$[doc].names": updateCrewMemberDto.name} },
      {arrayFilters: [{"doc.role": updateCrewMemberDto.role}], new: true}).exec();
    //DEVUELVE EL DOCUMENTO, NO EL RESULTADO
  }

  async deleteMember(id: number, updateCrewMemberDto: UpdateCrewMemberDto) {
    //TODO: HANDLE ROLE NO EXISTE

    return await this.crewModel.findOneAndUpdate({id}, {$pop: {"crew.$[doc].names": updateCrewMemberDto.name} },
      {arrayFilters: [{"doc.role": updateCrewMemberDto.role}], new: true}).exec();
    //DEVUELVE EL DOCUMENTO, NO EL RESULTADO
  }

  async remove(id: number) {
    return await this.crewModel.findOneAndDelete({id}).exec();
  }
}
