import { Module } from '@nestjs/common';
import { BookApiController } from './book-api.controller';
import { BookApiService } from './book-api.service';

@Module({
  imports: [],
  controllers: [BookApiController],
  providers: [BookApiService]
})
export class BookApiModule {}
