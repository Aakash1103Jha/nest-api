import { Body, Controller, Post } from '@nestjs/common';

import AuthService from './auth.service';
import LoginDto from './dto/login.dto';

const auth = new AuthService();

@Controller('/auth')
class AuthController {
  @Post('/login')
  login(@Body() { email, password }: LoginDto) {
    auth.loginService(email, password);
  }
  @Post('/register')
  register(@Body() { email, password }: LoginDto) {
    auth.registerService(email, password);
  }
  @Post('/new-key')
  generateApiKey() {
    auth.generateApiKeyService();
  }
}

export default AuthController;
