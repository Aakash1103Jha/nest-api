import { Controller, Get, Post } from '@nestjs/common';
import { DmsService } from './dms.service';

@Controller('/dms')
export class DmsController {
  constructor(public dmsService: DmsService) {}

  @Get('/upload')
  async upload() {
    const _res = await this.dmsService.uploadOne();
    return _res;
  }

  @Post('/download/:fileId')
  async download() {}

  @Post('/delete/:fileId')
  async delete() {}
}
