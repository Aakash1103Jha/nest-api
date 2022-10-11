class AuthRepository {
  async findUser(email: string) {}
  async loginUser(email: string, password: string) {}
  async registerUser(email: string, password: string) {}
  async generateApiKey(email: string) {}
}
