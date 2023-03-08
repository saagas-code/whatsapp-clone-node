import { User } from "@users/entities/User";

export class EmployeeViewModel {
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