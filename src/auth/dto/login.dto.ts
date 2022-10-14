import { IsNotEmpty, IsString, Length } from 'class-validator';

class LoginDto {
  @IsNotEmpty()
  @IsString()
  email: string;
  // @IsNotEmpty()
  @IsString()
  // @Length(8)
  password: string;
}

export default LoginDto;
