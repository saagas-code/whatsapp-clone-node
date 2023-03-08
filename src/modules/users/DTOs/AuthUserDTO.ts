import { IsEmail, IsEnum, IsNotEmpty, IsString  } from "class-validator";

export class AuthUserDTO {

  @IsEmail()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}