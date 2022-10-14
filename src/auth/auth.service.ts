import { Injectable } from '@nestjs/common';
import { hash, genSalt, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Error } from 'mongoose';

import AuthRepository from './auth.repository';

@Injectable()
class AuthService {
  constructor(public authRepo: AuthRepository) {}

  async loginService(email: string, password: string) {
    try {
      const _user = await this.authRepo.findUser(email);
      if (!_user)
        return { status: 400, success: false, message: 'User does not exist' };
      const isValidPassword = await compare(password, _user.password);
      if (!isValidPassword)
        return { status: 400, success: false, message: 'Incorrect password' };
      const AUTH_TOKEN = sign(
        { _id: _user._id, email: _user.email },
        process.env.AUTH_SECRET,
        {
          algorithm: 'HS512',
          expiresIn: '1h',
          noTimestamp: false,
        },
      );
      return {
        status: 200,
        success: true,
        message: 'Logged in',
        data: AUTH_TOKEN,
      };
    } catch (error) {
      const { message } = error as Error;
      return { status: 500, success: false, message };
    }
  }

  async registerService(email: string, password: string) {
    try {
      const _user = await this.authRepo.findUser(email);
      if (_user)
        return { status: 400, success: false, message: 'Email already in use' };
      const hashPassword = await hash(password, await genSalt(10));
      const newUser = await this.authRepo.createNewUser(email, hashPassword);
      return {
        status: 200,
        success: true,
        message: 'Signup successful',
        data: newUser._id,
      };
    } catch (error) {
      const { message } = error as Error;
      return { status: 500, success: false, message };
    }
  }

  async generateApiKeyService() {}
}

export default AuthService;
