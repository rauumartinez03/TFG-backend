import { PartialType } from '@nestjs/mapped-types';
import { CreateActorsDto } from './create-actors.dto';

export class UpdateActorsDto extends PartialType(CreateActorsDto) {}
