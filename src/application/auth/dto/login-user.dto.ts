import { IsString, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string; // یا اگر OTP هست، نام فیلد رو عوض کن
}
