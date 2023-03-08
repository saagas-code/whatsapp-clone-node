
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

export class UserNotExists extends HttpException {
  constructor() {
    super ({role: "Usuário não existe.", statusCode: 409}, HttpStatus.CONFLICT)
  }
}