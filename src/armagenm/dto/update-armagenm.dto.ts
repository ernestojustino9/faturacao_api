import { PartialType } from '@nestjs/mapped-types';
import { CreateArmagenmDto } from './create-armagenm.dto';

export class UpdateArmagenmDto extends PartialType(CreateArmagenmDto) {}
