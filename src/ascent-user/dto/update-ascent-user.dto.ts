import { PartialType } from '@nestjs/swagger';
import { CreateAscentUserDto } from './create-ascent-user.dto';

export class UpdateAscentUserDto extends PartialType(CreateAscentUserDto) {}
