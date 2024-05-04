import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [ConfigModule.forRoot(), MoviesModule]
})
export class AppModule {}
