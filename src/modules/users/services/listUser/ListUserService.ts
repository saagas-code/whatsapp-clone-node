
import { IUserRepository } from '@users/database/implements/IUserRepository';
import { Injectable } from '@nestjs/common';
import { hash } from "bcrypt";

import { User } from '@users/entities/User';
import { CreateUserDTO } from '@users/DTOs/CreateUserDTO';
import { NumberExists } from '@users/errors/NumberExists';

@Injectable()
export class ListUserService {
  constructor(
    private employeeRepository: IUserRepository
  ) {}

  async execute({name, number, password}: CreateUserDTO): Promise<void> {
    
    const employeeExists = await this.employeeRepository.findByNumber(number)
    console.log(employeeExists)
    if(employeeExists) {
      throw new NumberExists()
    }

    const passwordHash = await hash(password, 10)

    const user = new User()
    Object.assign(user, {name, number, password: passwordHash})
    await this.employeeRepository.create(user)
  
  }

}