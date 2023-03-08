
import { Controller, Post, Body } from "@nestjs/common"
import { CreateUserDTO } from "@users/DTOs/CreateUserDTO";
import { CreateUserService } from "./CreateUserService";

@Controller("/users")
export class CreateUserController {
  constructor(
    private createEmployeeService: CreateUserService,
  ) {}
  
  @Post("/")
  async handle(@Body() body: CreateUserDTO) {
    const create = await this.createEmployeeService.execute(body)
    return create
  }

}