import { Test, TestingModule } from '@nestjs/testing';
import { TherapyController } from './therapy.controller';

describe('TherapyController', () => {
  let controller: TherapyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TherapyController],
    }).compile();

    controller = module.get<TherapyController>(TherapyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
