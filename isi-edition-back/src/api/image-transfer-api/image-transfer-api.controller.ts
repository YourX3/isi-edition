import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';
import * as uuid from 'uuid';

const dataDirectory = 'C:/local-data/isi-edition/';

export const editFileName = (req, file, callback) => {
  const name = uuid.v4() + file.originalname.substring(file.originalname.lastIndexOf('.'));
  callback(null, name);
};

@Controller('image')
export class ImageTransferApiController {
  constructor() {}

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: dataDirectory + 'images',
      filename: editFileName,
    })
  }))
  uploadImage(@UploadedFile() image: Express.Multer.File) {
    return { imageSrc: image.filename };
  }
}
