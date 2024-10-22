import { Test, TestingModule } from '@nestjs/testing';
import { PlayerEquipmentController } from './player-equipment.controller';
import { PlayerEquipmentService } from './player-equipment.service';

describe('PlayerEquipmentController', () => {
  let controller: PlayerEquipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerEquipmentController],
      providers: [PlayerEquipmentService],
    }).compile();

    controller = module.get<PlayerEquipmentController>(
      PlayerEquipmentController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
