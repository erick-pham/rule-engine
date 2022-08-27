import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { PartialType, IntersectionType } from '@nestjs/mapped-types';
import { CreatePhotoDto } from './create-photo.dto';

export class PhotoDto extends CreatePhotoDto {
  @ApiProperty({
    example: 'photo img',
    nullable: false,
  })
  id: string;

  @ApiProperty({
    example: '2022-08-26T15:20:27.983Z',
    nullable: false,
  })
  createdAt: Date;

  @ApiProperty({
    example: '2022-08-26T15:20:27.983Z',
    nullable: false,
  })
  updatedAt: Date;
}
