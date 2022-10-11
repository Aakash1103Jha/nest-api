import { Injectable } from '@nestjs/common';

@Injectable()
class AuthService {
  async loginService(email: string, password: string) {}
  async registerService(email: string, password: string) {}
  async generateApiKeyService() {}
}

export default AuthService;
