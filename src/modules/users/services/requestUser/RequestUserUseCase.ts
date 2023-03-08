import { User } from '../../entities/User';
import {hash} from 'bcrypt'
import { Injectable } from '@nestjs/common';
import { IUserRepository } from '@users/database/implements/IUserRepository';
import { UserNotExists } from '@users/errors/UserNotExists';


@Injectable()
export class RequestUserUseCase {
  constructor(
    private usersRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<User> {

    const user = await this.usersRepository.findById(id);
    if(!user) {
      throw new UserNotExists()
    }

    return user
  }
}