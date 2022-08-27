import { ApiProperty } from '@nestjs/swagger';
import { PartialType, IntersectionType } from '@nestjs/mapped-types';
import {
  validate,
  validateOrReject,
  Contains,
  IsNotEmpty,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsOptional,
} from 'class-validator';

export class CreatePhotoDto {
  @ApiProperty({
    example: 'photo img',
    maxLength: 255,
    nullable: false,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'photo description',
    maxLength: 255,
  })
  description: string;

  @ApiProperty({
    example: 'filename img',
    maxLength: 255,
    nullable: false,
  })
  filename: string;

  @ApiProperty({
    example: 0,
  })
  @IsInt()
  @IsOptional()
  views: number;
}

// import { PartialType } from '@nestjs/mapped-types';
// import { CreateCatDto } from './create-cat.dto';

// export class UpdateCatDto extends PartialType(CreateCatDto) {
//   id: number;
// }
