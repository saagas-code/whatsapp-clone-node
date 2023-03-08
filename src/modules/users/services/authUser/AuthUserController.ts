import { Body, Controller, Post } from "@nestjs/common";
import { AuthUserDTO } from "@users/DTOs/AuthUserDTO";
import { AuthUserUseCase } from "./AuthUserUseCase";


interface IResponse {
  token: string
}

@Controller("/auth")
export class AuthUserController {
  constructor(
    private authUserUseCase: AuthUserUseCase,
  ) {}
  
  @Post("/login")
  async signIn(@Body() body: AuthUserDTO): Promise<IResponse> {
    const {number, password} = body

    const token = await this.authUserUseCase.execute({
      number, password
    })

    return token
  }

}