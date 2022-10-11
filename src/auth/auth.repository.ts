import { Injectable } from '@nestjs/common';

@Injectable()
class AuthRepository {
  async findUser(email: string) {}

  async loginUser(email: string, password: string) {}

  async registerUser(email: string, password: string) {
    return { user: { email, password }, success: true };
  }

  async generateApiKey(email: string) {}
}

export default AuthRepository;
