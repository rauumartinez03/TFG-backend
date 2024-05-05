import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    return await this.moviesService.insertOne(createMovieDto);
  }

  @Get()
  async find() {
    return await this.moviesService.find();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.moviesService.findById(+id);
  }

  @Get()
  async findByName(@Query('name') name: string) {
    return await this.moviesService.findByName(name);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return await this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.moviesService.remove(+id);
  }
}
