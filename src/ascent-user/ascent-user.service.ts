import { Injectable } from '@nestjs/common';
import { CreateAscentUserDto } from './dto/create-ascent-user.dto';
import { UpdateAscentUserDto } from './dto/update-ascent-user.dto';
import { AscentUser } from './entities/ascent-user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AscentUserService {
  constructor(
    @InjectRepository(AscentUser)
    private ascentUserRepository: Repository<AscentUser>,
  ) {}

  async create(createAscentUserDto: CreateAscentUserDto) {
    // 接收一串大写32位MD5字符串，后端先变换为base64，再进行一次MD5加密
    const base64Encoded = Buffer.from(createAscentUserDto.password).toString(
      'base64',
    );
    const hash = CryptoJS.MD5(base64Encoded);
    createAscentUserDto.password = hash.toString().toUpperCase();
    return await this.ascentUserRepository.save(createAscentUserDto);
  }

  async findAll() {
    return await this.ascentUserRepository.find();
  }

  async findOne(id: number) {
    return await this.ascentUserRepository.findOneBy({ id });
  }

  async update(id: number, updateAscentUserDto: UpdateAscentUserDto) {
    return await this.ascentUserRepository.update(id, updateAscentUserDto);
  }

  async remove(id: number) {
    return await this.ascentUserRepository.delete(id);
  }
}
