
import { User } from './../../entities/User';


export abstract class IUserRepository {
  abstract list(): Promise<User[]>;
  abstract create(data: User): Promise<void>;
  abstract findById(id: string): Promise<User>;
  abstract findByNumber(email: string): Promise<User>;
}