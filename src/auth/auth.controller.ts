import { Body, Controller, Post } from '@nestjs/common';

import AuthService from './auth.service';
import LoginDto from './dto/login.dto';

const auth = new AuthService();

@Controller('/auth')
class AuthController {
  @Post('/login')
  async login(@Body() { email, password }: LoginDto) {
    await auth.loginService(email, password);
  }
  @Post('/register')
  async register(@Body() { email, password }: LoginDto) {
    await auth.registerService(email, password);
  }
  @Post('/new-key')
  async generateApiKey() {
    await auth.generateApiKeyService();
  }
}

export default AuthController;
