import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DATABASE_CONFIG } from './database/database.config';
import { BookApiModule } from './api/book-api/book-api.module';
import { AuthorApiModule } from './api/author-api/author-api.module';
import { ModelsModule } from './model/models.module';
import { PopulateService } from './services/populate.service';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ImageTransferApiModule } from './api/image-transfer-api/image-transfer-api.module';

const dataDirectory = 'C:/local-data/isi-edition/';

@Module({
  imports: [DATABASE_CONFIG, BookApiModule, AuthorApiModule, ModelsModule, ImageTransferApiModule,
    MulterModule.register({
      dest: dataDirectory + 'images'
    }),
    ServeStaticModule.forRoot({
      rootPath: dataDirectory
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PopulateService]
})
export class AppModule {}
