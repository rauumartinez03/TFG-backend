import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { Movie } from './models/movie.model';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [TypegooseModule.forFeature([{
    typegooseClass: Movie,
    schemaOptions: {
      versionKey: false
    }
  }])]
})
export class MoviesModule {}
