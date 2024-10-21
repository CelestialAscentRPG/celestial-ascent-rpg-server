import { Injectable } from '@nestjs/common';
import { CreateAscentUserDto } from './dto/create-ascent-user.dto';
import { UpdateAscentUserDto } from './dto/update-ascent-user.dto';

@Injectable()
export class AscentUserService {
  create(createAscentUserDto: CreateAscentUserDto) {
    return 'This action adds a new ascentUser';
  }

  findAll() {
    return `This action returns all ascentUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ascentUser`;
  }

  update(id: number, updateAscentUserDto: UpdateAscentUserDto) {
    return `This action updates a #${id} ascentUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} ascentUser`;
  }
}
