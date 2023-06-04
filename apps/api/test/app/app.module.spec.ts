import { Test } from '@nestjs/testing';
import { AppController } from '../../src/app/app.controller';
import { AppModule } from '../../src/app/app.module';
import { AppService } from '../../src/app/app.service';

describe('App Module', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    expect(module).toBeDefined();
    expect(module.get(AppController)).toBeInstanceOf(AppController);
    expect(module.get(AppService)).toBeInstanceOf(AppService);
  });
});
