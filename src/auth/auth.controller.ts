import { Body, Controller, Post } from '@nestjs/common';

import AuthService from './auth.service';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';

@Controller('/api/auth')
class AuthController {
  constructor(public authService: AuthService) {}

  @Post('/login')
  async login(@Body() { email, password }: LoginDto) {
    return await this.authService.loginService(email, password);
  }
  @Post('/register')
  async register(@Body() { email, password }: RegisterDto) {
    return await this.authService.registerService(email, password);
  }
  @Post('/new-key')
  async generateApiKey() {
    await this.authService.generateApiKeyService();
  }
}

export default AuthController;
