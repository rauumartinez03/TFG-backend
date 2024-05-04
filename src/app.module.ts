import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MoviesModule,
    MongooseModule.forRoot(process.env.MONGO_URI)
  ]
})
export class AppModule {}
