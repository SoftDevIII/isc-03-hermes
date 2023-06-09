import { Test } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppModule } from '../src/app.module';
import { AppService } from '../src/app.service';
import { ExampleModule } from '../src/example/example.module';

describe('App Module', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule, ExampleModule]
    }).compile();

    expect(module).toBeDefined();
    expect(module.get(AppController)).toBeInstanceOf(AppController);
    expect(module.get(AppService)).toBeInstanceOf(AppService);
  });
});
