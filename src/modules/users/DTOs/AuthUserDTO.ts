import { IsEmail, IsEnum, IsNotEmpty, IsString  } from "class-validator";

export class AuthUserDTO {

  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}