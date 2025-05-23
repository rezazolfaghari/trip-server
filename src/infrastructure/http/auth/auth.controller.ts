import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '@/application/auth/services/auth.service';
import { LoginUserDto } from '@/application/auth/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }
}
