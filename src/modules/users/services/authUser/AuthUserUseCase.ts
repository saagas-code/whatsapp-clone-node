
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserRepository } from '@users/database/implements/IUserRepository';
import { AuthUserDTO } from '@users/DTOs/AuthUserDTO';
import { NumberNotExists } from '@users/errors/NumberNotExists';
import { NumberOrPassWrong } from '@users/errors/NumberOrPassWrong';
import { compare } from 'bcrypt';

interface IResponse {
  token: string
}

@Injectable()
export class AuthUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private jwt: JwtService
  ) {}

  async execute({number, password}: AuthUserDTO): Promise<IResponse> {

    const user = await this.userRepository.findByNumber(number);
    if(!user) {
      throw new NumberNotExists();
    }

    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch) {
      throw new NumberOrPassWrong();
    }

    const token = this.jwt.sign({
      sub: user.id,
      //id: user.id
    }, {
      expiresIn: '1h',
      secret: process.env.JWT_SECRET_KEY as string || '8819'
    })

    const response: IResponse = {
      token
    }

    return response;
  }
}