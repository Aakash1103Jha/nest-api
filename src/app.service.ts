import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  getAppRootService() {
    return {
      success: true,
      message:
        'This is the API root. Append the endpoint you want to access. Make sure you have a valid API key to make requests.',
    };
  }

  testApiKeyService() {}

  getAppHelpService() {}
}

export default AppService;
