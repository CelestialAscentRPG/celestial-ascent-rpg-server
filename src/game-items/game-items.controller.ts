import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameItemsService } from './game-items.service';
import { CreateGameItemDto } from './dto/create-game-item.dto';
import { UpdateGameItemDto } from './dto/update-game-item.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('游戏道具管理')
@Controller('game-items')
export class GameItemsController {
  constructor(private readonly gameItemsService: GameItemsService) {}

  @Post()
  @ApiOperation({ summary: '创建一个游戏物品' })
  @ApiBody({ type: CreateGameItemDto })
  @ApiResponse({
    status: 200,
    description: '游戏物品创建成功',
    type: CreateGameItemDto,
  })
  create(@Body() createGameItemDto: CreateGameItemDto) {
    return this.gameItemsService.create(createGameItemDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有游戏物品列表' })
  @ApiResponse({
    status: 200,
    description: '成功获取物品列表',
    type: [CreateGameItemDto],
  })
  findAll() {
    return this.gameItemsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '根据ID获取单个游戏物品' })
  @ApiParam({ name: 'id', description: '游戏物品的ID', required: true })
  @ApiResponse({
    status: 200,
    description: '成功获取物品详情',
    type: CreateGameItemDto,
  })
  findOne(@Param('id') id: string) {
    return this.gameItemsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新指定ID的游戏物品' })
  @ApiParam({ name: 'id', description: '游戏物品的ID', required: true })
  @ApiBody({ type: UpdateGameItemDto })
  @ApiResponse({
    status: 200,
    description: '物品更新成功',
    type: UpdateGameItemDto,
  })
  update(
    @Param('id') id: string,
    @Body() updateGameItemDto: UpdateGameItemDto,
  ) {
    return this.gameItemsService.update(+id, updateGameItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除指定ID的游戏物品' })
  @ApiParam({ name: 'id', description: '游戏物品的ID', required: true })
  @ApiResponse({ status: 200, description: '物品删除成功' })
  remove(@Param('id') id: string) {
    return this.gameItemsService.remove(+id);
  }
}
