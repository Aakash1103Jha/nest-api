import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { S3 } from 'aws-sdk';

import { createReadStream, readFileSync, statSync } from 'fs';
import { resolve, extname } from 'path';

const s3 = new S3({
  region: process.env.AWS_BUCKET_REGION,
});
@Injectable()
export class DmsRepository {
  constructor() {}

  async uploadFile() {
    const filePath = resolve(__dirname, 'test2.jpg');
    console.log(filePath);

    const _file = statSync(filePath);
    const fileStream = createReadStream(filePath);

    const UPLOAD_PARAMS: S3.PutObjectRequest = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `LynnieMarie/${Math.trunc(Math.random() * 1000000).toString()}`,
      Body: fileStream,
      ContentType: `image/${extname(filePath).split('.')[1]}`,
      ContentDisposition: 'inline',
      ContentLength: _file.size,
    };
    const uploadResponse = s3.upload(UPLOAD_PARAMS).promise();
    return uploadResponse;
  }
  async downloadFileById(id: string) {}
  async deleteFileById(id: string) {}
}
