import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { DatabaseModule } from '../database/database.module';
import { photoProviders } from './photos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotosController],
  providers: [...photoProviders, PhotosService],
})
export class PhotosModule {}
