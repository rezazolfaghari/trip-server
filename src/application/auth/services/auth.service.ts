import { Injectable } from '@nestjs/common';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable()
export class AuthService {
  async login(dto: LoginUserDto) {
    // در اینجا باید کاربر را از دیتابیس بررسی کنیم
    // فعلاً به صورت تستی یک پاسخ برمی‌گردونیم
    if (dto.phone === '09120000000' && dto.password === '123456') {
      return { token: 'fake-jwt-token' };
    }
    throw new Error('Invalid credentials');
  }
}
