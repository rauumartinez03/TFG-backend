import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { Movie } from './models/movie.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class MoviesService {

  constructor(
    @InjectModel(Movie) private readonly movieModel: ReturnModelType<typeof Movie>
  ){}

  async insertOne(createMovieDto: CreateMovieDto) {
    const createdMovie = new this.movieModel(createMovieDto);
    return await createdMovie.save();
  }

  async find() {
    return await this.movieModel.find().limit(20).exec();
  }

  async findById(_id: number) {
    return await this.movieModel.findById(_id).exec();
  }

  async findByName(name: string) {
    return await this.movieModel.findOne({name}).exec();
  }

  async update(_id: number, updateMovieDto: UpdateMovieDto) {
    return await this.movieModel.findByIdAndUpdate(_id, updateMovieDto, {new: true})
  }

  async remove(_id: number) {
    return await this.movieModel.findByIdAndDelete(_id);
  }
}
