import { Injectable } from '@nestjs/common';

@Injectable()
export class DmsRepository {
  constructor() {}

  async uploadFile() {}
  async downloadFileById(id: string) {}
  async deleteFileById(id: string) {}
}
