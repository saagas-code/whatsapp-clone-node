
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class NumberExists extends HttpException {
  constructor() {
    super ('Número já existente', HttpStatus.CONFLICT)
  }
}