import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  getAppRootService() {
    return {
      success: true,
      data: {
        message:
          'This is the API root. Append the endpoint you want to access. Make sure you have a valid API key to make requests.',
        note: 'Any endpoint other than /api/test requires API token to be attached with every request.',
        repository: 'http://github.com/Aakash1103Jha/nest-api',
      },
    };
  }

  testApiKeyService() {}

  getAppHelpService() {}
}

export default AppService;
