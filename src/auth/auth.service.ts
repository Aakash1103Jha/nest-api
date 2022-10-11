import { Injectable } from '@nestjs/common';

import AuthRepository from './auth.repository';

@Injectable()
class AuthService {
  constructor(public authRepo: AuthRepository) {}

  async loginService(email: string, password: string) {}

  async registerService(email: string, password: string) {
    return await this.authRepo.registerUser(email, password);
  }

  async generateApiKeyService() {}
}

export default AuthService;
