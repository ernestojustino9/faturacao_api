import { PartialType } from '@nestjs/mapped-types';
import { CreateArmegemartigoDto } from './create-armegemartigo.dto';

export class UpdateArmegemartigoDto extends PartialType(CreateArmegemartigoDto) {}
