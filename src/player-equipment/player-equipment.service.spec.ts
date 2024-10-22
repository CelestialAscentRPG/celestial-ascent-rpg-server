import { Test, TestingModule } from '@nestjs/testing';
import { PlayerEquipmentService } from './player-equipment.service';

describe('PlayerEquipmentService', () => {
  let service: PlayerEquipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerEquipmentService],
    }).compile();

    service = module.get<PlayerEquipmentService>(PlayerEquipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
