import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { TypegooseModule } from '@m8a/nestjs-typegoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MoviesModule,
    TypegooseModule.forRoot(process.env.MONGO_URI)
  ]
})
export class AppModule {}
