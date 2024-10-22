import { Test, TestingModule } from '@nestjs/testing';
import { AscentUserService } from './ascent-user.service';

describe('AscentUserService', () => {
  let service: AscentUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AscentUserService],
    }).compile();

    service = module.get<AscentUserService>(AscentUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
