
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport'
import { IUserRepository } from "@users/database/implements/IUserRepository";
import { UserNotExists } from "@users/errors/UserNotExists";
import { JwtPayload } from "jsonwebtoken";
import { ExtractJwt, Strategy } from "passport-jwt";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private employeeRepository: IUserRepository
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET_KEY || 'test',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  async validate(payload: JwtPayload): Promise<any> {
    const { sub, role, permissions } = payload
    const employee = await this.employeeRepository.findById(sub)
    if(!employee) {
      throw new UserNotExists()
    }

    return {
      employee,
      role,
      permissions
    }
  }
}