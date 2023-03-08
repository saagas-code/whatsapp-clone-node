import { IUserRepository } from '@users/database/implements/IUserRepository';
import { Injectable } from '@nestjs/common';
import { User } from '@users/entities/User';


@Injectable()
export class ListUserUseCase {
  constructor(
    private usersRepository: IUserRepository
  ) {}

  async execute(user_id: string): Promise<User[]> {
    
    const users = this.usersRepository.list();
    return users;
  
  }

}