import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsController } from './controllers/bootcamps.controller';



@Module({
  imports: [],
  controllers: [AppController, BootcampsController],
  providers: [AppService],
})
export class AppModule {}
