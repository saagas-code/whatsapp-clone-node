import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "@users/entities/User";





export const GetEmployee = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
})