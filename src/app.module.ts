import { Module } from '@nestjs/common';
import { AuthModule } from './infrastructure/http/auth/auth.module';

@Module({
  imports: [AuthModule],
})
export class AppModule {}
