import { PartialType } from '@nestjs/mapped-types';
import { CreateReleasesDto } from './create-releases.dto';

export class UpdateReleasesDto extends PartialType(CreateReleasesDto) {}
