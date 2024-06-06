import { Module } from '@nestjs/common';
import { ImageTransferApiController } from './image-transfer-api.controller';
import { ImageTransferApiService } from './image-transfer-api.service';

@Module({
  imports: [],
  controllers: [ImageTransferApiController],
  providers: [ImageTransferApiService]
})
export class ImageTransferApiModule {}
