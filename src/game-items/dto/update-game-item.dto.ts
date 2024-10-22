import { PartialType } from '@nestjs/swagger';
import { CreateGameItemDto } from './create-game-item.dto';

export class UpdateGameItemDto extends PartialType(CreateGameItemDto) {}
