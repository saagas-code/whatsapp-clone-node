
import {Module} from "@nestjs/common"

import { PrismaService } from '@instances/prisma.service';
import { IUserRepository } from "./database/implements/IUserRepository";
import { UserRepositoryPrisma } from "./database/prisma/repositories/EmployeeRepositoryPrisma";


@Module({
  providers: [
    PrismaService, 
    {
      provide: IUserRepository,
      useClass: UserRepositoryPrisma
    },
  ],

  exports: [IUserRepository]
})
export class UserDatabaseModule {}