import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { AscentUserService } from './ascent-user.service';
import { CreateAscentUserDto } from './dto/create-ascent-user.dto';
import { UpdateAscentUserDto } from './dto/update-ascent-user.dto';

@Controller('ascent-user')
export class AscentUserController {
  constructor(private readonly ascentUserService: AscentUserService) {}

  @Post()
  create(@Body() createAscentUserDto: CreateAscentUserDto) {
    return this.ascentUserService.create(createAscentUserDto);
  }

  @Get()
  findAll() {
    return this.ascentUserService.findAll();
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string) {
    return this.ascentUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAscentUserDto: UpdateAscentUserDto,
  ) {
    return this.ascentUserService.update(+id, updateAscentUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ascentUserService.remove(+id);
  }
}
