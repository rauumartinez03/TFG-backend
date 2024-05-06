import { Module } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CrewController } from './crew.controller';
import { Crew } from './models/crew.model';
import { TypegooseModule } from '@m8a/nestjs-typegoose';

@Module({
  controllers: [CrewController],
  providers: [CrewService],
  imports: [TypegooseModule.forFeature([{
    typegooseClass: Crew,
    schemaOptions: {
      versionKey: false,
      collection: "crew"
    }
  }])]
})
export class CrewModule {}
