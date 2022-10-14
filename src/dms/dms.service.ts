import { Injectable } from '@nestjs/common';
import { DmsRepository } from './dms.repository';

@Injectable()
export class DmsService {
  constructor(public dmsRepo: DmsRepository) {}

  async uploadOne() {
    return await this.dmsRepo.uploadFile();
  }
}
