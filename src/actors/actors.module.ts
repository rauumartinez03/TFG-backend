import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controller';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { Actors } from './models/actors.model';

@Module({
  controllers: [ActorsController],
  providers: [ActorsService],
  imports: [TypegooseModule.forFeature([{
    typegooseClass: Actors,
    schemaOptions: {
      versionKey: false
    }
  }])]
})
export class ActorsModule {}
