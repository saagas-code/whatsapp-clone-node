import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString  } from "class-validator";

enum GenderEnum {
  MAN = 'MAN',
  FEMALE = 'FEMALE'
}

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsString()
  number: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  avatar: string

}