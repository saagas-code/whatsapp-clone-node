import { User } from "@users/entities/User";

export interface IUserViewHTTP {
  id: string,
  number: string,
  name: string
  avatar: string
  created_at: Date,
  updated_at: Date,
}

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      name: user.name,
      number: user.number,
      avatar: user.avatar,
      updated_at: user.updated_at,
      created_at: user.created_at,
    }
  }
}