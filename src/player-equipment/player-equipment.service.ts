import { Injectable } from '@nestjs/common';
import { CreatePlayerEquipmentDto } from './dto/create-player-equipment.dto';
import { UpdatePlayerEquipmentDto } from './dto/update-player-equipment.dto';

@Injectable()
export class PlayerEquipmentService {
  create(createPlayerEquipmentDto: CreatePlayerEquipmentDto) {
    return 'This action adds a new playerEquipment';
  }

  findAll() {
    return `This action returns all playerEquipment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerEquipment`;
  }

  update(id: number, updatePlayerEquipmentDto: UpdatePlayerEquipmentDto) {
    return `This action updates a #${id} playerEquipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerEquipment`;
  }
}
