import { Module } from '@nestjs/common';
import { DmsController } from './dms.controller';
import { DmsRepository } from './dms.repository';
import { DmsService } from './dms.service';

@Module({
  controllers: [DmsController],
  providers: [DmsService, DmsRepository],
})
export class DmsModule {}
