import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

import { createReadStream } from 'fs';
import { resolve } from 'path';

const s3 = new S3({
  region: process.env.AWS_BUCKET_REGION,
});
@Injectable()
export class DmsRepository {
  constructor() {}

  async uploadFile() {
    const fileStream = createReadStream(resolve(__dirname, 'test.jpg'));
    const UPLOAD_PARAMS: S3.PutObjectRequest = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: Math.trunc(Math.random() * 1000000).toString(),
      Body: fileStream,
      Metadata: { 'Content-Type': 'image/jpg' },
    };
    const uploadResponse = s3.upload(UPLOAD_PARAMS).promise();
    return uploadResponse;
  }
  async downloadFileById(id: string) {}
  async deleteFileById(id: string) {}
}
