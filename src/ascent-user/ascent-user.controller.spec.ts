import { Test, TestingModule } from '@nestjs/testing';
import { AscentUserController } from './ascent-user.controller';
import { AscentUserService } from './ascent-user.service';

describe('AscentUserController', () => {
  let controller: AscentUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AscentUserController],
      providers: [AscentUserService],
    }).compile();

    controller = module.get<AscentUserController>(AscentUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
