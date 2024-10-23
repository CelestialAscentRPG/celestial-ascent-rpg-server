import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DungeonService } from './dungeon.service';
import { CreateDungeonDto } from './dto/create-dungeon.dto';
import { UpdateDungeonDto } from './dto/update-dungeon.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('副本管理')
@Controller('dungeon')
export class DungeonController {
  constructor(private readonly dungeonService: DungeonService) {}

  @Post()
  @ApiOperation({ summary: '创建一个副本' })
  @ApiBody({ type: CreateDungeonDto })
  @ApiResponse({
    status: 200,
    description: '副本创建成功',
    type: CreateDungeonDto,
  })
  create(@Body() createDungeonDto: CreateDungeonDto) {
    return this.dungeonService.create(createDungeonDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有副本列表' })
  @ApiResponse({
    status: 200,
    description: '成功获取副本列表',
    type: [CreateDungeonDto],
  })
  @Get()
  findAll() {
    return this.dungeonService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '根据ID获取单个副本信息' })
  @ApiParam({ name: 'id', description: '副本的ID', required: true })
  @ApiResponse({
    status: 200,
    description: '成功获取副本信息',
    type: CreateDungeonDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dungeonService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新指定ID的副本信息' })
  @ApiParam({ name: 'id', description: '副本的ID', required: true })
  @ApiBody({ type: UpdateDungeonDto })
  @ApiResponse({
    status: 200,
    description: '副本信息更新成功',
    type: UpdateDungeonDto,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDungeonDto: UpdateDungeonDto) {
    return this.dungeonService.update(+id, updateDungeonDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除指定ID的副本' })
  @ApiParam({ name: 'id', description: '副本的ID', required: true })
  @ApiResponse({ status: 200, description: '副本删除成功' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dungeonService.remove(+id);
  }

  @Post('bulk')
  @ApiOperation({ summary: '批量创建副本' })
  @ApiBody({ type: [CreateDungeonDto] })
  @ApiResponse({
    status: 200,
    description: '副本批量创建成功',
    type: [CreateDungeonDto],
  })
  async bulkCreate(@Body() createDungeonDtos: CreateDungeonDto[]) {
    return this.dungeonService.bulkCreate(createDungeonDtos);
  }

  @Patch('bulk')
  @ApiOperation({ summary: '批量更新副本信息' })
  @ApiBody({ type: [UpdateDungeonDto] })
  @ApiResponse({
    status: 200,
    description: '副本信息批量更新成功',
    type: [UpdateDungeonDto],
  })
  async bulkUpdate(@Body() updateDungeonDtos: UpdateDungeonDto[]) {
    return this.dungeonService.bulkUpdate(updateDungeonDtos);
  }
}
