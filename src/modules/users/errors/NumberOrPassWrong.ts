
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class NumberOrPassWrong extends HttpException {
  constructor() {
    super ("Número e/ou senha inválido.", HttpStatus.CONFLICT)
  }
}