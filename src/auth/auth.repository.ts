import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthDocument } from './auth.schema';
import { Model } from 'mongoose';

@Injectable()
class AuthRepository {
  constructor(@InjectModel('auth') private authModel: Model<AuthDocument>) {}

  async findUser(email: string) {
    const _user = await this.authModel.findOne({ email });
    return _user;
  }

  async createNewUser(email: string, password: string) {
    const _user = new this.authModel({
      email,
      password,
    });
    return await _user.save();
  }

  async generateApiKey(email: string) {}
}

export default AuthRepository;
