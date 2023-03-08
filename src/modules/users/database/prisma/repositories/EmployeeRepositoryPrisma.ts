import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../../implements/IUserRepository";

import { User } from '@users/entities/User';

import { PrismaService } from '@instances/prisma.service';
import { UserMapperPrisma } from "../mappers/UserMapperPrisma";




@Injectable()
export class UserRepositoryPrisma implements IUserRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async list(): Promise<User[]> {
    const user = this.prisma.user.findMany()
    return user
  }

  async create(data: User): Promise<void> {
    const raw = UserMapperPrisma.toPrisma(data)

    await this.prisma.user.create({
      data: raw
    })
  }

  async findById(id: string): Promise<User> {
    const user = this.prisma.user.findFirst({
      where: {
        id: id
      }
    })
    return user
  }
  async findByNumber(number: string): Promise<User> {
    const user = this.prisma.user.findFirst({
      where: {
        number: number
      }
    })
    return user
  }

}