
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class NumberNotExists extends HttpException {
  constructor() {
    super ('Número não existente', HttpStatus.CONFLICT)
  }
}