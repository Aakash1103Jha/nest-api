import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  controllers: [AppController],
  imports: [AuthModule, TasksModule],
})
export class AppModule {}
