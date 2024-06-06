import { Module } from '@nestjs/common';
import { AuthorApiController } from './author-api.controller';
import { AuthorApiService } from './author-api.service';

@Module({
  imports: [],
  controllers: [AuthorApiController],
  providers: [AuthorApiService]
})
export class AuthorApiModule {}
