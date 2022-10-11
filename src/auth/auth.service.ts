import { Injectable } from '@nestjs/common';

@Injectable()
class AuthService {
  loginService(email: string, password: string) {}
  registerService(email: string, password: string) {}
  generateApiKeyService() {}
}

export default AuthService;
