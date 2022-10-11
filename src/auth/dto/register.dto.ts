import { IsNotEmpty, IsString, Length } from 'class-validator';

class RegisterDto {
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  @Length(8)
  password: string;
}

export default RegisterDto;
