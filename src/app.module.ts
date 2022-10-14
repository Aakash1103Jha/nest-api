import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { DmsModule } from './dms/dms.module';

@Module({
  controllers: [AppController],
  imports: [AuthModule, TasksModule, MongooseModule.forRoot(process.env.URI), DmsModule],
})
export class AppModule {}
