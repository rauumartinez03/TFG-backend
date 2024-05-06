import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { CrewModule } from './crew/crew.module';
import { ActorsModule } from './actors/actors.module';
import { ReleasesModule } from './releases/releases.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRoot(process.env.MONGO_URI),
    MoviesModule,
    CrewModule,
    ActorsModule,
    ReleasesModule
  ]
})
export class AppModule {}
