import { Controller, Get, Post } from '@nestjs/common';

import AppService from './app.service';

const appService = new AppService();

@Controller('/api')
export class AppController {
  @Get('/api')
  getAppRoot() {
    return appService.getAppRootService();
  }
  @Post('/test')
  testApiKey() {
    // validate api key against user email
    // return success if key is valid
    // return error is key is invalid or expired
  }

  @Get('/help')
  getAppHelp() {}
}
