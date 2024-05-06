import { Test, TestingModule } from '@nestjs/testing';
import { CrewController } from '../crew.controller';
import { CrewService } from '../crew.service';

describe('CrewController', () => {
  let controller: CrewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrewController],
      providers: [CrewService],
    }).compile();

    controller = module.get<CrewController>(CrewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
