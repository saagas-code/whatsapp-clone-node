import { User } from "@users/entities/User";


export class UserMapperPrisma {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      number: user.number,
      avatar: user.avatar,
      password: user.password,
      created_at: user.created_at,
    }
  }

}